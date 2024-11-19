import json
import re
from datetime import datetime

# Define mappings
field_mappings = {
    "p0": "is_separator",
    "p1": "event_id",
    "p2": "event_uid",
    "p3": "event_name",
    "p4": "event_dates",
    "p5": "event_category",
    "p6": "event_location",
    "p7": "club_id",
    "p8": "club_login",
    "p9": "club_name",
    "p10": "event_attendees_count",
    "p11": "event_image_url",
    "p12": "event_price_range",
    "p13": "event_button_label",
    "p14": "event_badges",
    "p15": "tickets_sold_value",
    "p17": "display_attendees",
    "p18": "event_url",
    "p19": "display_type",
    "p20": "is_registered",
    "p21": "waiting_list",
    "p22": "event_tags",
    "p23": "cohost",
    "p24": "custom_time_instruction",
    "p25": "checkin",
    "p26": "spots_left",
    "p27": "print_ticket",
    "p28": "event_timezone",
    "p29": "aria_event_details",
    "p30": "aria_event_details_with_location",
    "p31": "parent_event_ids",
    "p32": "all_results_hidden",
    "p33": "is_hybrid",
    "p34": "event_photo_description",
    "p35": "event_flyer_description",
}
campus_mapping = {
    "Campus - Tampa": "tampa",
    "Campus - Sarasota": "sarasota",
    "Campus - St Petersburg": "stpetersburg",
}


# Remove HTML tags and unnecessary characters
def clean_text(text):
    if isinstance(text, str):
        # Remove HTML tags
        text = re.sub(r"<.*?>", " ", text)
        # Replace common HTML entities with their equivalents
        text = text.replace("&ndash;", "-").replace("&nbsp;", " ")
    return text


# Process tags and identify campuses
def process_tags_and_campuses(text):
    if text:
        # Split and clean tags
        tags = [
            tag.strip() for tag in re.split(r" {2,}", clean_text(text)) if tag.strip()
        ]
        # Separate campuses and other tags
        campuses = [campus_mapping[tag] for tag in tags if tag in campus_mapping]
        processed_tags = [tag for tag in tags if tag not in campus_mapping]
        return processed_tags, campuses
    return [], []


# Parse event dates
def parse_event_dates(dates_text):
    if not dates_text:
        return None, None

    # Split and clean the input
    dates = re.split(r"\s*[-–]\s*", clean_text(dates_text).strip())
    if len(dates) != 2:
        return None, None

    try:
        # Ensure both dates have ":00" if minutes are missing
        for i in range(2):
            if ":" not in dates[i].strip():
                parts = dates[i].strip().rsplit(" ", 1)
                dates[i] = f"{parts[0]}:00 {parts[1]}"

        # Parse start_time
        start_time = datetime.strptime(dates[0], "%a, %b %d, %Y %I:%M %p")

        # Handle end_time
        if re.match(r'^\d{1,2}(:\d{2})? [APap][Mm]$', dates[1].strip()):  # Only time, e.g., "4 PM"
            end_time_str = f"{start_time.strftime('%a, %b %d, %Y')} {dates[1].strip()}"
            end_time = datetime.strptime(end_time_str, "%a, %b %d, %Y %I:%M %p")
        else:  # Full datetime string
            end_time = datetime.strptime(dates[1], "%a, %b %d, %Y %I:%M %p")

        # Return ISO 8601 formatted strings
        return start_time.isoformat(), end_time.isoformat()
    except ValueError as e:
        print("Parsing Error: ", e)
        # Return original parts if parsing fails
        return dates[0], dates[1]


# Process raw JSON data
def process_events(raw_events):
    processed_events = []
    for event in raw_events:
        processed_event = {}
        campuses = []

        for key, value in event.items():
            if key in field_mappings:
                new_key = field_mappings[key]
                if new_key == "event_tags":
                    tags, campuses = process_tags_and_campuses(value)
                    processed_event[new_key] = ", ".join(tags)
                elif new_key == "event_image_url":
                    processed_event[new_key] = (
                        "https://static7.campusgroups.com" + clean_text(value)
                    )
                elif new_key == "event_dates":
                    start_time, end_time = parse_event_dates(value)
                    processed_event["start_time"] = start_time
                    processed_event["end_time"] = end_time
                else:
                    processed_event[new_key] = clean_text(value)

        if campuses:
            processed_event["campuses"] = campuses

        processed_events.append(processed_event)
    return processed_events


# Load, process, and save data
file_path = "./eventsraw.json"
output_path = "./formatted_events.json"

with open(file_path, "r") as file:
    raw_data = json.load(file)

processed_data = process_events(raw_data)

with open(output_path, "w") as output_file:
    json.dump(processed_data, output_file, indent=4)

print(f"Cleaned and formatted JSON saved to {output_path}")

import json
import re

# Define a mapping from cryptic field names to more readable names
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

# Define a mapping for campus values
campus_mapping = {
    "Campus - Tampa": "tampa",
    "Campus - Sarasota": "sarasota",
    "Campus - St Petersburg": "stpetersburg",
}

# Function to strip HTML tags
def remove_html_tags(text):
    return re.sub(r'<.*?>', ' ', text) if isinstance(text, str) else text

# Function to process tags and identify campuses
def process_tags_and_extract_campuses(text):
    if text:
        clean_text = remove_html_tags(text)
        tags = re.split(r'  {3,}', clean_text)  # Split by multiple spaces
        processed_tags = [tag.strip() for tag in tags if tag.strip()]
        campuses = [
            campus_mapping[tag] for tag in processed_tags if tag in campus_mapping
        ]
        return processed_tags, campuses
    return [], []

# Load the raw JSON data
file_path = './eventsraw.json'
with open(file_path, 'r') as file:
    raw_data = json.load(file)

# Process each event entry
processed_data = []
for event in raw_data:
    processed_event = {}
    campuses = []  # Initialize the campuses field

    for key, value in event.items():
        if key in field_mappings:
            new_key = field_mappings[key]

            if new_key == "event_tags":
                tags, campuses = process_tags_and_extract_campuses(value)
                processed_event[new_key] = ', '.join(tags)  # Join tags with commas
            elif new_key == "event_image_url":
                processed_event[new_key] = "https://static7.campusgroups.com" + remove_html_tags(value)
            else:
                processed_event[new_key] = remove_html_tags(value)
    
    # Add the campuses field if campuses are identified
    if campuses:
        processed_event["campuses"] = campuses

    processed_data.append(processed_event)

# Save the cleaned and formatted data to a new file
output_path = './formatted_events.json'
with open(output_path, 'w') as output_file:
    json.dump(processed_data, output_file, indent=4)

print(f"Cleaned and formatted JSON saved to {output_path}")

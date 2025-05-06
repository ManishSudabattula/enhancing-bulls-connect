# 🐂 Enhancing BullsConnect – Redesigning Student Engagement at USF

A Human-Centered Design Project  
University of South Florida | Spring 2025

---

## 👥 Team Members

- Manish Sudabattula – manishsudabattula@usf.edu 
- Rakshith Poojary – rpoojary@usf.edu  
- Voon Hee Lee – voonheelee@usf.edu  
- Lokeshwar Reddy Yarava – lokeshwarreddy@usf.edu  
- Deepthi Muttineni – deepthimuttineni@usf.edu   

---

## 📌 Project Overview

This project reimagines the **BullsConnect** platform to improve how students discover events, connect with organizations, and stay involved on campus.

Our redesign aims to:
- Reduce navigation complexity
- Improve mobile responsiveness
- Enable personalized event recommendations
- Introduce real-time communication via in-app chat
- Enhance usability and overall engagement

🔬 **Key Results:**
- 🎯 System Usability Score: ↑ from 64.8 → 83.5  
- ⏱️ Task Completion Time: ↓ 39%  
- 🎨 Visual Ratings: ↑ 69% improvement  
- ❌ Navigation Errors: ↓ 67%  

---

## 🧪 Features Implemented

- 🎯 **Personalized Home Dashboard**
- 📅 **Live & Upcoming Event Feeds** with filters
- 💬 **Real-time Chat System** with event-specific channels
- 🧭 **Improved Group Discovery** via category and social proof
- 📲 **Mobile-First Design** and responsive interface
- 🔐 **Secure Architecture** using JWT, CSRF protection, input sanitization

---

## 🏗️ System Architecture

The redesigned system is built using a **3-tier architecture**:

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js + Express.js (REST APIs)  
- **Database:** MongoDB  
- **Realtime Engine:** WebSockets  
- **Testing Stack:** Jest, Cypress, Lighthouse, WAVE  

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v16+
- MongoDB local or Atlas URI

### Installation
```bash
git clone https://github.com/ManishSudabattula/enhancing-bulls-connect.git
cd enhancing-bulls-connect
npm install
npm run dev
```

---

## 🧪 Testing
```bash
npm run test          # Unit Tests
npx cypress open      # Integration Tests
npm run lint          # Code linting
```

---

## 📊 Evaluation Methods

We used a mixed-methods evaluation approach:
- SUS (System Usability Scale)
- Task Completion Metrics
- Error Tracking
- User Satisfaction Surveys
- Thematic Feedback Analysis

👨‍🎓 **Participants:** 18 USF students (UG + Grad)  
🧪 **Study Duration:** 60-minute sessions per participant  
📉 **Quantitative Gains:** All improvements statistically significant (p < .001)

---

## 📄 Report

Full technical + UX report:  
📎 [HCI-report.pdf](./HCI-report.pdf)

---

## 📃 License

Licensed under the [MIT License](./LICENSE)

---

## 🙏 Acknowledgments

Special thanks to our participants and Professor [insert advisor's name] for guidance throughout the project.

# SkillBridgeAI 🚀

AI-Powered Resume & Job Matching Platform built using FastAPI, MySQL, and JWT Authentication.

## 📌 Overview

SkillBridgeAI helps users upload resumes, extract skills, and match them against job requirements. The platform calculates compatibility scores and identifies missing skills to improve job readiness.

## ✨ Features

* User Registration & Login
* JWT Authentication & Authorization
* Protected APIs
* Resume Upload System
* Skill Extraction from Resumes
* Job Posting APIs
* Job Matching Engine
* MySQL Database Integration
* SQLAlchemy ORM

## 🛠️ Tech Stack

### Backend

* Python
* FastAPI
* SQLAlchemy
* JWT Authentication

### Database

* MySQL

### Tools

* Git
* GitHub
* Uvicorn
* Postman / Swagger UI

## 📂 Project Structure

```text
skillbridgeAI/
│
├── app/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   └── auth.py
│
├── uploads/
├── requirements.txt
├── .env
├── .gitignore
└── README.md
```

## 🔗 API Endpoints

### Authentication

| Method | Endpoint  | Description      |
| ------ | --------- | ---------------- |
| POST   | /register | Register User    |
| POST   | /login    | Login User       |
| GET    | /profile  | Get User Profile |

### Resume

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| POST   | /resume/upload  | Upload Resume  |
| POST   | /skills/extract | Extract Skills |

### Jobs

| Method | Endpoint             | Description |
| ------ | -------------------- | ----------- |
| POST   | /jobs                | Create Job  |
| GET    | /jobs                | Get Jobs    |
| GET    | /jobs/match/{job_id} | Match Job   |

## 🚀 Installation

```bash
git clone https://github.com/akashmohan733-wq/SkillBridgeAI.git

cd SkillBridgeAI

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

## 📊 Sample Job Matching Response

```json
{
  "job_title": "Backend Developer",
  "company": "TechCorp",
  "match_score": 75,
  "matched_skills": [
    "python",
    "sql",
    "fastapi"
  ],
  "missing_skills": [
    "docker"
  ]
}
```

## 🎯 Learning Outcomes

* REST API Development
* Authentication using JWT
* Database Design
* SQLAlchemy ORM
* File Handling
* Backend Project Architecture
* Git & GitHub Workflow

## 👨‍💻 Author

Akash M

Aspiring Software Engineer | Python Backend Developer

# 🚀 Gianluca Chiaravalloti — Full Stack Developer Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10-F69220?style=for-the-badge\&logo=pnpm\&logoColor=white)
![Django](https://img.shields.io/badge/Django-6.1-092E20?style=for-the-badge\&logo=django\&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django_REST_Framework-3.18-A30000?style=for-the-badge\&logo=django\&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Google_Gemini-AI-8E75B2?style=for-the-badge\&logo=google\&logoColor=white)

> Personal portfolio of **Gianluca Chiaravalloti**, Full Stack Web Developer with a background in Geology, Surveying and Real Estate.

🌐 **Live Portfolio:**
https://portfolio-gianluca-phi.vercel.app

---

## 👋 About Me

I'm **Gianluca Chiaravalloti**, a **Full Stack Web Developer** with a background in **Geology, Surveying and Real Estate**.

After several years of professional experience in the technical and construction sector, I decided to combine my technical background with software development.

Today I focus on building modern web applications using technologies such as **React, JavaScript, Python, Django and Django REST Framework**.

My approach combines:

* 💻 Software development
* 📊 Data analysis
* 🌍 Geosciences
* 🏗️ Technical design
* 📐 Surveying
* 🧠 Problem solving

My goal is to create applications that are **functional, scalable, maintainable and user-friendly**.

---

# ✨ Portfolio Features

The portfolio is a modern **full-stack web application** with a decoupled React frontend and Django REST backend.

### 🌐 Frontend

* ⚛️ React 19
* ⚡ Vite
* 📦 pnpm
* 🎨 Responsive UI
* 🌍 Multilingual interface
* 🇮🇹 Italian
* 🇬🇧 English
* 🇪🇸 Spanish
* 🔄 REST API integration
* 🧩 Component-based architecture
* 📱 Responsive design

### 🐍 Backend

* Django 6.1
* Django REST Framework
* REST API
* Database integration
* CORS configuration
* Rate limiting
* API documentation with OpenAPI / Swagger
* Production deployment with Gunicorn

### 🤖 Artificial Intelligence

The portfolio includes an **AI virtual assistant powered by Google Gemini**.

The assistant can provide information about:

* Gianluca's professional profile
* Technical skills
* Education
* Certifications
* Work experience
* Development projects
* TerraQuake API
* SafeQuake Alert
* Geology and surveying background

The Gemini API key is handled **exclusively on the Django backend** and is never exposed in the React frontend.

### 🔐 Security

The backend implements several security measures:

* Environment variables for sensitive configuration
* API key protection
* CORS configuration
* Rate limiting with `django-ratelimit`
* Input validation
* Maximum message length
* Authentication where required
* HTTPS in production

The AI chatbot is protected against excessive requests using rate limiting.

---

# 🛠️ Tech Stack

## Frontend

* ⚛️ React 19
* ⚡ Vite
* 📦 pnpm
* 🟨 JavaScript / JSX
* 🌐 HTML5
* 🎨 CSS3
* 🔄 REST API
* 🌍 i18next / React i18next
* 📊 Chart.js
* 🗺️ Leaflet

## Backend

* 🐍 Python
* 🟢 Django 6.1
* 🔌 Django REST Framework
* 🔐 REST APIs
* 🛡️ django-ratelimit
* 🌐 django-cors-headers
* 📚 drf-spectacular
* 🤖 Google Gemini API
* 🚀 Gunicorn
* 🧹 WhiteNoise

## Database

The backend is designed to work with relational databases supported by Django.

Possible configurations include:

* PostgreSQL
* MySQL
* SQLite

## Development & DevOps

* Git
* GitHub
* VS Code
* Linux
* Windows
* pnpm
* CI/CD
* Vercel
* Render
* Nginx
* Gunicorn
* Cloud deployment

---

# 🤖 AI Virtual Assistant

One of the main new features of the portfolio is an **AI-powered virtual assistant**.

The chatbot is integrated into the React frontend and communicates with a dedicated Django REST endpoint.

```text
Visitor
   │
   ▼
React Chat Assistant
   │
   │ POST /gemini/api/v1/chat/
   ▼
Django REST API
   │
   │ Rate Limiting
   ▼
Google Gemini API
   │
   ▼
AI Response
   │
   ▼
React Chat Interface
```

The assistant uses a structured professional context containing information about Gianluca's:

* experience
* education
* certifications
* technical skills
* projects
* professional background

The AI is instructed to answer only using the information provided in its context and to avoid inventing professional information.

### 🔒 API Key Security

The Gemini API key is stored as a server-side environment variable:

```env
GEMINI_API_KEY=your-api-key
```

It is **never included in the React application**.

---

# 🌍 Multilingual Support

The portfolio supports multiple languages using **i18next**.

Currently available:

* 🇮🇹 Italian
* 🇬🇧 English
* 🇪🇸 Spanish

The multilingual system also covers the AI chatbot interface, including:

* Welcome message
* Buttons
* Placeholders
* Error messages
* Chat controls
* Assistant information

The language can be changed without reloading the application.

---

# 🔐 API Rate Limiting

The AI chatbot uses Django rate limiting to prevent excessive requests.

Example configuration:

```python
@ratelimit(
    key="ip",
    rate="5/m",
    method="POST",
    block=True
)
@ratelimit(
    key="ip",
    rate="30/d",
    method="POST",
    block=True
)
```

This limits requests per IP address and helps protect the backend and external AI service from abuse.

---

# 🏗️ Architecture

The application follows a **decoupled frontend/backend architecture**.

```text
                         ┌─────────────────────┐
                         │       Visitor       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    React Frontend   │
                         │        + Vite       │
                         │     i18next         │
                         └──────────┬──────────┘
                                    │
                              HTTPS / REST
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Django Backend    │
                         │ Django REST API     │
                         │ Rate Limiting       │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
          ┌──────────────────┐            ┌──────────────────┐
          │     Database     │            │   Google Gemini  │
          │                  │            │       AI         │
          └──────────────────┘            └──────────────────┘
```

This architecture allows the frontend and backend to be developed and deployed independently.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js
* pnpm
* Python 3.12+
* Git

Check your versions:

```bash
node --version
pnpm --version
python --version
git --version
```

---

# 🎨 Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

### Production Build

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

---

# 🐍 Backend

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

### Windows

```bash
python -m venv .venv
```

Activate it:

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Create a superuser:

```bash
python manage.py createsuperuser
```

Start Django:

```bash
python manage.py runserver
```

The backend will normally be available at:

```text
http://127.0.0.1:8000/
```

---

# 🔌 API

The frontend communicates with the Django backend through REST APIs.

Example endpoints:

```text
GET  /api/projects/
GET  /api/skills/
GET  /api/experience/
POST /api/contact/
POST /gemini/api/v1/chat/
```

The API is developed using **Django REST Framework**.

API documentation is generated using:

* drf-spectacular
* OpenAPI
* Swagger UI
* Redoc

---

# 🤖 Gemini API Configuration

The Gemini API is configured only on the backend.

Create a `.env` file inside the Django backend:

```env
GEMINI_API_KEY=your-gemini-api-key
```

The application loads the key through an environment variable.

Example:

```python
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.environ.get("GEMINI_API_KEY")
)
```

> ⚠️ Never expose `GEMINI_API_KEY` in the React frontend or commit it to GitHub.

---

# 🔐 Environment Variables

Environment-specific configuration must be stored in environment variables.

### Frontend

```env
VITE_API_URL=http://127.0.0.1:8000
```

Production:

```env
VITE_API_URL=https://your-backend.onrender.com
```

### Backend

```env
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
GEMINI_API_KEY=your-gemini-api-key
```

Sensitive files must never be committed.

Recommended `.gitignore`:

```gitignore
.env
.venv/
venv/
__pycache__/
*.pyc
node_modules/
dist/
```

---

# 🌐 Deployment

The application uses an independent deployment architecture.

### Frontend

**Vercel**

```text
React + Vite
       │
       ▼
   Vercel
```

### Backend

**Render**

```text
Django + DRF
     │
     ▼
  Gunicorn
     │
     ▼
   Render
```

The frontend communicates with the backend through HTTPS REST APIs.

### Production Start Command

The Django backend can be started with:

```bash
python manage.py migrate && gunicorn portfolio.wsgi:application --bind 0.0.0.0:$PORT --workers 1 --timeout 120
```

Using a single Gunicorn worker is suitable for the current portfolio workload and helps reduce memory usage on a small production instance.

---

# 📌 Featured Projects

## 🌍 TerraQuake API

**TerraQuake API** is an open-source seismic data platform providing earthquake information through REST APIs.

### Technologies

* Node.js
* Express.js
* MongoDB
* React
* REST API
* INGV data
* GitHub
* Cloud deployment

The project combines my background in **Geosciences** with my experience in **software development and data-driven applications**.

---

## 🚨 SafeQuake Alert

**SafeQuake Alert** is a seismic monitoring and alert platform developed as a Capstone Project during the Epicode Full Stack Web Developer Bootcamp.

### Technologies

* React
* Node.js
* Socket.io
* REST API
* JavaScript
* Vercel

The application focuses on real-time seismic data, monitoring and user interaction.

---

# 📸 Portfolio Sections

The portfolio includes:

* 🏠 Home
* 👤 About Me
* 🛠️ Skills
* 💼 Experience
* 🚀 Projects
* 🎓 Education
* 📜 Certifications
* 📬 Contact
* 🤖 AI Virtual Assistant

---

# 🎯 Project Goals

The portfolio is continuously evolving.

Planned improvements include:

* [x] React frontend
* [x] Django REST backend
* [x] REST API integration
* [x] Multilingual support
* [x] AI virtual assistant
* [x] Gemini API integration
* [x] API rate limiting
* [x] Environment variable management
* [x] Vercel deployment
* [x] Render deployment
* [x] Responsive design
* [ ] Automated testing
* [ ] Advanced SEO optimization
* [ ] CI/CD improvements
* [ ] Docker support
* [ ] Production monitoring
* [ ] Advanced analytics

---

# 🧪 Testing

### Backend

Run Django tests with:

```bash
python manage.py test
```

### Frontend

Run the configured frontend test suite with the project's test command.

---

# 📄 License

This project is a personal portfolio and demonstration of my development skills.

Unless otherwise specified, the source code is not licensed for commercial redistribution.

---

# 📬 Contact

**Gianluca Chiaravalloti**

Full Stack Web Developer
Geometra · Geologo

* 💻 GitHub: https://github.com/nagcas
* 🌐 Portfolio: https://portfolio-gianluca-phi.vercel.app
* 💼 LinkedIn: https://www.linkedin.com/in/gianluca-chiaravalloti-5694081a2/
* 📧 Email: [studio.nagcas@outlook.it](mailto:studio.nagcas@outlook.it)

---

⭐ If you find this project interesting, feel free to explore the repository and check out my other projects.

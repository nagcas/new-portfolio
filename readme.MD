# 🚀 Gianluca Chiaravalloti — Full Stack Developer Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10-F69220?style=for-the-badge\&logo=pnpm\&logoColor=white)
![Django](https://img.shields.io/badge/Django-5-092E20?style=for-the-badge\&logo=django\&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django_REST_Framework-API-A30000?style=for-the-badge\&logo=django\&logoColor=white)

## 👋 About Me

Welcome to my personal portfolio.

I'm **Gianluca Chiaravalloti**, a **Full Stack Web Developer** with a background in Geology, Surveying and Real Estate.

After working for years in the technical and construction sector, I decided to combine my professional experience with software development.

I specialize in building modern web applications using **React** on the frontend and **Python/Django** on the backend.

My goal is to create applications that are **functional, scalable, maintainable and user-friendly**.

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React
* ⚡ Vite
* 📦 pnpm
* 🟨 JavaScript / JSX
* 🌐 HTML5
* 🎨 CSS3
* 🔄 REST API integration

### Backend

* 🐍 Python
* 🟢 Django
* 🔌 Django REST Framework
* 🔐 REST APIs
* 🗄️ Database management
* 🔑 Authentication & authorization

### Tools & Development

* Git
* GitHub
* VS Code
* REST APIs
* JSON
* npm / pnpm
* Linux / Windows

---

## ✨ Features

The portfolio is designed as a modern full-stack web application.

### Frontend

* Responsive design
* Modern React architecture
* Component-based UI
* Dynamic project showcase
* Skills and technologies section
* Professional experience
* Contact section
* REST API integration
* Optimized production build

### Backend

* Django-based backend
* Django REST Framework API
* Project management through API
* Contact form API
* Dynamic portfolio content
* Database integration
* API authentication where required
* CORS configuration

---

## 🔗 Architecture

The application follows a decoupled frontend/backend architecture:

```text
                    ┌─────────────────────┐
                    │      Visitor        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │       + Vite        │
                    └──────────┬──────────┘
                               │
                         REST API / JSON
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Django REST API     │
                    │ + Django            │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Database       │
                    └─────────────────────┘
```

This architecture allows the frontend and backend to be developed, deployed and scaled independently.

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

### Production build

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

The API will normally be available at:

```text
http://127.0.0.1:8000/
```

---

# 🔌 API

The frontend communicates with the Django backend through REST APIs.

Example:

```text
GET /api/projects/
GET /api/skills/
GET /api/experience/
POST /api/contact/
```

The API is developed using **Django REST Framework**.

API documentation can be added using tools such as:

* drf-spectacular
* Swagger UI
* Redoc

---

# 🔐 Environment Variables

Environment-specific configuration should be stored in `.env` files and **never committed to GitHub**.

### Frontend

Example:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

### Backend

Example:

```env
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=your-database-url
```

Add sensitive files to `.gitignore`:

```gitignore
.env
.venv/
__pycache__/
*.pyc
node_modules/
dist/
```

---

# 🌐 Deployment

The application is designed to support independent deployment of the frontend and backend.

### Frontend

Possible hosting platforms:

* Vercel
* Netlify

### Backend

Possible hosting platforms:

* Render
* Railway
* Fly.io
* VPS

The production frontend communicates with the production Django REST API through HTTPS.

---

# 📸 Portfolio Sections

The portfolio will include sections such as:

* **Home**
* **About Me**
* **Skills**
* **Experience**
* **Projects**
* **Education**
* **Contact**

Projects can be loaded dynamically from the Django REST API instead of being hardcoded in React.

---

# 📌 Featured Projects

Some of my development projects include:

### 🌍 TerraQuake API

An open-source seismic data platform providing earthquake information through a REST API.

**Technologies:**

* Node.js
* Express
* MongoDB
* React
* REST API
* INGV data

---

### 📱 Android Applications

Experimental and personal projects developed for Android using modern JavaScript-based technologies.

---

# 🎯 Goals

This portfolio is continuously evolving.

Future improvements may include:

* [ ] Authentication system
* [ ] Django Admin customization
* [ ] API documentation
* [ ] Contact form with email notifications
* [ ] Project filtering
* [ ] Dark mode
* [ ] Multilingual support
* [ ] SEO optimization
* [ ] Automated testing
* [ ] CI/CD
* [ ] Docker support
* [ ] Production monitoring

---

# 🧪 Testing

Frontend tests can be executed using the configured test framework.

Backend tests:

```bash
python manage.py test
```

---

# 📄 License

This project is intended as a personal portfolio and demonstration of my development skills.

Unless otherwise specified, the source code is not licensed for commercial redistribution.

---

# 📬 Contact

**Gianluca Chiaravalloti**

Full Stack Web Developer

* 💻 GitHub
* 🌐 Portfolio
* 📧 Email
* 💼 LinkedIn

---

⭐ If you find this project interesting, feel free to explore the repository and check out my other projects.

# 📝 Angular Blog Application (Frontend)

This is the frontend of a Blog Management Application developed using **Angular 16**. It allows users to log in, create, view, update, and delete blog posts. Authentication is handled via JWT, and blogs are displayed user-wise. Backend is powered by NestJS.

---
Figma : https://www.figma.com/design/xZdvMZGXwbA0VBb6NlhvbF/Untitled?node-id=0-1&t=hDfc2cHvH9spacKn-1

## 🔧 Tech Stack

- Angular 16
- TypeScript
- Bootstrap 5
- RxJS
- JWT (Authentication)
- RESTful API Integration (NestJS backend)

---

## 🖥️ Setup Instructions

1. **Clone the repository:**

   ```bash
  [ git clone https://github.com/your-username/angular-blog-frontend.git](https://github.com/ImanAdithya/blog-frontend.git)
   cd angular-blog-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the Angular app:**

   ```bash
   ng serve
   ```

   Visit: `http://localhost:4200/`

4. **Connect to Backend (NestJS)**  
   Ensure your backend (e.g., `http://localhost:3000`) is running and set the correct base URL in your `GlobalParameterService`.

---

## 🚀 Features

- ✅ User authentication with JWT (login/signup)
- 📝 Create, edit, and delete blog posts
- 👤 View blogs per user
- 💬 Responsive UI with Bootstrap
- 🔒 Auth guard and route protection
- 📦 Service-based architecture

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── model/            # Blog models
│   ├── service/          # HTTP services
│   ├── layout/           # Blog components
│   ├── auth/             # Auth components and services
│   └── app-routing.module.ts
│   └── app.module.ts
├── assets/
└── index.html
```
## 🔐 Auth Flow

- JWT tokens are stored in localStorage.
- AuthGuard restricts access to blog management routes.
- Interceptors automatically attach tokens to authorized API requests.

---

## 📷 Screenshots

> _You can add screenshots here for better visual understanding._

---

## 🧪 Future Improvements

- Pagination & search
- Blog image support
- Comments system
- Profile management

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

- **Your Name** – [@yourGitHub](https://github.com/your-username)

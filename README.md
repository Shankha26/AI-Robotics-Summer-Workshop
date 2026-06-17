# Kidrove Summer AI & Robotics Workshop

This is the codebase for the Kidrove kids' (age 8–14) summer AI & robotics workshop landing page and enquiry registration system.

The project is split into two directories:
* `/frontend`: React SPA built with Vite, Tailwind CSS v4, and Framer Motion. It includes an interactive 3D robot mascot powered by Google's `<model-viewer>`.
* `/backend`: A Node.js & Express API that handles registrations. It validates contact information and saves to MongoDB with a local JSON file fallback if the database goes offline.

---

## Running Locally

### Prerequisites
Make sure you have Node.js (v18+) installed. Running MongoDB locally on `localhost:27017` is recommended, but the API will gracefully fall back to write locally if the database is offline.

### 1. Set Up the Backend
From the root directory:
```bash
cd backend
npm install
npm run dev
```
This starts the backend API on `http://localhost:5000`. You can configure a custom port or database URI by creating a `.env` file inside the `backend` folder:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ai-robotics-workshop
```

### 2. Set Up the Frontend
Open a new terminal window and run:
```bash
cd frontend
npm install
npm run dev
```
This spins up the Vite development server on `http://localhost:5173`. If you want to connect the frontend to a custom backend API URL, create a `.env.local` file inside the `frontend` folder:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoint: Registration Enquiry

**`POST /api/enquiry`**

Validates and saves registration enquiries.

* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "9876543210"
  }
  ```

* **Success Response (201 Created):**
  ```json
  {
    "success": true,
    "message": "Registration submitted successfully"
  }
  ```

* **Validation Error (400 Bad Request):**
  ```json
  {
    "success": false,
    "message": "Validation failed",
    "errors": [
      {
        "type": "field",
        "value": "",
        "msg": "Name is required",
        "path": "name",
        "location": "body"
      }
    ]
  }
  ```

---

## Deploying to Vercel

Since both the frontend and backend are independent packages, the cleanest way to host this project on Vercel is to create two separate projects (one for backend, one for frontend).

### 1. Deploy the Backend (Express API)
1. Go to your Vercel Dashboard, click **New Project**, and import this repository.
2. In the configuration settings, edit the **Root Directory** and select **`backend`**.
3. Vercel will auto-detect the `vercel.json` configuration and deploy your Express app using serverless functions.
4. Add your database environment variable:
   * `MONGODB_URI`: Your MongoDB Atlas URI. (If left unset, the backend will automatically fallback to logging submissions in the runtime logs so registrations still complete successfully!).
5. Click **Deploy**. Copy your new live backend URL (e.g., `https://your-backend.vercel.app`).

### 2. Deploy the Frontend (React App)
1. Go back to the Vercel Dashboard, click **New Project**, and import the repository again.
2. In the configuration settings, edit the **Root Directory** and select **`frontend`**.
3. Under Build & Development settings, select **Vite** (Vercel will set build to `npm run build` and output directory to `dist`).
4. Add the environment variable to connect to the backend:
   * `VITE_API_URL`: `https://your-backend.vercel.app/api` (use the backend URL from Step 1 and append `/api`).
5. Click **Deploy**. Open the frontend URL, and test the submission form to make sure everything links up!

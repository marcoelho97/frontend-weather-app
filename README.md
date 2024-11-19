Weather Info App
================

Frontend implementation to the Weather Info App Backend API.
Information is fetched from the API and presented to the user in the form of a table and bar graph.

Prerequisites
-------------

Make sure you have the following installed on your system:

1.  **Node.js** and **npm/yarn**: For managing frontend dependencies.
2.  **Git**: To clone the repository.
    

Setup Instructions
------------------

### 1\. Clone the Repository

```bash
git clone <This repository url>
cd frontend-weather-app
```

### 2\. Install Dependencies

```bash
npm install
```    

### 3\. Start the Server
Preferably in a different port, as the frontend will be in port 3000.
The frontend is ready to receive from port 10524, so:

```bash
npm start
```

Notes
------------------
Due to time constraints, additional enhancements (e.g., more appealing feedback, more features) didn't come to fruition:
- A call to list multiple locations with the name inputted, for better accuracy.
- Toasts instead of an alert to show feedback to the user.

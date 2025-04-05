# G-Scores Project

This project consists of two main parts:
1. **Client**: A React-based frontend application.
2. **Server**: A NestJS-based backend application.

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Docker (for running the database)
- Docker Compose

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/G-Scores.git
cd G-Scores
```

### 2. Install Dependencies
#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd server
npm install
```

---

## Running the Project Locally

### 1. Start the Database with Docker
1. Ensure Docker is running on your machine.
2. Navigate to the `server` directory:
   ```bash
   cd server
   ```
3. Start the database using Docker Compose:
   ```bash
   docker-compose up -d
   ```

### 2. Start the Server
1. Navigate to the `server` directory (if not already there):
   ```bash
   cd server
   ```
2. Run the server in development mode:
   ```bash
   npm run start:dev
   ```

### 3. Start the Client
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Run the client:
   ```bash
   npm run dev
   ```

---

## Accessing the Application
- **Client**: Open your browser and go to `http://localhost:5173`.
- **Server**: The API is available at `http://localhost:3000`.

---

## Additional Notes
- Ensure that the `.env` files are properly configured for both `client` and `server`.
- To stop the database, run:
  ```bash
  docker-compose down
  ```
- If you encounter any issues, check the logs:
  - For the server: `npm run start:dev` logs.
  - For Docker: `docker-compose logs`.
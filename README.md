# Linear Clone

A modern project management application built with Next.js, inspired by Linear's sleek design and functionality.

## ✨ Features

- 🔐 Secure user authentication (sign up, sign in, sign out)
- 📝 Issue management (create, update, delete)
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔄 Real-time updates
- 🎯 Project organization and tracking

## 🛠️ Tech Stack

- [Next.js 13+](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Prisma](https://www.prisma.io/) for database ORM
- [PostgreSQL](https://www.postgresql.org/) for database
- [NextAuth.js](https://next-auth.js.org/) for authentication

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database (local or [Neon](https://neon.tech/))
- Git

### Quick Start

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/linear-clone.git
   cd linear-clone
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the `.env.example` file to `.env.local` and update the values

   ```bash
   cp .env.example .env.local
   ```

4. Set up your database and update the `DATABASE_URL` in `.env.local`

5. Run database migrations

   ```bash
   npx prisma db push
   ```

6. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `app/api/` - API routes for authentication and issues
- `app/components/` - Reusable UI components
- `lib/` - Utility functions and libraries
- `prisma/` - Database schema and client

## License

This project is licensed under the MIT License.

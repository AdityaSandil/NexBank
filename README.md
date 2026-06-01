<div align="center">

<h1>NexBank</h1>

<p>A modern full-stack banking transaction system built with Next.js, Appwrite, Plaid, and Dwolla.</p>

<div>
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
</div>

</div>

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Environment Variables](#environment-variables)

---

## Introduction

**NexBank** is a full-stack banking web application that allows users to securely link their real bank accounts, view live transaction data, and transfer funds between accounts — all from a single unified dashboard.

Built with Next.js and React.js on the frontend, Appwrite for backend and authentication, Plaid for bank account linking and transaction data, Dwolla for ACH fund transfers, and shadcn/ui for a clean, accessible interface.

---

## Tech Stack

- **Next.js** — Frontend framework with server-side rendering
- **React.js** — UI component library
- **TypeScript** — Type-safe development
- **Appwrite** — Backend, authentication & database
- **Plaid** — Bank account linking & transaction data
- **Dwolla** — ACH fund transfers
- **shadcn/ui** — Accessible UI components
- **Tailwind CSS** — Utility-first styling
- **React Hook Form + Zod** — Form handling and validation
- **Chart.js** — Transaction data visualization

---

## Features

- **Authentication** — Secure SSR authentication via Appwrite with proper validations
- **Connect Banks** — Link multiple real bank accounts using Plaid Link
- **Home Dashboard** — View total balance across all connected banks, recent transactions, and spending categories
- **My Banks** — See all connected bank accounts with individual balances and account details
- **Transaction History** — Browse full transaction history with pagination and filtering by bank
- **Fund Transfers** — Send money to other NexBank users via Dwolla ACH transfers
- **Real-time Updates** — Dashboard reflects changes instantly when new banks are connected
- **Responsive Design** — Works seamlessly across desktop, tablet, and mobile

---

## Quick Start

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/AdityaSandil/NexBank.git
cd NexBank
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```env
# NEXT
NEXT_PUBLIC_SITE_URL=

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=US,CA

# DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

You can get your credentials by signing up on:
- [Appwrite](https://appwrite.io)
- [Plaid](https://plaid.com)
- [Dwolla](https://www.dwolla.com)

### Run the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Team

- **Aditya Sandil**
- **Aman Kumar Prasad**

**Guide:** Prof. Priyabrata Nayak
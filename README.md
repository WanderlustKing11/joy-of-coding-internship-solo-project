This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Welcome to my Task Manager

This project is a fully functioning Task Managing App in progress.

Built with Next.js, users will be able to create and manage multiple lists from their own library. Within a list users can create, edit and delete their Tasks, which will be stored in a MySQL database. API calls are managed with Prisma's modeling and validations, and I am using Zod for error handling.

For the list of dependencies, visit the [package.json file](...)

## Getting Started

Clone this repo: ...

Run: `npm install`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features & Techs

- Dynamic routing with **Next.js**
- Styling with **Tailwind CSS**
- Styled and built components with **Radix UI**
- Managed REST API with **Prisma**
- Data handling with **Axios**
- API front end handling with **Zod**
- Stored data with **MySQL**
- Handle form submission with **react-hook-form**
- Enhanced dev environment thanks to **TypeScript**

#### Under development

Very happy to receive and feedback. This project is currently underway. I will update the documentation as the develpoment process evolves. Feel free to message with any comments, ideas, or concerns. Thanks to all, and hope you enjoy!

### Future Features:

- OAuth with **Google Platform**
- Adding dynamic Lists and dedicated database. Currently, only the tasks are dynamic and hanlde CRUD methods.
- Adding dynamic routing when editing the List Title.

### Issues

1. When clicking on the task icon buttons to reveal the **Check** and **Trash** buttons, I would like to make them go away when clicking outside, or anywhere on the page. I was able to achieve this clicking on the parent container, but not on the rest of the page itself.

2. When clicking on a new task, it takes two clicks. It's as if the page is reseting my task on the first click, then triggering the handler functions on the second click.

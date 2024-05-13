This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Welcome to my Task Manager

This project is a fully functioning Task Managing App in progress.

Built with Next.js, users will be able to create and manage multiple lists from their own library. Within a list, a user can create, edit and delete a Task, which will be stored using a MySQL database. All POST and GET requests will be managed via our own RESTful API.

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
- OAuth with **Google Platform**
- Styling with **Tailwind CSS**
- Styled and built components with **Radix UI**
- Managed REST API with **Prisma**
- Data handling with **Axios**
- API front end handling with **Zod**
- Stored data with **MySQL**
  - (Managed via **DataGrip** GUI)
- Handle form submission with **React Hook Form**
- Enhanced user text formating with **SimpleMDE**
- Enhanced dev environment thanks to **TypeScript**

#### Under development

Very happy to receive and feedback. This project is currently underway. I will update the documentation as the develpoment process evolves. Feel free to message with any comments, ideas, or concerns. Thanks to all, and hope you enjoy!

### Issues

1. In the [List Page](https://github.com/WanderlustKing11/next-task-manager/blob/main/app/listslibrary/list/page.tsx), the desired behavior is to have the `completed` and `trash` buttons toggle in and out when clicking the **vertical dots** button, and additionally toggling off when clicking anywhere else on the page.

- Attempts to do this without useEffect have failed. Is useEffect a standard parctice for doing this?
- Attempted to use `handleClose` function in a parent container, but then requires running entire page on client-side, affecting site performance. In addition, clicking one tasks' 'dots' button triggered all the other tasks, instead of the attributed task.
  _This issue is being reprioritized and will be returned to at a later date_

import { z } from 'zod';

export const formTaskSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  dueTime: z.string(),
  dueDate: z.string(),
  description: z.string()
});

// Schema for the POST request in TaskEditor
export const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  dueDateTime: z.string(),
  description: z.string()
});

// Utility function to transform client-side form data to API schema
// export const transformToAPISchema = (data: z.infer<typeof createTaskSchema>) => ({
//   title: data.title,
//   dueDateTime: new Date(`${data.dueDate}T${data.dueTime}`).toISOString(),
//   description: data.description
// });

// Schema for GET request in List
export const fetchTaskSchema = z.object({
  // id: z.number(),
  title: z.string(),
  dueDateTime: z.string(),
});

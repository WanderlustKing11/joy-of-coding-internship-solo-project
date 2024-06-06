import { z } from 'zod';

// TaskEditor client-side user input
export const formTaskSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  dueTime: z.string(),
  dueDate: z.string(),
  description: z.string()
});

// Schema for POST request to server-side
export const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  dueDateTime: z.string(),
  description: z.string()
});

// Schema for GET request in List
export const fetchTaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  dueDateTime: z.string(),
  description: z.string(),
  status: z.string()
});

// Schema for GET request in TaskEditor
// export const editTaskSchema = z.object({
//   id: z.number(),
//   title: z.string(),
//   dueDateTime: z.string(),
//   description: z.string(),
//   status: z.string(),
// })

// Schma for PATCH request
export const updateTaskSchema = z.object({
  title: z.string().optional(),
  dueDateTime: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(['INCOMPLETE', 'COMPLETE']).optional(),
});
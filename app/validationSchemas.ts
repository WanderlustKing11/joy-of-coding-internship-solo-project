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
  // id: z.number(),
  title: z.string().min(1, 'Title is required.').max(255),
  dueDateTime: z.string(),
  description: z.string()
});

// Schema for GET request in List
export const fetchTaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  dueDateTime: z.string(),
});

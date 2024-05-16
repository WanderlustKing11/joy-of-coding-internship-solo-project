import { z } from 'zod';

export const createTaskSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Title is required.').max(255),
  dueDateTime: z.string(),
  description: z.string()
});

export const formTaskSchema = createTaskSchema.omit({
  dueDateTime: true
}).extend({
  dueDate: z.string(),
  dueTime: z.string(),
})
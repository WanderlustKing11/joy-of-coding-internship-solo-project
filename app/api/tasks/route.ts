import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';

const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  dueDateTime: z.string(),
  description: z.string()
})

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createTaskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newTask = await prisma.task.create({
    data: { title: body.title, dueDateTime: body.dueDateTime, description: body.description }
  });

  return NextResponse.json(newTask, { status: 201 });
}
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { createTaskSchema } from '../../validationSchemas';

export async function POST(request: NextRequest) {
  const body = await request.json();
  // const apiData = transformToAPISchema(body);
  console.log(body)

  const validation = createTaskSchema.safeParse(body);
  if (!validation.success){
    return NextResponse.json(validation.error.format(), { status: 400 });
}


  try {
    const newTask = await prisma.task.create({
      data: { title: body.title, dueDateTime: body.dueDateTime, description: body.description }
    });
    return NextResponse.json(newTask, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: "Failed to create task", error: error.message }, { status: 500 });
    } else {
      // If the error is not an instance of Error, return a generic error message
      return NextResponse.json({ message: "Failed to create task due to an unexpected error" }, { status: 500 });
    }
  }
}

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}
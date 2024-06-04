// import prisma from '@/prisma/client';
import { PrismaClient, Status } from '@prisma/client';
// import { error } from 'console';
// import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { updateTaskSchema } from '@/app/validationSchemas'; 
import { z } from 'zod';

const prisma = new PrismaClient();

type UpdateTaskFormType = z.infer<typeof updateTaskSchema>;

// Fetching one task by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id, 10),
    }
  });

  if (!task) {
    return NextResponse.json({error: "Task not found"}, { status: 404 });
  }

  return NextResponse.json(task);
}

// Deleting one task by ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  
  // check if task exists
  const taskId = await prisma.task.findUnique({
    where: { 
      id: parseInt(params.id, 10),
    },
  })

  if (!taskId) {
    return NextResponse.json( {error: "Task not found"}, { status: 404 });
  }

  const deleteTask = await prisma.task.delete({
    where: { id: parseInt(params.id),
    },
  });

  return NextResponse.json(deleteTask);
}


// Updating a task by ID
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const taskId = parseInt(params.id, 10);
  const requestBody = await request.json();
  const validation = updateTaskSchema.safeParse(requestBody);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const dataToUpdate = validation.data;

  // Check if updating status
  if ('status' in requestBody) {
    const currentTask = await prisma.task.findUnique({
      where: { id: taskId },
    });
  
    if (!currentTask) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    dataToUpdate.status = currentTask.status === 'COMPLETE' ? 'INCOMPLETE': 'COMPLETE';
  }

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: {
      ...dataToUpdate,
      status: dataToUpdate.status as Status,
    },
  });
  return NextResponse.json(updatedTask);
}

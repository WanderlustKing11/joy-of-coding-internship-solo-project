// import prisma from '@/prisma/client';
import { PrismaClient } from '@prisma/client';
// import { error } from 'console';
// import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

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
  // const body = await request.json();

  const taskId = parseInt(params.id);

  const currentTask = await prisma.task.findUnique({
    where: { id: taskId }
  });

  if (!currentTask) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  const newStatus = currentTask.status === 'COMPLETE' ? 'INCOMPLETE' : 'COMPLETE';

  const updatedStatus = await prisma.task.update({
    where: { id: taskId },
    data: { status: newStatus },
  });
  return NextResponse.json(updatedStatus);
}
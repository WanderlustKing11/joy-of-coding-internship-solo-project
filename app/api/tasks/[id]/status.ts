// import { PrismaClient, Status } from '@prisma/client';
// import { NextRequest, NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// // Toggling task status
// export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
//   const taskId = parseInt(params.id, 10);
//   const currentTask = await prisma.task.findUnique({
//     where: { id: taskId }
//   });

//   if (!currentTask) {
//     return NextResponse.json({ error: 'Task not found' }, { status: 404 });
//   }
  
//   const newStatus: Status = currentTask.status === 'COMPLETE' ? 'INCOMPLETE' : 'COMPLETE';
//   const updatedStatus = await prisma.task.update({
//     where: { id: taskId },
//     data: { status: newStatus },
//   });
//   return NextResponse.json(updatedStatus);
// }

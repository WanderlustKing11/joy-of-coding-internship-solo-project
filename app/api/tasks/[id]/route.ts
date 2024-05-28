// import prisma from '@/prisma/client';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextApiRequest, { params}: {params: { id: string } }) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id, 10),
    }
  });
  return NextResponse.json(task);
}


// export async function DELETE(
//   req: NextApiRequest, 
//   res: NextApiResponse
// ) {
//   if (req.method === 'DELETE') {
//     // Parsing the ID from the URL parameter
//     const { id } = req.query;
//     const taskId = parseInt(id as string, 10);

//     if (isNaN(taskId)) {
//       return res.status(400).json({ error: "Invalid task ID" });
//     }

//     try {
//       // Check if the task exists
//       const task = await prisma.task.findUnique({
//         where: { id: taskId },
//       });

//       if (!task) {
//         return res.status(404).json({ error: "Task not found" });
//       }

//       // Delete the task
//       await prisma.task.delete({
//         where: { id: taskId },
//       });

//       return res.status(200).json({ message: "Task deleted successfully" });
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         return res.status(500).json({ message: "Failed to delete task", error: error.message });
//       } else {
//         return res.status(500).json({ message: "Failed to delete task due to an unexpected error" });
//       }
//     }
//   } else {
//     res.setHeader('Allow', ['DELETE']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

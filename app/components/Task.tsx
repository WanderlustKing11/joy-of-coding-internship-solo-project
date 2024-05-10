'use client';

import { Dialog } from '@radix-ui/themes';
import TaskManButtons from './TaskManButtons';
import { useState } from 'react';

interface TaskProps {
  task: string;
  dueDate: string;
}

const Task: React.FC<TaskProps> = ({ task, dueDate }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted((checked) => !checked);
  };

  const taskStyle = `grid grid-cols-3 gap-4 my-4 py-2 items-center border-2 border-solid border-zinc-500 rounded-xl border-b last:border-b-2 hover:bg-zinc-400 col-span-2 ${
    isCompleted ? 'bg-green-300' : 'border-solid border-zinc-500'
  }`;

  return (
    <div className='w-full max-w-[60rem] grid grid-cols-[auto,1fr,auto] items-center gap-4'>
      <Dialog.Trigger>
        <li className={taskStyle}>
          <div className='pl-4 col-span-2 truncate'>{task}</div>
          <div className='truncate'>due: {dueDate}</div>
        </li>
      </Dialog.Trigger>
      <TaskManButtons isCompleted={isCompleted} onCheckClick={handleComplete} />
    </div>
  );
};

export default Task;

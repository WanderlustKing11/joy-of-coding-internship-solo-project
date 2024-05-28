'use client';

import { useState } from 'react';
import { Dialog } from '@radix-ui/themes';
import TaskManButtons from './TaskManButtons';

interface TaskProps {
  // id: number;
  task: string;
  dueDate: string;
  onDelete: () => void;
  // toggleOpen: () => void;
  // isOpen: boolean;
}

const Task: React.FC<TaskProps> = ({ task, dueDate, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleComplete = () => {
    setIsCompleted((checked) => !checked);
  };

  const taskStyle = `grid grid-cols-3 gap-4 my-4 py-2 items-center border-2 border-solid border-blue-950 rounded-xl border-b last:border-b-2 hover:bg-blue-950 hover:text-indigo-300 col-span-2 ${
    isCompleted ? 'bg-slate-900 text-slate-600' : 'border-solid border-zinc-500'
  }`;

  return (
    <div
      className='w-full max-w-[60rem] grid grid-cols-[auto,1fr,auto] items-center gap-4'
      onClick={(e) => e.stopPropagation()}
    >
      <Dialog.Trigger>
        <li className={taskStyle}>
          <div className='pl-4 col-span-2 truncate'>{task}</div>
          <div className='truncate'>due: {dueDate}</div>
        </li>
      </Dialog.Trigger>
      <TaskManButtons
        isCompleted={isCompleted}
        onCheckClick={handleComplete}
        onDelete={onDelete}
        // toggleOpen={toggleOpen}
        // isOpen={isOpen}
      />
    </div>
  );
};

export default Task;

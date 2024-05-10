import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { Dialog, IconButton } from '@radix-ui/themes';
import React from 'react';

interface TaskProps {
  task: string;
  dueDate: string;
}

const Task: React.FC<TaskProps> = ({ task, dueDate }) => {
  const taskStyle =
    'grid grid-cols-6 gap-4 my-4 py-2 items-center border-2 border-solid border-zinc-500 rounded-xl border-b last:border-b-2 hover:bg-zinc-400';

  return (
    <div>
      <Dialog.Trigger>
        <li className={taskStyle}>
          <div className='pl-4 col-span-2 truncate ...'>{task}</div>
          <div className='col-start-4 col-span-2'>due: {dueDate}</div>
          <IconButton
            className='col-start-6 flex justify-center'
            color='gray'
            variant='soft'
          >
            <DotsVerticalIcon width='18' height='18' />
          </IconButton>
        </li>
      </Dialog.Trigger>
    </div>
  );
};

export default Task;

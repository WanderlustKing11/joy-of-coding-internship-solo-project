import TaskEditor from '@/app/components/TaskEditor';
import { DotsVerticalIcon, Pencil2Icon } from '@radix-ui/react-icons';
import { Button, Dialog, IconButton } from '@radix-ui/themes';
import React from 'react';

const ListPage = () => {
  const taskStyle =
    'grid grid-cols-6 gap-4 py-2 items-center border-2 border-solid border-zinc-500 rounded-xl border-b last:border-b-1 hover:bg-zinc-400';

  return (
    <div className='w-full h-full flex flex-col items-center'>
      {/* TITLE */}
      <div className='flex flex-row space-x-10 group'>
        <h1 className='text-3xl mb-14 group-hover:opacity-75'>List Title</h1>
        <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <IconButton size='1' aria-label='Edit list title'>
            <Pencil2Icon width='18' height='18' />
          </IconButton>
        </span>
      </div>

      <Dialog.Root>
        <div className='w-full'>
          <ul>
            <Dialog.Trigger>
              <li className={taskStyle}>
                <div className='pl-4 col-span-2 truncate ...'>
                  Task #1 blah blah blah blah blah blah blah blah blah
                </div>
                <div className='col-start-4 col-span-2'>due: 5/10/24</div>
                <IconButton
                  className='col-start-6 flex justify-center'
                  color='gray'
                  variant='soft'
                >
                  <DotsVerticalIcon width='18' height='18' />
                </IconButton>
              </li>
            </Dialog.Trigger>
            <li className={taskStyle}>
              <div className='pl-4 col-span-2 truncate ...'>Task #2</div>
              <div className='col-start-4 col-span-2'>due: 5/10/24</div>
              <IconButton className='col-start-6' color='gray' variant='soft'>
                <DotsVerticalIcon width='18' height='18' />
              </IconButton>
            </li>
            <li className={taskStyle}>
              <div className='pl-4 col-span-2 truncate ...'>Task #3</div>
              <div className='col-start-4 col-span-2'>due: 5/10/24</div>
              <IconButton className='col-start-6' color='gray' variant='soft'>
                <DotsVerticalIcon width='18' height='18' />
              </IconButton>
            </li>
            <li className={taskStyle}>
              <div className='pl-4 col-span-2 truncate ...'>Task #4</div>
              <div className='col-start-4 col-span-2'>due: 5/10/24</div>
              <IconButton className='col-start-6' color='gray' variant='soft'>
                <DotsVerticalIcon width='18' height='18' />
              </IconButton>
            </li>
          </ul>
        </div>
        <div className='mt-16 mb-10'>
          <Dialog.Trigger>
            <Button>ADD NEW TASK</Button>
          </Dialog.Trigger>
        </div>
        <TaskEditor />
      </Dialog.Root>
    </div>
  );
};

export default ListPage;

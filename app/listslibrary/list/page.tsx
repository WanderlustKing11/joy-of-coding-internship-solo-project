import { TaskDataProps, taskData } from '@/app/data/taskData';
import SelectSort from '@/app/components/SelectSort';
import Task from '@/app/components/Task';
import TaskEditor from '@/app/components/TaskEditor';
import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button, Dialog, IconButton, Select } from '@radix-ui/themes';
import { useState } from 'react';

const ListPage = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleClose = () => {
  //   if (isOpen) {
  //     setIsOpen(false);
  //   }
  // };
  return (
    <div
      className='w-full h-full flex flex-col items-center'
      // onClick={handleClose}
    >
      {/* TITLE */}
      <div className='flex flex-row space-x-10 group'>
        <h1 className='text-3xl mb-14 group-hover:opacity-75'>List Title</h1>
        <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <IconButton size='1' color='gray' aria-label='Edit list title'>
            <Pencil2Icon width='18' height='18' />
          </IconButton>
        </span>
      </div>

      <SelectSort className='w-full flex justify-start'>
        <Select.Item value='oldest'>oldest</Select.Item>
        <Select.Item value='newest'>newest</Select.Item>
        <Select.Item value='alphabetical'>alphabetical</Select.Item>
        <Select.Item value='due date'>due date</Select.Item>
      </SelectSort>

      {/* TASKS */}
      <Dialog.Root>
        <div className='w-full'>
          <ul>
            {taskData.map((tasks: TaskDataProps) => (
              <Task
                key={tasks.task}
                task={tasks.task}
                dueDate={tasks.dueDate}
                // toggleOpen={toggleOpen}
                // isOpen={isOpen}
              />
            ))}
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

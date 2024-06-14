'use client';

import { useEffect, useState } from 'react';
import { Button, Dialog, IconButton, Select } from '@radix-ui/themes';
import axios from 'axios';
import { z } from 'zod';
import { fetchTaskSchema } from '@/app/validationSchemas';
import { formatDueDateTime } from '@/app/utils/dateFormatter';
import { Pencil2Icon } from '@radix-ui/react-icons';
import ListPopup from '@/app/components/ListPopup';
import SelectSort from '@/app/components/SelectSort';
import Task from '@/app/components/Task';
import TaskCreator from '@/app/components/TaskCreator';
import TaskEditor from '@/app/components/TaskEditor';

type TaskData = z.infer<typeof fetchTaskSchema>;

const ListPage = () => {
  const [listTitle, setListTitle] = useState('Task List');
  const [listEditOpen, setListEditOpen] = useState(false);
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [editTaskOpen, setEditTaskOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [sortOrder, setSortOrder] = useState('oldest');
  const [currentTask, setCurrentTask] = useState<TaskData | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      await fetchTasks();
    } catch (error) {
      console.log('Failed to delete task:', error);
    }
  };

  const handleToggleCompletion = async (id: number) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === id);
      if (!taskToUpdate) return;

      const updatedStatus =
        taskToUpdate.status === 'COMPLETE' ? 'INCOMPLETE' : 'COMPLETE';
      const response = await axios.patch(`/api/tasks/${id}`, {
        status: updatedStatus,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: response.data.status } : task
        )
      );
      console.log(response.data.status);
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleTaskCreated = (newTask: TaskData) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setCreatorOpen(false);
  };

  const handleTaskUpdate = (updatedTask: TaskData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const sortHandlers: { [key: string]: (tasks: TaskData[]) => TaskData[] } = {
    newest: (tasks) => tasks.slice().sort((a, b) => b.id - a.id),
    oldest: (tasks) => tasks.slice().sort((a, b) => a.id - b.id),
    alphabetical: (tasks) =>
      tasks.slice().sort((a, b) => a.title.localeCompare(b.title)),
    'due date': (tasks) =>
      tasks
        .slice()
        .sort(
          (a, b) =>
            new Date(a.dueDateTime).getTime() -
            new Date(b.dueDateTime).getTime()
        ),
  };

  const handleUpdateListTitle = (newTitle: string) => {
    setListTitle(newTitle);
    handleCloseListEdit();
  };

  const handleSortChange = (value: string) => setSortOrder(value);

  const sortedTasks = sortHandlers[sortOrder](tasks);

  const handleOpenListEdit = () => setListEditOpen(true);

  const handleCloseListEdit = () => setListEditOpen(false);

  const handleAddTask = () => {
    setCurrentTask(null); // Clear currentTask to reset the form
    // ref.current?.reset();
    setCreatorOpen(true);
  };

  const handleCloseEditor = () => setCreatorOpen(false);

  const handleEditTask = (task: TaskData) => {
    setCurrentTask(task);
    setEditTaskOpen(true);
  };

  const handleCloseEditTask = () => {
    setEditTaskOpen(false);
    setCurrentTask(null);
  };

  return (
    <div
      className='w-full h-full flex flex-col items-center'
      // onClick={handleClose}
    >
      {/* TITLE */}
      <Dialog.Root open={listEditOpen} onOpenChange={setListEditOpen}>
        <div className='flex flex-row space-x-10 group'>
          <h1 className='text-3xl mb-14 group-hover:opacity-75'>{listTitle}</h1>
          <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <Dialog.Trigger>
              <IconButton
                size='1'
                color='gray'
                onClick={handleOpenListEdit}
                aria-label='Edit list title'
              >
                <Pencil2Icon width='18' height='18' />
              </IconButton>
            </Dialog.Trigger>
          </span>
        </div>

        <ListPopup onUpdateListTitle={handleUpdateListTitle} />
      </Dialog.Root>

      <SelectSort
        className='w-full flex justify-start'
        onSortChange={handleSortChange}
        sortOptions={Object.keys(sortHandlers)}
      />

      {/* TASKS */}
      <Dialog.Root>
        <div className='w-full'>
          <ul>
            {sortedTasks.map((task: TaskData) => (
              <Dialog.Trigger key={task.id}>
                <div>
                  <Task
                    // key={task.id}
                    task={task.title}
                    dueDate={formatDueDateTime(task.dueDateTime)}
                    isCompleted={task.status === 'COMPLETE'}
                    onCheckClick={() => handleToggleCompletion(task.id)}
                    onDelete={() => handleDeleteTask(task.id)}
                    onClick={() => handleEditTask(task)}
                  />
                </div>
              </Dialog.Trigger>
            ))}
          </ul>
        </div>
        <div className='mt-16 mb-10'>
          <Dialog.Trigger>
            <Button onClick={handleAddTask}>ADD NEW TASK</Button>
          </Dialog.Trigger>

          {/* ALTERNATE TASK EDITOR PAGE */}
          {/* <Button>
            <Link href='/listslibrary/list/new'>New Task</Link>
          </Button> */}
        </div>
        <TaskCreator
          isOpen={creatorOpen}
          onClose={handleCloseEditor}
          onTaskCreated={handleTaskCreated}
        />
        <TaskEditor
          isOpen={editTaskOpen}
          onClose={handleCloseEditTask}
          taskData={currentTask}
          onUpdateTask={handleTaskUpdate}
        />
      </Dialog.Root>
    </div>
  );
};

export default ListPage;

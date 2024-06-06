'use client';
/////////////////////////////////////////////
///////// NOT A REAL PROFILE PAGE ///////////
// This is just a test for handling my API //
/////////////////////////////////////////////
import { Button, Select } from '@radix-ui/themes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { fetchTaskSchema } from '../validationSchemas';
import SelectSort from '../components/SelectSort';

type TaskData = z.infer<typeof fetchTaskSchema>;

const ProfilePage = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [sortOrder, setSortOrder] = useState('oldest');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  const handleUpdateStatus = async (id: number) => {
    try {
      const response = await axios.patch(`/api/tasks/${id}`);
      fetchTasks();
      console.log(response.data.status);
    } catch (error) {
      console.error("Couldn't update task:", error);
    }
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

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  const sortedTasks = sortHandlers[sortOrder](tasks);

  return (
    <div>
      Test Page
      <div className='w-full'>
        <SelectSort
          className='w-full flex justify-start'
          onSortChange={handleSortChange}
          sortOptions={Object.keys(sortHandlers)}
        >
          {/* <Select.Item value='oldest'>oldest</Select.Item>
          <Select.Item value='newest'>newest</Select.Item>
          <Select.Item value='alphabetical'>alphabetical</Select.Item>
          <Select.Item value='due date'>due date</Select.Item> */}
        </SelectSort>
        <ul>
          {sortedTasks.map((task: TaskData) => (
            <li className='m-4 flex space-x-3' key={task.id}>
              <div>
                {task.title}, {task.status}
              </div>
              <Button onClick={() => handleUpdateStatus(task.id)}>Check</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

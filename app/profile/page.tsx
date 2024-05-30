'use client';
/////////////////////////////////////////////
// This is just a test for handling my API //
/////////////////////////////////////////////
import { Button } from '@radix-ui/themes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { fetchTaskSchema } from '../validationSchemas';

type TaskData = z.infer<typeof fetchTaskSchema>;

const ProfilePage = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

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

  return (
    <div>
      ProfilePage
      <div className='w-full'>
        <ul>
          {tasks.map((task: TaskData) => (
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

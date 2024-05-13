export interface TaskDataProps {
  id: number;
  task: string;
  dueDate: string;
}

export const taskData: TaskDataProps[] = [
  { id: 1, task: 'Become a Sith Lord', dueDate: '5/11/24' }, 
  { id: 2, task: 'Kill all the other Sith', dueDate: '5/20/2024' },
  { id: 3, task: 'Create the rule of 2', dueDate: '5/20/2024' },
  { id: 4, task: 'Find an apprentice', dueDate: '5/21/2924' },
]
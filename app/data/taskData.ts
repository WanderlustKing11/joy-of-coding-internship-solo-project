export interface TaskDataProps {
  task: string;
  dueDate: string;
}

export const taskData: TaskDataProps[] = [
  { task: 'Become a Sith Lord', dueDate: '5/11/24' }, 
  { task: 'Kill all the other Sith', dueDate: '5/20/2024' },
  { task: 'Create the rule of 2', dueDate: '5/20/2024' },
  { task: 'Find an apprentice', dueDate: '5/21/2924' },
]
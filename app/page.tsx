import { Skeleton } from '@radix-ui/themes';

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col items-start'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl flex flex-wrap'>
        Start tracking your tasks now. Let's Get things Done.
      </h1>
      <p className='max-w-[36rem] my-20 text-md md:text-lg flex flex-auto'>
        Get all your thoughts and activities in order. No need to remember all
        the details, you can jot down quick notes! Make a grocery list on the
        fly! Or create a task list for your projects to better manage your
        workflow and accelertate benchmarks. Customize the lists you want by
        editing, deleting, or reorganizing them your way.
      </p>
      <div className='w-full flex justify-center'>
        <div className='w-1/2 md:w-1/3 max-w-[20rem] h-[25rem] md:h-[30rem] max-h-[30rem] bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-3xl'></div>
      </div>
    </div>
  );
}

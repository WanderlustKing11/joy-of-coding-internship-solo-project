import Link from 'next/link';
import React from 'react';

const ListsLibraryPage = () => {
  const listStyle = 'flex flex-row space-x-24 hover:bg-slate-800';

  return (
    <div className='m-10'>
      {/* TITLE */}
      <h2 className='text-3xl'>Lists Library</h2>

      {/* lISTS */}
      {/* ***** Create an option to delete lists ***** */}
      <div>
        <ul className='flex flex-col space-y-4 mt-8'>
          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div>List #1</div>
              <div>5/10/24</div>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div>List #2</div>
              <div>5/15/24</div>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div>List #3</div>
              <div>5/29/24</div>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div>List #4</div>
              <div>6/01/24</div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ListsLibraryPage;

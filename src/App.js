import React from 'react';
import AddToList from './Components/AddToList';
import AddList from './Components/AddToList/AddList';

const App = () => {
  return (
    <div className='flex flex-col items-center gap-y-6 mx-auto mt-12 px-8 py-10 max-w-screen-md bg-white border border-gray-300 rounded-lg shadow-md'>
      <h1 className='text-4xl font-extrabold mb-8 text-gray-800 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-2 rounded border-2 border-gray-300'>
      ToDo List App
      </h1>
      <div className='w-full'>
        <AddToList />
      </div>
      <div className='w-full'>
        < AddList/>
      </div>
    </div>
  );
};

export default App;

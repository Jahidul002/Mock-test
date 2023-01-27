import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { goro } from './Router/Router';

const App = () => {
  return (
    <div>
      <RouterProvider router={goro}></RouterProvider>
    </div>
  );
};

export default App;
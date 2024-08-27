import React from 'react';

const Books = ({ result }) => {
  return (
    <div className="flex flex-1 p-4">
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {result}
      </div>
    </div>
  );
}

export default Books;

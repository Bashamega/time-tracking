
import React from 'react';

const CreditFooter: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center absolute bottom-0 w-screen">
      <p className="text-sm text-gray-600">
        Created with{' '}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{' '}
        by <a href='https://github.com/Bashamega' className=' underline'>Adam Basha</a>
      </p>
    </footer>
  );
};

export default CreditFooter;

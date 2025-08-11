import React from 'react';

const Sidevar = () => {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2">
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-amber-600 font-bold text-white px-4 py-1 rounded-tr-2xl rounded-t-2xl
                   rotate-90 origin-left cursor-pointer select-none inline-block"
        title="Download CV"
      >
        CV Download
      </a>
    </div>
  );
};

export default Sidevar;

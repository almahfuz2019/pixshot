import React from 'react';
const Loading = () => {
     return (
          <div className='flex items-center justify-center z-20'>
               <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
          </div>
     );
};
export default Loading;
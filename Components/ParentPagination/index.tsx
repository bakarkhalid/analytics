import React, { useState } from 'react';
import Pagination from '../Pagination';

const ParentComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);



  return (
    <div className='pagination-area'>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ParentComponent;

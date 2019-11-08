import { useState, useEffect } from 'react';

const usePaging = () => {
  const [page, updatePage] = useState();
  const [upDisabled, updateUpDisabled] = useState(true);
  const [downDisabled, updateDownDisabled] = useState(true);

  const pageUpFunction = () => {
    updatePage(page + 1);
    updateDownDisabled(false);
  };

  const pageDownFunction = () => {
    updatePage(page - 1);
  };

  useEffect(() => {
    if(page >= 0) {
      updateUpDisabled(false);
    }
    updateDownDisabled(page ? false : true);
  }, [page]);

  return { page, updatePage, pageUpFunction, pageDownFunction, upDisabled, downDisabled };
};

export default usePaging;

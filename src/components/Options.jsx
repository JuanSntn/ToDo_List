import React, { useState } from 'react';
import Popup from './Popup';
import { BsThreeDots } from 'react-icons/bs';

const Options = ({ idTasks, tasks, setTasks }) => {
  const [open, setOpen] = useState(false);

  const handleOptions = (e) => {
    setOpen((current) => !current);
  };

  return (
    <span className='relative' onClick={handleOptions}>
      <BsThreeDots size={22} />
      {open && <Popup idTasks={idTasks} tasks={tasks} setTasks={setTasks} />}
    </span>
  );
};

export default Options;

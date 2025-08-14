import React from "react";
import {useSelector} from 'react-redux';

const Navbar = () => {

  const {tasksList,error} = useSelector((state) => state.tasks)

  return (
    <>
    <div style={{
        textAlign: 'center',
        backgroundColor: '#0d6efd',
        color: '#fff',
        padding: '20px 20px',
        marginBottom: '24px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(18, 41, 240, 5)',
      }}>
      <h1 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', margin: 0, fontSize: '2.5rem', letterSpacing: '1px', fontWeight: 'bold' }}>Project Management</h1>
      <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9,fontWeight: 'bold' }}>{`Currently ${tasksList.length} task(s) pending`}</p>
      {
        (error !== '') ? <h5 className="text-center text-danger">{error}</h5> : null
      }
    </div>
    </>
  );
};

export default Navbar;

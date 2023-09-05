import React from 'react';

const Navigation = ({ isAdmin, onLogout, onNavigate }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => onNavigate('home')}>Home</button>
          </li>
          {isAdmin && (
            <li>
              <button onClick={() => onNavigate('create')}>Create New Form</button>
            </li>
          )}
          <li>
            <button onClick={() => onNavigate('inprogress')}>In Progress</button>
          </li>
          <li>
            <button onClick={() => onNavigate('completed')}>Completed</button>
          </li>
        </ul>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Navigation;
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [selectedRole, setSelectedRole] = useState('user'); // Default to user role
  const [selectedDepartment, setSelectedDepartment] = useState('Production'); // Default to Production department
//   const navigate = useNavigate();
  const handleLogin = () => {
    // Check if the selected role is "admin" and the selected department is one of the specified values
    if (selectedRole === 'admin' && (selectedDepartment === 'Production' || selectedDepartment === 'Analysis' || selectedDepartment === 'Maintenance')) {
      onLogin({ isAuthenticated: true, role: selectedRole, department: selectedDepartment });
    } 
    if(selectedRole === 'User' && (selectedDepartment === 'Production' || selectedDepartment === 'Analysis' || selectedDepartment === 'Maintenance')){
        // onLogin({ isAuthenticated: false });
        // navigate('/new');
    }
  };
  
  

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <div>
        <label>Select Role:</label>
        <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div>
        <label>Select Department:</label>
        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="Production">Production</option>
          <option value="Analysis">Analysis</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;

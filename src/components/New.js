// // import React, { Component } from 'react';

// // class DynamicTable extends Component {
// //   constructor(props) {
// //     super(props);
// //     const productionData = [];
// //     const maintenanceData = [];
// //     const analysisData = [];
// //     // Initialize data based on the department
// //     this.state = {
// //       data:
// //         this.props.department === 'Production' ? productionData :
// //         this.props.department === 'Maintenance' ? maintenanceData :
// //         analysisData,
// //       slNo: 1,
// //     };

// //   }  

// //   addRow = () => {
// //     const newRow = { slNo: this.state.slNo, name: '', age: '', imageFile: null };
// //     this.setState((prevState) => ({
// //       data: [...prevState.data, newRow],
// //       slNo: prevState.slNo + 1,
// //     }));
// //   };

// //   render() {
   
// //     const tableHeaders =[];
// //       // this.props.department === 'Production'
// //       //   ? ['Header1', 'Header2', 'Header3']
// //       //   : this.props.department === 'Maintenance'
// //       //   ? ['HeaderA', 'HeaderB', 'HeaderC']
// //       //   : ['HeaderX', 'HeaderY', 'HeaderZ'];

// //     return (
// //       <div>
// //         <h2>{this.props.department} Table</h2>
// //         <button onClick={this.addRow}>Add Row</button>
// //         {/* Render the table based on the department */}
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>SL No</th>
// //               <th>Name</th>
// //               <th>Age</th>
// //               <th>Image</th>
// //               {tableHeaders.map((header, index) => (
// //                 <th key={index}>{header}</th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {this.state.data.map((row, index) => (
// //               <tr key={index}>
// //                 <td>{row.slNo}</td>
// //                 <td>
// //                   <input
// //                     type="text"
// //                     value={row.name}
// //                     onChange={(e) => {
// //                       const newData = [...this.state.data];
// //                       newData[index].name = e.target.value;
// //                       this.setState({ data: newData });
// //                     }}
// //                   />
// //                 </td>
// //                 <td>
// //                   <input
// //                     type="text"
// //                     value={row.age}
// //                     onChange={(e) => {
// //                       const newData = [...this.state.data];
// //                       newData[index].age = e.target.value;
// //                       this.setState({ data: newData });
// //                     }}
// //                   />
// //                 </td>
// //                 <td>
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     onChange={(e) => {
// //                       const file = e.target.files[0];
// //                       const newData = [...this.state.data];
// //                       newData[index].imageFile = file;
// //                       this.setState({ data: newData });
// //                     }}
// //                   />
// //                   <img
// //                     src={row.imageFile ? URL.createObjectURL(row.imageFile) : ''}
// //                     alt="Selected"
// //                     style={{ maxWidth: '100px' }}
// //                   />
// //                 </td>
// //                 {/* Render more columns based on the department */}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     );
// //   }
// // }

// // export default DynamicTable;
// import React, { Component } from 'react';

// class DynamicTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       slNo: 1,
//       name: '',
//       age: '',
//       imageFile: null,
//     };
//   }

//   addRow = () => {
//     const newRow = {
//       slNo: this.state.slNo,
//       name: this.state.name,
//       age: this.state.age,
//       imageFile: this.state.imageFile,
//     };

//     this.setState((prevState) => ({
//       data: [...prevState.data, newRow],
//       slNo: prevState.slNo + 1,
//       name: '',
//       age: '',
//       imageFile: null,
//     }));
//   };

//   handleNameChange = (e) => {
//     this.setState({ name: e.target.value });
//   };

//   handleAgeChange = (e) => {
//     this.setState({ age: e.target.value });
//   };

//   handleImageChange = (e) => {
//     const file = e.target.files[0];
//     this.setState({ imageFile: file });
//   };

//   handleSaveData = async () => {
//     const { name, age, imageFile } = this.state;
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('age', age);
//     formData.append('imageFile', imageFile);

//     try {
//       const response = await fetch('http://localhost:3001/api/saveData', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Data saved successfully');
//         this.addRow(); // Optionally add the new row to the table
//       } else {
//         console.error('Failed to save data');
//         // Handle failure, e.g., display an error message to the user
//       }
//     } catch (error) {
//       console.error('Request error:', error);
//       // Handle network or other errors
//     }
//   };

//   render() {
//     const { data } = this.state;

//     return (
//       <div>
//         <h2>{this.props.department} Table</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />
//         <input
//           type="text"
//           placeholder="Age"
//           value={this.state.age}
//           onChange={this.handleAgeChange}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={this.handleImageChange}
//         />
//         <button onClick={this.handleSaveData}>Save Data</button>
//         <button onClick={this.addRow}>Add Row</button>
//         {/* Render the table based on the department */}
//         <table>
//           {/* Table headers go here */}
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index}>
//                 <td>{row.slNo}</td>
//                 <td>{row.name}</td>
//                 <td>{row.age}</td>
//                 <td>
//                   <img
//                     src={row.imageFile ? URL.createObjectURL(row.imageFile) : ''}
//                     alt="Selected"
//                     style={{ maxWidth: '100px' }}
//                   />
//                 </td>
//                 {/* Render more columns based on the department */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default DynamicTable;
// New.js
import React from 'react';

const New = () => {
  return (
    <div>
      <h2>New Page</h2>
      {/* Add content for the 'New' page here */}
    </div>
  );
};

export default New;
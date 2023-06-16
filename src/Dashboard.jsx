// import React from 'react';
// import './Dashboard.css';

// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h1>Xtrack</h1>
//       <div className="summary">
//         {/* Summary Card 1 */}
//         <div className="summary-card">
//           <h2>Total Shipments</h2>
//           <p>100</p>
//         </div>
//         {/* Summary Card 2 */}
//         <div className="summary-card">
//           <h2>Pending Shipments</h2>
//           <p>20</p>
//         </div>
//         {/* Summary Card 3 */}
//         <div className="summary-card">
//           <h2>Delivered Shipments</h2>
//           <p>80</p>
//         </div>
//       </div>
//       {/* More dashboard components go here */}
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Xtrack</h1>
      <div className="summary">
        <div className="summary-card">
          <h2>Total Expenses</h2>
          <p>6500/-</p>
        </div>
        <div className="summary-card">
          <h2>Categories</h2>
          <p>5</p>
        </div>
        <div className="summary-card">
          <h2>Recent Expenses</h2>
          <ul>
            <li>Food - 3500/-</li>
            <li>Transportation - 1300/-</li>
            <li>Entertainment - 1700/-</li>
          </ul>
        </div>
      </div>
      {/* Other dashboard components go here */}
    </div>
  );
}

export default Dashboard;

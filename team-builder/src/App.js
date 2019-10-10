
import './App.css';
import Header from './components/Header/Header.js';
import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers/TeamMembers.js';
import Form from './components/form/form.js';

function App() {
  const [teamMembers, setTeamMembers] = useState( [{name: 'Henry Ford', role: 'Designer'}, {name: 'Alice Liddell', role: 'Rabbit Hole Expert'}, {name: 'Charley Chaplin', role: 'Entertainer'}] );
  const [memberName, setMemberName] = useState('');
  const [memberRole, setMemberRole] = useState('');

  // console.log(memberName)
  // console.log(memberRole)

  const nameHandler = event => {
    setMemberName(event.target.value);
  }

  const roleHandler = event => {
    setMemberRole(event.target.value)
  }

  const addTeamMember = member => {
    member.preventDefault();
    const newMember = {};
    newMember.name = memberName;
    newMember.role = memberRole;
    setTeamMembers( [...teamMembers, newMember] );
  };

  return (
    <div className="App">
      <Header/>
      <Form nameHandler={nameHandler} roleHandler={roleHandler} addTeamMember={addTeamMember}/>
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;














// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";

const Members = props => {
  return (
    <div>
      {props.memberList.map(member => {
        return (
          <div className="member" key={member.name}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
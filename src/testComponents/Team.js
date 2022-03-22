import React from "react";

import "./Team.scss";

import { teamObj } from "./TeamMembers";

const displayMembers = (obj) => {
  const [...members] = obj.members;
  return members.map((member) => (
    <div className="MemberBox" key={member.id}>
      <div className="AvatarContainer">
        <img src={member.avatar} alt="avatar" className="AvatarImage" />
      </div>
      <div className="MemberCredentials">
        <p>
          <span>Name:</span> {member.name}
        </p>
        <p>
          <span>CallSign:</span> {member.nickName}
        </p>
        <p>
          <span>Rank:</span>
          {member.rank}
        </p>
      </div>
    </div>
  ));
};
const ShowMembers = displayMembers(teamObj);

function Team() {
  return <div className="Team">{ShowMembers}</div>;
}

export default Team;

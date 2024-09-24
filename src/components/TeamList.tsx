import React from "react";

const TeamList: React.FC = () => {
  const teams = ["Team A", "Team B", "Team C"];

  return (
    <div>
      <h2 className="text-xl mb-4">Teams</h2>
      <ul className="list-disc pl-5">
        {teams.map((team, index) => (
          <li key={index} className="mb-2">{team}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;

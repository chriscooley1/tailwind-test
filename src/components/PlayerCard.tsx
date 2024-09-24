import React from "react";

interface PlayerProps {
  name: string;
  position: string;
  number: number;
}

const PlayerCard: React.FC<PlayerProps> = ({ name, position, number }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="bg-gray-300 h-56 flex items-center justify-center">
        <span className="text-4xl text-gray-600">{name[0]}</span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{position}</p>
        <div className="mt-2 bg-blue-500 text-white text-center rounded-full w-8 h-8 flex items-center justify-center">
          {number}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

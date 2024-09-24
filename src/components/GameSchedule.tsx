import React from "react";

interface Game {
  date: string;
  opponent: string;
  location: string;
}

const GameSchedule: React.FC = () => {
  const games: Game[] = [
    { date: "2023-10-01", opponent: "Disc Demons", location: "Bluff Street Park" },
    { date: "2023-10-15", opponent: "Sky Catchers", location: "Crimson Ridge Park" },
    { date: "2023-10-29", opponent: "Wind Runners", location: "Tonaquint Park" },
    { date: "2023-11-12", opponent: "Sun Devils", location: "Little Valley Fields" },
    { date: "2023-11-26", opponent: "Red Rock Flyers", location: "Gubler Park" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold p-4 bg-blue-500 text-white">Upcoming Games</h2>
      <ul className="divide-y divide-gray-200">
        {games.map((game, index) => (
          <li key={index} className="p-4 hover:bg-gray-50 transition duration-150 ease-in-out">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-900">{game.opponent}</p>
                <p className="text-sm text-gray-500">{game.location}</p>
              </div>
              <p className="text-sm text-gray-500">{game.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameSchedule;

import React from "react";
import Header from "./components/Header";
import TeamList from "./components/TeamList";
import PlayerCard from "./components/PlayerCard";
import GameSchedule from "./components/GameSchedule";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <TeamList />
            <div className="mt-6">
              <GameSchedule />
            </div>
          </div>
          <div>
            <PlayerCard
              name="John Doe"
              position="Handler"
              number={7}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

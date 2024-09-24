import React from "react";
import Header from "./components/Header";
import TeamList from "./components/TeamList";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <TeamList />
      </main>
    </div>
  );
}

export default App;

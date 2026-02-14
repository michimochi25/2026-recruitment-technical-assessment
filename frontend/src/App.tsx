import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Dropdown } from "./components/Dropdown";
import { useState } from "react";
import rooms from "../data.json";
import { RoomContainer } from "./components/RoomContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <main className="mt-5 mx-4">
        <section className="flex justify-between">
          <Dropdown icon="filter_alt" text="Filters" />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Dropdown icon="filter_list" text="Sort" />
        </section>

        {/* Rooms */}
        <section className="grid grid-cols-5 gap-4 mt-4">
          {rooms.map((room) => (
            <RoomContainer
              key={room.name}
              name={room.name}
              img={room.building_picture}
              no_rooms={room.rooms_available}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;

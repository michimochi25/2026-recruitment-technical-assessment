import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Dropdown } from "./components/Dropdown";
import { useState } from "react";
import rooms from "../data.json";
import { RoomContainer } from "./components/RoomContainer";
import { useMediaQuery, useTheme } from "@mui/material";
import { RoomContainerMobile } from "./components/RoomContainerMobile";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navbar />
      <main className="mt-5 mx-4">
        {/* Filters and Search */}
        {isMobile ? (
          <section className="flex flex-col">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex justify-between mt-3">
              <Dropdown icon="filter_alt" text="Filters" />
              <Dropdown icon="filter_list" text="Sort" />
            </div>
          </section>
        ) : (
          <section className="flex justify-between">
            <Dropdown icon="filter_alt" text="Filters" />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Dropdown icon="filter_list" text="Sort" />
          </section>
        )}

        {/* Rooms */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
          {rooms.map((room) => (
            <>
              {isMobile ? (
                <RoomContainerMobile
                  key={room.name}
                  name={room.name}
                  img={room.building_picture}
                  no_rooms={room.rooms_available}
                />
              ) : (
                <RoomContainer
                  key={room.name}
                  name={room.name}
                  img={room.building_picture}
                  no_rooms={room.rooms_available}
                />
              )}
            </>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;

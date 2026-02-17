import { FreeroomsDoor } from "./FreeroomsDoor";
import { Menu } from "./Menu";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("grid");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="w-full flex shadow-sm p-2 justify-between items-center fixed sticky top-0 z-10 bg-white">
      {/* Logo */}
      <div className="flex">
        <FreeroomsDoor />
        {isMobile ? (
          <></>
        ) : (
          <h1
            className="ml-2 my-auto text-4xl text-[var(--freerooms-primary)] 
          font-(family-name:--font-head) font-medium"
          >
            Freerooms
          </h1>
        )}
      </div>

      {/* Menus */}
      <div className="flex gap-2">
        <Menu
          icon="search"
          onClick={() => setSelectedMenu("search")}
          variant={selectedMenu === "search" ? "selected" : "primary"}
        />
        <Menu
          icon="grid_view"
          onClick={() => setSelectedMenu("grid")}
          variant={selectedMenu === "grid" ? "selected" : "primary"}
        />
        <Menu
          icon="map"
          onClick={() => setSelectedMenu("map")}
          variant={selectedMenu === "map" ? "selected" : "primary"}
        />
        <Menu
          icon="dark_mode"
          onClick={() => setSelectedMenu("dark_mode")}
          variant={selectedMenu === "dark_mode" ? "selected" : "primary"}
        />
      </div>
    </div>
  );
};

export { Navbar };

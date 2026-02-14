import { useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";

const StyledInput = styled("input")`
  width: 100%;
  padding: 0.5rem;
  padding-left: 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  outline: none;

  &:hover {
    border-color: transparent;
    box-shadow: 0 0 0 0.5px black;
  }

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px var(--freerooms-primary);
  }
`;

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={`relative w-1/2 ${isMobile ? "w-full" : ""}`}>
      <span className="material-icons-round absolute left-2 top-1/2 -translate-y-1/2">
        search
      </span>
      <StyledInput
        type="text"
        placeholder="Search for a building..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export { SearchBar };

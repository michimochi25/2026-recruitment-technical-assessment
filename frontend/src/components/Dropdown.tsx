import Box from "@mui/material/Box";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  width: 10%;
  padding: 0.5rem;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  border: 2px solid var(--freerooms-primary);
  border-radius: 0.5rem;
  font-weight: 500;
  color: var(--freerooms-primary);
  cursor: pointer;

  &:hover {
    background-color: rgb(from var(--freerooms-primary) r g b / 0.1);
  }
`;

const Dropdown = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <StyledBox>
      <span className="material-icons-round">{icon}</span>
      <p>{text}</p>
    </StyledBox>
  );
};

export { Dropdown };

import { Box } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 100%;
  height: 6rem;
  display: flex;
  filter: brightness(0.8);
  background-size: cover;
  background-position: center;
  border-radius: 1rem;

  justify-content: space-between;
  padding: 1rem;
  font-weight: 500;
  align-items: center;
  color: white;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const RoomContainerMobile = ({
  name,
  img,
  no_rooms,
}: {
  name: string;
  img: string;
  no_rooms: number;
}) => {
  return (
    <StyledBox sx={{ backgroundImage: `url("../../assets/${img}")` }}>
      <h3>{name}</h3>
      <div className="flex text-black flex gap-2 items-center bg-white h-fit w-19 m-2 p-2 rounded-xl text-xs justify-between">
        <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
        <p>
          {no_rooms} / {no_rooms}
        </p>
      </div>
    </StyledBox>
  );
};

export { RoomContainerMobile };

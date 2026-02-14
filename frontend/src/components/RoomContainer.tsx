import Box from "@mui/material/Box";
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  font-weight: 500;

  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--freerooms-primary);
    opacity: 0;
    transition: opacity 0.1s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 0.3;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const RoomContainer = ({
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
      <div className="flex gap-3 items-center bg-white h-fit w-fit m-2 py-2 px-4 rounded-xl text-xs self-end">
        <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
        <p>
          {no_rooms} {no_rooms === 1 ? "room" : "rooms"} available
        </p>
      </div>
      <div className="text-white bg-[var(--freerooms-primary)] h-fit m-2 p-2 rounded-md text-sm">
        {name}
      </div>
    </StyledBox>
  );
};

export { RoomContainer };

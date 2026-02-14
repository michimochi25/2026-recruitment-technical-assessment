import Button from "@mui/material/Button";
import styled, { css } from "styled-components";

const StyledButton = styled(Button)<{ type: "primary" | "selected" }>`
  && {
    display: flex;
    height: 3rem;
    width: 3rem;
    min-width: 0;
    border: 1px solid var(--freerooms-primary);
    align-items: center;
    border-radius: 0.25rem;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    padding: 0;

    ${({ type }) =>
      type === "selected"
        ? css`
            color: white;
            background-color: var(--freerooms-primary);

            &:hover {
              filter: brightness(0.85);
            }
          `
        : css`
            color: var(--freerooms-primary);
            background-color: white;

            &:hover {
              background-color: rgb(from var(--freerooms-primary) r g b / 0.1);
            }
          `}
  }
`;

const Menu = ({
  icon,
  onClick,
  variant,
}: {
  icon: string;
  onClick: () => void;
  variant: "primary" | "selected";
}) => {
  return (
    <StyledButton onClick={onClick} type={variant}>
      <span className="material-icons-round">{icon}</span>
    </StyledButton>
  );
};

export { Menu };

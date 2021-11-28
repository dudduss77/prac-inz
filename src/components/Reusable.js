import styled from "styled-components/macro";

export const ReusableViewWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isColumnLayout }) =>
    isColumnLayout ? "column" : "row"};
  gap: 10px;
  /* flex-wrap: wrap; */
  flex: ${({ flexValue }) => flexValue};
  min-height: ${({ minHeight }) => minHeight};
`;

export const Button = styled.button`
  border: none;
  border-radius: ${({ isRounded, isSquare }) =>
    isRounded ? "50px" : isSquare ? "0px" : "5px"};
  background: ${({ theme }) => theme.PrimarySix};
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  padding: ${({ pTB }) => (pTB ? pTB + "px" : "10px")} 20px;
  font-size: 16px;
  width: ${({ isWholeContent }) => (isWholeContent ? "100%" : "auto")};
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  flex: ${({ flexValue }) => flexValue};
  overflow: ${({ isOverflow }) => (isOverflow ? "visible" : "hidden")};
  display: flex;
  gap: ${({ isGap }) => (isGap ? "10px" : "0")};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ isPadding }) => (isPadding ? "10px" : "0")};
  width: ${({ width }) => width};
  @media screen and (max-width: 900px) {
    ${({ noMedia }) => (noMedia ? "" : "flex-direction: column")}
  }
`;

export const Column = styled.div`
  width: ${({ width }) => width};
  min-height: ${({ minHeight }) => minHeight};
  flex: ${({ flexValue }) => flexValue};
  display: flex;
  flex-direction: column;
  padding: ${({ isPadding }) => (isPadding ? "10px" : "0")};
  gap: ${({ isGap }) => (isGap ? "10px" : "none")};
  overflow-y: ${({ isOverflow }) => (isOverflow ? "auto" : "")};
  align-items: ${({ alignItems }) => alignItems};
`;

export const Box = styled.div`
  width: ${({ width, isPadding }) =>
    isPadding ? `calc(${width} - 20px)` : width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  display: flex;
  flex-direction: column;
  gap: ${({ isGap }) => (isGap ? "10px" : "0")};
  background: ${({ theme }) => theme.naturalOne};
  height: ${({ height, isPadding }) =>
    isPadding ? `calc(${height} - 20px)` : height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: ${({ isOverflow }) => (isOverflow ? "visible" : "hidden")};
  padding: ${({ isPadding }) => (isPadding ? "10px" : "0")};
  position: ${({ isRelative }) => (isRelative ? "relative" : "")};
  margin-top: ${({ marginTop }) => marginTop};
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  min-height: 100px;
  padding: 5px;
  flex: 1;
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.naturalFive};
  width: ${({width}) => width}
`;

export const Icon = styled.div`
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
`;

export const GridLayout = styled.div`
  flex: ${({ flexValue }) => flexValue};
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  gap: ${({ isGap }) => (isGap ? "10px" : "0")};
  padding: ${({ isPadding }) => (isPadding ? "10px" : "0")};
  overflow: ${({ overflowValue }) => overflowValue};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  align-items: ${({alignItems}) => alignItems};
`;

export const StyledTile = styled.div`
  height: ${({ height = "125px" }) => height};
  min-height: ${({ height = "125px" }) => height};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.shadowOne};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  position: relative;
  background: ${({ theme }) => theme.naturalOne};
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const ClickedInput = styled.input`
  border: none;
  font-size: 1em;
  background: rgba(255, 255, 255, 0);
  color: ${({ theme, primaryColor }) =>
    primaryColor ? theme.CharacterPrimary : theme.CharacterPrimaryInvers};
  width: ${({ width }) => width};
`;

export const AbsoluteIconWrapper = styled.div`
  position: absolute;
  height: 100%;
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  top: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NoDataHeader = styled.h4`
  color: ${({ theme }) => theme.CharacterSecoundary};
  text-align: center;
  padding: 10px 0;
`;

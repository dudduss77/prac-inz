import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as ArrowSVG } from "./../assets/arrow.svg";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const StyledPaginationItem = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.PrimarySix : theme.naturalFive)};
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.naturalOne};
  margin: 5px;
  color: ${({ theme, active }) => (active ? theme.PrimarySix : theme.black)};

  &:hover {
    background-color: ${({ theme }) => theme.naturalFour};
  }
`;

const StyledArrowLeftSVG = styled.svg.attrs({
  width: "15px",
  height: "10px",
})`
  transform: rotate(90deg);
`;

const StyledArrowRightSVG = styled.svg.attrs({
  width: "15px",
  height: "10px",
})`
  transform: rotate(-90deg);
`;

const Pagination = ({ _active = 1, count = 10, onChange = (val) => {} }) => {
  const [active, setActive] = useState(_active);

  const itemTemplate = (item, active) => (
    <StyledPaginationItem
      active={active}
      key={item}
      onClick={({ target }) => {
        setActive(parseInt(item));
        onChange(target.textContent);
      }}
    >
      {item}
    </StyledPaginationItem>
  );

  const mappItems = () => {
    const tab = [];
    for (
      let i = active - 3 <= 1 ? 1 : active - 2;
      i <= (active + 3 >= count ? count : active + 3);
      i++
    ) {
      tab.push(itemTemplate(i, active === i));
    }
    return tab;
  };

  return (
    <StyledContainer>
      {active > 1 && (
        <StyledPaginationItem onClick={() => onChange(active - 1)}>
          <StyledArrowLeftSVG as={ArrowSVG} />
        </StyledPaginationItem>
      )}

      {mappItems()}
      {count > 1 && (
        <StyledPaginationItem onClick={() => onChange(active + 1)}>
          <StyledArrowRightSVG as={ArrowSVG} />
        </StyledPaginationItem>
      )}
    </StyledContainer>
  );
};
export default Pagination;

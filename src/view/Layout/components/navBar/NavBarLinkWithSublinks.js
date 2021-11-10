import React, { useState } from "react";
import styled from "styled-components";
import NavBarLink from "./NavBarLink";

const StyledNavBarLinkWithSublinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBarLinkWithSublinks = ({ mainIcon, mainTitle, subLinks }) => {
  const [showSublinks, setShowSublinks] = useState(false);

  return (
    <StyledNavBarLinkWithSublinks>
      <NavBarLink
        icon={mainIcon}
        title={mainTitle}
        customOnClick={() => setShowSublinks(!showSublinks)}
      />
      {showSublinks && (
        <>
          {subLinks.map((link) => (
            <NavBarLink
              path={link.path}
              icon={link.icon}
              title={link.title}
              isSublink={true}
            />
          ))}
        </>
      )}
    </StyledNavBarLinkWithSublinks>
  );
};

export default NavBarLinkWithSublinks;

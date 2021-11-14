import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Spacer, Icon } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";

const Diet = () => {
  return (
    <Box width="50%">
      <BoxHeader>
        Dieta
        <Spacer />
        <Icon>
          <FontAwesomeIcon icon="ellipsis-h" />
        </Icon>
      </BoxHeader>
    </Box>
  );
};

export default Diet;

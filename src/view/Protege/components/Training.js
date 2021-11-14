import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Spacer, Icon } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";

const Training = () => {
  return (
    <Box width="50%">
      <BoxHeader>
        Trening
        <Spacer />
        <Icon>
          <FontAwesomeIcon icon="ellipsis-h" />
        </Icon>
      </BoxHeader>
    </Box>
  );
};

export default Training;

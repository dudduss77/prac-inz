import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const StyledLeft = styled.div`
  margin: auto;
  white-space: nowrap;
`;

const StyledRight = styled.div`
  text-align: initial;
  color: ${({ theme }) => theme.PrimarySix};
  margin-left: 10px;
`;


const UserShortBox = ({
  name = 'name name',
  email = 'email',
  img = "/static/media/user.a6143582.png"
}) => {
    return (
        <StyledContainer>
          <StyledLeft>
            <img src={img} alt="Avatar" class="sc-dJjYzT MTPIL" /> 
          </StyledLeft>

          <StyledRight>
            <p>{name}</p>
            <p>{email}</p>
          </StyledRight>

        </StyledContainer> 
    )
}

export default UserShortBox

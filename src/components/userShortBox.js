import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  margin-right: 10px;
  cursor: pointer;
`;

const StyledLeft = styled.div`
  white-space: nowrap;

  & img {
    width: 50px;
  height: 50px;
  }
`;

const StyledRight = styled.div`
  text-align: initial;
  color: ${({ theme }) => theme.PrimarySix};
  margin-left: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;


const UserShortBox = ({
  name = 'name name',
  email = 'email',
  img = "/static/media/user.a6143582.png",
  id = null,
}) => {
  const navigate = useNavigate();
  const handleOnClick = (evt) => {
    evt.stopPropagation();
    navigate('/trainer/protege/' + id)
  }
    return (
        <StyledContainer >
          <StyledLeft onClick={handleOnClick}>
            <img src={img} alt="Avatar" /> 
          </StyledLeft>

          <StyledRight onClick={handleOnClick}>
            <p>{name}</p>
            <p>{email}</p>
          </StyledRight>

        </StyledContainer> 
    )
}

export default UserShortBox

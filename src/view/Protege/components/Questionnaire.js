import { useState } from "react";
import { Box } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import { useEffect } from "react";
import { getImage, getQuestionaires } from "../../../firebase/dataFirebase";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoaderFullPage from "../../../components/LoaderFullPage";

const StyledTitle = styled.div`
  font-weight: bold;
  margin: 5px 0px;
`;

const StyledContent = styled.div`
  /* margin: 10%; */
`;

const StyledContainer = styled.div`
  margin: 1%;
`;

const StyledListElement = styled.li`

`;

const StyledImg = styled.img`
  width: 30%;
  margin: 1%;
  border-radius: 8px;
`;

const Questionnaire = () => {

  const [ questionaire, setQuestionaire ] = useState();
  const { userId } = useSelector(({user}) => user)
  const { id:protegeId } = useParams();

  useEffect(async () => {
    const questionaire = (await getQuestionaires(protegeId))[0];

    const withImages = await Promise.all(questionaire.data.questionList.map( async item => {
      if(item.type == 4) {
        return {
          ...item,
          img: await Promise.all(item.img.map(async (el) => {
            const image = await getImage(protegeId, el);
            return image.data.imgData;
          }))
        }
      }
      return item;
    }))
    setQuestionaire(withImages);
  }, []);

  const mappQuestionaire = () => {
    return questionaire.map(({ question, answer, type, checkbox, img }) => (<>
    <StyledTitle>{question}</StyledTitle>
    <StyledContent>
      {
        type==2 || type==3 ?
        checkbox.filter(el => el.checked).map(el => <StyledListElement>{el.name}</StyledListElement>)
        :
        type==4 ?
        img.map(el => <StyledImg src={el} />)
        :
        answer
      }
    </StyledContent>
    
    </>))
    return "wdwdw"
  }
  return (
    <Box width="50%">
      <BoxHeader headerTitle="Ankieta" />
      <StyledContainer>
      {
        questionaire == null ? <LoaderFullPage />: (
          <>
           {mappQuestionaire()}
          </>          
        )
      }        
      </StyledContainer>


    </Box>
  );
};

export default Questionnaire;

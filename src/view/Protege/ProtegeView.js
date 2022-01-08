import { useEffect } from "react";
import { useParams } from "react-router";
import { Box, ReusableViewWrapper, Row } from "../../components/Reusable";
import Diet from "./components/Diet";
import ImageRaport from "./components/ImageRaport";
import MeasurementRaport from "./components/MeasurementRaport";
import Questionnaire from "./components/Questionnaire";
import SimpleInfo from "./components/SimpleInfo";
import Training from "./components/Training";
import TrainingRaport from "./../ProtegeHistory/components/TrainingRaport";
import { getUserData } from '../../firebase/dataFirebase';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { putActualProtege } from "../../features/protegeViewSlice";
import BoxHeader from "../../components/Box/components/BoxHeader";

const ProtegeView = () => {


  const { id:protegeId } = useParams();
  const protege = useSelector(({actualProtege}) => actualProtege);
  const dispatch = useDispatch();


  useEffect(async () => {
    const user = await getUserData(protegeId);
    console.log(user)
    dispatch(putActualProtege(user));
  }, [])

  return protege == null ? "Ładowanie" : (
    <ReusableViewWrapper isColumnLayout={true}>
      <Row isGap isOverflow>
        <SimpleInfo 
          data={{
            id: protegeId,
            email: protege.email,
            name: protege.name,
            onlineTime: protege.onlineTime,
            payedFrom: protege.payedFrom,
            payedTo: protege.payedTo,
          }}
        />
        <MeasurementRaport />
      </Row>
      <Row isGap>
        <Questionnaire />
        <ImageRaport />
      </Row>
      <Row isGap>
        <Diet />
        <Training 
        
        />
      </Row>
      <Row isGap>
        <Box width="100%">
          <BoxHeader>Raporty Treningowe</BoxHeader>
          <TrainingRaport protegeId={protegeId} />
        </Box>
      </Row>
    </ReusableViewWrapper>
  );
};

export default ProtegeView;

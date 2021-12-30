import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ReusableViewWrapper, Row } from "../../components/Reusable";
import Diet from "./components/Diet";
import ImageRaport from "./components/ImageRaport";
import MeasurementRaport from "./components/MeasurementRaport";
import Questionnaire from "./components/Questionnaire";
import SimpleInfo from "./components/SimpleInfo";
import Training from "./components/Training";
import TrainingRaport from "./components/TrainingRaport";
import { getUserData } from '../../firebase/dataFirebase';

const ProtegeView = () => {


  const { id:protegeId } = useParams();
  const [protege, setProtege] = useState(null);

  useEffect(async () => {
    const user = await getUserData(protegeId);
    console.log(user)
    setProtege(user);
  }, [])

  return protege == null ? "Ładowanie" : (
    <ReusableViewWrapper isColumnLayout={true}>
      <Row isGap>
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
        <Training />
      </Row>
      <Row isGap>
        <TrainingRaport />
      </Row>
    </ReusableViewWrapper>
  );
};

export default ProtegeView;

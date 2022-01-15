import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import LoaderFullPage from "../../../components/LoaderFullPage";
import { Box, NoDataHeader } from "../../../components/Reusable";
import { MealsData } from "../../../data/DietCreator";
import { getLastDiet, updateDiets } from "../../../firebase/dataFirebase";
import { useNotification } from "../../../hooks/useNotification";
import CreatorMeal from "../../DietCreator/components/CreatorMeal";

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const CurrentDiet = () => {
  const { userId } = useSelector(({ user }) => user);
  const [currentDay, setCurrentDay] = useState(null);
  const notification = useNotification();

  const dietEnd = async () => {
    if (currentDay) {
      const actualDay =
        ((currentDay.data.actualDay ?? 0) + 1) % currentDay.data.items.length;
      setCurrentDay((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          actualDay,
        },
      }));
      const res = await updateDiets(userId, currentDay.id, { actualDay });
      console.log(res);
      notification.show("Dzień zakończony");
    } else {
      notification.show("Brak diety");
    }
  };

  useEffect(async (item) => {
    const res = await getLastDiet(userId);
    console.log(res);
    setCurrentDay(res);
  }, []);

  return (
    <Box width="50%" minHeight="600px">
      <BoxHeader
        headerTitle="Dieta na dziś"
        headerButtonTitle="Następny Dzień"
        headerOnClick={() => dietEnd()}
      />
      <Wrapper>
        {currentDay === null ? (
          <LoaderFullPage />
        ) : currentDay === undefined ? (
          <NoDataHeader>Brak diety na dziś</NoDataHeader>
        ) : (
          currentDay.data.items[currentDay.data.actualDay ?? 0].meals.map(
            (item, index, arr) => (
              <CreatorMeal
                key={item.id}
                mealId={item.id}
                isMinHeight={arr.length > 2}
                mealsHeaderTitle={MealsData[index]}
                productsData={item.products}
              />
            )
          )
        )}
      </Wrapper>
    </Box>
  );
};

export default CurrentDiet;

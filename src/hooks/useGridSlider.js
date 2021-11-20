import { useState, useEffect } from "react";

export const useGridSlider = (config) => {
  const [translateX, setTranslateX] = useState(0);
  const [gridConfig, setGridConfig] = useState({});
  const [translateCount, setTranslateCount] = useState(0);
  const [currentViewItems, setCurrentViewItems] = useState(config.viewItems);

  let sortMediaQueries = config.mediaQueries.sort(
    (a, b) => a.maxWidth - b.maxWidth
  );
  useEffect(() => {
    console.log("resize")
    const handleResize = () => {
      let filterMediaQueries = sortMediaQueries.find(
        (item) => window.matchMedia(`(max-width: ${item.maxWidth}px)`).matches
      );
      setCurrentViewItems(
        filterMediaQueries ? filterMediaQueries.viewItems : config.viewItems
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTranslateX(0);
    setTranslateCount(0);
  }, [currentViewItems, config.data.length]);

  useEffect(() => {
    setGridConfig({
      gridWidth: `${
        (config.data.length * 100) / currentViewItems < 100
          ? 100
          : (config.data.length * 100) / currentViewItems
      }%`,
      gridTemplateColumns: `repeat(${config.data.length},1fr)`,
      gridTranslateX: translateX,
      sliderLeftArrowShow: translateX < 0 ? "visible" : "hidden",
      sliderRightArrowShow:
        config.data.length > currentViewItems &&
        config.data.length - currentViewItems - translateCount
          ? "visible"
          : "hidden",
      sliderLeftArrowFunction: () => {
        setTranslateX(translateX + 100 / config.data.length);
        setTranslateCount(translateCount - 1);
      },
      sliderRightArrowFunction: () => {
        setTranslateX(translateX - 100 / config.data.length);
        setTranslateCount(translateCount + 1);
      },
    });
  }, [config.data.length, translateX, currentViewItems]);

  return gridConfig;
};

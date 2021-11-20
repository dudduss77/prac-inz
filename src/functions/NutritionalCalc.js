export const proportionFun = (base, current) => {
  return Math.round((base * current) / 100);
};

export const retNutritional = (
  productWeight = 0,
  pOnHundred = 0,
  cOnHundred = 0,
  fOnHundred = 0
) => {
  let tempP = proportionFun(pOnHundred, productWeight);
  let tempC = proportionFun(cOnHundred, productWeight);
  let tempF = proportionFun(fOnHundred, productWeight);
  return `${
    tempP * 4 + tempC * 4 + tempF * 9
  }kcal ${tempP}B ${tempC}W ${tempF}T`;
};

export const retNutritionalTwo = (
  productWeight = 0,
  pOnHundred = 0,
  cOnHundred = 0,
  fOnHundred = 0
) => {
  let tempP = proportionFun(pOnHundred, productWeight);
  let tempC = proportionFun(cOnHundred, productWeight);
  let tempF = proportionFun(fOnHundred, productWeight);
  return {
    kcalValue: tempP * 4 + tempC * 4 + tempF * 9,
    pValue: tempP,
    cValue: tempC,
    fValue: tempF,
  };
};

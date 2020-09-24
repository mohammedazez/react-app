// Buat tipe action
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const TOTALHARGA = "TOTALHARGA";

export const handlePlus = (item) => {
  return {
    type: INCREMENT,
    item,
  };
};

export const handleMinus = (item) => {
  return {
    type: DECREMENT,
    item,
  };
};

export const harga = (item) => {
  return {
    type: TOTALHARGA,
    item,
  };
};

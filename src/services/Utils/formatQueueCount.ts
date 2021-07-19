import numeral from "numeral";

export const formatQueueCount = (count: number | undefined) => {
  let queueCount;
  if (count > 1) {
    let format = "";
    if (count <= 1000) {
      format = "0a";
    } else {
      format = "0.0a";
    }
    queueCount = `${numeral(count).format(format)} people in the Q`;
  } else if (count === 1) {
    queueCount = "1 person in the Q";
  } else {
    queueCount = "The Q is empty";
  }
  return queueCount;
};

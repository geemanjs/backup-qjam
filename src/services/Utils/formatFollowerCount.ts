import numeral from "numeral";

export const formatFollowerCount = (count: number) => {
  let followers;
  if (count > 0) {
    let format = "";
    if (count <= 1000) {
      format = "0a";
    } else {
      format = "0.0a";
    }
    followers = `${numeral(count).format(format)} followers`;
  } else {
    followers = "No followers";
  }
  return followers;
};

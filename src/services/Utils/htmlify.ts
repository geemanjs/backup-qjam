import anchorme from "anchorme";

export const htmlify = (text: string) => {
  return anchorme({input: text, options: {
    attributes: {"rel": "nofollow noreferrer", "target": "_blank", "class": "qjam-link"}
  }});
};

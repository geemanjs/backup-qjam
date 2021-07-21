
/* eslint-disable */
export const Icon = ({ name, ...other }: any & { name: string }) => (
  <img src={`/img/icons/${name}.png`} {...other} />
);

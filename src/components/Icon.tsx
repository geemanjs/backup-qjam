import {TODO} from "../types";

export const Icon = ({name, ...other}: TODO & { name: string }) => (
  <img src={`/img/icons/${name}.png`} {...other} />
);

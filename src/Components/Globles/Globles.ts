import { Dispatch, SetStateAction } from "react";

export const translate_Plus = (
  set_Transform_Translate: Dispatch<SetStateAction<number>>
) => {
  return set_Transform_Translate((old) => old + 100);
};
export const translate_Minus = (
  set_Transform_Translate: Dispatch<SetStateAction<number>>
) => {
  return set_Transform_Translate((old) => old - 100);
};

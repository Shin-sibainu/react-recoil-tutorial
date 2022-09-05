import { Tasks } from "../types/tasks";
import { atom, selector } from "recoil";

export const addTitleState = atom<Array<Tasks>>({
  key: "addTitleState",
  default: [],
});

export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  get: ({ get }) => {
    const addTitleNumber: Array<Tasks> = get(addTitleState);
    return addTitleNumber?.length || 0;
  },
});

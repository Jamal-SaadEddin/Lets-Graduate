import { create } from "zustand";
import { AbstractComment } from "../../constants/comments";

interface Comments {
  comments: AbstractComment[];
  setComments: (comments: AbstractComment[]) => void;
}

const useCommentsStore = create<Comments>((set) => ({
  comments: [],
  setComments: (comments) => set(() => ({ comments })),
}));

export default useCommentsStore;

export const setComments = (comments: AbstractComment[]) =>
  useCommentsStore.getState().setComments(comments);

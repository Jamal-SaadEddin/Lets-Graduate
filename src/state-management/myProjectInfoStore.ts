import { create } from "zustand";
import { MyProjectInfo } from "../constants/myProject";

interface MyProjectInfoStore {
  myProjectInfo: MyProjectInfo;
  setMyProject: (myProject: MyProjectInfo) => void;
}

const useMyProjectInfoStore = create<MyProjectInfoStore>((set) => ({
  myProjectInfo: { projectTitle: "", projectType: "" },
  setMyProject: (myProjectInfo) => set(() => ({ myProjectInfo })),
}));

export default useMyProjectInfoStore;

export const setMyProjectInfo = (myProjectInfo: MyProjectInfo) =>
  useMyProjectInfoStore.getState().setMyProject(myProjectInfo);

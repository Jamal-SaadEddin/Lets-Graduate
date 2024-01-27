import { create } from "zustand";
import { SupervisedProjectsProjectItem } from "../../constants/availableGroups";

interface MyGroupsStore {
  myGroups: SupervisedProjectsProjectItem[];
  setMyGroups: (myGroups: SupervisedProjectsProjectItem[] | undefined) => void;

  myEvaluatingGroups: SupervisedProjectsProjectItem[];
  setMyEvaluatingGroups: (
    myEvaluatingGroups: SupervisedProjectsProjectItem[] | undefined
  ) => void;
}

const useMyGroupsStore = create<MyGroupsStore>((set) => ({
  myGroups: [],
  setMyGroups: (myGroups) => set(() => ({ myGroups })),

  myEvaluatingGroups: [],
  setMyEvaluatingGroups: (myEvaluatingGroups) =>
    set(() => ({ myEvaluatingGroups })),
}));

export default useMyGroupsStore;

export const setMyGroups = (myGroups: SupervisedProjectsProjectItem[]) =>
  useMyGroupsStore.getState().setMyGroups(myGroups);

export const setMyEvaluatingGroups = (
  myEvaluatingGroups: SupervisedProjectsProjectItem[]
) => useMyGroupsStore.getState().setMyEvaluatingGroups(myEvaluatingGroups);

import { create } from "zustand";
import { NotificationElement } from "../constants/notifications";
import { AvailableGroupsProjectItem } from "../constants/availableGroups";

interface NotificationsStore {
  notification?: NotificationElement;
  setNotification: (notification: NotificationElement) => void;

  notifications: NotificationElement[];
  setNotifications: (notifications: NotificationElement[]) => void;

  mergingGroups:
    | {
        requestingGroup: AvailableGroupsProjectItem;
        requestedGroup: AvailableGroupsProjectItem;
      }
    | undefined;
  setMergingGroups: (mergingGroups: {
    requestingGroup: AvailableGroupsProjectItem;
    requestedGroup: AvailableGroupsProjectItem;
  }) => void;
}

const useNotificationsStore = create<NotificationsStore>((set) => ({
  notification: undefined,
  setNotification: (notification) => set(() => ({ notification })),

  notifications: [],
  setNotifications: (notifications) => set(() => ({ notifications })),

  mergingGroups: undefined,
  setMergingGroups: (mergingGroups) => set(() => ({ mergingGroups })),
}));

export default useNotificationsStore;

export const setNotifications = (notifications: NotificationElement[]) =>
  useNotificationsStore.getState().setNotifications(notifications);

export const setMergingGroups = (mergingGroups: {
  requestingGroup: AvailableGroupsProjectItem;
  requestedGroup: AvailableGroupsProjectItem;
}) => useNotificationsStore.getState().setMergingGroups(mergingGroups);

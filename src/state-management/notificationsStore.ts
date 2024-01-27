import { create } from "zustand";
import { NotificationElement } from "../constants/notifications";

interface NotificationsStore {
  notification?: NotificationElement;
  setNotification: (notification: NotificationElement) => void;

  notifications: NotificationElement[];
  setNotifications: (notifications: NotificationElement[]) => void;
}

const useNotificationsStore = create<NotificationsStore>((set) => ({
  notification: undefined,
  setNotification: (notification) => set(() => ({ notification })),

  notifications: [],
  setNotifications: (notifications) => set(() => ({ notifications })),
}));

export default useNotificationsStore;

export const setNotifications = (notifications: NotificationElement[]) =>
  useNotificationsStore.getState().setNotifications(notifications);

import { create } from "zustand";
import {
  NotificationElement,
  notificationElements,
} from "../../constants/notifications";

interface NotificationStore {
  notification: NotificationElement;
  setNotification: (notification: NotificationElement) => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notification: notificationElements[0],
  setNotification: (notification) => set(() => ({ notification })),
}));

export default useNotificationStore;

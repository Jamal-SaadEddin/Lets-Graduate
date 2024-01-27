import axios from "axios";
import { NotificationElement } from "../constants/notifications";
import { setNotifications } from "../state-management/notificationsStore";

export const getNotifications = async (userId: number) => {
  try {
    const response = await axios.get<NotificationElement[]>(
      `http://localhost:3000/viewNotifications/notifications?userId=${userId}`
    );
    const fetchedNotifications = response.data.sort(
      (a, b) => b.notificationId - a.notificationId
    );
    setNotifications(fetchedNotifications);

    return {};
  } catch (error) {
    console.error("Error fetching Notifications:", error);
    return {};
  }
};

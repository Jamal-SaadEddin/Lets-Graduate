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

export const addSupervisionResponse = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/supervisionResponse/response`,
      body
    );
    const message = response.data.message;

    return message === "Supervision request processed successfully";
  } catch (error) {
    console.error("Error replying to group:", error);
    return false;
  }
};

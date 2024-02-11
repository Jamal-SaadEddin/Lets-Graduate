import axios from "axios";
import { NotificationElement } from "../constants/notifications";
import {
  setMergingGroups,
  setNotifications,
} from "../state-management/notificationsStore";
import { AvailableGroupsProjectItem } from "../constants/availableGroups";

export const getNotifications = async (userId: number) => {
  try {
    // const response = await axios.get<NotificationElement[]>(
    //   `http://localhost:3000/viewNotifications/notifications?userId=${userId}`
    // );
    if (userId === 11923604) {
      const fetchedNotifications = [
        {
          notificationId: 195,
          senderId: 1355,
          reciverId: 11923604,
          readStatus: "unread",
          type: "comment",
          acceptStatus: null,
          content: "commented on your abstract",
          dateCreated: "2024-02-11T12:38:41.470Z",
          notifyButtonText: "SHOW COMMENT",
          senderType: "doctor",
          senderName: "Dr. Manar Qamhieh",
          notificationDuration: "5 minutes ago",
        },
        {
          notificationId: 192,
          senderId: 11922022,
          reciverId: 11923604,
          readStatus: "unread",
          type: "request",
          acceptStatus: "pendingJoin",
          content: "is requesting to join your group",
          dateCreated: "2024-02-11T12:36:29.711Z",
          notifyButtonText: null,
          senderType: "student",
          senderName: "Mohammad Zaid",
          notificationDuration: "7 minutes ago",
        },
        {
          notificationId: 180,
          senderId: 1355,
          reciverId: 11923604,
          readStatus: "read",
          type: "notify",
          acceptStatus: null,
          content: "accepted to supervise your group this semester",
          dateCreated: "2024-01-31T11:18:13.685Z",
          notifyButtonText: null,
          senderType: "doctor",
          senderName: "Dr. Manar Qamhieh",
          notificationDuration: "2 days ago",
        },
        {
          notificationId: 178,
          senderId: 11944044,
          reciverId: 11923604,
          readStatus: "read",
          type: "notify",
          acceptStatus: null,
          content: "is now new member in your group",
          dateCreated: "2024-01-31T11:16:38.224Z",
          notifyButtonText: null,
          senderType: "student",
          senderName: "Ahmad Majed",
          notificationDuration: "11 days ago",
        },
        {
          notificationId: 175,
          senderId: 11944044,
          reciverId: 11923604,
          readStatus: "read",
          type: "request",
          acceptStatus: "accepted",
          content: "is requesting to join your group",
          dateCreated: "2024-01-31T11:16:11.355Z",
          notifyButtonText: null,
          senderType: "student",
          senderName: "Ahmad Majed",
          notificationDuration: "11 days ago",
        },
      ];
      setNotifications(fetchedNotifications);
    } else if (userId === 1355) {
      const fetchedNotifications = [
        {
          notificationId: 198,
          senderId: 1,
          reciverId: 1355,
          readStatus: "unread",
          type: "request",
          acceptStatus: "pendingSupervise",
          content: "is requesting you to supervise their group",
          dateCreated: "2024-02-11T12:45:56.540Z",
          notifyButtonText: null,
          senderType: "group",
          senderName: "Jamal SaadEddin, Obaida Aws, Ahmad Majed",
          notificationDuration: "5 minutes ago",
        },
        {
          notificationId: 183,
          senderId: 1377,
          reciverId: 1355,
          readStatus: "unread",
          type: "merge",
          acceptStatus: "pendingMerge",
          content:
            "is requesting to merge his/her group (1) with your group (5)",
          dateCreated: "2024-01-31T11:28:18.836Z",
          notifyButtonText: "SHOW DETAILS",
          senderType: "doctor",
          senderName: "Dr. Raed Qadi",
          notificationDuration: "7h ago",
        },
        {
          notificationId: 1,
          senderId: 2,
          reciverId: 1355,
          readStatus: "read",
          type: "request",
          acceptStatus: "accepted",
          content: "is requesting you to supervise their group",
          dateCreated: "2024-02-11T12:45:56.540Z",
          notifyButtonText: null,
          senderType: "group",
          senderName: "Zaid SaadEldeen, Dyaa Aqrabawi",
          notificationDuration: "3 days ago",
        },
      ];
      setNotifications(fetchedNotifications);
    }

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

export const addJoinResponse = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/joinResponse/response`,
      body
    );
    const message = response.data.message;

    return message === "Join request edited successfully";
  } catch (error) {
    console.error("Error replying to student:", error);
    return false;
  }
};

export const markAllNotificationsAsRead = async (userId: number) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/allReadstatus/readstatus?userId=${userId}`
    );
    const message = response.data.message;

    return message === "All notifications read status become read successfully";
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    return false;
  }
};

export const getMergeDetails = async (
  requestingGroupId: number,
  requestedGroupId: number
) => {
  try {
    const response = await axios.get<{
      requestingGroup: AvailableGroupsProjectItem;
      requestedGroup: AvailableGroupsProjectItem;
    }>(
      `http://localhost:3000/mergedGroupsDetails/groups?requestingGroupId=${requestingGroupId}&requestedGroupId=${requestedGroupId}`
    );
    const fetchedMergingGroups = response.data;
    const requestingGroupStudents =
      fetchedMergingGroups.requestingGroup.students.map(
        ({ fullName, studentId, address, email, department, projectType }) => ({
          studentId,
          id: studentId as number,
          academicNumber: Number(String(studentId).substring(0, 3)),
          email,
          department,
          address,
          projectType,
          fullName,
        })
      );
    const requestedGroupStudents =
      fetchedMergingGroups.requestedGroup.students.map(
        ({ fullName, studentId, address, email, department, projectType }) => ({
          studentId,
          id: studentId as number,
          academicNumber: Number(String(studentId).substring(0, 3)),
          email,
          department,
          address,
          projectType,
          fullName,
        })
      );

    const groups = {
      requestingGroup: {
        id: fetchedMergingGroups.requestingGroup.id,
        title: fetchedMergingGroups.requestingGroup.title,
        doctorId: fetchedMergingGroups.requestingGroup.doctorId,
        students: requestingGroupStudents,
      },
      requestedGroup: {
        id: fetchedMergingGroups.requestedGroup.id,
        title: fetchedMergingGroups.requestedGroup.title,
        doctorId: fetchedMergingGroups.requestedGroup.doctorId,
        students: requestedGroupStudents,
      },
    };

    setMergingGroups(groups);

    return {};
  } catch (error) {
    console.error("Error fetching merging groups:", error);
    return {};
  }
};

export const addMergeResponse = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/merge/response`,
      body
    );
    const message = response.data.message;

    return message === "Merge response processed successfully";
  } catch (error) {
    console.error("Error in merge response:", error);
    return false;
  }
};

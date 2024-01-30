import axios from "axios";
import { NotificationElement } from "../constants/notifications";
import {
  setMergingGroups,
  setNotifications,
} from "../state-management/notificationsStore";
import { AvailableGroupsProjectItem } from "../constants/availableGroups";

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

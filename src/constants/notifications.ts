export interface NotificationItem {
  id: number;
  title: string;
  content: string;
  readStatus: "read" | "unread";
  acceptStatus: null | "pending" | "accepted" | "rejected";
  dateCreated: string;
}

export const notificationItems: NotificationItem[] = [
  {
    id: 16,
    title: "Dr. Ashraf Armoush",
    content: "accepted to supervise your group this semester",
    readStatus: "unread",
    acceptStatus: null,
    dateCreated: "3h ago",
  },
  {
    id: 12,
    title: "Jamal SaadEddin",
    content: "is requisting to join your group",
    readStatus: "unread",
    acceptStatus: "pending",
    dateCreated: "6h ago",
  },
  {
    id: 15,
    title: "Your Group",
    content:
      "has been merged with another group, check your project info to see your new partners!",
    readStatus: "read",
    acceptStatus: null,
    dateCreated: "11h ago",
  },
  {
    id: 14,
    title: "Projects Committee",
    content: "commented on your abstract",
    readStatus: "read",
    acceptStatus: null,
    dateCreated: "2 days ago",
  },
  {
    id: 13,
    title: "Projects Committee",
    content:
      "accepted your abstract, you can proceed and start working on your project",
    readStatus: "read",
    acceptStatus: null,
    dateCreated: "1 week ago",
  },
];

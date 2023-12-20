export interface NotificationElement {
  id: number;
  sender: string;
  content: string;
  readStatus: "read" | "unread";
  acceptStatus: null | "pending" | "pendingMerge" | "accepted" | "declined";
  dateCreated: string;
}

export const notificationElements: NotificationElement[] = [
  {
    id: 18,
    sender: "Dr. Manar Qamhiee",
    content: "is requesting to merge one of her groups with one of yours",
    readStatus: "unread",
    acceptStatus: "pendingMerge",
    dateCreated: "2h ago",
  },
  {
    id: 17,
    sender: "Jamal SaadEddin, Omar Qaneer, Omar Ammar",
    content: "is requesting you to supervise their group",
    readStatus: "unread",
    acceptStatus: "pending",
    dateCreated: "2h ago",
  },
  {
    id: 16,
    sender: "Dr. Ashraf Armoush",
    content: "accepted to supervise your group this semester",
    readStatus: "read",
    acceptStatus: null,
    dateCreated: "3h ago",
  },
  {
    id: 12,
    sender: "Jamal SaadEddin",
    content: "is requisting to join your group",
    readStatus: "read",
    acceptStatus: "pending",
    dateCreated: "6h ago",
  },
  {
    id: 15,
    sender: "Your Group",
    content: "has been merged with another group",
    readStatus: "read",
    acceptStatus: null,
    dateCreated: "11h ago",
  },
  {
    id: 14,
    sender: "Projects Committee",
    content: "commented on your abstract",
    readStatus: "read",
    acceptStatus: null,
    dateCreated: "2 days ago",
  },
  {
    id: 13,
    sender: "Projects Committee",
    content:
      "accepted your abstract, you can proceed and start working on your project",
    readStatus: "read",
    acceptStatus: null,
    dateCreated: "1 week ago",
  },
];

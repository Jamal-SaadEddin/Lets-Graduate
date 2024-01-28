export interface NotificationElement {
  notificationId: number;
  senderId?: number;
  reciverId?: number;
  readStatus: "read" | "unread";
  type: "comment" | "request" | "notify";
  acceptStatus:
    | null
    | "pendingJoin"
    | "pendingSupervise"
    | "pendingMerge"
    | "accepted"
    | "declined";
  content: string;
  dateCreated: string;
  notifyButtonText: string | null;
  senderType?: string;
  senderName: string;
  notificationDuration?: string;
}

export interface AbstractComment {
  commentId: number;
  doctorId: number;
  projectId: number;
  content: string;
  dateCreated: string;
  sender: string;
  commentDuration: string;
}

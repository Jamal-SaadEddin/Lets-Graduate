import axios from "axios";
import { AbstractComment } from "../constants/comments";
import { setComments } from "../state-management/Student/commentsStore";

export const getAbstractComments = async (projectId?: number) => {
  try {
    // const response = await axios.get<AbstractComment[]>(
    //   `http://localhost:3000/abstractComments/comments?id=${projectId}`
    // );
    // const fetchedComments = response.data;
    setComments([
      {
        commentId: 4,
        doctorId: 1355,
        projectId: 6,
        content: "add more clear text",
        dateCreated: "2024-01-26T14:57:11.865Z",
        sender: "Projects Committee",
        commentDuration: "Just now",
      },
      {
        commentId: 9,
        doctorId: 1355,
        projectId: 6,
        content: "come to my office, we need to discuss more...",
        dateCreated: "2024-01-27T09:31:24.908Z",
        sender: "Projects Committee",
        commentDuration: "3h ago",
      },
      {
        commentId: 10,
        doctorId: 1355,
        projectId: 6,
        content: "follow abstract rules",
        dateCreated: "2024-01-31T11:41:11.110Z",
        sender: "Projects Committee",
        commentDuration: "2 days ago",
      },
      {
        commentId: 12,
        doctorId: 1355,
        projectId: 1,
        content: "add more feutures",
        dateCreated: "2024-02-11T12:38:40.919Z",
        sender: "Dr. Manar Qamhieh",
        commentDuration: "1 week ago",
      },
    ]);

    return {};
  } catch (error) {
    console.error("Error fetching Abstract:", error);
    return {};
  }
};

export const addNewComment = async (body: Object) => {
  try {
    const response = await axios.post<{ message: string }>(
      `http://localhost:3000/createComment/comment`,
      body
    );
    const message = response.data.message;
    // setComments(fetchedComments);

    return message;
  } catch (error) {
    console.error("Error fetching Abstract:", error);
    return false;
  }
};

import axios from "axios";
import { AbstractComment } from "../constants/comments";
import { setComments } from "../state-management/commentsStore";

export const getAbstractComments = async (studentId: number) => {
  try {
    const response = await axios.get<AbstractComment[]>(
      `http://localhost:3000/abstractComments/comments?studentId=${studentId}`
    );
    const fetchedComments = response.data;
    setComments(fetchedComments);

    return {};
  } catch (error) {
    console.error("Error fetching Abstract:", error);
    return {};
  }
};

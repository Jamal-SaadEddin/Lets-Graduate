export interface AbstractComment {
  avatar: string;
  name: string;
  position: string;
  date: string;
  content: string;
}

export const comments: AbstractComment[] = [
  {
    avatar: "/src/assets/avatars/ashraf.jpg",
    position: "Projects Committee",
    name: "Ashraf Armoush",
    date: "5h",
    content: "Please provide more features",
  },
  {
    avatar: "/src/assets/avatars/hanal.jpg",
    position: "Your Supervisor",
    name: "Hanaal Abuzanat",
    date: "19h",
    content:
      "Guys, you need to specify what hardware components you are intending to use, provide more details...",
  },
  {
    avatar: "/src/assets/avatars/ashraf.jpg",
    position: "Projects Committee",
    name: "Ashraf Armoush",
    date: "2 days",
    content: "Please follow abstract template rules....",
  },
];

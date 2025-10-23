export interface TeamMember {
  fullName: string;
  nickname: string;
  dob: string;
  occupation: string;
  favoriteColor: string;
  instagram: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    fullName: "Fadahunsi Oluwabusayo",
    nickname: "Minister B",
    dob: "Nov 25",
    occupation: "Graphic Designer",
    favoriteColor: "#000000",
    instagram: "@ministerbusayo_official",
    photo: "/pictures/01.jpeg", // Replace with actual photo paths
  },
  {
    fullName: "Michael Chen",
    nickname: "Mike",
    dob: "1993-08-22",
    occupation: "Software Engineer",
    favoriteColor: "#4169E1", // Royal Blue
    instagram: "@miketech",
    photo: "/pictures/02.jpeg",
  },
  {
    fullName: "Olivia Williams",
    nickname: "Liv",
    dob: "1994-11-30",
    occupation: "Fashion Designer",
    favoriteColor: "#9370DB", // Medium Purple
    instagram: "@livdesigns",
    photo: "/pictures/03.jpeg",
  },
  // Add more team members as needed
];

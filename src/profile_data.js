const data = [
  {
    id: 1,
    name: "Bozlur Rosid Sagor",
    bio: "full-stack software Engineer",
    skills: ["Python", "JavaScript", "Dart", "Swift"],
    links: [
      { link: "http://www.facebook.com/mbrsagor", name: "Facebook" },
      { link: "http://www.linkedin.com/mbrsagor", name: "Linkedin" },
      { link: "http://www.github.com/mbrsagor", name: "GitHub" },
      { link: "http://www.twitter.com/mbrsagor", name: "Twitter" },
    ],
  },
  {
    id: 2,
    name: "Md. Meg babu",
    bio: "backend software Engineer",
    skills: ["Python", "Node.JS"],
    links: [
      { link: "http://www.facebook.com/mbrsagor", name: "Facebook" },
      { link: "http://www.linkedin.com/mbrsagor", name: "Linkedin" },
      { link: "http://www.github.com/mbrsagor", name: "GitHub" }
    ],
  },
  {
    id: 3,
    name: "Md. Istiak shahorya Ohi",
    bio: "frontend software Engineer",
    skills: ["JavaScript", "React.JS", "Angular.JS"],
    links: [
      { link: "http://www.linkedin.com/mbrsagor", name: "Linkedin" },
      { link: "http://www.github.com/mbrsagor", name: "GitHub" },
      { link: "http://www.twitter.com/mbrsagor", name: "Twitter" },
    ],
  }
];

export const featchData = id => {
    return data.find(d => d.id === id)
};

export default data;

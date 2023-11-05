interface ContentType {
  name: string;
  url: string;
}

const allTypesContent: ContentType[] = [
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Contact Us",
    url: "/snippets",
  },
  {
    name: "Workshops",
    url: "/tags",
  },
  {
    name: "Content",
    url: "/categories",
  },
  
];

export default allTypesContent;

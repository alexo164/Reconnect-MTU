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
    url: "/contact",
  },
  {
    name: "Workshops",
    url: "/workshop",
  },
  {
    name: "Content",
    url: "/content",
  },
  
];

export default allTypesContent;

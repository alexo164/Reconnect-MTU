interface ContentType {
  name: string;
  url: string;
}

const allTypesContent: ContentType[] = [
  {
    name: "Workshops",
    url: "/workshop",
  },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
  {
    name: "Resources",
    url: "/content",
  },
  
];

export default allTypesContent;

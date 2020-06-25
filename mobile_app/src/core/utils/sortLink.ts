import { Url } from "../../models/UrlStateTypes";

const sortLink = (links: Url[], orderType: string) => {
  if (links) {
    return links.sort((a: any, b: any) => {
      if (orderType === "asc") {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        if (b.createdAt > a.createdAt) {
          return 1;
        }
      } else {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (b.createdAt > a.createdAt) {
          return -1;
        }
      }
    });
  }
  return [];
};

export default sortLink;

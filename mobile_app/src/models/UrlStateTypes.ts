export type Url = {
  id: number;
  url: string;
  og_title: string;
  og_description?: string;
  og_image?: string;
  favorite: boolean;
  isnew: boolean;
  tags: string[] | [];
  category_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  category_id: number;
  isnew: 0 | 1;
  count: number;
};
export type Category_url_list = {
  [index: number]: Url[];
};
export type ResponUrlRequest = {
  lists: Url[];
  tag_list: string[];
};

export type ListState = {
  categories: Category[]; //HOME API
  all_category_url_list: Url[]; // All links list
  all_tag_list: string[];
  categories_url_list: Category_url_list;
  favorite_list: Url[];
  categories_tag_list: {
    [key: string]: string[];
  };
  // cur_category_tag_list: string[];
  // cur_category_url_list: Category_url_list; //category links list
  // current_category: number; // 0~14
};

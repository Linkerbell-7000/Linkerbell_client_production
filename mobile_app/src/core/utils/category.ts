export type Categories = {
  //* interface 에서 type으로 바꾸니 에러 해결됨
  // name: string;
  // emoji: string;
  [index: number]: string;
};

export const renderCategoryText = (category_id: number): string => {
  const category_object: Categories = {
    1: "문화·예술",
    2: "자동차",
    3: "비즈니스",
    4: "교육·Job",
    5: "가족",
    6: "금융·부동산",
    7: "음식",
    8: "여행",
    9: "건강",
    10: "취미",
    11: "리빙",
    12: "법률·정치",
    13: "뉴스",
    14: "사회",
    15: "종교",
    16: "컴퓨터·IT",
    17: "과학",
    18: "쇼핑",
    19: "패션",
    20: "스포츠",
    21: "기타",
  };
  return category_object[category_id];
};
export const renderCategoryName = (category_id = 0): string => {
  if (category_id === 0) {
    return "전체글";
  }
  const title = renderCategoryText(category_id);
  return title;
};

export type Category = {
  name: string;
  emoji: string;
};

export type Categories = {
  //* interface 에서 type으로 바꾸니 에러 해결됨
  // name: string;
  // emoji: string;
  [index: number]: Category;
};

export const renderCategoryText = (category_id: number): Category | string => {
  const category_object: Categories = {
    1: { name: "문화·예술", emoji: "🎨" },
    2: { name: "자동차", emoji: "🚙" },
    3: { name: "비즈니스", emoji: "💼" },
    4: { name: "교육·Job", emoji: "📚" },
    5: { name: "가족", emoji: "👨‍👩‍👧‍👦" },
    6: { name: "금융·부동산", emoji: "📈" },
    7: { name: "음식", emoji: "🥘" },
    8: { name: "여행", emoji: "🏝" },
    9: { name: "건강", emoji: "💪" },
    10: { name: "취미", emoji: "🤸‍♀️" },
    11: { name: "리빙", emoji: "🏡" },
    12: { name: "법률·정치", emoji: "⚖️" },
    13: { name: "뉴스", emoji: "🗞️" },
    14: { name: "사회", emoji: "🏙" },
    15: { name: "종교", emoji: "🙏" },
    16: { name: "컴퓨터·IT", emoji: "💻" },
    17: { name: "과학", emoji: "🧪" },
    18: { name: "쇼핑", emoji: "🛍️" },
    19: { name: "패션", emoji: "👗" },
    20: { name: "스포츠", emoji: "⚽️" },
    21: { name: "기타", emoji: "🤯" },
  };
  return category_object[category_id];
};
export const renderCategoryName = (category_id = 0): string => {
  if (category_id === 0) {
    return "전체글";
  }
  const { emoji, name } = renderCategoryText(category_id);
  const title = `${emoji} ${name}`;
  return title;
};

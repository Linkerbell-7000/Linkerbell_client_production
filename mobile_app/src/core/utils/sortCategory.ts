const sortCategory = (array: any) => {
  array.sort((a, b) => {
    if (a.isnew > b.isnew) return -1;
    if (a.isnew < b.isnew) return 1;
    if (a.count > b.count) return -1;
    if (a.count < b.count) return 1;
  });
};

export default sortCategory;

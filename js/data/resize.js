export const resize = (frame, given) => {
  const obj = {};

  const rateWidth = frame.width / given.width;
  const rateHeight = frame.height / given.height;

  if (rateWidth === rateHeight) {
    obj.width = given.width * rateWidth;
    obj.height = given.height * rateHeight;
  } else if (rateWidth > rateHeight) {
    obj.width = given.width * rateHeight;
    obj.height = given.height * rateHeight;
  } else if (rateWidth < rateHeight) {
    obj.width = given.width * rateWidth;
    obj.height = given.height * rateWidth;
  }

  return obj;
};

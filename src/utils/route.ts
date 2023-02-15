export const replaceParams = (path: string, replace: Array<string>): string => {
  const regex = new RegExp(/[:].\w/, "g");
  const matched = path.match(regex);
  if (matched) {
    for (let i = 0; i < matched.length; i++) {
      path = path.replace(matched[i], replace[i]);
    }
  }
  return path;
};

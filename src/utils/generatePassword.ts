export const generatePassword = (letters = 3, numbers = 3, either = 2) => {
  const chars = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!~@#$%^&*()_",
  ];

  return [letters, numbers, either]
    .map(function (len, i) {
      return Array(len)
        .fill(chars[i])
        .map(function (x) {
          return x[Math.floor(Math.random() * x.length)];
        })
        .join("");
    })
    .concat()
    .join("")
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
};

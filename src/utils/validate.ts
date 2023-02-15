import validator from "validator";

export const isValidEmail = (email: string) => {
  return validator.isEmail(email);
};

export const isValidPhoneNumber = (phone: string) => {
  return validator.isMobilePhone(phone, "vi-VN");
};

export const isValidPassword = (password: string) => {
  return validator.isStrongPassword(password);
};

export const isValidUserName = (username: string) => {
  return (
    validator.isLowercase(username) &&
    validator.isLength(username, { max: 30 }) &&
    !/(\s)/.test(username)
  );
};

export const isValidRoleCode = (code: string) => {
  return (
    code &&
    validator.isLowercase(code) &&
    validator.isLength(code, { max: 30 }) &&
    !/(\s)/.test(code)
  );
};

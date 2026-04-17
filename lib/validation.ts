export const nameValidation = {
  required: "Name is required",
  minLength: {
    value: 2,
    message: "Minimum 2 characters",
  },
  maxLength: {
    value: 80,
    message: "Maximum 80 characters",
  },
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: "Invalid email format",
  },
};
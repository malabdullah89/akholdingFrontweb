import * as Yup from "yup";

export const errMessages = {
  required: "Mandatory field",
  requiredSelect: "يرجى إختيار أحد الخيارات",
  privacy: "الموافقة مطلوبة للمتابعة",
  numb: "يرجى إدخال رقم صالح",
  phone: "يرجى إدخال رقم هاتف صالح",
  email: "يرجى إدخال بريد إلكتروني صالح",
  userName: "اسم المستخدم هذا مسجّل مسبقاً",
  onlyLatin: "يسمح فقط بإستخدم الحروف الإنكليزية",
  url: "يسمح بإدخال الروابط فقط",
};

export const validationRules = {
  number: Yup.number().required(),
  string: Yup.string().required("Required"),
  stringOptional: Yup.string(),
  pin: Yup.number().required().min(4),
  select: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  emailOptional: Yup.string().email("Invalid email"),
  repeatable2: Yup.array().of(Yup.number()).min(2, "Select at least two items"),
  repeatable3: Yup.array().of(Yup.number()).min(3, "Select at least three items"),
  array: Yup.array().of(Yup.string().required("Array items must be non-empty strings")),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .nullable()
    .required("Confirm Password is required"),
  // phone: Yup.string().matches(
  //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
  //   "Invalid phone number"
  // ),
  // trueOnly: Yup.boolean().oneOf([true], "Must be true").required(),
  // array: Yup.array().min(1).required(),
  file: Yup.mixed().required("File is required"),
  object: Yup.object().shape({}),
};

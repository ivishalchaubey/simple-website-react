import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  contact: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    })
    .required("Please Enter Your Phone Number"),
  msg: Yup.string().min(150).max(560).required("Please Enter Description"),
});

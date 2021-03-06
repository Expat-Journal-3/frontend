import * as yup from "yup"

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Must include a usename.")
    .max(255, "No more than 255 characters"),
  password: yup
    .string()
    .required("Must include your password")
    .max(255, "No more than 255 characters"),
  description: yup
    .string()
    .required("Must include your password")
    .max(255, "No more than 255 characters"),
  image: yup
    .string()
    .required("Must include your password")
    .max(255, "No more than 255 characters"),
  location: yup
    .string()
    .required("Must include your password")
    .max(255, "No more than 255 characters"),
  title: yup
    .string()
    .required("Must include your password")
    .max(255, "No more than 255 characters"),
})

export default loginSchema;
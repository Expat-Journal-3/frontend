import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    username: Yup
        .string()
        .required("Must include your name.")
        .max(255, "No more than 255 characters"),
    password: Yup
        .required("Must select a size")
        .max(255, "No more than 255 characters"),
})

export default loginSchema;
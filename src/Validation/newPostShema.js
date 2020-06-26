import * as yup from "yup"

const newPostSchema = yup.object().shape({
    title: yup
        .string()
        .required("title required"),

    description: yup
        .string()
        .required("description required"),

    photo_url: yup
        .string()
        
})

export default newPostSchema
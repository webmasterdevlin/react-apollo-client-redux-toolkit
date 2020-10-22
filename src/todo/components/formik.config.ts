import * as yup from "yup";

export const formsInitialValue = {
    list_id: "",
    note: "",
    priority: "",
    title: "",
    reminder: new Date(),
};

export const validationSchema = yup.object({
    list_id: yup.string().nullable().notRequired(),
    note: yup.string().label("Note").min(2).required(),
    priority: yup.string().label("Priority").required(),
    title: yup.string().label("Title").required(),
    reminder: yup.date().label("Reminder").required(),
});

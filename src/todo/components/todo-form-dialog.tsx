import React, { FC } from "react";
import { Form, Formik } from "formik";
import SharedInput from "../../shared/components/shared-input";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    TextField,
} from "@material-ui/core";
import { FetchTodoList_todoList } from "../operations/queries/__generated__/FetchTodoList";
import { useMutation } from "@apollo/client";
import { INSERT_TODO_ITEM } from "../operations/mutations";
import { formsInitialValue, validationSchema } from "./formik.config";

const TodoFormDialog: FC<{
    todoList?: FetchTodoList_todoList;
}> = ({ todoList }) => {
    const [open, setOpen] = React.useState(false);

    const [postTodoItem, { data }] = useMutation(INSERT_TODO_ITEM);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box mb={4}>
            <Formik
                initialValues={formsInitialValue}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {}}
            >
                {(formikProps) => (
                    <Form style={{ padding: "1rem" }}>
                        <pre>{JSON.stringify(formikProps.values, null, 2)}</pre>
                        <div>
                            <Button
                                type="button"
                                disabled={!todoList}
                                variant="outlined"
                                color="primary"
                                onClick={() => {
                                    handleClickOpen();
                                    formikProps.setFieldValue("list_id", todoList?.id);
                                }}
                            >
                                Add new Todo
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">{todoList?.title}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        <div>
                                            <SharedInput formikProps={formikProps} id={"title"} />
                                            <SharedInput formikProps={formikProps} id={"note"} />
                                            <SharedInput
                                                formikProps={formikProps}
                                                id={"priority"}
                                            />
                                        </div>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        type="button"
                                        onClick={handleClose}
                                        variant={"outlined"}
                                        color={"primary"}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        disabled={!formikProps.dirty || !formikProps.isValid}
                                        type="submit"
                                        color={"primary"}
                                        onClick={async () => {
                                            await postTodoItem({
                                                variables: formikProps.values,
                                                update: (cache, { data }) => {
                                                    const cachedId: any = cache.identify(
                                                        data.todoList
                                                    );
                                                    cache.modify({
                                                        fields: {
                                                            todoList: (
                                                                previousData,
                                                                { toReference }
                                                            ) => {
                                                                return [
                                                                    ...previousData,
                                                                    toReference(cachedId),
                                                                ];
                                                            },
                                                        },
                                                    });
                                                },
                                            });
                                        }}
                                    >
                                        Save Todo
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default TodoFormDialog;

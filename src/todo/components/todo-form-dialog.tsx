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

const TodoFormDialog: FC<{
    todoList?: FetchTodoList_todoList;
}> = ({ todoList }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box mb={4}>
            <Formik
                initialValues={{ name: "" }}
                validationSchema={{}}
                onSubmit={(values, actions) => {}}
            >
                {(formikProps) => (
                    <Form style={{ padding: "1rem" }}>
                        <div>
                            <Button
                                disabled={!todoList}
                                variant="outlined"
                                color="primary"
                                onClick={handleClickOpen}
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
                                            <SharedInput formikProps={formikProps} id={"color"} />
                                        </div>
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button
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
                                        onClick={handleClose}
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

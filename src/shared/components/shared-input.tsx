import React, { FC } from "react";
import { Field, FormikProps } from "formik";
import { Box, createStyles, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const SharedInput: FC<{
    formikProps: FormikProps<any>;
    id: string;
}> = ({ formikProps, id }) => {
    const classes = useStyles();

    return (
        <Box mb={2}>
            <Field
                className={classes.field}
                type={"text"}
                label={id.toUpperCase()}
                name={id}
                as={TextField}
                error={formikProps.touched[`${id}`] && formikProps.errors[`${id}`]}
                helperText={formikProps.touched[`${id}`] && formikProps.errors[`${id}`]}
            />
        </Box>
    );
};

export default SharedInput;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        field: {
            marginBottom: "2rem",
            width: "100%",
        },
    })
);

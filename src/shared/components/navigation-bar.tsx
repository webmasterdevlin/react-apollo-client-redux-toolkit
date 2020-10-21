import React from "react";
import { AppBar, Box, Button, createStyles, Theme, Toolbar } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const NavigationBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ marginBottom: "2rem" }}>
            <Toolbar>
                <Box>
                    <Button className={classes.button} color="inherit">
                        Todo
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: "0 0.5rem",
            "&:focus": {
                outline: "none",
            },
        },
    })
);

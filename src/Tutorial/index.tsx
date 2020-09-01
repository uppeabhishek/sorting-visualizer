import React from "react";
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
    useTheme,
    makeStyles
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Info from "./Info";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2)
        },
        closeButton: {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500]
        }
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;

    return (
        <MuiDialogTitle className={classes.root} disableTypography={true} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        flexGrow: 1
    }
});

export default function Tutorial() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = 6;

    return (
        <div>
            <Dialog
                disableBackdropClick
                aria-labelledby="customized-dialog-title"
                fullWidth={true}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Sorting Visualizer
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Info activeStep={activeStep} />
                </DialogContent>
                <DialogActions>
                    <MobileStepper
                        activeStep={activeStep}
                        backButton={
                            <Button disabled={activeStep === 0} size="small" onClick={handleBack}>
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                        className={classes.root}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === steps - 1}
                            >
                                Next
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        position="static"
                        steps={steps}
                        variant="dots"
                    />
                    {activeStep === steps - 1 && <Button onClick={handleClose}>Finish</Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}

import React from 'react'
import {
    Dialog,
    DialogTitle,
    Typography,
    DialogContent,
    Slide,
} from '@material-ui/core'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ children, open, onClose, title }) => {

    return (
        <Dialog
            open={open}
            onBackdropClick={() => onClose()}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            TransitionComponent={Transition}
        >
            <DialogTitle>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <Typography variant="h6" color="textPrimary">
                        {title}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
}

export default Modal


import React from "react";
import Backdrop from "@mui/material/Backdrop";
import PropTypes from 'prop-types'

export default function Modal({children, title, handleClose, isOpen, extraButton=null, extra=null}) {
  const handleCloseModal = ()=>{
    handleClose()
    if(typeof extra==='function'){
      extra()
    }
  }

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
        // open={ctxState?.openModal}
        // onClick={handleClose}
      >
        <div className="modal">
      <h4 className="modal-title">{title}</h4>
        {/* <AddWallet handleClose={handleClose} /> */}
        {children}
        <div className="btn">
            <button onClick={handleCloseModal}>Close</button>
           {extraButton && extraButton()}
          </div>
        </div>
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
    </div>
  );
}


Modal.prototype = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  extra: PropTypes.any,
  extraButton: PropTypes.any
}







// import React from 'react'
// import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
// import PropTypes from 'prop-types'

// export default function Modal({
//   isOpen,
//   handleClose,
//   title,
//   subtitle,
//   children
// }){
//   return (
//     <Dialog
//       style={{background: 'white'}}
//       fullWidth
//       maxWidth='md'
//       open={isOpen}
//       onClose={handleClose}
//       aria-labelledby='max-width-dialog-title'
//     >
//       <DialogTitle id='max-width-dialog-title'>{title}</DialogTitle>
//       <DialogContent>
//         <DialogContentText>{subtitle}</DialogContentText>
//         {children}
//       </DialogContent>
//       <DialogActions>
//         <Button color='primary' onClick={handleClose}>Close</Button>
//       </DialogActions>
//     </Dialog>
//   )
// }






















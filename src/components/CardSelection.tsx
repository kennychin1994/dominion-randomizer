import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type CardSelectionProps = {
  cardName: string;
  onClick: () => void;
};

const CardSelection: React.FC<CardSelectionProps> = ({ cardName, onClick }) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <button className="card-selection-button" onClick={handleOpen}>
        {cardName}
      </button>
      <Dialog className="pop-up" onClose={handleClose} open={open}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <img
          className="card-image"
          src="https://wiki.dominionstrategy.com/images/f/fb/Copper.jpg"
        />
      </Dialog>
    </div>
  );
};

export default CardSelection;

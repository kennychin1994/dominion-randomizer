import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Card } from "./types";

type CardSelectionProps = {
  card: Card;
  onClick: () => void;
};

const CardSelection: React.FC<CardSelectionProps> = ({ card, onClick }) => {
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
        {card.name}
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
        <div className="img-div">
          <img className="card-image" src={card.image} />
        </div>
      </Dialog>
    </div>
  );
};

export default CardSelection;

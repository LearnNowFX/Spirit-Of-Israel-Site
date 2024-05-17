import React, { FC, useState } from "react";
import { useStyles } from "./product.style";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, Typography } from "@mui/material";
import { IProduct } from "src/interfaces/product.interface";
import { getImageLocation } from "src/utilities/image.utility";

interface IProductProps {
  product: IProduct;
}

const ACTION_TEXT = "Buy now";

const Product: FC<IProductProps> = ({ product }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false);

  const image = getImageLocation(product.image);

  const handleProductClick = () => {
    navigate(`/contact`);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div style={styles.container}>
        <img
          src={image}
          alt={product.name}
          style={styles.image}
          onClick={handleOpenPopup}
        />
        <div style={styles.info}>
          <Typography style={styles.title}>{product.name}</Typography>

          <Button sx={styles.action} onClick={handleProductClick}>
            <Typography style={styles.cost}>
              ${product.price} {ACTION_TEXT}
            </Typography>
          </Button>
        </div>
      </div>
      <Dialog
        maxWidth="md"
        open={popupOpen}
        onClose={handleClosePopup}
        PaperProps={{
          style: styles.popup,
        }}
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.95)",
            },
          },
        }}
      >
        <img src={image} alt={product.name} style={styles.image} />
      </Dialog>
    </>
  );
};

export default React.memo(Product);

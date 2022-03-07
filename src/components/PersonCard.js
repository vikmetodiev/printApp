import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import QRCode from "react-qr-code";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 160,
    height: 140,
    marginTop: 15,
    paddingLeft: 15,
  },
}));

const PersonCard = ({ data, printComponent }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <img src={data.picture} alt="person_img" className={classes.image} />
        {printComponent}
      </div>
      <div style={{ marginTop: 15 }}>
        <span>{data.name}, </span>
        <span>{data.last_name},</span>
        <div>{data.middle_name}</div>
        <div style={{ margin: "10px 5px" }}>{data.address}</div>
        <QRCode value={data.qr_value} size={60} />
      </div>
    </>
  );
};

export default PersonCard;

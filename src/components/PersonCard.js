import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import QRCode from "react-qr-code";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 100,
    height: 80,
    marginTop: 15,
    paddingLeft: 15,
  },
  pr_text: {
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: -1,
    marginTop: 25,
  },
  ag_text: {
    textAlign: "start",
    fontWeight: 600,
    left: 15,
    bottom: 10,
    marginTop: 10,
    position: "absolute",
  },
  address_text: {
    padding: "10px 5px",
    wordBreak: "break-word",
  },
  relative: {
    position: "relative",
  },
}));

const PersonCard = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.relative}>
        <img src={data.picture} alt="person_img" className={classes.image} />
        <div className={classes.pr_text}>PR_________</div>
        <div className={classes.ag_text}>AG</div>
      </div>
      <div style={{ marginTop: 15 }}>
        <span>{data.name}, </span>
        <span>{data.last_name},</span>
        <div>{data.middle_name}</div>
        <div className={classes.address_text}>{data.address}</div>
        <QRCode value={data.qr_value} size={60} />
      </div>
    </>
  );
};

export default PersonCard;

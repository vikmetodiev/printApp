import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import QRCode from "react-qr-code";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 120,
    height: 100,
    marginTop: 15,
    paddingLeft: 15,
  },
  pr_text: {
    textAlign: "start",
    marginLeft: 45,
    fontWeight: 600,
    letterSpacing: -1,
    marginTop: 25,
  },
  ag_text: {
    textAlign: "start",
    fontWeight: 600,
    paddingLeft: 15,
  },
  address_text: {
    margin: "10px 5px",
    wordBreak: "break-all",
  },
}));

const PersonCard = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <div>
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

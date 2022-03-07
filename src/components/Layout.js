import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PersonCard from "./PersonCard";
import data from "../dummyData";
import ReactToPrint from "react-to-print";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 0,
    margin: 0,
    textAlign: "center",
    color: "black",
    height: "207.87px",
    width: "321.26px",
    display: "flex",
    border: "0.2px solid rgb(235, 227, 227)",
  },
}));

const Layout = () => {
  const classes = useStyles();
  const itemsRef = useRef();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} ref={itemsRef} style={{ marginBottom: 15 }}>
        {data.map((personData, index) => {
          return (
            <Grid item xs={3} style={{ paddingBottom: 0 }} key={personData.id}>
              <Paper className={classes.paper}>
                <PersonCard data={personData} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => itemsRef.current}
        pageStyle="@page { size: landscape } @media print { body { background: red} }"
      />
    </div>
  );
};

export default Layout;

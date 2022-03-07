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
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "207.87px",
    width: "321.26px",
    display: "flex",
    border: "0.2px solid rgb(235, 227, 227)",
    borderRadius: 10,
  },
}));

const Layout = () => {
  const classes = useStyles();
  const itemsRef = useRef([]);

  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, data.length);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {data.map((personData, index) => {
          return (
            <Grid item xs={2} style={{ paddingBottom: 0 }} key={personData.id}>
              <Paper
                className={classes.paper}
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <PersonCard
                  data={personData}
                  printComponent={
                    <ReactToPrint
                      trigger={() => <button>Print this out!</button>}
                      content={() => itemsRef.current[index]}
                      pageStyle="@page { size: 3.34646in 5.11811in }"
                    />
                  }
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Layout;

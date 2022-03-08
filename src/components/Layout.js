import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PersonCard from "./PersonCard";
import data from "../dummyData";
import ReactToPrint from "react-to-print";
import Paper from "@material-ui/core/Paper";
import "./Layout.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    border: "0.2px solid black",
    borderRadius: 0,
  },
  grid_padding_bottom: {
    paddingBottom: 0,
  },
  grid_margin_bottom: {
    marginBottom: 15,
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const itemsRef = useRef();

  return (
    <div className={classes.root}>
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open full-screen dialog
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Grid
            container
            spacing={0}
            ref={itemsRef}
            className={classes.grid_margin_bottom}
          >
            {data.map((personData, index) => {
              return (
                <>
                  <Grid
                    item
                    xs={3}
                    key={personData.id}
                    className={classes.grid_padding_bottom}
                  >
                    <Paper className={classes.paper}>
                      <PersonCard data={personData} />
                    </Paper>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => itemsRef.current}
            // pageStyle="@page { size: landscape } @media print { body { background: red} }"
          />
        </Dialog>
      </div>
    </div>
  );
};

export default Layout;

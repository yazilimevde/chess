import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#228B22"
  },
  menuButton: {
    marginRight: 2
  },
  title: { marginRight: 20 },
  navLink: { textDecoration: "none", color: "white" },
  bar: { backgroundColor: "green" }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/home" className={classes.navLink}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.navLink}>
              Chess vs yourself
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/demo2" className={classes.navLink}>
              Chess vs Computer
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/about" className={classes.navLink}>
              TicTacToe
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/contact" className={classes.navLink}>
              FlipGame
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

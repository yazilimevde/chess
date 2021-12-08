import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
export default function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto"
  };
  const image = { paddingTop: 20, height: 300, width: 400 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" place-self="center">
          <Avatar style={avatarStyle}>
            <CameraIcon />
          </Avatar>
          <h1>
            This is our ambitious project of gathering amazing games for all
            ages, creating an entertaining app for old ages, whily also trying
            to involve the young generation in the games of old. Start playing
            :D
          </h1>
        </Grid>
        <img
          style={image}
          src="https://miro.medium.com/max/1400/1*2UlcPv-MWtoinEljUr3yGA.jpeg"
          alt="entertainment"
        />
      </Paper>
    </Grid>
  );
}

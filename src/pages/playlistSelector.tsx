import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url('./yas.png')`,
    backgroundSize: "100% 100%",
    margin: "-8px",
    padding: "0",
  },
  select: {
    width: "300px",
  },
}));

function playlistSelectorPage() {
  const playlists = [
    { value: "default", label: "SELECT YOUR PLAYLIST" },
    {
      value: "Taylor Swift",
      label: "Coven Girl music",
    },
    {
      value: "Weeaboo",
      label: "Naruto rawr xD",
    },
    {
      value: "My Chemical Romance",
      label: "Emo Dreams",
    },
    {
      value: "TWICE",
      label: "Just like TT",
    },
  ];
  const classes = useStyles();
  const [playlist, setPlaylist] = React.useState("default");
  const handlePlaylist = (event: any) => {
    setPlaylist(event.target.value);
  };

  return (
    <body id="wrapper" className={classes.root}>
      <div style={{ backgroundColor: "white" }}>
        <TextField
          id="outlined-select-currency"
          select
          value={playlist}
          onChange={handlePlaylist}
          variant="outlined"
        >
          {playlists.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </body>
  );
}

export default playlistSelectorPage;

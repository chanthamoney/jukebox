import { Avatar, Link, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    backgroundColor: "#CFE1C9",
    backgroundSize: "100% 100%",
  },
  pageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  columnOne: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: "5%",
    flexWrap: "nowrap",
    width: "40%",
  },
  profilePic: {
    variant: "square",
    width: "200px",
    height: "200px",
  },
  link: {
    height: "2%",
    paddingTop: "3%",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  info: {
    padding: "10px",
    margin: "5px",
  },
}));

interface ProfileProps {
  userName: string | undefined;
}

const ProfilePage = ({ userName }: ProfileProps) => {
  const styles = useStyles();

  function stubForDbCallToGetProfilePic(userName: string | undefined) {
    // axios.get profile pic
    const profilePic = userName ? "" : "./defaultProfile.png";
    return profilePic;
  }

  function stubForApiCallToSpotify(userName: string | undefined) {
    // axios.get song stuff
    return "so sad so sexy by Lykke Li";
  }

  return (
    <body id="wrapper" className={styles.root}>
      <div>
        <Layout title={userName + " Profile"}>
          <div className={styles.pageContainer}>
            <h1 className={styles.columnOne}>Profile</h1>
            <h1 className={styles.columnTwo}>About You</h1>
          </div>

          <div className={styles.pageContainer}>
            <div className={styles.columnOne}>
              <Avatar
                variant="square"
                className={styles.profilePic}
                src={stubForDbCallToGetProfilePic(userName)}
              />

              <div className={styles.link}>
                <Link href="/genreMap">
                  <a>Select a Playlist to Explore Your Genre Map</a>
                </Link>
              </div>
            </div>

            <div className={styles.columnTwo}>
              <Paper className={styles.info} elevation={0}>
                {userName ? userName : "Name Not Known"}
              </Paper>
              <Paper className={styles.info} elevation={0}>
                Last Song Listened To:{" "}
                <Paper className={styles.info}>
                  {stubForApiCallToSpotify(userName)}
                </Paper>
              </Paper>
            </div>
          </div>
        </Layout>
      </div>
    </body>
  );
};

export default ProfilePage;

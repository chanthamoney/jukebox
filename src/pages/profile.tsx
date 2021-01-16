import { Avatar, Link, makeStyles } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";

const useStyles = makeStyles(() => ({
  columnOne: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  profilePic: {
    variant: "square",
    width: "200px",
    height: "200px",
  },

  link: {
    width: "15%",
    height: "2%",
    paddingTop: "3%",
  },
  columnTwo: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
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

  return (
    <div>
      <Layout title={userName + " Profile"}>
        <h1>Profile</h1>

        <div className={styles.columnOne}>
          <Avatar
            variant="square"
            className={styles.profilePic}
            src={stubForDbCallToGetProfilePic(userName)}
          />

          <div className={styles.link}>
            <Link href="/genreMap">
              <a>Explore Your Genre Map</a>
            </Link>
          </div>
        </div>
        <div className={styles.columnTwo}>please be next to image</div>
      </Layout>
    </div>
  );
};

export default ProfilePage;

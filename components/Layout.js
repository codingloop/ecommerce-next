import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "../utils/styles";

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Ecommerce Portal</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Ecommerce Portal</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next-Ecommerce</Typography>
      </footer>
    </div>
  );
}

export default Layout;

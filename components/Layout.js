import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Ecommerce Portal</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Ecommerse Portal</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;

import { Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/store";
import { NextLink } from "next/link";

function CartScreen() {
  const { state } = useContext(Store);
  const { cartItems } = state;

  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <NextLink href="/">Go Shopping</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            Table of cart items
          </Grid>
          <Grid md={3} xs={12}>
            Cart actions
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default CartScreen;

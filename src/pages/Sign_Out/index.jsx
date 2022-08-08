import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "0px 0px 0px 0px",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Sign = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        backgroundColor: '#fff'
      }}>
      <Box sx={{ flexGrow: 1, pt: '10%' }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Item sx={{ textAlign: { lg: 'right', md: "right", sm: "right", xs: "left", background: "transparent" } }}><b>Username</b></Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Item sx={{ textAlign: 'left', background: "transparent" }}><input style={{ fontSize: "20px" }} placeholder='Username' /></Item>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Item sx={{ textAlign: { lg: 'right', md: "right", sm: "right", xs: "left", background: "transparent" } }}><b>Password</b></Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Item sx={{ textAlign: 'left', background: "transparent" }}><input style={{ fontSize: "20px" }} placeholder='Password' /></Item>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Item sx={{ textAlign: { lg: 'right', md: "right", sm: "right", xs: "left", background: "transparent" }, marginTop: "-10px" }}></Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Item sx={{ textAlign: 'left', background: "transparent" }}><b><Checkbox style={{}}{...label} /></b>Remember me</Item>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Item sx={{ textAlign: { lg: 'right', md: "right", sm: "right", xs: "left", background: "transparent" }, marginTop: "-10px" }}></Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Item sx={{ textAlign: 'left', background: "transparent" }}><button style={{ backgroundColor: "white", marginTop: "-40px" }}>Sign in</button></Item>
          </Grid>
        </Grid>
      </Box>
    </Box >
  )
}

export default Sign
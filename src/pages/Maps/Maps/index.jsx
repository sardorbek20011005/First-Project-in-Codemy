import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Map2 from '../Map2'
import Map3 from '../Map3'
import Map4 from '../Map4'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));
export default () => {
  
  return (
    <Container maxWidth={'lg'} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Typography variant='h4' sx={{
              fontSize: { lg: "30px", md: "24px", sm: "24px", xs: "24px" }
            }}>
              Maps
            </Typography>
            <Typography variant='h6' sx={{
              fontWeight: "normal",
            }}>
              Credit goes to <b style={{ color: "blue", fontWeight: "normal" }}>JQVMap</b>
            </Typography>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Box sx={{
              border: "1px solid #ddd"
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>World</Typography>
              </Box>
              <Box>
               <Map3/>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Box sx={{
              border: "1px solid #ddd"
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>United States of America</Typography>
              </Box>
              <Box >
                <Map2/>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Box sx={{
              border: "1px solid #ddd"
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>Asia</Typography>
              </Box>
              <Box >
                <Map4/>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Box sx={{
              border: "1px solid #ddd"
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>Europe</Typography>
              </Box>
              <Box sx={{
              }}>
                <Map3/>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none",
           
          }}>
            <Box sx={{
              border: "1px solid #ddd",
             
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>Australia</Typography>
              </Box>
              <Box sx={{
              }}> <Map4/></Box>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Box sx={{
              border: "1px solid #ddd"
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>Africa</Typography>
              </Box>
              <Box sx={{
               
              }}> <Map4/></Box>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Box sx={{
              border: "1px solid #ddd"
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>North America</Typography>
              </Box>
              <Box sx={{
                
              }}> <Map4/></Box>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Item sx={{
            boxShadow: "none",
            background: "none"
          }}>
            <Box sx={{
              border: "1px solid #ddd"
            }}>
              <Box sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                pt: "1%",
                pb: "1%",
                borderBottom: "1px solid #ddd"
              }}>
                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>South America</Typography>
              </Box>
              <Box sx={{
                height: "50vh"
              }}> <Map4/></Box>
            </Box>
          </Item>
        </Grid>
      </Grid>

    </Container>

  );
};


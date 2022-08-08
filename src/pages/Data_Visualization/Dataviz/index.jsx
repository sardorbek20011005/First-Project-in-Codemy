import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { border } from '@mui/system';
import P1 from '../p1'
import P2 from '../p2'
import P3 from '../p3'
import P4 from '../p4'
import D1 from '../diagram1'
import D2 from '../diagram2/demo'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));
export default () => {
    return (
        <Container sx={{ width: '100%', }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item lg={12}>
                    <Item sx={{
                        textAlign: "left",
                        boxShadow: "none"
                    }}>
                        <Typography sx={{
                            fontSize: "30px"
                        }}>
                            Data Visualization
                        </Typography>
                        <Typography>
                            Credit goes to <b style={{ color: "blue", fontWeight: "normal" }}> chartjs.org</b>
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{
                        textAlign: "left",
                        backgroundColor: "#d9edf7",
                        border: "1px solid #bce8f",
                        boxShadow: "none",
                        p: "1.5%"
                    }}>
                        <Typography sx={{
                            color: "#31708f",

                        }}>
                            Pie Chart & Doughnut Chart
                        </Typography>
                    </Item>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Container sx={{
                        width: {lg:"90%",md:"110%",sm:"100%",xs:"80%"}
                    }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item lg={6}  md={6} sm={6} xs={12} >
                                <Item sx={{
                                    height:"100%",
                                    boxShadow:"none",
                                    background:"none"
                                }}>
                                    <P1 />
                                    <Typography sx={{
                                        fontWeight: "normal",
                                        pt: {lg:"40%",md:"60%",sm:"60%",xs:"55%"},
                                        fontSize: {lg:"18px",md:"20px",sm:"20px",xs:"24px"}
                                    }}>
                                        Pie Chart
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:"15px"
                                    }}>
                                        Doughnut Chart
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item lg={6}  md={6} sm={6} xs={12}>
                                <Item sx={{
                                    height: "100%",
                                    boxShadow:"none",
                                    background:"none"
                                }}>
                                    <P2 />
                                    <Typography sx={{
                                        fontWeight: "normal",
                                        pt: {lg:"40%",md:"60%",sm:"60%",xs:"55%"},
                                        fontSize: {lg:"18px",md:"20px",sm:"20px",xs:"24px"}
                                    }}>
                                        Doughnut Chart
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:"15px"
                                    }}>
                                        Sodales orci aliquet
                                    </Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Container sx={{
                        width: {lg:"90%",md:"110%",sm:"100%",xs:"80%"}
                    }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item lg={6}  md={6} sm={6} xs={12}>
                                <Item sx={{
                                    height: "100%",
                                    boxShadow:"none",
                                    background:"none"
                                }} >
                                    <P3 />
                                    <Typography sx={{
                                        fontWeight: "normal",
                                        pt: {lg:"40%",md:"60%",sm:"60%",xs:"55%"},
                                        fontSize: {lg:"18px",md:"20px",sm:"20px",xs:"24px"}
                                    }}>
                                        Radar Chart
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:"15px"
                                    }}>
                                        Lorem sed
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item lg={6}  md={6} sm={6} xs={12} >
                                <Item sx={{
                                    height: "100%",
                                    boxShadow:"none",
                                    background:"none"
                                }}>
                                    <P4 />
                                    <Typography sx={{
                                        fontWeight: "normal",
                                        pt: {lg:"40%",md:"60%",sm:"60%",xs:"55%"},
                                        fontSize: {lg:"18px",md:"20px",sm:"20px",xs:"24px"}
                                    }}>
                                        Polar Area Chart
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:"15px"
                                    }}>
                                        Curabitur
                                    </Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item lg={6} xs={12} sm={6} md={6}>
                    <Item sx={{
                         boxShadow:"none",
                         background:"none"
                    }}>
                        <Box sx={{
                            border: "1px solid #d6e9c6",
                           
                        }}>
                            <Box sx={{
                                width: "100%",
                                backgroundColor: "#dff0d8",
                                pt: "1%",
                                pb: "1%",
                                borderBottom: "1px solid #d6e9c6",
                                textAlign:"left"
                                
                            }}>
                                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" } }}>Line chart</Typography>
                            </Box>
                            <Box sx={{
                               
                            }}>
                                <D1/>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item lg={6} xs={12} sm={6} md={6}>
                    <Item sx={{
                         boxShadow:"none",
                         background:"none"
                    }}>
                    <Box sx={{
                            border: "1px solid #428bca"
                        }}>
                            <Box sx={{
                                width: "100%",
                                backgroundColor: "#428bca",
                                pt: "1%",
                                pb: "1%",
                                borderBottom: "1px solid #428bca",
                                textAlign:"left"
                            }}>
                                <Typography variant='h6' sx={{ fontWeight: "normal", fontSize: { lg: "20px", md: "16px", sm: "16px", xs: "16px" },color:"white" }}>Bar chart</Typography>
                            </Box>
                            <Box >
                                <D2/>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}


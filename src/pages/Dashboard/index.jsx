import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Alert from '@mui/material/Alert';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Container } from '@mui/material/'
import { Area, AreaChart, linearGradient, ResponsiveContainer, PieChart, Pie, BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts'

import { DataGrid } from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows1 = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.blue,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('First name', "Last name", "Username"),
  createData('1            John', '	Smith', '	@js'),
  createData('2 Bill', '	Jones', '	@bj'),
  createData('3  Mary', '	James', '@mj')];

const data = [
  {
    "name": "January ",
    "uv": 50,
    "pv": 40,
    "amt": 40
  },
  {
    "name": "February",
    "uv": 67,
    "pv": 19,
    "amt": 20
  },
  {
    "name": "March",
    "uv": 75,
    "pv": 86,
    "amt": 80
  },
  {
    "name": "April",
    "uv": 63,
    "pv": 54,
    "amt": 50
  },
  {
    "name": "May",
    "uv": 30,
    "pv": 90,
    "amt": 90
  },
  {
    "name": "June",
    "uv": 59,
    "pv": 79,
    "amt": 80
  },
  {
    "name": "July",
    "uv": 60,
    "pv": 44,
    "amt": 50
  }
]


export default () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item sx={{ ml: { sm: "2%", lg: "5%", md: "1%", xs: "5%" }, mr: "2%", borderRadius: "0px", textAlign: "left", bgcolor: "#F5F5F5", boxShadow: "none" }}><b style={{ color: "blue" }}>Admin Panel / Dashbord</b> / Overview /<b style={{ color: "blue" }}>Sign In Form</b></Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{ ml: { xs: "3%", md: "1%", sm: "1%" }, color: "black", textAlign: "left", boxShadow: "none", fontSize: { xs: "165%" } }}>Dashbord</Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{ ml: { xs: "-0%", sm: "1.5%", md: "1%" }, color: "#333333", textAlign: "left", boxShadow: "none", fontSize: { xs: "100%", sm: "88%", md: "110%" } }}>Dashboard is free admin template for everyone. Credits go to<b style={{ color: "blue" }}> Chart JS, Bootstrap,</b> and <b style={{ color: "blue" }}>JQVMap. </b>templatemo provides <b style={{ color: "blue" }}> free website templates </b>that can be used for any purpose. Morbi id nisi enim. Ut congue interdum pharetra facilisi. Aenean consectetur pellentesque mauris nec ornare. Nam tortor just, condimentum.</Item>
        </Grid>


        <Grid item md={4} xs={6} lg={4} sm={4}>
          <Item sx={{ bgcolor: "#428BCA", color: "white", borderRadius: "0px", width: { md: "20%", sm: "25%", xs: "30%" }, textAlign: "left", ml: "5%" }}>Home
          </Item>
        </Grid>
        <Grid item md={4} xs={6} lg={4} sm={4}>
          <Item sx={{ bgcolor: "#428BCA", color: "white", borderRadius: "0px", width: { md: "20%", sm: "25%", xs: "30%" }, ml: { md: "-70%", sm: "-65%", xs: "-60%" }, textAlign: "left" }}>Portfolio </Item>
        </Grid>
        <Grid item md={4} xs={6} lg={4} sm={4}>
          <Item sx={{ bgcolor: "#428BCA", color: "white", borderRadius: "0px", width: { md: "20%", sm: "25%", xs: "50%" }, ml: { lg: "-145%", md: "-145%", sm: "-135%", xs: "0px" }, textAlign: "left" }}> Messeges   </Item>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} sm={6} md={6} lg={6}>

          <Grid container spacing={2} item md={12} sm={12} lg={12} sx={{ pt: "8%" }}>
            <Stack sx={{ width: '100%', ml: "5%" }} spacing={2}>
              <Alert sx={{ borderRadius: "0px", bgcolor: "#DFF0D8", color: "#3C765F", height: { xs: "8.8vh", sm: "6vh", md: "7vh" }, fontSize: { xs: "", sm: "70%", md: "90%" } }} variant="outlined" severity="">
                Success! Maecenas non lorem sed elit molestie tincidunt.

              </Alert>
              <Alert sx={{ borderRadius: "0px", bgcolor: "#D9EDF7", color: "#31708F", height: { xs: "9vh", sm: "8vh", md: "11vh" }, fontSize: { xs: "", sm: "70%", md: "90%" } }} variant="outlined" severity="">
                Sed in molestie lectus. Curabitur non est neque. Maecenas id luctus ligula.

              </Alert>
              <Alert sx={{ borderRadius: "0px", bgcolor: "#FCF8E3", color: "#8A6D3B",height: { xs: "9vh", sm: "7.5vh", md: "11vh" }, fontSize: { xs: "", sm: "70%", md: "90%" } }} variant="outlined" severity="">
                Vestibulum tincidunt libero urna, ut dignissim purus accumsan nec.
              </Alert>
              <Alert sx={{ borderRadius: "0px", bgcolor: "#F2DEDE", color: "#A94442", height: { xs: "9vh", sm: "6vh", md: "11vh" }, fontSize: { xs: "", sm: "70%", md: "90%" } }} variant="outlined" severity="">
                Mauris dignissim ante eu arcu ultricies, at sodales orci aliquet.
              </Alert>
            </Stack>
          </Grid>
        </Grid>


        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid container spacing={1} item xs={12} md={10} lg={10} sm={12} sx={{ pt: "7%" }}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert icon={false} severity="success" sx={{ bgcolor: "#428BCA", color: "white" }}>
                <b style={{ fontSize: "115%" }}>Latest Data</b> <br />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis alias blanditiis modi? Quam harum nihil ipsa sed vitae itaque commodi possimus autem. Ullam quas .
              </Alert>
              <Alert icon={false} severity="success" sx={{ bgcolor: "##F1F1F1" }}>
                <b style={{ fontSize: "115%" }}>Older Data</b><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quisquam adipisci cupiditate eos, possimus blanditiis laboriosam sequi, atque quo officia at fugit .
              </Alert> <Item sx={{ display: "flex",padding:"0",borderRadius:"0px",bgcolor:"#F5F5F5" }}>
                <Alert icon={false} severity="success" sx={{borderRadius:"0px", bgcolor: "#5CB85C", width: "20%" }}>
                </Alert> 
                <Alert icon={false} severity="success" sx={{borderRadius:"0px", bgcolor: "#F2B968", width: "10%",ml:"-2%" }}>
                </Alert>
                <Alert icon={false} severity="success" sx={{borderRadius:"0px", bgcolor: "#D9534F", width:"3%",ml:"-1%"}}>
          </Alert>
                
                </Item>
                <Item sx={{padding:"0",borderRadius:"0px",bgcolor:"#F5F5F5"}}>
                <Alert icon={false} severity="success" sx={{borderRadius:"0px", bgcolor: "#5E9CD2",width:"40%" }}>
                </Alert></Item>
            </Stack>
          </Grid>
        </Grid>
      </Grid>


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16} md={8} sm={8}>
            <Grid sx={{ ml: '3%',mt:{md:"5%",xs:"5%",sm:"-10%"}}}>
              <Box sx={{ width: '100%', height: '100%', border: '1px solid #DFF0D8' }}>
                <Box pl='11%' sx={{ width: '89%', backgroundColor: '#DFF0D8', height:{md:"30px",xs:"30px",sm:"80px"},mt:"3%" }}><Typography sx={{ fontSize: '30px' }}>Line Chart</Typography></Box>
                <ResponsiveContainer width='100%' height='100%' aspect={2} >
                  <AreaChart data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F8F8F8" />
                        <stop offset="95%" stopColor="#F8F8F8" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E4ECEF" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#E4ECEF" stopOpacity={0.5} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#DCDCDC" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#97BBCD" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Grid>

          </Grid>







          <Grid item xs={12} md={8} sm={8} sx={{ mt: { md: "2.5%", xs: "20%", sm: "2%" }, }}>
            <TableContainer component={Paper} sx={{ width: { md: "95%", sm: "95%" } }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" >
                <TableHead sx={{ bgcolor: "#428BCA" }}>
                  <TableRow >
                    <StyledTableCell sx={{ fontSize: "115%" }}>USER Table</StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" >
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.calories}</StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                      <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>




      <Grid container spacing={2} columns={16}>
        <Grid item xs={16} md={8} sm={8} sx={{ mt: { md: "3%", xs: "5%", sm: "0%" } }}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows1}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Grid>
        <Grid item xs={16} md={8} sm={8} sx={{ mt: { md: "3%", xs: "5%" ,sm:"3%"} ,ml:{xs:"1%",sm:"0%",md:"0%"}}}>
          <Accordion sx={{ borderRadius: "none", width: "90%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}

              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ borderRadius: "none" }}>
              <Typography>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "none", width: "90%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "none", width: "90%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Grid>
      </Grid>

    </Box>
  )
}

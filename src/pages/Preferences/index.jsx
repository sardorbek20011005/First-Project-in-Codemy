import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, InputBase } from '@mui/material';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
}));



const names = [
    'Charts',
    'Graphs',
    'Forms',
    'Icons',
    'Responsive',
];





export default function RowAndColumnSpacing() {

    const [personName, setPersonName] = React.useState([]);
    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };



    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };



    return (
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={10} sm={10} md={10}>
                    <Item sx={{ textAlign: 'left', color: '#333' }}>
                        <Typography variant='h5'>
                            Preferences
                        </Typography>
                    </Item>
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body2'>
                            Here goes another form and form controls.
                        </Typography>
                    </Item>
                </Grid>

                <Grid item xs={11} sm={11.5} md={5.8} lg={5.2}>
                    <Item sx={{ textAlign: 'left', }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333' }} >
                            First Name
                        </Typography>
                        <input type="text" class="form-control" id="firstName" value="John" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #ccc',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)'
                        }} />
                    </Item>
                </Grid>
                <Grid item xs={11} sm={11.5} md={5.8} lg={5.2}>
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333' }}>
                            Last Name
                        </Typography>
                        <input type="text" class="form-control" id="lastName" value="Henry" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #ccc',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
                        }} />
                    </Item>
                </Grid>
                <Grid item xs={12} >
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333' }}>
                            Username
                        </Typography>
                    </Item>
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1'>
                            @admin
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333' }}>
                            Email address
                        </Typography>
                    </Item>
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1'>
                            admin@company.com
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={11} sm={11.5} md={11.6} lg={10.4} >
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333' }}>
                            Current Password
                        </Typography>
                        <input type="password" class="form-control" id="currentPassword" value="********" disabled="" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #ccc',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)', cursor: 'not-allowed',
                            backgroundColor: '#eee',
                            opacity: '1'
                        }} />
                    </Item>
                </Grid>

                <Grid item xs={11} sm={11.5} md={5.8} lg={5.2}>
                    <Item sx={{ textAlign: 'left', }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333' }} >
                            New Password
                        </Typography>
                        <input type="password" class="form-control" id="password" placeholder="New Password" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #ccc',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)'
                        }} />
                    </Item>
                </Grid>
                <Grid item xs={11} sm={11.5} md={5.8} lg={5.2}>
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333' }}>
                            Confirm New Password
                        </Typography>
                        <input type="password" class="form-control" id="password_2" placeholder="Confirm New Password" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #ccc',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
                        }} />
                    </Item>
                </Grid>
                <Grid item xs={11} sm={11.5} md={11.6} lg={10.4}>
                    <Item>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#3c763d', textAlign: 'left' }}>
                            Input with success
                        </Typography>
                        <input type="text" class="form-control" id="inputSuccess" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #3c763d',
                            borderColor: '#3c763d',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
                        }} ></input>


                    </Item>
                </Grid>
                <Grid item xs={11} sm={11.5} md={11.6} lg={10.4}>
                    <Item>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#8a6d3b', textAlign: 'left' }}>
                            Input with warning
                        </Typography>
                        <input type="text" class="form-control" id="inputSuccess" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #8a6d3b',
                            borderColor: '#8a6d3b',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
                        }} ></input>
                    </Item>
                </Grid>
                <Grid item xs={11} sm={11.5} md={11.6} lg={10.4}>
                    <Item>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#a94442', textAlign: 'left' }}>
                            Input with error
                        </Typography>
                        <input type="text" class="form-control" id="inputSuccess" style={{
                            width: '100%',
                            padding: '8px 12px',
                            fontSize: '14px',
                            color: '#555',
                            border: '1px solid #a94442',
                            borderColor: '#a94442',
                            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
                        }} ></input>
                    </Item>
                </Grid>
                <Grid item xs={11} sm={11.5} md={11.6} lg={10.4}>
                    <Item>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333', textAlign: 'left' }}>
                            Notes
                        </Typography>
                        <textarea class="form-control" rows="3" id="notes" style={{
                            width: '100%',
                            height: '140px',
                            padding: '8px 12px',
                        }} />
                    </Item>
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={12}>
                    <Item sx={{}}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item lg={10} sm={12} xs={12}>

                                <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333', textAlign: 'left' }}>
                                    Single selection control
                                </Typography>
                                <FormControl sx={{ minWidth: '100%', }} size="small">
                                    <InputLabel id="demo-select-small" />
                                    <Select sx={{ borderRadius: '0px', textAlign: 'left', border: '1px solid #ccc', }}
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={age}
                                        // label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">

                                        </MenuItem>
                                        <MenuItem value={10}>HTML</MenuItem>
                                        <MenuItem value={20}>CSS</MenuItem>
                                        <MenuItem value={30}>JavaScript</MenuItem>
                                        <MenuItem value={40}>Bootstrap</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item lg={10} sm={12} xs={12}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333', textAlign: 'left', mt: '2%' }}>
                                    Multiple selection control
                                </Typography>
                                <FormControl sx={{ minWidth: '100%', }}>
                                    {/* <InputLabel shrink htmlFor="select-multiple-native">
                                            
                                        </InputLabel> */}
                                    <Select
                                        multiple
                                        native
                                        value={personName}
                                        // @ts-ignore Typings are not considering `native`
                                        onChange={handleChangeMultiple}
                                        // label="Native"
                                        inputProps={{
                                            id: 'select-multiple-native',
                                        }}
                                    >
                                        {names.map((name) => (
                                            <option key={name} value={name}>
                                                <Typography variant='body2'>
                                                    {name}
                                                </Typography>
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
                <Grid item lg={6} xs={12} md={6} sm={12} >
                    <Item sx={{
                        textAlign: "left"
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Email me when new sign up." />
                            <FormControlLabel disabled control={<Checkbox size="small" />} label="Disabled" sx={{ ':hover': { cursor: 'not-allowed' } }} />
                        </FormGroup>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <FormControl sx={{ mt: '4%' }}>
                                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio size="small" />} label="HTML format" />
                                    <FormControlLabel value="male" control={<Radio size="small" />} label="Plain text" />
                                    <FormControlLabel disabled control={<Radio size="small" />} label="Rich text" sx={{ ':hover': { cursor: 'not-allowed' } }} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Item>
                </Grid>
                <Grid item lg={10} xs={12} md={6} sm={12} >
                    <Item sx={{ textAlign: 'left', padding: '0px 5px', margin: '0px' }}>

                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Server status " sx={{}} />
                        <FormControlLabel control={<Checkbox size="small" />} label="Memember status" sx={{}} />
                        <FormControlLabel control={<Checkbox size="small" />} label="Expired members" sx={{}} />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item sx={{ textAlign: 'left', padding: '0px 5px', margin: '0px' }}>
                        <FormControl sx={{}}>
                            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                            <RadioGroup row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio size="small" />} label="HTML format" />
                                <FormControlLabel value="male" control={<Radio size="small" />} label="Plain text" />
                                <FormControlLabel value="hale" control={<Radio size="small" />} label="Rich text" sx={{}} />
                            </RadioGroup>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#333', textAlign: 'left', mt: '2%' }}>
                            File input
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Button variant="contained" component="label" sx={{ backgroundColor: '#EFEFEF', color: '#333', padding: '2px 6px', border: '1px solid #555', ':hover': { border: '1px solid #555', background: '#EFEFEF' } }}>
                                <Typography variant='body2' sx={{ fontSize: '12px' }}>  Выберите файл </Typography>
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                            <Button variant="outlined" component="label" sx={{ color: '#333', border: 'none', ':hover': { border: 'none', background: 'none' } }}>
                                <Typography variant='body2' sx={{ fontSize: '12px' }}> Файл не выбран </Typography>
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </Stack>
                        <Typography variant='body2'>
                            You can upload file here.
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ textAlign: 'left' }}>
                        <Button variant="contained" size="small" sx={{ borderRadius: '0px' }}>
                            Update
                        </Button>
                        <Button variant="outlined" size="small" sx={{ borderRadius: '0px', borderColor: '#ccc', color: '#333', ml: '0.5%' }}>
                            Reset
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

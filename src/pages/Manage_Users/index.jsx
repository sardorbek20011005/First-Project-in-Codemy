import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";

const options = ["Bootstrap", "Font Awasome", "jQuery"];
const sort = ["FirstName", "LastName", "Username"];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:1313/persons")
            .then((res) => setPerson(res.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [open1, setOpen1] = React.useState(false);
    const anchorRef1 = React.useRef(null);
    const [selectedIndex1, setSelectedIndex1] = React.useState(1);

    const handleClick1 = () => {
        console.info(`You clicked ${sort[selectedIndex1]}`);
    };

    const handleMenuItemClick1 = (event, index) => {
        setSelectedIndex1(index);
        setOpen1(false);
    };

    const handleToggle1 = () => {
        setOpen1((prevOpen1) => !prevOpen1);
    };

    const handleClose1 = (event) => {
        if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }; return (
        <Container>
            <Box>
                <Typography variant="h4">Manage Users</Typography>
                <Typography variant="body1">Here goes tables and users.</Typography>
                <br />
                <Box
                    sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "inline", md: "inline" },
                        flexDirection: { xs: "column" },
                    }}
                >
                    <Button
                        sx={{
                            width: { md: "15%", sm: "20%", xs: "50%" },
                            fontSize: "10px",
                            borderRadius: "0%",
                        }}
                        variant="contained"
                    >
                        New Users
                        <span
                            style={{
                                width: "20%",
                                height: "2%",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "40%",
                                marginLeft: "10px",
                                // padding: "1px",
                            }}
                        >
                            42
                        </span>
                    </Button>
                    <Button
                        variant="text"
                        sx={{
                            width: { md: "15%", sm: "20%", xs: "50%" },
                            fontSize: "10px",
                        }}
                    >
                        Active Users{" "}
                        <span
                            style={{
                                width: "25%",
                                height: "2%",
                                backgroundColor: "grey",
                                color: "white",
                                borderRadius: "40%",
                                marginLeft: "10px",
                                // padding: "1px",
                            }}
                        >
                            107
                        </span>{" "}
                    </Button>
                    <Button
                        variant="text"
                        sx={{
                            width: { md: "15%", sm: "20%", xs: "50%" },
                            fontSize: "10px",
                        }}
                    >
                        Expired Users{" "}
                        <span
                            style={{
                                width: "15%",
                                height: "2%",
                                backgroundColor: "grey",
                                color: "white",
                                borderRadius: "40%",
                                marginLeft: "10px",
                                // padding: "1px",
                            }}
                        >
                            3
                        </span>{" "}
                    </Button>
                    <Typography variant="h6">New Users Table </Typography>
                </Box>{/* sort */}
                <React.Fragment>
                    <ButtonGroup
                        sx={{ ml: { lg: "84%", sm: "80%", xs: "50%" } }}
                        variant="outlined"
                        ref={anchorRef1}
                        aria-label="split button"
                    >
                        <Button
                            sx={
                                {
                                    // border: "1px solid black",
                                }
                            }
                            onClick1={handleClick1}
                        >
                            Sort By
                        </Button>
                        <Button
                            sx={
                                {
                                    // border: "1px solid black",
                                }
                            }
                            size="small"
                            aria-controls={open1 ? "split-button-menu" : undefined}
                            aria-expanded={open1 ? "true" : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick1={handleToggle1}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper
                        open1={open1}
                        anchorEl1={anchorRef1.current}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === "bottom" ? "center top" : "center bottom",
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway1={handleClose1}>
                                        <MenuList id="split-button-menu" autoFocusItem>
                                            {sort.map((sort, index) => (
                                                <MenuItem
                                                    key={sort}
                                                    onClick1={(event) =>
                                                        handleMenuItemClick1(event, index)
                                                    }
                                                >
                                                    {sort}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </React.Fragment>
                <br /><TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>First Name</StyledTableCell>
                                <StyledTableCell>Last Name</StyledTableCell>
                                <StyledTableCell>Username</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Edit</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                                <StyledTableCell>Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {person.map((value, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>{value.id}</StyledTableCell>
                                    <StyledTableCell>{value.First_Name}</StyledTableCell>
                                    <StyledTableCell>{value.Last_Name}</StyledTableCell>
                                    <StyledTableCell>{value.Username}</StyledTableCell>
                                    <StyledTableCell>{value.Email}</StyledTableCell>
                                    <StyledTableCell>
                                        <Button variant="outlined">Edit</Button>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <React.Fragment>
                                            <ButtonGroup
                                                variant="contained"
                                                ref={anchorRef}
                                                aria-label="split button"
                                            >
                                                <Button onClick={handleClick}>Action</Button>
                                                <Button
                                                    size="small"
                                                    aria-controls={open ? "split-button-menu" : undefined}
                                                    aria-expanded={open ? "true" : undefined}
                                                    aria-label="select merge strategy"
                                                    aria-haspopup="menu"
                                                    onClick={handleToggle}
                                                >
                                                    <ArrowDropDownIcon />
                                                </Button>
                                            </ButtonGroup>
                                            <Popper
                                                open={open}
                                                anchorEl={anchorRef.current}
                                                role={undefined}
                                                transition
                                                disablePortal
                                            >
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{
                                                            transformOrigin:
                                                                placement === "bottom"
                                                                    ? "center top"
                                                                    : "center bottom",
                                                        }}
                                                    >
                                                        <Paper>
                                                            <ClickAwayListener onClickAway={handleClose}>
                                                                <MenuList id="split-button-menu" autoFocusItem>
                                                                    {options.map((option, index) => (
                                                                        <MenuItem
                                                                            key={option}
                                                                            onClick={(event) =>
                                                                                handleMenuItemClick(event, index)
                                                                            }
                                                                        >
                                                                            {option}
                                                                        </MenuItem>
                                                                    ))}
                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </React.Fragment>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Button>delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /><Typography variant="h6">Another Table of Existing Users</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>First Name</StyledTableCell>
                                <StyledTableCell>Last Name</StyledTableCell>
                                <StyledTableCell>Username</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Edit</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                                <StyledTableCell>Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {person.map((value, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>{value.id}</StyledTableCell>
                                    <StyledTableCell>{value.First_Name}</StyledTableCell>
                                    <StyledTableCell>{value.Last_Name}</StyledTableCell>
                                    <StyledTableCell>{value.Username}</StyledTableCell>
                                    <StyledTableCell>{value.Email}</StyledTableCell>
                                    <StyledTableCell>
                                        <Button variant="outlined">Edit</Button>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <React.Fragment>
                                            <ButtonGroup
                                                variant="contained"
                                                ref={anchorRef}
                                                aria-label="split button"
                                            >
                                                <Button onClick={handleClick}>Action</Button>
                                                <Button
                                                    size="small"
                                                    aria-controls={open ? "split-button-menu" : undefined}
                                                    aria-expanded={open ? "true" : undefined}
                                                    aria-label="select merge strategy"
                                                    aria-haspopup="menu"
                                                    onClick={handleToggle}
                                                >
                                                    <ArrowDropDownIcon />
                                                </Button>
                                            </ButtonGroup>
                                            <Popper
                                                open={open}
                                                anchorEl={anchorRef.current}
                                                role={undefined}
                                                transition
                                                disablePortal
                                            >
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{
                                                            transformOrigin:
                                                                placement === "bottom"
                                                                    ? "center top"
                                                                    : "center bottom",
                                                        }}
                                                    >
                                                        <Paper>
                                                            <ClickAwayListener onClickAway={handleClose}>
                                                                <MenuList id="split-button-menu" autoFocusItem>
                                                                    {options.map((option, index) => (
                                                                        <MenuItem
                                                                            key={option}
                                                                            onClick={(event) =>
                                                                                handleMenuItemClick(event, index)
                                                                            }
                                                                        >
                                                                            {option}
                                                                        </MenuItem>
                                                                    ))}
                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </React.Fragment>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Button>delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}</TableBody>
                    </Table>
                </TableContainer>
                <br />
                <Stack spacing={2} sx={{ ml: { lg: "68%", sm: "60%", xs: "1%" } }}>
                    <Pagination
                        count={5}
                        color={"primary"}
                        variant="text"
                        shape="rounded"
                    />
                </Stack>
            </Box>
        </Container>
    );
};
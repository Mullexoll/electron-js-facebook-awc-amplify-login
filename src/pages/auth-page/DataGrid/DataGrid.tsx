import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AppBar from "@material-ui/core/AppBar";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
   { field: "id", headerName: "ID", width: 90 },
   {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
   },
   {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
   },
   {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
   },
   {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: any) =>
         `${params.getValue(params.id, "firstName") || ""} ${
            params.getValue(params.id, "lastName") || ""
         }`,
   },
];

const rows = [
   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 30 },
];

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
   toolbar: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(2),
   },
   content: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
   },
}));

export default function DataGridDemo() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  My App
               </Typography>
            </Toolbar>
         </AppBar>
         <Paper className={classes.content}>
            <div className={classes.toolbar}>
               <Typography variant="h6" component="h2" color="primary">
                  Users
               </Typography>
               <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<PersonAddIcon />}
               >
                  New User
               </Button>
            </div>
            <div style={{ height: 400, width: "100%" }}>
               <DataGrid rows={rows} columns={columns} checkboxSelection />
            </div>
         </Paper>
      </div>
   );
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import ToursTable from "./../../modules/ToursTable";
import AdminMenu from "../../modules/AdminMenu";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  tableContainer: {
    height: 320
  }
});

class ToursPage extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AdminMenu />
        <main className={classes.content}>
          <Typography variant="h4" gutterBottom component="h2">
            Tour Packages
          </Typography>
          <div className={classes.tableContainer}>
            Table Goes Here
            {/* <ToursTable /> */}
          </div>
        </main>
      </div>
    );
  }
}

ToursPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToursPage);
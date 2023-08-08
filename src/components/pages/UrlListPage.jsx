import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteShortenedUrl } from "../../reducers/urlReducer";

const styles = (theme) => ({
  container: {
    maxHeight: 340,
    borderRadius: "0 0 20px 20px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "100px",
    },
    "&::-webkit-scrollbar-track": {
      background: theme.palette.grey[300],
      borderRadius: "4px",
      // height: 100,
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.grey[500],
      borderRadius: "4px",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "70%",
      borderRadius: "0",
      backgroundColor: "rgb(250, 250, 250, 0.8)",
    },
  },
  table: {
    minWidth: 400,
    tableLayout: "fixed", // Fix table layout to remove horizontal scroll
    "& th, & td": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 350,
    },
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.background.secondary,
    zIndex: 1,
  },
  cell: {
    width: "25%", // Set the width of table cells
  },
  actionCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
    cursor: "pointer",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
});

function UrlListPage({ classes, urlObjectHandler }) {
  const { urls } = useSelector((state) => state.urls);
  const dispatch = useDispatch();

  const handleShortUrlClick = (shortUrl) => {
    window.open(shortUrl, "_blank"); // Open the short URL in a new tab
  };

  const editUrl = (url) => {
    // Call the function received from props
    urlObjectHandler(url);
  };

  const deleteUrl = (urlId) => {
    dispatch(deleteShortenedUrl(urlId));
  };

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} stickyHeader>
        <TableHead>
          <TableRow className={classes.stickyHeader}>
            <TableCell
              align="center"
              className={classes.cell + " " + classes.title}
            >
              Long URL
            </TableCell>
            <TableCell
              align="center"
              className={classes.cell + " " + classes.title}
            >
              Short URL
            </TableCell>
            <TableCell
              align="center"
              className={classes.cell + " " + classes.title}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url) => (
            <TableRow key={url.id}>
              <TableCell className={classes.cell}>{url.longUrl}</TableCell>
              <TableCell
                className={classes.cell}
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => handleShortUrlClick(url.shortUrl)}
              >
                {url.shortUrl}
              </TableCell>
              <TableCell align="center" className={classes.actionCell}>
                <AiFillEdit
                  className={classes.icon}
                  style={{ color: "#7FB992" }}
                  onClick={() => editUrl(url)}
                />
                <AiFillDelete
                  className={classes.icon}
                  style={{ color: "#B6303D" }}
                  onClick={() => deleteUrl(url.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

UrlListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  urlObjectHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(UrlListPage);

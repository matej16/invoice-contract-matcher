/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#Github" className={classes.block}>
                Github
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#OpenDataLab" className={classes.block}>
                OpenDataLab
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://opendatalab.cz/"
              target="_blank"
              className={classes.a}
            >
              OpenDataLab
            </a>
            <a>   </a>
            <a
              href="https://fit.cvut.cz/cs"
              target="_blank"
              className={classes.a}
            >
              FIT ČVUT v Praze
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

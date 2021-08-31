// react
// next

// clsx

// components

// react-jss
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  filterNsort: {
    width: "100%",
    height: 30,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: {
      top: 5,
      bottom: 5,
      left: 10,
      right: 10,
    },
    border: "1px solid grey",
    borderRadius: 15,
  },
  divider: {
    height: "100%",
    width: 2,
    backgroundColor: "grey",
    margin: {
      left: 10,
      right: 10,
    },
  },
  filter: {
    height: "100%",
    width: "calc((100% - 2px - 5px) / 2 )",
    backgroundColor: "red",
  },
  sort: {
    height: "100%",
    width: "calc((100% - 2px - 5px) / 2 )",
    backgroundColor: "red",
  },
}));

export default function FilterNSort() {
  const classes = useStyles();
  return (
    <div className={classes.filterNsort}>
      <div className={classes.filter}>Filter</div>
      <div className={classes.divider}></div>
      <div className={classes.sort}>Sort By</div>
    </div>
  );
}

import React, {useEffect} from 'react';
import Pagination from "@mui/material/Pagination";
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../actions/posts";

// import useStyles from "./styles";
// import { getAllStudents } from '../../../actions/students';
import { useLocation } from "react-router-dom";

const Paginate = () => {
  const {numberOfPagesSF10} = useSelector((state) => state.students);
//   const classes = useStyles();
  const dispatch = useDispatch();

  const sampleLocation = useLocation().search.split("=")[0];
  const page = useLocation().search.split("=")[1];
  

  return (
    <Pagination 
        classes={{ ul: {
            justifyContent: 'space-around'
        }}}
        count={numberOfPagesSF10 ? numberOfPagesSF10 : 0}
        page={Number(page) || 1}
        // variant="outlined"
        size="small"
        color="primary"
        renderItem={(item) => (
            <PaginationItem 
            {...item}
            component={Link}
            to={ sampleLocation === "?page" || sampleLocation === ""
             ? `/forms/students?page=${item.page}` : sampleLocation === "?fpage" ? 
             `/forms/students?fpage=${item.page}` : ""}
            />
        )}
    />
  )
}

export default Paginate;
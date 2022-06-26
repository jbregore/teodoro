import React, {useEffect} from 'react';
import Pagination from "@mui/material/Pagination";
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";

const Paginate = () => {
  const {numberOfPages} = useSelector((state) => state.faculty);
//   const classes = useStyles();
  const sampleLocation = useLocation().search.split("=")[0];
  const page = useLocation().search.split("=")[1];
  

  return (
    <Pagination 
        classes={{ ul: {
            justifyContent: 'space-around'
        }}}
        count={numberOfPages ? numberOfPages : 0}
        page={Number(page) || 1}
        // variant="outlined"
        size="small"
        color="primary"
        renderItem={(item) => (
            <PaginationItem 
            {...item}
            component={Link}
            to={ sampleLocation === "?page" || sampleLocation === ""
             ? `/account/faculty?page=${item.page}` : sampleLocation === "?fpage" ? 
             `/account/faculty?fpage=${item.page}` : ""}
            />
        )}
    />
  )
}

export default Paginate;
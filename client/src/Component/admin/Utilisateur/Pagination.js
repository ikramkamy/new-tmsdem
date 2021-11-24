import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
const Pagination=({dataperpage,totaldata,paginate})=>{
 const pageNumbers=[];
  for(let i=1; i<= Math.ceil(totaldata /dataperpage) ; i++){
    pageNumbers.push(i);
  }


return(
<div className="pagination">
{ pageNumbers?.map((number)=>
    <li key={number} className="page-item">
  <div className="page-link" onClick={()=>paginate(number)}>
      {number}
   </div>
   </li>
)}
 </div>)}
export default Pagination;
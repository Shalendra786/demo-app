import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import './Contact.css';
import InfiniteScroll from "react-infinite-scroll-component"
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Navbaar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

function Home() {

  const [oldData, setOldData] = useState([]);
  // const [page, setPage] = useState('');
  const count = useRef(0);

  useEffect(() => {

    data();

    let interval = setInterval(() => {
      fetchMoreData();

    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const data = async () => {

    const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count.current}`);
    let data = res.data.hits;
    setOldData(data)

  }

  const fetchMoreData = async () => {

   
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count.current}`

    );

    let newData = res.data.hits;
    // console.log(newData)
    setOldData([...oldData, ...newData])
     count.current = count.current + 1;

  };
  let navigate = useNavigate();




  return (
    
    <>
    <Navbaar />

    <br />
   <div className='scroll'>
   
   <br />
      <InfiniteScroll
        dataLength={oldData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<center>Loading...</center>}
      >

        <TableContainer component={Paper} >

          <Table sx={{ maxWidth: "100%", border: 0 }} aria-label="a dense table" >

            <TableHead className='color'  >

              <TableRow >
                <TableCell style={{fontWeight:"800"}} >S.No.</TableCell>
                <TableCell style={{fontWeight:"800"}} align="left">Created_at</TableCell>
                <TableCell style={{fontWeight:"800"}} align="left">Title</TableCell>
                <TableCell  style={{fontWeight:"800"}} align="left">URL</TableCell>
                <TableCell style={{fontWeight:"800"}} align="left">Author</TableCell>
              </TableRow>

            </TableHead>


            <TableBody>


              {oldData.map((data, index) => (


                <TableRow
                  key={data.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={()=>{
                    navigate(`/data/?lid=${JSON.stringify(oldData[index])}`)
                  }}
                >


                  <TableCell component="th" style={{fontWeight:"800"}} scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell >{data.created_at}</TableCell>
                  <TableCell align="left"> {data.title}</TableCell>

                  <TableCell align="left" style={{overflowWrap:"anywhere"}}>{data.url}</TableCell>

                  <TableCell align="left">{data.author}</TableCell>


                </TableRow>

              ))}
            </TableBody>




          </Table>

        </TableContainer>

      </InfiniteScroll>

      </div>

    </>

  );
}

export default Home;

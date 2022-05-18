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
import { Link,useNavigate } from 'react-router-dom';

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



      <InfiniteScroll
        dataLength={oldData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<center>Loading...</center>}
      >

        <TableContainer >

          <Table sx={{ maxWidth: 650 }} aria-label="a dense table" >

            <TableHead  >

              <TableRow >
                <TableCell >S.No.</TableCell>
                <TableCell >Created_at</TableCell>
                <TableCell  align="left">Title</TableCell>
                <TableCell  align="left">URL</TableCell>
                <TableCell align="left">Author</TableCell>
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


                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell >{data.created_at}</TableCell>
                  <TableCell align="left"> {data.title}</TableCell>

                  <TableCell align="left">{data.url}</TableCell>

                  <TableCell align="left">{data.author}</TableCell>


                </TableRow>

              ))}
            </TableBody>




          </Table>

        </TableContainer>

      </InfiniteScroll>



    </>

  );
}

export default Home;

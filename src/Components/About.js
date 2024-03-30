import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbg from '../Images/back4.jpg'
import '../Css/Responsive.css';
import '../Css/index.css';

export default function About() {
  const [company, setCompany] = useState([]);

  const getUserList = async () => {
    await axios.get("http://localhost:4200/api/v1/user/list").then((res) => {
      // console.log(res)

      setCompany(res.data.result);
    });
  }
  useEffect(() => {
    getUserList();
  }, []);


  var companyList = " ";
  companyList = company && company?.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item?.firstName} {item?.lastName}</td>
        <td>{item?.email}</td>
        <td>{item?.mobile}</td>
        {/* <td> <button className="btn btn-warning">Edit</button></td>
        <td> <button className="btn btn-danger">Delete</button></td>
        <td> <button className="btn btn-primary">View</button></td> */}

      </tr>
    );
  });


  return (
    <>
    <div className='img'>
<img src={Navbg} className='backimg' alt='backimg' />
    </div>
      <Link to="/list" className='btn btn-outline-info float-end'>Add Details</Link>
      <h1 className='text-center'>Customer Details</h1>
      <div className='container text-center'>
        <div className='card' >
          <div className='col-md-12' >
            <Table >

              {/*---Head-------*/}
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Customer Email</th>
                  <th>Mobile Number</th>
                  {/* <th></th>
          <th></th>
          <th></th> */}
                </tr>
              </thead>

              {/*---Body-------*/}
              <tbody>
                {companyList}
              </tbody>

            </Table>
          </div>
        </div>
      </div>
    </>
  );
}


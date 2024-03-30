import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import View from "./View";
import Navbg from '../Images/back4.jpg'
import '../Css/Responsive.css';
import '../Css/index.css';

export default function List() {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (data) => {
    setData(data);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getUserList = async () => {
    await axios.get("http://localhost:4200/api/v1/user/list").then((res) => {
      // console.log(res)

      setCustomer(res.data.result);
    });
  }
  useEffect(() => {
    getUserList();
  }, []);

  const handleEditClick = async (id) => {
    try {
      navigate(`/list/update/${id}`)
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  };

  const handledeleteClick = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4200/api/v1/user/delete/${id}`);
      getUserList(); // Assuming this function is correctly implemented to update the user list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleViweClick = async (id) => {
    try {
      console.log("id", id);
      const response = await axios.get(`http://localhost:4200/api/v1/user/detail/${id}`);
      console.log(response);
      navigate(`/list/view/${id}`)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  var customerDetails = " ";

  customerDetails = customer && customer?.map((item, index) => {

    return (
      <tr key={index}>
        <td>{item?.firstName} {item?.lastName}</td>
        <td>{item?.email}</td>
        <td>{item?.mobile}</td>
        <td>
          <button className="btn btn-warning" onClick={() => handleEditClick(item.id)}>Edit</button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => handledeleteClick(item.id)}>Delete</button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={() => showModal(item)} >View</button>
        </td>
      </tr>
    );
  });


  return (
    <>
<div className='img'>
<img src={Navbg} className='backimg' alt='backimg' />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <Link to="/details" className='btn btn-primary float-end' >Add Customer</Link>
              <Link className='btn btn-outline-info float-end' to='/product' >Product</Link>
              <h1 style={{ textAlign: "center" }}>Customer List </h1>
              <div className="card-body">
                <Table>
                  {/* <Table striped bordered hover> */}
                  <thead>
                    <tr>
                      <th> Name</th>
                      <th> Email</th>
                      <th>Mobile No.</th>
                      <th></th>
                      <th>Option</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerDetails}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal title="Customer Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <View data={data} />
      </Modal>
    </div>
</>
  );
}

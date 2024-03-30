import React, { useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbg from '../Images/back4.jpg';
import '../Css/Responsive.css';
import '../Css/index.css';

const Aboutdetails = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  
useEffect(()=>{
  getAboutdetails();
},[id])

  const getAboutdetails = async () => {
    if (id) {
      const response = await axios.get(`http://localhost:4200/api/v1/user/detail/${id}`);
      if (response?.data?.status) {
        console.log(response);
        const { age, email, firstName, gender, lastName, mobile } = response?.data?.result;
        form.setFieldsValue({
          age:age,
          email,
          firstName,
          gender,
          lastName,
          mobile
        });
      }
    }
  }

  const onFinish = async (values) => {
      if (id) {
      let obj = values;
      const response = await axios.put('http://localhost:4200/api/v1/user/update', { ...obj, id: id });
      if (response && response.data.status) {
        onReset();
        navigate('/about');
      }
      console.log(response)
    } else {
      const response = await axios.post('http://localhost:4200/api/v1/user/create', values);
      if (response && response.data.status) {
        onReset();
        navigate('/about');
      }
      console.log(response)
    }
  };

  const onReset = () => {
    // Reset the form fields
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <><div className='img'>
    <img src={Navbg} className='backimg' alt='backimg' />
        </div>
    
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Customer Name"
          name="Customer Name"
          rules={[
            {
              required: true,
              message: 'Please input your Customer Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Company Name"
          name="Company Name"
          rules={[
            {
              required: true,
              message: 'Please input your Company Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="mobile"
          name="mobile"
          rules={[
            {
              required: true,
              message: 'Please input your mobile Number!',
            },
          ]}
        >
          <Input />
        </Form.Item>
            
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Link to="/about"> Cancel </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default Aboutdetails;

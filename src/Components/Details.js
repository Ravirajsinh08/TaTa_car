import React, { useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbg from '../Images/back4.jpg';
import '../Css/Responsive.css';
import '../Css/index.css';

const Studentscreate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDetail();
  }, [id])

  const getDetail = async () => {
    if (id) {
      const response = await axios.get(`http://localhost:4200/api/v1/user/detail/${id}`);
      if (response?.data?.status) {
        console.log(response);
        const { age, email, firstName, gender, lastName, mobile, password } = response?.data?.result;
        form.setFieldsValue({
          age: age,
          email,
          firstName,
          gender,
          lastName,
          mobile,
          password
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
        navigate('/List');
      }
      console.log(response)
    } else {
      const response = await axios.post('http://localhost:4200/api/v1/user/create', values);
      if (response && response.data.status) {
        onReset();
        navigate('/List');
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
    <>
    <div className='img'>
<img src={Navbg} className='backimg' alt='backimg' />
    </div>
      <div className="head d-flex justify-content-center bg-dark text-white ">
        <h2 >Fill The Customer Details</h2>
      </div>
      <div className="background" style={{ height: '30rem', backgroundImage: "url('https://assets-global.website-files.com/5ed5b60be1889f546024ada0/6440f2fe85015db9705a3672_Illustration%20(1)-p-800.png')" }}>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 900,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        ><br />
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your firstName!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your lastName!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile"
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input />
          </Form.Item>


          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 12,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 12,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to="/List" className="btn btn-"> Cancel </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Studentscreate;

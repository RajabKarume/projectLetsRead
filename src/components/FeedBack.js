import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
import Homebanner from './HomeBanner';

const { Option } = Select;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const sizeOfText = {
    fontSize:"40px"
  }

  return (
 
        <>
        <div style={{paddingTop:"50px"}}/>
      <Button type="primary" style={{width:"1000px", height:"100px", fontSize:"40px"}}onClick={showDrawer} icon={<PlusOutlined />}>
        Add FeedBack
      </Button>
      <Drawer
        title="Give us your feedback on any book you have read"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Reader's Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter your name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Author"
                label="Author"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            
            <Col span={12}>
              <Form.Item
                name="type"
                label="Thoughts"
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select placeholder="Did you like it">
                  <Option value="private">Liked It</Option>
                  <Option value="public">Didn't like it</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Book Recommendation"
                rules={[{ required: true, message: "Recomend a book to us" }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Give us your thought"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
      <div/>
      </>
    
  );
};

export default App;
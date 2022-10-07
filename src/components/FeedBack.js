import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';
import React, { useState } from 'react';
import TableData from './Table';




const FeedBack: React.FC = ({hStyle}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  const [readersName, setReadersName]= useState("")
  const [authorName, setAuthorName]= useState("")
  const [bookTitle, setBookTitle]= useState("")
  const [comments, setComments]= useState("")
  const [recomendation, setRecomendation]= useState("")
  const [tableData, setTableData] = useState([])
 
  function handleSubmit(e){
    e.preventDefault()
    const formData = {
        readersName: readersName,
        authorName: authorName,
        bookTitle: bookTitle,
        comments: comments,
        recomendation: recomendation
    }
    const newArr = [...tableData, formData];
    return setTableData(newArr)
    
  }
  console.log(tableData)

  return (
 
        <>
        <h1 style={hStyle}>Let's read</h1>
        <div style={{paddingTop:"50px"}} className="drawer" />
      <Button type="primary" style={{width:"1000px", height:"100px", fontSize:"40px"}}onClick={showDrawer} icon={<PlusOutlined />}>
        Add FeedBack
      </Button>
      <Drawer
        title="Give us your feedback on any book you have read"
        width={720}
        onClose={onClose}
        style={{fontSize:"25px"}}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12} >
              <Form.Item
                name="name"
                label="Reader's Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter your name" onChange={(e)=> setReadersName(e.target.value)} value={readersName} />
              </Form.Item>
            </Col>
            <Col span={12} >
              <Form.Item
                name="Author"
                label="Author"
                rules={[{ required: true, message: 'Please enter Authors nane' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter Neme of book Author"
                  onChange={(e)=> setAuthorName(e.target.value)} 
                  value={authorName}
                />
              </Form.Item>
            </Col>
            <Col span={12} >
              <Form.Item
                name="book"
                label="Book Title"
                rules={[{ required: true, message: 'Please enter Book Title' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter book title"
                  onChange={(e)=> setBookTitle(e.target.value)} 
                  value={bookTitle}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          </Row>
          <Row gutter={16}>
            <Col span={24} >
              <Form.Item
                name="description"
                label="Give us your thought"
                rules={[
                  {
                    required: true,
                    message: 'Tell us about the book',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="What were your thoughts on the book" onChange={(e)=> setComments(e.target.value)} value={comments} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            
            <Col span={12} >
              <Form.Item
                name="bookrecommendatio"
                label="Book Recommendation"
                rules={[{ required: true, message: "Recomend a book to us" }]}
              >
                <Input.TextArea rows={4} placeholder="reccomend a good book" onChange={(e)=> setRecomendation(e.target.value)} value={recomendation} />

              </Form.Item>
            </Col>
          </Row>
          
        </Form>
      </Drawer>
      <TableData formData={tableData}/>
      <div/>
      </>
    
  );
};

export default FeedBack;
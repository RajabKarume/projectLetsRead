import { Col, Divider, Row } from 'antd';
import React from 'react';
import { NavLink } from "react-router-dom";

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0',fontSize: "2em", color:"black" };

const NavBar: React.FC = () => (
  <>
    <Divider orientation="left"></Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <NavLink to="/" exact style={style}>Home</NavLink>
      </Col>
      <Col className="gutter-row" span={6}>
        <NavLink to="/books" exact style={style}>Books</NavLink>
      </Col>
      <Col className="gutter-row" span={6}>
        <NavLink to="/authors" style={style}>Authors</NavLink>
      </Col>
      <Col className="gutter-row" span={6}>
        <NavLink to="/feedback" style={style}>FeedBack</NavLink>
      </Col>
    </Row>

  </>
);

export default NavBar;
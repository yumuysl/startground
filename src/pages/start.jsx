import { Outlet, Link } from "react-router-dom";
import CryptoJS from 'crypto-js'
import React, { useState, useEffect, Fragment } from "react";

// import HeadPart from '../layout/head'
// import LeftPart from '../layout/left'
// import RightPart from '../layout/right'
// import FootPart from '../layout/foot'

import { Layout, Flex } from "antd"

const { Header, Footer, Sider, Content } = Layout

// css
const headerTextGroup = {
  width: "400px",
  height: "40px",
  borderRadius: 100,
  backgroundColor: "#333",
  lineHeight: "40px"
}

const headerTextStyle = {
  textDecoration: "none",
  color: "#fff",
  lineHeight: "40px"
}

const boxSyle = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: "1px solid #40a9ff"
}

const headerStyle = {
  height: 64,
  textAlign: "center",
  backgroundColor: '#fff',
};
const contentStyle = {
  textAlign: "center",
  color: "#333",
  minHeight: "300px",
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#888',
  backgroundColor: '#fff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100%)',
  height: '100vh',
  backgroundColor: "#fff"
};

function Startpage(){

  // let cryptojs = CryptoJS;
  // console.log(cryptojs);

  return (
    <>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Flex gap="middle" justify="center" align="center" style={{width: "100%", height:"100%"}}>
          <div style={headerTextGroup}>
            <Flex gap={50} justify="center" align="center">
              <Link to="and-design" style={headerTextStyle}>And Design</Link>
              <Link to="axios" style={headerTextStyle}>Axios</Link>
              <Link to="echart" style={headerTextStyle}>Echart</Link>
              <Link to="three" style={headerTextStyle}>Three</Link>
            </Flex>
          </div>
        </Flex>
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>Time：{new Date().toLocaleString()}</Footer>
    </Layout>
    </>
  )
}

export default Startpage;
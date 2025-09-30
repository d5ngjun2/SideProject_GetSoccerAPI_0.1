import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// props.children를 사용하여 레이아웃 컴포넌트 생성
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

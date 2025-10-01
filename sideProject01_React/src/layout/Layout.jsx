import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

// props.children를 사용하여 레이아웃 컴포넌트 생성
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 여기에 자식 Route 컴포넌트가 렌더링됨 */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

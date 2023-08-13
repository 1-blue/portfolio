import ScrollProgressBar from "@src/components/ScrollProgressBar";
import Header from "@src/layout/Header";
import Nav from "@src/layout/Nav";
import Aside from "@src/layout/Aside";
import Main from "@src/layout/Main";
import Footer from "@src/layout/Footer";

/** 2023/08/13 - 기본 레이아웃 컴포넌트 - by 1-blue */
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ScrollProgressBar />

      <Header>
        <Nav />
      </Header>

      <Aside />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

export default Layout;

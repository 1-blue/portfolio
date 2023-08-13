/** 2023/08/13 - <header>을 감싸는 컴포넌트 - by 1-blue */
const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <header className="fixed top-0 left-0 w-full z-10">{children}</header>;
};

export default Header;

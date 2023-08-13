/** 2023/08/13 - <main>을 감싸는 컴포넌트 - by 1-blue */
const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;

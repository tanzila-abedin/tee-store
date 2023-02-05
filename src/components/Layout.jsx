import Navigate from "./Navigate";

const Layout = ({ children }) => {
  return (
    <>
      <Navigate />
      <main className="pt-16">{children}</main>
    </>
  );
};

export default Layout;

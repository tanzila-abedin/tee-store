import Routes from "./routes";
import QueryProvider from "./util/QueryProvider";
import Navigate from "./components/Navigate";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <QueryProvider>
        <Routes />
      </QueryProvider>
    </Layout>
  );
}

export default App;

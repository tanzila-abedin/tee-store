import Routes from "./routes";
import QueryProvider from "./util/QueryProvider";
import Layout from "./components/Layout";

import { store } from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <QueryProvider>
        <Layout>
          <Routes />
        </Layout>
      </QueryProvider>
    </Provider>
  );
}

export default App;

import Routes from "./routes";
import QueryProvider from "./util/QueryProvider";
import Layout from "./components/Layout";
import { Provider } from "react-redux";

import { persistor, store } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryProvider>
          <Layout>
            <Routes />
          </Layout>
        </QueryProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

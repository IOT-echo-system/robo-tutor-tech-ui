import { ThemeProvider } from "@mui/material";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../theme/theme";
import StoreProvider from "../store/configureStore";
import { Layout } from "../components/organisms";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;

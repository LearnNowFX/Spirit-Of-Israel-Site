import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import DeviceContextProvider from "./context/device.context";
import { MUI_OVERRIDES } from "./styles/mui-overrides.style";
import { QueryClient, QueryClientProvider } from "react-query";

const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={MUI_OVERRIDES}>
        <DeviceContextProvider>
          <App />
        </DeviceContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

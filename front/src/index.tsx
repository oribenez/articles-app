import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./index.css";
import 'react-responsive-modal/styles.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Articles from "./pages/Articles";
import Categories from "./pages/Categories";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Articles />},
      {path: "/categories", element: <Categories />}
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

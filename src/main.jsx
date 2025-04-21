import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import "./styles/index.css";
import router from "./routes/AppRoutes.jsx";
import { store, persistor } from "./store/app.js";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-900">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-ocean-600 border-t-transparent"></div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Đang tải ứng dụng...
            </p>
          </div>
        </div>
      }
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
              theme="auto"
            />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
);

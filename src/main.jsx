import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import "./styles/index.css";
import router from "./routes/AppRoutes.jsx";
import { store, persistor } from "./store/app.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="border-ocean-600 h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-t-transparent"></div>
            <p className="text-lg font-medium text-gray-600">
              Đang tải ứng dụng...
            </p>
          </div>
        </div>
      }
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
            theme="light"
          />
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
);

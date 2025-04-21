import React, { Suspense } from "react";
import "../styles/hamster.css";

export const lazyLoad = (Component) => {
  const LazyComponent = React.lazy(Component);

  return (props) => (
    <Suspense fallback={<LoadingFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const LoadingFallback = () => {
  return (
    <div className="from-ocean-50 to-ocean-100 flex h-[100vh] flex-col items-center justify-center bg-gradient-to-b">
      {/* Hamster Animation */}
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 text-center">
        <p className="text-xl font-medium text-ocean-700">Đang tải...</p>
        <p className="mt-2 text-sm text-ocean-500">
          BIGTUNA đang xử lý yêu cầu của bạn
        </p>
      </div>
    </div>
  );
};

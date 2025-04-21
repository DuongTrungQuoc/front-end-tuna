import { Link } from "react-router-dom";
import { IoColorPaletteOutline, IoImageOutline } from "react-icons/io5";
import { TbColorPicker } from "react-icons/tb";

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-white to-ocean-50 py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Giải pháp đánh giá chất lượng cá ngừ thông minh
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Chúng tôi cung cấp nhiều phương pháp đánh giá chất lượng cá ngừ
            thông qua công nghệ xử lý ảnh và trí tuệ nhân tạo
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* RGB */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-gray-700" />
            <div className="relative">
              <div className="mb-4 flex items-center">
                <IoColorPaletteOutline className="mr-3 h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Dự đoán bằng RGB
                </h3>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Sử dụng giá trị màu RGB để dự đoán các chỉ số chất lượng của cá
                ngừ một cách nhanh chóng và chính xác.
              </p>
              <Link
                to="/rgb-predict"
                className="inline-flex items-center font-semibold text-ocean-600 transition-colors hover:text-ocean-700 dark:text-ocean-400 dark:hover:text-ocean-300"
              >
                Thử ngay
                <svg
                  className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* LAB */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-gray-700" />
            <div className="relative">
              <div className="mb-4 flex items-center">
                <TbColorPicker className="mr-3 h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Dự đoán bằng L*a*b*
                </h3>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Sử dụng không gian màu L*a*b* để có kết quả dự đoán chính xác và
                khách quan hơn về chất lượng cá ngừ.
              </p>
              <Link
                to="/lab-predict"
                className="inline-flex items-center font-semibold text-ocean-600 transition-colors hover:text-ocean-700 dark:text-ocean-400 dark:hover:text-ocean-300"
              >
                Thử ngay
                <svg
                  className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-gray-700" />
            <div className="relative">
              <div className="mb-4 flex items-center">
                <IoImageOutline className="mr-3 h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Dự đoán bằng hình ảnh
                </h3>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Tải lên hình ảnh cá ngừ và nhận kết quả dự đoán chất lượng tức
                thì thông qua công nghệ xử lý ảnh tiên tiến.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center font-semibold text-ocean-600 transition-colors hover:text-ocean-700 dark:text-ocean-400 dark:hover:text-ocean-300"
              >
                Đăng nhập để sử dụng
                <svg
                  className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

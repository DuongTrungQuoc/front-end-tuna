import {
  IoCheckmarkCircleOutline,
  IoTimeOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            Tại sao chọn chúng tôi?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Chúng tôi cung cấp giải pháp đánh giá chất lượng cá ngừ hiện đại,
            kết hợp công nghệ xử lý ảnh và trí tuệ nhân tạo để mang lại kết quả
            chính xác và nhanh chóng.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-ocean-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:from-gray-800 dark:to-gray-700">
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-ocean-100 opacity-20 transition-opacity duration-300 group-hover:opacity-30 dark:bg-ocean-200" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 transform items-center justify-center rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white transition-transform duration-300 group-hover:scale-110">
                <IoCheckmarkCircleOutline className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Chính xác
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Độ chính xác cao nhờ mô hình AI được huấn luyện chuyên biệt với
                dữ liệu thực tế từ các chuyên gia trong ngành.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-ocean-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:from-gray-800 dark:to-gray-700">
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-ocean-100 opacity-20 transition-opacity duration-300 group-hover:opacity-30 dark:bg-ocean-200" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 transform items-center justify-center rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white transition-transform duration-300 group-hover:scale-110">
                <IoTimeOutline className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Nhanh chóng
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kết quả dự đoán được trả về ngay lập tức, giúp tiết kiệm thời
                gian và tăng hiệu suất làm việc.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-ocean-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:from-gray-800 dark:to-gray-700">
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-ocean-100 opacity-20 transition-opacity duration-300 group-hover:opacity-30 dark:bg-ocean-200" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 transform items-center justify-center rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white transition-transform duration-300 group-hover:scale-110">
                <IoShieldCheckmarkOutline className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Dễ sử dụng
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Giao diện thân thiện, dễ dàng thao tác, phù hợp với mọi đối
                tượng người dùng từ chuyên gia đến người mới bắt đầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

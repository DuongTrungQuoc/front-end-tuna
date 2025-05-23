import { Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4">
        <BackButton />

        <div className="mt-8 rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <h1 className="mb-8 text-center text-3xl font-bold text-ocean-700 dark:text-white">
            Điều khoản dịch vụ BIGTUNA
          </h1>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                1. Giới thiệu
              </h2>
              <p>
                BIGTUNA là nền tảng cung cấp dịch vụ dự đoán chất lượng cá ngừ
                thông minh. Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý
                tuân thủ các điều khoản sau đây.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                2. Điều kiện sử dụng
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Bạn phải đủ 18 tuổi hoặc có sự đồng ý của người giám hộ</li>
                <li>
                  Bạn phải cung cấp thông tin chính xác và đầy đủ khi đăng ký
                </li>
                <li>
                  Bạn chịu trách nhiệm bảo mật thông tin tài khoản của mình
                </li>
                <li>Không được sử dụng dịch vụ cho mục đích bất hợp pháp</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                3. Quyền và nghĩa vụ của người dùng
              </h2>
              <h3 className="mb-2 font-medium text-ocean-500">
                Quyền của người dùng:
              </h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Sử dụng các tính năng dự đoán chất lượng cá ngừ</li>
                <li>Truy cập và xem lịch sử dự đoán</li>
                <li>Được hỗ trợ kỹ thuật khi cần thiết</li>
              </ul>

              <h3 className="mb-2 mt-4 font-medium text-ocean-500">
                Nghĩa vụ của người dùng:
              </h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Cung cấp thông tin chính xác và cập nhật</li>
                <li>Bảo mật thông tin tài khoản</li>
                <li>Không chia sẻ tài khoản cho người khác</li>
                <li>Tuân thủ các quy định của pháp luật</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                4. Giới hạn trách nhiệm
              </h2>
              <p>BIGTUNA không chịu trách nhiệm về:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Kết quả dự đoán không chính xác do dữ liệu đầu vào không đúng
                </li>
                <li>Thiệt hại gián tiếp phát sinh từ việc sử dụng dịch vụ</li>
                <li>Gián đoạn dịch vụ do lỗi kỹ thuật hoặc bảo trì</li>
                <li>Hành vi vi phạm của người dùng</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                5. Chấm dứt dịch vụ
              </h2>
              <p>
                BIGTUNA có quyền tạm ngưng hoặc chấm dứt dịch vụ đối với tài
                khoản vi phạm điều khoản sử dụng. Người dùng có thể chấm dứt sử
                dụng dịch vụ bất kỳ lúc nào.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                6. Thay đổi điều khoản
              </h2>
              <p>
                Chúng tôi có quyền thay đổi các điều khoản này vào bất kỳ lúc
                nào. Những thay đổi sẽ có hiệu lực ngay khi được đăng tải trên
                nền tảng.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                7. Liên hệ
              </h2>
              <p>
                Nếu bạn có bất kỳ thắc mắc nào về điều khoản dịch vụ, vui lòng
                liên hệ với chúng tôi qua email: support@bigtuna.com
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-block rounded-lg bg-ocean-500 px-6 py-2 text-white hover:bg-ocean-600"
            >
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

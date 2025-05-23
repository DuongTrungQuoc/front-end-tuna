import { Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4">
        <BackButton />

        <div className="mt-8 rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <h1 className="mb-8 text-center text-3xl font-bold text-ocean-700 dark:text-white">
            Chính sách và điều khoản BIGTUNA
          </h1>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                1. Giới thiệu
              </h2>
              <p>
                Chào mừng bạn đến với BIGTUNA - website dự đoán chất lượng cá
                ngừ thông minh. Bằng việc sử dụng dịch vụ của chúng tôi, bạn
                đồng ý tuân thủ các điều khoản và điều kiện sau đây.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                2. Điều khoản sử dụng
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Bạn phải cung cấp thông tin chính xác và đầy đủ khi đăng ký
                  tài khoản
                </li>
                <li>
                  Bạn chịu trách nhiệm bảo mật thông tin tài khoản của mình
                </li>
                <li>Không được sử dụng dịch vụ cho mục đích bất hợp pháp</li>
                <li>Không được chia sẻ tài khoản cho người khác sử dụng</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                3. Chính sách bảo mật
              </h2>
              <p className="mb-2">
                Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Mã hóa dữ liệu nhạy cảm</li>
                <li>Không chia sẻ thông tin với bên thứ ba</li>
                <li>Tuân thủ các quy định về bảo vệ dữ liệu</li>
                <li>Cho phép người dùng kiểm soát thông tin cá nhân</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                4. Quyền sở hữu trí tuệ
              </h2>
              <p className="mb-2">Tất cả nội dung trên nền tảng BIGTUNA:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Logo, giao diện, thiết kế</li>
                <li>Thuật toán và mô hình dự đoán</li>
                <li>Nội dung và tài liệu</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                5. Giới hạn trách nhiệm
              </h2>
              <p className="mb-2">BIGTUNA không chịu trách nhiệm về:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Kết quả dự đoán không chính xác do dữ liệu đầu vào không đúng
                </li>
                <li>Thiệt hại gián tiếp phát sinh từ việc sử dụng dịch vụ</li>
                <li>Gián đoạn dịch vụ do lỗi kỹ thuật hoặc bảo trì</li>
              </ul>
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
                Nếu bạn có bất kỳ thắc mắc nào về chính sách và điều khoản, vui
                lòng liên hệ với chúng tôi qua email: quoccccc36@gmail.com
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/register"
              className="inline-block rounded-lg bg-ocean-500 px-6 py-2 text-white hover:bg-ocean-600"
            >
              Quay lại đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

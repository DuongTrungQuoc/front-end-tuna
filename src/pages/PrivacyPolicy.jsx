import { Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4">
        <BackButton />

        <div className="mt-8 rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <h1 className="mb-8 text-center text-3xl font-bold text-ocean-700 dark:text-white">
            Chính sách bảo mật BIGTUNA
          </h1>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                1. Thông tin chúng tôi thu thập
              </h2>
              <p>Chúng tôi thu thập các thông tin sau:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Thông tin cá nhân: email, tên người dùng</li>
                <li>Thông tin đăng nhập: mật khẩu (đã được mã hóa)</li>
                <li>
                  Dữ liệu dự đoán: kết quả các lần dự đoán chất lượng cá ngừ
                </li>
                <li>Thông tin thiết bị và trình duyệt</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                2. Cách chúng tôi sử dụng thông tin
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Cung cấp và cải thiện dịch vụ dự đoán</li>
                <li>Xác thực và bảo mật tài khoản người dùng</li>
                <li>Gửi thông báo và cập nhật về dịch vụ</li>
                <li>Phân tích và nghiên cứu để nâng cao chất lượng dịch vụ</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                3. Bảo mật thông tin
              </h2>
              <p>Chúng tôi cam kết bảo vệ thông tin của bạn bằng cách:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Mã hóa dữ liệu nhạy cảm</li>
                <li>Sử dụng giao thức HTTPS cho mọi kết nối</li>
                <li>Giới hạn quyền truy cập vào thông tin cá nhân</li>
                <li>Thường xuyên cập nhật các biện pháp bảo mật</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                4. Chia sẻ thông tin
              </h2>
              <p>
                Chúng tôi không chia sẻ thông tin cá nhân của bạn với bên thứ
                ba, trừ các trường hợp sau:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Khi có yêu cầu từ cơ quan pháp luật</li>
                <li>Khi cần thiết để bảo vệ quyền lợi của BIGTUNA</li>
                <li>Khi được sự đồng ý của bạn</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                5. Quyền của người dùng
              </h2>
              <p>Bạn có quyền:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Truy cập và xem thông tin cá nhân của mình</li>
                <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
                <li>Yêu cầu xóa tài khoản và dữ liệu cá nhân</li>
                <li>Từ chối nhận thông báo và cập nhật</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                6. Cookie và công nghệ tương tự
              </h2>
              <p>Chúng tôi sử dụng cookie và các công nghệ tương tự để:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Duy trì phiên đăng nhập</li>
                <li>Ghi nhớ tùy chọn của người dùng</li>
                <li>Phân tích cách sử dụng dịch vụ</li>
                <li>Cải thiện trải nghiệm người dùng</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                7. Thay đổi chính sách
              </h2>
              <p>
                Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian.
                Những thay đổi sẽ được thông báo trên nền tảng.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-ocean-600 dark:text-ocean-400">
                8. Liên hệ
              </h2>
              <p>
                Nếu bạn có thắc mắc về chính sách bảo mật, vui lòng liên hệ với
                chúng tôi qua email: privacy@bigtuna.com
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

export default PrivacyPolicy;

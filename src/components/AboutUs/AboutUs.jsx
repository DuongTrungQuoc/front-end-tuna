import { FaFacebook, FaTiktok, FaInstagram, FaUser } from "react-icons/fa";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Về chúng tôi - BIGTUNA";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="container mx-auto py-16">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Về Chúng Tôi
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 rounded bg-ocean-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Đội ngũ chuyên gia với sứ mệnh mang đến giải pháp đánh giá chất
            lượng cá ngừ hiện đại và chính xác nhất
          </p>
        </div>

        <div className="grid min-h-[600px] grid-cols-1 gap-0 md:grid-cols-2">
          {/* Image Section */}
          <div className="bg-ocean-50 h-full">
            <img
              src="../src/assets/about.jpg"
              alt="Đội ngũ BIGTUNA"
              className="h-full w-full bg-ocean-700 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="flex h-full flex-col bg-white p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="mb-8 text-gray-600">
              Chúng tôi là một đội ngũ đầy nhiệt huyết, tận tâm mang đến các
              giải pháp đánh giá chất lượng cá ngừ tốt nhất. Sứ mệnh của chúng
              tôi là đảm bảo mỗi miếng cá ngừ đều đạt tiêu chuẩn cao nhất về
              chất lượng và độ tươi ngon.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Đội Ngũ Chuyên Gia
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100">
                <FaUser className="text-ocean-600 h-5 w-5" />
                <div>
                  <p className="font-medium text-gray-900">Dương Trung Quốc</p>
                  <p className="text-sm text-gray-600">Web Developer</p>
                </div>
              </li>
              <li className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100">
                <FaUser className="text-ocean-600 h-5 w-5" />
                <div>
                  <p className="font-medium text-gray-900">Nguyễn Anh Thư</p>
                  <p className="text-sm text-gray-600">AI Developer</p>
                </div>
              </li>
              <li className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100">
                <FaUser className="text-ocean-600 h-5 w-5" />
                <div>
                  <p className="font-medium text-gray-900">
                    Lê Nguyễn Đăng Định
                  </p>
                  <p className="text-sm text-gray-600">AI Developer</p>
                </div>
              </li>
            </ul>

            <div className="mb-auto mt-1">
              <p className="text-gray-600">
                Với công nghệ tiên tiến và chuyên môn vững vàng, chúng tôi nỗ
                lực thay đổi ngành thủy sản và mang lại sự an tâm cho người tiêu
                dùng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

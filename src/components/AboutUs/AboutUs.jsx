import { FaFacebook, FaTiktok, FaInstagram, FaUser } from "react-icons/fa";
import { useEffect } from "react";
import aboutImage from "../../assets/about.jpg";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Về chúng tôi - BIGTUNA";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <section className="container mx-auto pt-16">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Về Chúng Tôi
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 rounded bg-ocean-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Đội ngũ chuyên gia với sứ mệnh mang đến giải pháp đánh giá chất
            lượng cá ngừ hiện đại và chính xác nhất
          </p>
        </div>

        <div className="grid min-h-[600px] grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-full bg-ocean-50 dark:bg-gray-800">
            <img
              src={aboutImage}
              alt="Đội ngũ BIGTUNA"
              className="h-full w-full object-cover brightness-90 transition-all duration-300 hover:brightness-100 dark:brightness-75 dark:hover:brightness-90"
            />
          </div>

          {/* Content Section */}
          <div className="flex h-full flex-col justify-between bg-white p-8 dark:bg-gray-800">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Sứ Mệnh Của Chúng Tôi
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Chúng tôi là một đội ngũ đầy nhiệt huyết, tận tâm mang đến các
                giải pháp đánh giá chất lượng cá ngừ tốt nhất. Sứ mệnh của chúng
                tôi là đảm bảo mỗi miếng cá ngừ đều đạt tiêu chuẩn cao nhất về
                chất lượng và độ tươi ngon.
              </p>

              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Đội Ngũ Chuyên Gia
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:cursor-pointer hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                  <FaUser className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Dương Trung Quốc
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Web Developer
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:cursor-pointer hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                  <FaUser className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Nguyễn Anh Thư
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      AI Developer
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:cursor-pointer hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                  <FaUser className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Lê Nguyễn Đăng Định
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      AI Developer
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-auto">
              <p className="text-gray-600 dark:text-gray-300">
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

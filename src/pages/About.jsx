const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Giới thiệu về BIGTUNA
      </h1>

      <div className="space-y-6 text-gray-600 dark:text-gray-300">
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="mb-4">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="leading-relaxed">
              BIGTUNA được thành lập với sứ mệnh cung cấp giải pháp công nghệ
              tiên tiến trong việc đánh giá và đảm bảo chất lượng cá ngừ. Chúng
              tôi cam kết mang đến những công cụ phân tích chính xác và dễ sử
              dụng, giúp người dùng có thể đánh giá chất lượng cá một cách nhanh
              chóng và hiệu quả.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Công nghệ đang phát triển
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Dự đoán chất lượng cá ngừ bằng màu sắc RGB</li>
              <li>Dự đoán chất lượng cá ngừ bằng màu sắc L*a*b*</li>
              <li>Dự đoán chất lượng cá ngừ bằng hình ảnh</li>
            </ul>
          </div>
        </div>

        <section className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Công nghệ để triển khai web
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Front-end Technologies */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
                Front-end
              </h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">React.js</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Thư viện JavaScript hiện đại để xây dựng giao diện người
                    dùng. Sử dụng React Hooks để quản lý state và side effects,
                    tối ưu hiệu suất với React.memo và useMemo.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">Vite</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Công cụ build hiện đại với tốc độ khởi động nhanh và HMR
                    (Hot Module Replacement) tức thì. Tối ưu hóa quá trình phát
                    triển với ESBuild.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">Tailwind CSS</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Framework CSS tiện ích với khả năng tùy chỉnh cao. Sử dụng
                    JIT (Just-In-Time) compiler để tối ưu kích thước bundle và
                    responsive design.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">React Router v6</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Quản lý định tuyến với lazy loading, nested routes và
                    protected routes. Tích hợp với React Suspense để tối ưu trải
                    nghiệm người dùng.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">Redux Toolkit</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Quản lý state toàn cục với createSlice, createAsyncThunk và
                    RTK Query. Tối ưu hiệu suất với Immer và Redux DevTools.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">Axios</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Thư viện HTTP client với interceptors, request/response
                    transformers và error handling. Tích hợp với Redux Toolkit
                    Query.
                  </p>
                </li>
              </ul>
            </div>

            {/* Back-end Technologies */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
                Back-end
              </h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">Node.js & Express.js</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Xây dựng RESTful API với middleware, error handling và
                    validation. Sử dụng async/await và Promise để xử lý bất đồng
                    bộ.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">MongoDB & Mongoose</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Cơ sở dữ liệu NoSQL với schema validation, middleware và
                    indexing. Tối ưu queries với aggregation pipeline và text
                    search.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">JWT Authentication</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Xác thực và phân quyền với JWT tokens, refresh tokens và
                    role-based access control. Bảo mật với bcrypt và rate
                    limiting.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">Multer</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Xử lý upload file với disk storage, file filtering và size
                    limits. Tích hợp với cloud storage cho production.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">CORS & Security</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Cấu hình CORS, Helmet cho security headers, và rate
                    limiting. Xử lý CORS preflight requests và credentials.
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="text-ocean-600 dark:text-ocean-400">
                      •
                    </span>
                    <span className="font-medium">Error Handling</span>
                  </div>
                  <p className="ml-6 mt-1 text-sm">
                    Global error handling với custom error classes và logging.
                    Tích hợp với monitoring tools và error tracking.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
            Đội ngũ của chúng tôi
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Đội ngũ phát triển
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">
                    Dương Trung Quốc
                  </h4>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                    Full-stack Developer
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Chịu trách nhiệm phát triển toàn bộ hệ thống, từ giao diện
                    người dùng đến backend API và cơ sở dữ liệu. Chuyên môn về
                    React, Node.js và MongoDB.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">
                    Nguyễn Văn A
                  </h4>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                    Front-end Developer
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Tập trung vào việc phát triển giao diện người dùng, đảm bảo
                    trải nghiệm người dùng mượt mà và responsive trên mọi thiết
                    bị.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">
                    Trần Thị B
                  </h4>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                    Back-end Developer
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Chuyên gia về xây dựng API, quản lý cơ sở dữ liệu và tối ưu
                    hóa hiệu suất hệ thống.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Đội ngũ chuyên môn
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">
                    PGS.TS. Lê Văn C
                  </h4>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                    Chuyên gia về chất lượng thủy sản
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Cố vấn chuyên môn về các tiêu chuẩn chất lượng cá ngừ và
                    phương pháp đánh giá. Có hơn 20 năm kinh nghiệm trong lĩnh
                    vực thủy sản.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">
                    TS. Phạm Thị D
                  </h4>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                    Chuyên gia phân tích màu sắc
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Chuyên gia về phân tích màu sắc RGB và L*a*b* trong đánh giá
                    chất lượng thực phẩm. Đóng góp vào việc phát triển các thuật
                    toán phân tích.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">
                    ThS. Hoàng Văn E
                  </h4>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                    Chuyên gia xử lý ảnh
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Chuyên gia về xử lý ảnh và trí tuệ nhân tạo. Phát triển các
                    thuật toán xử lý ảnh để đánh giá chất lượng cá ngừ.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Tầm nhìn và Sứ mệnh
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Đội ngũ BIGTUNA được thành lập với sứ mệnh kết hợp công nghệ
                  hiện đại và chuyên môn sâu về thủy sản để mang đến giải pháp
                  đánh giá chất lượng cá ngừ tốt nhất. Chúng tôi cam kết:
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    Nghiên cứu và phát triển không ngừng để cải thiện độ chính
                    xác của hệ thống
                  </li>
                  <li>Đảm bảo tính dễ sử dụng và thân thiện với người dùng</li>
                  <li>Tuân thủ các tiêu chuẩn chất lượng quốc tế</li>
                  <li>Hỗ trợ và tư vấn chuyên môn cho khách hàng</li>
                  <li>
                    Đóng góp vào sự phát triển bền vững của ngành thủy sản
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

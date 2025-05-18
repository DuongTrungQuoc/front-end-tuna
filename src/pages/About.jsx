const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Giới thiệu về BIGTUNA
      </h1>

      <div className="space-y-6 text-gray-600 dark:text-gray-300">
        <section className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Sứ mệnh của chúng tôi
          </h2>
          <p className="leading-relaxed">
            BIGTUNA được thành lập với sứ mệnh cung cấp giải pháp công nghệ tiên
            tiến trong việc đánh giá và đảm bảo chất lượng cá ngừ. Chúng tôi cam
            kết mang đến những công cụ phân tích chính xác và dễ sử dụng, giúp
            người dùng có thể đánh giá chất lượng cá một cách nhanh chóng và
            hiệu quả.
          </p>
        </section>

        <section className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Công nghệ của chúng tôi
          </h2>
          <p className="mb-4 leading-relaxed">
            Chúng tôi sử dụng các công nghệ tiên tiến như:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Phân tích màu sắc RGB</li>
            <li>Phân tích không gian màu L*a*b*</li>
            <li>Xử lý hình ảnh thông minh</li>
            <li>Trí tuệ nhân tạo trong đánh giá chất lượng</li>
          </ul>
        </section>

        <section className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Đội ngũ của chúng tôi
          </h2>
          <p className="leading-relaxed">
            BIGTUNA được xây dựng bởi một đội ngũ chuyên gia giàu kinh nghiệm
            trong lĩnh vực công nghệ và thủy sản. Chúng tôi luôn nỗ lực để mang
            đến những giải pháp tốt nhất cho khách hàng của mình.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

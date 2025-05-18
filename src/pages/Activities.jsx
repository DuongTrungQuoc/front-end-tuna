const Activities = () => {
  const activities = [
    {
      title: "Hội thảo về chất lượng cá ngừ",
      date: "15/03/2024",
      description:
        "Hội thảo chuyên đề về các phương pháp đánh giá chất lượng cá ngừ hiện đại",
      location: "Hội trường A, Trường Đại học Nha Trang",
    },
    {
      title: "Triển lãm công nghệ thủy sản",
      date: "20/04/2024",
      description:
        "Triển lãm và giới thiệu các công nghệ mới trong lĩnh vực thủy sản",
      location: "Trung tâm Hội nghị Nha Trang",
    },
    {
      title: "Khóa đào tạo sử dụng công cụ phân tích",
      date: "05/05/2024",
      description:
        "Đào tạo chuyên sâu về cách sử dụng các công cụ phân tích chất lượng cá",
      location: "Phòng Lab, Trường Đại học Nha Trang",
    },
  ];

  return (
    <div className="container mx-auto mb-10 px-4 py-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Hoạt động của BIGTUNA
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-gray-800"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              {activity.title}
            </h2>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              Ngày: {activity.date}
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {activity.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Địa điểm: {activity.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;

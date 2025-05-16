import { RiUserLine, RiBarChartBoxLine, RiFileChartLine } from "react-icons/ri";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  // Sample data for the chart
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Predictions",
        data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90],
        backgroundColor: "rgba(79, 70, 229, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Predictions",
      },
    },
  };

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: <RiUserLine className="h-6 w-6" />,
      change: "+12.5%",
      positive: true,
    },
    {
      title: "Total Predictions",
      value: "45,678",
      icon: <RiBarChartBoxLine className="h-6 w-6" />,
      change: "+23.4%",
      positive: true,
    },
    {
      title: "Reports Generated",
      value: "789",
      icon: <RiFileChartLine className="h-6 w-6" />,
      change: "-5.6%",
      positive: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className="rounded-full bg-ocean-100 p-3 text-ocean-600 dark:bg-ocean-900 dark:text-ocean-200">
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`inline-flex items-center text-sm font-medium ${
                  stat.positive
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.change}
              </span>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Predictions Chart */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <Bar options={chartOptions} data={chartData} />
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Activity
          </h3>
          <div className="mt-6 space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-ocean-100">
                    <img
                      src={`https://ui-avatars.com/api/?name=User${item}&background=0D8ABC&color=fff`}
                      alt="User"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      User {item}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Made a prediction
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  2 min ago
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

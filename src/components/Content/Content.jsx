import { LiaFishSolid } from "react-icons/lia";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Content = () => {
  return (
    <section className="bg-primary-whitegray px-4 py-8 text-black">
      <div className="flex justify-center gap-4">
        <LiaFishSolid size={"34px"} color="#e9c46a" />
        <LiaFishSolid size={"34px"} color="#e9c46a" />
        <LiaFishSolid size={"34px"} color="#e9c46a" />
      </div>
      <div className="mt-12 flex w-[100%] flex-col text-20 font-bold">
        <div className="mb-[51px] ml-[10vw] flex items-center gap-4 md:ml-[25vw] lg:ml-[32vw]">
          <IoIosCheckmarkCircle size={"34px"} />
          <p> Kiểm tra chất lượng miếng cá qua hình ảnh </p>
        </div>
        <div className="mb-[51px] ml-[10vw] flex items-center gap-4 md:ml-[25vw] lg:ml-[32vw]">
          <IoIosCheckmarkCircle size={"34px"} />
          <p>Kiểm tra chất lượng miếng cá qua thông số RGB </p>
        </div>
        <div className="mb-[51px] ml-[10vw] flex items-center gap-4 md:ml-[25vw] lg:ml-[32vw]">
          <IoIosCheckmarkCircle size={"34px"} />
          <p>Kiểm tra chất lượng miếng cá qua thông số L*a*b*</p>
        </div>
      </div>
    </section>
  );
};
export default Content;

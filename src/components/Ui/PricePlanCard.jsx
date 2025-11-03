import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "./Button";
import MotionSection from "../Common/MotionSection";

const PricePlanCard = ({ pricePlan }) => {

  return (
    /* -------------------Price-Plan-Card------------------ */
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-5 md:gap-5 lg:gap-10">
      {pricePlan.map((plan, index) => (
        /* -----------------Card Container----------------- */
        <MotionSection className="w-full bg-bg-dark border-2 border-bg-white-overlay rounded-2xl space-y-5 p-5 md:p-5 lg:p-10" key={plan?._id}>

          {/* -------------------Card-Header--------------- */}
          <div className="space-y-2">
            <p className="font-bold text-3xl">{plan?.title}</p>
            <h3 className="font-bold text-5xl"> $ {plan?.price}</h3>
            <p className="font-bold text-2xl">Per Month</p>
          </div>

          {/* -------------------Break-Line---------------- */}
          <hr className="border border-bg-white-overlay" />

          {/* --------------------Card Body---------------- */}
          <div className="space-y-5">
            {/* ------------Freatures Container------------ */}
            <div className="space-y-2">
              {plan?.features.map((feature) => (
                <p className="flex items-center gap-2 font-rubik text-base md:text-xs lg:text-base text-gray-light"><span className="text-pink-primary"><IoIosCheckmarkCircle /></span> {feature}</p>
              ))}
            </div>
            {/* --------------------Button----------------- */}
            <Button className={`${index === 1 ? '' : 'bg-transparent hover:bg-pink-primary border-2 border-bg-white-overlay'}`}>Get Started</Button>
          </div>

        </MotionSection>
      ))}
    </div>
  );
};

export default PricePlanCard;
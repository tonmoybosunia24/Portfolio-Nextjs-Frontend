import getAllPricePlan from "@/lib/PricePlan/getAllPricePlan";
import SectionHeading from "../Ui/SectionHeading";
import PricePlanCard from "../Ui/PricePlanCard";

const PricePlan = async () => {

  const pricePlan = await getAllPricePlan();

  /* -------------------Price-Plan Section---------------- */
  return (
    <section className="section sectionPadding">

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='Price Plan' title=<>Choose Your Perfect <br /> Packege</> description='Select the plan that matches your needs. Each package offers essential features and reliable support for your project.'></SectionHeading>

      {/* ------------------Price-Plan Card--------------- */}
      <PricePlanCard pricePlan={pricePlan}></PricePlanCard>

    </section>
  );
};

export default PricePlan;
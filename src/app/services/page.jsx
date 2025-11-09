import ContactUs from "@/components/Common/ContactUs";
import Footer from "@/components/Common/Footer";
import PageHeader from "@/components/Common/PageHeader";
import PricePlan from "@/components/Common/PricePlan";

const page = () => {
  return (
    <div>
      <PageHeader title='My Service' breadcrumb='Services'></PageHeader>
      <PricePlan></PricePlan>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default page;
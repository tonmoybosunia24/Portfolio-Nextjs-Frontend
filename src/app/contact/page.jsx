import ContactUs from "@/components/Common/ContactUs";
import Footer from "@/components/Common/Footer";
import PageHeader from "@/components/Common/PageHeader";
import ContactDetails from "@/components/Pages/Contact/ContactDetails";

const page = () => {
  return (
    <main>
      <PageHeader title='Contact' breadcrumb='Contact'></PageHeader>
      <ContactDetails></ContactDetails>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </main>
  );
};

export default page;
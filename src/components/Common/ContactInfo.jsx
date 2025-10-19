import ContactCard from "../Ui/ContactCard";

const ContactInfo = () => {
  return (
    /* -----------------Contact-Info Section------------------ */
    <div className="space-y-2">
      {/* ------------------Phone Contact Card--------------- */}
      <ContactCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path></svg>
        }
        label='Call Now'
        value='0178025-9656'
      ></ContactCard>
      {/* ------------------Email Contact Card--------------- */}
      <ContactCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"></path><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"></path></g></svg>
        }
        href='mailto:mdtonmoybosunia24@gmail.com'
        label='Mail Us'
        value='mdtonmoybosunia24@gmail.com'
      ></ContactCard>
      {/* -----------------Address Contact Card-------------- */}
      <ContactCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width={22.5} height={20} viewBox="0 0 576 512"><path fill="currentColor" d="M288-16c17.7 0 32 14.3 32 32v18.3c98.1 14 175.7 91.6 189.7 189.7H528c17.7 0 32 14.3 32 32s-14.3 32-32 32h-18.3c-14 98.1-91.6 175.7-189.7 189.7V496c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.3c-98.1-14-175.7-91.6-189.7-189.7H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h18.3c14-98.1 91.6-175.7 189.7-189.7V16c0-17.7 14.3-32 32-32M128 256a160 160 0 1 0 320 0a160 160 0 1 0-320 0m160-96a96 96 0 1 1 0 192a96 96 0 1 1 0-192"></path></svg>
        }
        label='My Address'
        value='66 Broklyant, New York 3269'
      ></ContactCard>
    </div>
  );
};

export default ContactInfo;
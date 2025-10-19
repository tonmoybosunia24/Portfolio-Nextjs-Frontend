const ContactCard = ({ icon, label, href, value }) => {
  return (
    /* ---------------------Contact Card------------------ */
    <div className="flex items-center gap-2">
      {/* ------------------Icon Container--------------- */}
      <div className="bg-bg-dark border border-bg-white-overlay rounded-md p-2">
        {icon}
      </div>

      {/* ------------------Contact Details--------------- */}
      <div>
        {/* ---------------------Label-------------------- */}
        <h2 className="font-semibold uppercase text-pink-primary text-sm">
          {label}
        </h2>
        {/* -------------Value with Hover Effect -----------*/}
        <div className="relative group font-rubik inline-block text-sm">
          {href ? <a href={href}>{value}</a> : <p>{value}</p>}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

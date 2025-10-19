const SocialLinks = ({ className }) => {
  return (
    /* ---------------Social-Icon Section------------ */
    <div className={`flex gap-2 ${className}`}>
      {/* ------------------Instagram--------------- */}
      <div className="bg-bg-white-overlay rounded-full p-2 cursor-pointer hover:bg-pink-primary transition-colors duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><g fill="none"><rect width={17} height={17} x={3.5} y={3.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} rx={5.5}></rect><circle cx={12} cy={12} r={3.606} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></circle><circle cx={16.894} cy={7.106} r={1.03} fill="currentColor"></circle></g></svg>
      </div>
      {/* ------------------LinkedIn--------------- */}
      <div className="bg-bg-white-overlay rounded-full p-2 cursor-pointer hover:bg-pink-primary transition-colors duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" d="M3.44 4.89c.8 0 1.44-.65 1.44-1.44s-.65-1.44-1.44-1.44S2 2.66 2 3.45s.65 1.44 1.44 1.44m2.81 1.09V14h2.48v-3.96c0-1.05.2-2.06 1.49-2.06s1.29 1.2 1.29 2.12V14H14V9.6c0-2.16-.46-3.82-2.98-3.82c-1.21 0-2.02.66-2.35 1.29h-.03v-1.1H6.26Zm-4.05 0h2.49V14H2.2z"></path></svg>
      </div>
      {/* ------------------Twitter--------------- */}
      <div className="bg-bg-white-overlay rounded-full p-2 cursor-pointer hover:bg-pink-primary transition-colors duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="currentColor" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"></path></svg>
      </div>
      {/* ------------------Facebook--------------- */}
      <div className="bg-bg-white-overlay rounded-full p-2 cursor-pointer hover:bg-pink-primary transition-colors duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="currentColor" d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z"></path></svg>
      </div>
    </div>
  );
};

export default SocialLinks;
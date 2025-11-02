'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ layoutStyle = 'lg' }) => {
  /* ------------------Get Current Pathname--------------- */
  const pathName = usePathname();
  /* --------------Layout Styles Configuration------------ */
  const layoutStyles = {
    sm: 'flex flex-col uppercase',
    md: 'flex flex-col gap-2',
    lg: 'flex flex-row gap-2',
  }
  /* -----------------Navigation-Links Data-------------- */
  const navLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Blogs', path: '/blogs' },
    { id: 5, name: 'Projects', path: '/projects' },
    { id: 6, name: 'Contact', path: '/contact' },
  ]

  return (
    <div className={`${layoutStyles[layoutStyle]}`}>
      {/* ------------------Map Through Navigation Links--------------- */}
      {navLinks.map((link) => (
        <div key={link?.id} className="text-lg first:border-t border-b border-bg-light lg:border-0 py-2">
          <Link href={link.path} className={`${pathName === link.path ? 'font-bold text-pink-primary' : 'font-semibold text-gray-light lg:text-white'} hover:text-red-primary`}>{link?.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
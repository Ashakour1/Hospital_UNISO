import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image
              src="/placeholder.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10"
            /> */}
            <span className="text-[#1c5cff] font-bold text-xl">
              Hospital UNISO
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-[#00A651] font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#00A651]">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-[#00A651]"
            >
              Services
            </Link>
            <Link
              href="/doctors"
              className="text-gray-600 hover:text-[#00A651]"
            >
              Doctors
            </Link>
            <Link
              href="/appointment"
              className="text-gray-600 hover:text-[#00A651]"
            >
              Appointment
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-[#00A651]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

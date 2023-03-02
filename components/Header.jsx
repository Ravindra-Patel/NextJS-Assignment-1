import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav class="sticky top-0 w-full bg-darkBlue">
        <div class="flex items-center justify-between w-full">
          <div>
            <Image
              src="/newsLogo.jpg"
              alt="/drive_logo.jpg"
              width="100"
              height="100"
            />
          </div>
          <div class="hidden space-x-6 text-white md:flex mr-10">
            <Link href="/" class="hover:text-blue-200">
              Home
            </Link>
            <Link href="/top-sources" class="hover:text-blue-200">
              Sources
            </Link>
            <Link href="/search" class="hover:text-blue-200">
              Search
            </Link>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Header;

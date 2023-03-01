import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav class="sticky top-0 w-full bg-darkBlue">
        <div class="flex items-center justify-between w-full">
          <div>
            <Image
              src="/drive_logo.jpg"
              alt="/drive_logo.jpg"
              width="100"
              height="100"
            />
          </div>
          <div class="hidden space-x-6 text-white md:flex ">
            <Link href="/" class="hover:text-blue-200">
              Top Headlines
            </Link>
            <Link href="/top-sources" class="hover:text-blue-200">
              Top Headlines Sources
            </Link>
            <Link href="/search" class="hover:text-blue-200">
              News Search
            </Link>
          </div>
          <a
            href="#"
            class="hidden p-3 px-7 mr-5 pt-2 text-white bg-blue-700 rounded-full baseline hover:bg-white hover:text-black md:block"
          >
            Visit Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;

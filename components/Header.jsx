import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

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
          <div class="space-x-2 mr-2 md:space-x-6 text-white flex md:mr-10">
            {router.pathname === "/" ? (
              <Link href="/" class="text-blue-200">
                Home
              </Link>
            ) : (
              <Link href="/" class="hover:text-blue-200">
                Home
              </Link>
            )}
            {router.pathname === "/top-sources" ? (
              <Link href="/top-sources" class="text-blue-200">
                Sources
              </Link>
            ) : (
              <Link href="/top-sources" class="hover:text-blue-200">
                Sources
              </Link>
            )}
            {router.pathname === "/search" ? (
              <Link href="/search" class="text-blue-200">
                Search
              </Link>
            ) : (
              <Link href="/search" class="hover:text-blue-200">
                Search
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

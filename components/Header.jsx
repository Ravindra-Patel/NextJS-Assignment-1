import Image from "next/image";

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
            <a href="#" class="hover:text-blue-200">
              Cars
            </a>
            <a href="#" class="hover:text-blue-200">
              Services
            </a>
            <a href="#" class="hover:text-blue-200">
              About Us
            </a>
            <a href="#" class="hover:text-blue-200">
              Careers
            </a>
            <a href="#" class="hover:text-blue-200">
              Community
            </a>
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

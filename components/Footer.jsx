const Footer = () => {
  return (
    <div class="grid md:flex min-w-[320px] text-white w-full bg-darkBlue items-center justify-between w-full p-6 pl-3 md:pl-6 text-sm md:text-sm ">
      <div class="flex justify-between md:space-x-6 w-[90vw] min-w-[280px] md:w-[30vw]">
        <a href="#" class="hover:text-darkGrayishBlue">
          Privacy Policy
        </a>
        <a href="#" class="hover:text-darkGrayishBlue">
          Terms of Service
        </a>
      </div>
      <div className="mt-5 md:mt-0 flex justify-center">Copyright &copy; 2022, All Rights Reserved</div>
    </div>
  );
};

export default Footer;

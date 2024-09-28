import { FC } from "react";

const NavBar: FC = () => {
  return (
    <div
      className="
        z-30
        h-[100px]
        shadow-xl
        fixed
        top-0
        w-full
        bg-[black]"
    >
      <div
        className="
          flex
          justify-between
          h-full
          items-center
          container
          mx-auto
          px-5"
      >
        {/* Logo / Name */}
        <div className="items-center flex h-full justify-center">
          <span className="text-4xl font-bold text-white">Daniel</span>
          <span className="text-[red] text-4xl">.</span>
        </div>

        {/* Right-side buttons: Download CV and Menu Icon */}
        <div className="flex items-center space-x-5">
          {/* Download CV Button */}
          <a
  href="cv.pdf"
  download="Daniel-CV.pdf"
  className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center"
>
  {/* <img
    src="linkedin.png"
    alt="Download CV"
    className="w-6 h-6 inline-block mr-2"
  /> */}
  <span>Download CV</span>
</a>


        </div>
      </div>
    </div>
  );
};

export default NavBar;

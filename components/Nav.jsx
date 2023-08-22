import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="flex w-full justify-between py-6 px-6 sm:px-16">
        <h1 className="text-xl font-bold font-serif cursor-pointer">
          <Link href="/">page-persona</Link>
        </h1>

        {/* Desktop Menu  */}
        <div className="sm:flex hidden">
          <div className="flex justify-center items-center gap-5">
            <Link href="/" className="dropdown_link">
              Home
            </Link>
            <Link href="/" className="dropdown_link">
              Pricing
            </Link>
            <Link href="/" className="dropdown_link">
              About
            </Link>
            <Link href="/" className="black_btn">
              Login
            </Link>
          </div>
        </div>

        {/* Mobile menu  */}
        <div className="hidden">Mobile Menu</div>
      </div>
    </>
  );
};

export default Nav;

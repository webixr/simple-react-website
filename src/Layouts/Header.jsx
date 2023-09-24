import headerImage from "../Assets/header.jpg";
const Header = () => {
  return (
    <header
      className={`w-full h-[calc(100vh_-_64px)] flex items-center justify-center relative`}
    >
      <img
        src={headerImage}
        className="w-full h-full absolute top-0 left-0 object-cover object-center pointer-events-none -z-0"
      />

      <div className="flex flex-col items-center gap-4 relative">
        <h1 className="font-bold text-5xl text-[var(--primary-color)]">
          Hello There
        </h1>
        <p className=" max-w-xs text-center text-lg font-normal text-[var(--dark-bg)]">
          We are Leon - Super Creative & Minimal Agency Web Template
        </p>
      </div>
    </header>
  );
};

export default Header;

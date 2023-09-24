const Footer = () => {
  return (
    <footer className="w-full h-max bg-[var(--secondary-color)] relative z-50">
      <div className="container mx-auto px-2 py-6 w-full h-full flex max-sm:flex-col items-center justify-between gap-5">
        {/* CopyRights */}
        <p className="text-white text-base font-normal">
          designed by{" "}
          <strong className="text-[var(--primary-color)]">
            <a href="https://www.graphberry.com/" className="hover:underline">graphberry</a>
          </strong>
        </p>
        {/* Powered By */}
        <p className="text-white text-base font-normal">
          Powered By <strong className="text-[var(--primary-color)]">Abdulmalik ali</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

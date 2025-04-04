const Header = () => {
  return (
    <nav className="w-full  backdrop-blur-lg">
      <div className="w-[758px] h-[56px] flex  border mx-auto ">
        <div className="flex gap-12">
          <h1>
            <span>Edgar Grishin</span>
          </h1>
          <div className="flex gap-6">
            <a href="#">Works</a>
            <a href="#">Source</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

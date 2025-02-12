const SectionTitle = ({ title }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/MDjjbQgD/section-banner.png)",
      }}
    >
      <div className="hero-overlay bg-primary bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md lg:py-5 md:py-3 py-2">
          <h1 className="text-3xl font-bold text-white border-b-4 py-3">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center   md:w-4/12 mx-auto mt-10">
      <p className="text-yellow-600 font-semibold italic">{subHeading}</p>
      <h3 className="text-4xl uppercase border-y-4 py-4 mb-6 mt-3">
        {heading}
      </h3>
    </div>
  );
};
export default SectionTitle;

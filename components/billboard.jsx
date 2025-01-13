const Billboard = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold p-8 sm:p-16 text-4xl sm:text-6xl">{data.label}</div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;

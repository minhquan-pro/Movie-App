import Image from "@component/Image";

const TVShowInformation = ({ tvDetail }) => {
  const originalCountry = tvDetail.origin_country?.join("").toLowerCase();
  const networks = tvDetail.networks?.map((net) => net.logo_path);

  return (
    <div className="flex-1">
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div>
        <p className="mb-1 font-bold">Original Name</p>
        <p>{tvDetail.original_name}</p>
      </div>
      <div className="mt-4">
        <p className="mb-1 font-bold">Original Country</p>
        <img src={`https://flagcdn.com/24x18/${originalCountry}.png`} alt="" />
      </div>
      <div className="mt-4">
        <p className="mb-1 font-bold">Status</p>
        <p>{tvDetail.status}</p>
      </div>
      <div className="mt-4">
        <p className="mb-1 font-bold">Network</p>

        {networks?.map((net) => {
          return (
            <Image
              key={net}
              src={`https://media.themoviedb.org/t/p/h30/${net}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TVShowInformation;

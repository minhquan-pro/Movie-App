import Image from "@component/Image";
import { currencyFormatter } from "@libs/utlis";

const MovieInformation = ({ movieDetail }) => {
  if (!movieDetail) return;

  const originalCountry = movieDetail.origin_country?.join("").toLowerCase();

  return (
    <div className="flex-1">
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div>
        <p className="mb-1 font-bold">Original Title</p>
        <p>{movieDetail.original_title}</p>
      </div>
      <div className="mt-4">
        <p className="mb-1 font-bold">Original Country</p>
        <p>
          <Image
            src={`https://flagcdn.com/24x18/${originalCountry}.png`}
            alt=""
          />
        </p>
      </div>
      <div className="mt-4">
        <p className="mb-1 font-bold">Status</p>
        <p>{movieDetail.status}</p>
      </div>
      <div className="mt-4">
        <p className="mb-1 font-bold">Budget</p>
        <p>{currencyFormatter(movieDetail.budget, "USD")}</p>
      </div>
      <div className="mt-4">
        <p className="mb-1 font-bold">Revenue</p>
        <p>{currencyFormatter(movieDetail.revenue, "USD")}</p>
      </div>
    </div>
  );
};

export default MovieInformation;

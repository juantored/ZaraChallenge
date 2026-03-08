import { useNavigate } from "react-router-dom";
import type { Mobile } from "../../types/Mobile";
import CardMobile from "../CardMobile";

type SimilarMobilesProps = {
  similarMobiles: Mobile[];
};

function SimilarMobiles({ similarMobiles }: SimilarMobilesProps) {
  const navigate = useNavigate();

  const handleCardMobileClick = (id: string) => {
    navigate(`/mobiles/${id}`);
  };

  return (
    <>
      <div>
        <h3>SIMILAR ITEMS</h3>
        {similarMobiles.map((mobile) => (
          <CardMobile
            key={mobile.id}
            mobile={mobile}
            onClick={handleCardMobileClick}
          ></CardMobile>
        ))}
      </div>
    </>
  );
}
export default SimilarMobiles;

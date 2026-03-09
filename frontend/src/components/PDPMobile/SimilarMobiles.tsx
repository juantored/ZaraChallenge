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
      <div className="sectionSimilar">
        <p className="similar">SIMILAR ITEMS</p>
        <div className="similarMobiles">
          {similarMobiles.map((mobile) => (
            <CardMobile
              key={mobile.id}
              mobile={mobile}
              onClick={handleCardMobileClick}
            ></CardMobile>
          ))}
        </div>
      </div>
    </>
  );
}
export default SimilarMobiles;

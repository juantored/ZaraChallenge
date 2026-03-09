import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailMobile } from "../api/service";
import type { MobileInfo } from "../types/Mobile";
import Icon from "../components/Icon";
import SpecificationMobile from "../components/PDPMobile/SpecificationMobile";
import SimilarMobiles from "../components/PDPMobile/SimilarMobiles";
import MainMobile from "../components/PDPMobile/MainMobile";
import "../styles/pages/PDPMobile.scss";

function PDPMobile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [mobileInfo, setMobileInfo] = useState<MobileInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMobile = async () => {
    if (!id) return;

    // Comporbamos si estamos cargando ya datos
    if (loading) return;
    setLoading(true);

    try {
      const response = await getDetailMobile(id);

      // Filtramos los datos de storageOptions de la respuesta para no tener capacity repetidos
      const storageOptions = response.storageOptions.filter(
        (storage, index, array) =>
          array.findIndex((i) => i.capacity === storage.capacity) === index,
      );

      // Filtramos los datos de storageOptions de la respuesta para no tener hexCode repetidos
      const colorOptions = response.colorOptions.filter(
        (color, index, array) =>
          array.findIndex((i) => i.hexCode === color.hexCode) === index,
      );

      // Filtramos los datos de similarProducts de la respuesta para no tener ids repetidos
      const similarProducts = response.similarProducts.filter(
        (product, index, array) =>
          array.findIndex((i) => i.id === product.id) === index,
      );

      response.storageOptions = storageOptions;
      response.colorOptions = colorOptions;
      response.similarProducts = similarProducts;

      setMobileInfo(response);
    } catch (err) {
      console.log(err);
    } finally {
      // Al finalizar indicamos que ya se puede volver a lanzar otra peticion
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchMobile();
  }, [id]);

  return (
    <>
      <div className="back" onClick={handleBack}>
        <Icon name="Back" />
        <p>BACK</p>
      </div>

      {mobileInfo && (
        <MainMobile
          name={mobileInfo.name}
          basePrice={mobileInfo.basePrice}
          storageOptions={mobileInfo.storageOptions}
          colorOptions={mobileInfo.colorOptions}
        />
      )}

      {mobileInfo && (
        <SpecificationMobile
          name={mobileInfo.name}
          brand={mobileInfo.brand}
          description={mobileInfo.description}
          specs={mobileInfo.specs}
        />
      )}

      {mobileInfo && (
        <SimilarMobiles similarMobiles={mobileInfo.similarProducts} />
      )}
    </>
  );
}
export default PDPMobile;

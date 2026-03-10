import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListMobiles } from "../api/service";
import type { Mobile } from "../types/Mobile";
import InfiniteScroll from "react-infinite-scroll-component";
import { useError } from "../context/ErrorContext";
import CardMobile from "../components/CardMobile";
import SearchBar from "../components/SearchBar";
import "../styles/pages/ListMobile.scss";

function ListMobiles() {
  // Control para navegar
  const navigate = useNavigate();
  const limit = 20;

  // Context para mostrar errores
  const { showError } = useError();

  const [listMobiles, setListMobiles] = useState<Mobile[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Se usa un debounced para evitar llamar a la api por cada caracter escrito
  const [search, setSearch] = useState("");

  // Necesario para evitar StrictMode en desarrollo, si no se indica, ejecuta la consulta dos veces
  // Tambien tengo que tener más cuiddado por el InfiniteScroll
  const [loading, setLoading] = useState(false);

  // Función para llamar a la API
  const fetchMobiles = async (
    currentListMobiles: Mobile[] = listMobiles,
    currentOffset: number = offset,
    currentHasMore: boolean = hasMore,
  ) => {
    // Comporbamos si estamos cargando ya datos
    if (loading) return;
    setLoading(true);

    // Cuando se busca un elemento se pondrá por defecto el hasMore a true
    if (currentHasMore) setHasMore(currentHasMore);

    try {
      const response = await getListMobiles(search, limit * 1.5, currentOffset);

      // Filtramos la listMobile que tenemos con la respuesta, en caso de que exista id duplicado se ignora
      const filterListMobile = Array.from(
        new Map(
          [...currentListMobiles, ...response].map((m) => [m.id, m]),
        ).values(),
      );

      // Calculamos múltiplo de limit
      const multipleOfLimitLength =
        Math.floor(filterListMobile.length / limit) * limit;

      // Comprobamos si la respuesta devolvio menos del limite establecido
      if (response.length < limit) {
        setListMobiles(filterListMobile);

        setHasMore(false);
      } else {
        // Añadimos en la listMobiles el mayor multiplo de limit
        setListMobiles(filterListMobile.slice(0, multipleOfLimitLength));

        // Comprobamos si se añadieron nuevos campos, en caso de que no cambiaremos el setHasMore a false
        if (filterListMobile.length == currentListMobiles.length) {
          setHasMore(false);
        }
      }

      const newOffset = multipleOfLimitLength;
      setOffset(newOffset);
    } catch (err: any) {
      showError(
        "Error to get mobiles, if the error persists, contact the administrator.",
      );
      setHasMore(false);
    } finally {
      // Al finalizar indicamos que ya se puede volver a lanzar otra peticion
      setLoading(false);
    }
  };

  // Reseteamos los valores por defecto y volvemos a llamar a la API con el nuevo valor de search
  useEffect(() => {
    fetchMobiles([], 0, true);
  }, [search]);

  const handleCardMobileClick = (id: string) => {
    navigate(`/mobiles/${id}`);
  };

  return (
    <>
      <div className="searchMobile">
        <SearchBar value={search} onChange={setSearch} />
        <p>{listMobiles.length} RESULTS</p>
      </div>

      <InfiniteScroll
        dataLength={listMobiles.length}
        next={fetchMobiles}
        hasMore={hasMore}
        loader={<h1>Cargando...</h1>}
      >
        <div className="container-grid">
          {listMobiles.map((mobile) => (
            <CardMobile
              key={mobile.id}
              mobile={mobile}
              onClick={handleCardMobileClick}
            ></CardMobile>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default ListMobiles;

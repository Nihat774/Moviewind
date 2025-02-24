import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../../components/Fetch";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

function Home() {
  const { data, error, loading } = useFetch("movie/popular");
  const query = useSelector((state) => state.search.query);

  if (loading) {
    return(
      <>
      <Loader />
      </>
    )
  }

  if (error) {
    return <p className="text-white text-center flex justify-center items-center min-h-screen">Xəta baş verdi! Məlumatlar alınmadı.</p>;
  }

  // Məlumat yoxdursa
  if (!data?.results || data.results.length === 0) {
    return <p className="text-white text-center flex justify-center items-center min-h-screen">Heç bir məlumat tapılmadı.</p>;
  }

  // Filtrlənmiş məlumat (axtarış üçün)
  const filteredData = data.results.filter((item) =>
    item.original_title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredData.length === 0 ? (
            <p className="text-white text-center">Heç bir uyğun film tapılmadı.</p>
          ) : (
            filteredData.map((item) => (
              <Link
                key={item.id}
                to={`/${item.id}`}
                className="border-dashed border rounded-xl border-white"
              >
                <div className="md:h-[50vh] h-[30vh]">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="Movie Poster"
                    className="h-full md:object-cover w-full rounded-xl"
                  />
                </div>
                <div className="p-3">
                  <p className="font-bold">{item.original_title}</p>
                  <p>İzləmə sayı: {item.vote_count}</p>
                  <p>Reytinq: {item.vote_average}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Home;

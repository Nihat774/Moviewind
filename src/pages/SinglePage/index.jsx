import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../components/Fetch";
import Loader from "../../components/Loader";

function SinglePage() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]); // `id` dependency olaraq əlavə olundu

  if (!data) {
    return;
    <div className="min-h-screen">
      <Loader />
    </div>;
  }

  return (
    <>
      <React.Fragment key={data.id}>
        <div className="flex flex-col md:flex-row gap-0 md:gap-5 border-dashed border rounded-xl border-white">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="Movie Poster"
              className="md:h-[52vh] h-[45vh] w-full md:w-[70vw] rounded-xl"
            />
          </div>
          <div className="p-3 flex flex-col justify-around">
            <div className="flex flex-col md:flex-row gap-2 text-2xl">
              <p>Filmin adı:</p>
              <p>{data.original_title}</p>
            </div>

            <div>
              <p className="text-xl font-semibold">Film haqqında:</p>
              <p className="w-full md:w-[50vw]">{data.overview}</p>
            </div>

            <div>
              <p>Çəkildiyi tarix: {data.release_date}</p>
            </div>

            <div className="flex justify-between">
              <p className="rounded-3xl md:w-fit bg-white text-slate-900 h-fit py-2 md:px-2 text-center w-[45vw]">
                Izlənmə sayı: {data.vote_count}
              </p>
              <p className="rounded-3xl md:w-fit bg-white text-slate-900 h-fit py-2 md:px-2 text-center w-[40vw]">
                Reyting: {data.vote_average}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default SinglePage;

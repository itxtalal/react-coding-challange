import { useState, useEffect } from "react";
import { Photo } from "../interfaces";
import axios from "axios";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";

const Body: React.FC = () => {
  const [data, setPhotosResponse] = useState<any>(null);

  const fetchMoreData = () => {
    axios.get("/api/unsplash").then((result) => {
      setPhotosResponse(() => data.concat(result.data.result.response.results));
      console.log(result);
    });
  };

  useEffect(() => {
    axios.get("/api/unsplash").then((result) => {
      setPhotosResponse(result.data.result.response.results);
      console.log(result);
    });
  }, []);

  if (data === null) {
    return <ClipLoader />;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
      </div>
    );
  } else {
    return (
      <div className="max-w-[1920px]">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
            <div className="my-3 w-full flex items-center justify-center">
              <ClipLoader />
            </div>
          }
          style={{ overflowY: "hidden" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {data.map((photo: Photo) => (
              <div key={photo.id} className="h-[300px] w-[300px]  relative">
                <Image
                  src={photo.urls.regular}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
};

export default Body;

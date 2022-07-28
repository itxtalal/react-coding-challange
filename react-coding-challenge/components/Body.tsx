import { useState, useEffect } from "react";
import { Photo } from "../interfaces";
import axios from "axios";
import Image from "next/image";

const Body: React.FC = () => {
  const [data, setPhotosResponse] = useState<any>(null);

  useEffect(() => {
    axios.get("/api/unsplash").then((result) => {
      console.log(result);
      setPhotosResponse(result.data.result);
    });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="max-w-[1920px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.response.results.map((photo: Photo) => (
            <div
              key={photo.id}
              className="h-[300px] w-[300px] bg-red-200 relative"
            >
              <Image
                src={photo.urls.regular}
                alt="image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;

import { useState, useEffect } from "react";
import { Photo } from "../interfaces";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import PhotoComp from "./Photo";

const Body: React.FC = () => {
  // holds all the images data in an array
  const [data, setPhotosResponse] = useState<any>(null);

  // to get 10 more images and update the data array
  const fetchMoreData = () => {
    axios.get("/api/unsplash").then((result) => {
      setPhotosResponse(() => data.concat(result.data.unsplash.response));
    });
  };

  // fetch the 10 images on first render
  useEffect(() => {
    axios.get("/api/unsplash").then((result) => {
      setPhotosResponse(result.data.unsplash.response);
    });
  }, []);

  // If the images are still fetching, show Loading state
  if (data === null) {
    return (
      <div className="h-screen my-3 w-full flex items-center justify-center">
        <ClipLoader />
      </div>
    );
  } else if (data.errors) {
    // if error occured while fetching, show error message
    return (
      <div>
        <div>{data.errors[0]}</div>
      </div>
    );
  } else {
    // if images are fetched, display them
    // <InfiniteScroll /> is used to run a function whenever the user scrolls to the bottom of the page
    return (
      <div className="max-w-[1920px] py-2">
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
            {/* data is mapped to individual Image elements */}
            {data.map((photo: Photo) => (
              <PhotoComp key={photo.id} photo={photo} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
};

export default Body;

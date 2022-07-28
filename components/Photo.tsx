import { Photo } from "../interfaces";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { ClipLoader } from "react-spinners";

const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
  const { user, urls } = photo;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <div className="h-[300px] w-[300px]  relative">
      <Image
        src={urls.small}
        alt="image"
        layout="fill"
        objectFit="contain"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className=" relative w-[90%] h-[100%] m-2 mx-auto bg-no-repeat bg-center flex items-center justify-center text-center">
          {/* While image loads, conditionally render loader */}
          {loading && <ClipLoader />}

          {/* Image is displayed when loaded  */}
          <Image
            src={urls.regular}
            alt="image"
            layout="fill"
            objectFit="contain"
            onLoadingComplete={() => setLoading(false)}
            className="bg-no-repeat bg-center mx-auto text-center"
          />
        </div>
        {/* Image Details */}
        <div className="flex flex-col sm:flex-row sm:gap-4 text-black">
          <h5 className="font-medium">Downloads: {photo.downloads}</h5>
          <h5 className="font-medium">Likes: {photo.likes}</h5>
          <h5 className="font-medium">Views: {photo.views}</h5>
        </div>
        <div className="flex flex-wrap gap-2 underline text-sky-600">
          <a target={"_blank"} rel="noreferrer" href={photo.links.download}>
            View Full Pic
          </a>
          <a target={"_blank"} rel="noreferrer" href={user.links.html}>
            {" "}
            {photo.user.name}
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default PhotoComp;

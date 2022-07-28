import { Photo } from "../interfaces";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
  const { user, urls } = photo;
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Image
        src={urls.small}
        alt="image"
        layout="fill"
        objectFit="contain"
        // onClick={() => setShowModal(true)}
      />
      {/* <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="max-w-[60vw] max-h-[40vh]">
          <Image
            src={urls.regular}
            alt="image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Modal> */}
    </div>
  );
};

export default PhotoComp;

import { Photo } from "../interfaces";
import Image from "next/image";

const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <>
      <Image className="img" src={urls.regular} alt="image" layout="fill" />
      {/* <a
        className="credit"
        target="_blank"
        rel="noreferrer"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a> */}
    </>
  );
};

export default PhotoComp;

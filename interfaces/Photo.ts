export type Photo = {
  alt_description: string;
  description: string;
  createdAt: string;
  likes: number;
  downloads: number;
  views: number;
  links: {
    download: string;
    html: string;
  };
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
    total_photos: number;
    total_likes: number;
    links: {
      portfolio: string;
      html: string;
    };
    profile_image: {
      large: string;
      regular: string;
      raw: string;
      small: string;
    };
  };
};

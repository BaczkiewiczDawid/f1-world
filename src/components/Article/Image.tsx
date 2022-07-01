import { Header } from "components/Article/Image.style";

export type ImageType = {
    src: string,
    alt: string,
}

const Image = ({ src, alt }: ImageType) => {
  return (
    <Header>
      <img src={src} alt={alt} />
    </Header>
  );
};

export default Image
import Image from "next/image";

const imageKitLoader = ({ src, width, quality }) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  const IMAGEKIT_ID = process.env.NEXT_PUBLIC_IMAGEKIT_ID;
  var urlEndpoint = `https://ik.imagekit.io/${IMAGEKIT_ID || "atza"}`;
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

const CustomImage = ({ src, alt, width, height }) => {
  return (
    <Image
      loader={imageKitLoader}
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 400}
    />
  );
};

export default CustomImage;

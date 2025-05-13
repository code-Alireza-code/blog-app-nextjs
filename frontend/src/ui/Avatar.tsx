import Image, { ImageProps } from "next/image";

type AvatarProps = {
  src: string;
  width?: number;
  alt: string;
} & ImageProps;

function Avatar({ src, width = 24, alt, ...rest }: AvatarProps) {
  return (
    <Image
      className="rounded-full ring-1 ring-secondary-300"
      src={src || "/images/avatar.png"}
      alt={alt}
      width={width}
      height={width}
      {...rest}
    />
  );
}

export default Avatar;

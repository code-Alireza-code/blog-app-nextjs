import { Post } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";

type CoverImageProps = Pick<Post, "coverImageUrl" | "title" | "slug">;

function CoverImage({ coverImageUrl, title, slug }: CoverImageProps) {
  return (
    <div className="relative aspect-video overflow-hidden mb-4 rounded-md">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center hover:scale-105 transition-all duration-300 ease-out"
          quality={80}
        />
      </Link>
    </div>
  );
}

export default CoverImage;

import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
  return (
    <div className="justify-between grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-7 mx-7 pt-7 md:mx-10 md:pt-10">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/${anime.mal_id}`} className="cursor-pointer"
          key={index}
          >
          <Image 
            src={anime.images.jpg.image_url} 
            alt="" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover"
          />
          <h3 className="font-bold md:text-xl text-md p-3 text-color-primary">{anime.title}</h3>
        </Link>
        )
      })}
    </div>
  )
}

export default AnimeList
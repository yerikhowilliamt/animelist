import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import Footer from "@/components/AnimeList/footer"

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
  const topAnime = await response.json()


  return (
    <>
    {/* MOST POPULAR ANIME SECTION */}
      <section className="text-center bg-neutral-950 text-white">
      <Header title={"MOST POPULAR"} />
      <AnimeList api={topAnime} />
      <Footer linkTitle="See all..." linkHref="/popular" />
      </section>

    {/* NEW ANIME SECTION */}
    </>
  )
}

export default Page
import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import Footer from "@/components/AnimeList/footer"

const Page = async ({params}) => {

  const {keyword} = params

  const decodedKeyword = decodeURI(keyword)
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  const searchAnime = await response.json()


  return (
    <>
    {/* SEARCH ANIME SECTION */}
      <section className="text-center bg-neutral-950 text-white">
      <Header title={`${decodedKeyword}`} />
      <AnimeList api={searchAnime} />
      <Footer />
      </section>

    {/* NEW ANIME SECTION */}
    </>
  )
}

export default Page
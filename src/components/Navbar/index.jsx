import Link from "next/link"
import InputSearch from "./inputSearch"

const Navbar = () => {
  return (
  <header className="bg-color-accent">
    <div className="flex md:flex-row flex-col justify-between gap-2 p-3">
      <Link href='/' className="text-3xl font-extrabold items-center">WILLIAMNIMELIST</Link>
      <InputSearch />
    </div>
  </header>
  )
}

export default Navbar
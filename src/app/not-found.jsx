import Link from "next/link"


const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-color-accent text-4xl font-bold">404 <span className="font-light ">||</span> NOT FOUND</h3>
        <Link href="/" className="text-color-accent hover:text-color-primary text-2xl pt-8">HOME</Link>
      </div>
    </div>
  )
}

export default Page
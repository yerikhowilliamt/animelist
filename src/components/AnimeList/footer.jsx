import Link from "next/link"

const Footer = ({ linkHref, linkTitle }) => {
  return (
    <div className="flex justify-center  text-center p-5">
      {
        linkHref && linkTitle 
        ? 
        <Link href={linkHref} className="md:text-xl text-md  rounded p-1 hover:text-color-dark text-color-primary hover:bg-color-primary transition-all ">{linkTitle}
        </Link>
        : 
        null
      }
    </div>
    
  )
}

export default Footer
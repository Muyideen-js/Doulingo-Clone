import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type Props ={
    title: React.ReactNode;
}

export const Head = ({title}: Props) => {
  return (
    <div className="sticky bg-white top-0 pb-3 lg:pt-[10px] flex items-center justify-between mb-5 text-neutral-400 lg:z-50">
                <Link href='/courses'>
                    <FaArrowLeft />
                </Link>
       <h1 className="font-bold text-xl">
           {title}
       </h1>
       <div />
    </div>
  )
}

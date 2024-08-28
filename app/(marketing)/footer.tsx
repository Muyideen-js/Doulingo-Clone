import Image from "next/image"
import Croatian from "../../public/hr.svg"
import Spanish from "../../public/es.svg"
import French from "../../public/fr.svg"
import Italian from "../../public/it.svg"
import Japanese from "../../public/jp.svg"


const footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
        <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
          <button className="btn-gost max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Image src={Croatian} alt="Croatian Flag" height={32} width={40} className="mr-4 rounded-md"/>
              CROATIAN
          </button>
          <button className="btn-gost max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Image src={Spanish} alt="Spanish Flag" height={32} width={40} className="mr-4 rounded-md"/>
              SPANISH
          </button>
          <button className="btn-gost max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Image src={French} alt="French Flag" height={32} width={40} className="mr-4 rounded-md"/>
              FRENCH
          </button>
          <button className="btn-gost max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Image src={Italian} alt="Italian Flag" height={32} width={40} className="mr-4 rounded-md"/>
              ITALIAN
          </button>
          <button className="btn-gost max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Image src={Japanese} alt="Japanese Flag" height={32} width={40} className="mr-4 rounded-md"/>
              JAPANESE
          </button>
        </div>
    </footer>
  )
}

export default footer
import Image from "next/image";
import Link from "next/link";
import { FaInfinity } from "react-icons/fa";
import Points from "../public/points.svg"
import Hearts from "../public/heart.svg"

type Props = {
  activeCourse: { imgSrc: string; title: string };
  hearts: number;
  point: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  point,
  hearts,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <button>
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </button>
      </Link>
      <Link href="/shop">
        <button className="text-orange-500 btn-gost flex">
          <Image src={Points} height={28} width={28} alt="Points" className="mr-2" />
          {point}
        </button>
      </Link>
      <Link href="/shop">
        <button className="text-rose-500 btn-gost flex">
          <Image src={Hearts} height={22} width={22} alt="hearts" className="mr-2" />
          {hasActiveSubscription ? <div className="h-4 w-4 stroke-[3]"><FaInfinity /></div> : hearts}
        </button>
      </Link>
    </div>
  );
};

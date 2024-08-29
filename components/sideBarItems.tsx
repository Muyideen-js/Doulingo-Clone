"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  label: string;
  iconSrc: string;
  href: string;
}

const SideBarItems = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <button className={`${active ? "btn-sidebar-outline" : 'btn-gost'} h-[52px] flex items-center pl-2 lg:pl-10`}>
      <Image 
        src={iconSrc}
        alt={label}
        className='mr-5'
        height={32}
        width={32}
      />
      <Link href={href}>
        {label}
      </Link>
    </button>
  );
}

export default SideBarItems;

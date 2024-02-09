import Link from 'next/link';
import React from 'react'

type propType = {
  title: string
  path: string
}

const NavLink = ({title, path}: propType) => {
  return (
      <Link href={path}>{title}</Link>
  );
}

export default NavLink
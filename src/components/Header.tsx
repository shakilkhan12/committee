'use client'

import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-gray-50 p-5 min-h-[120px] flex items-center justify-center">
      <Link href="/">
         <h1 className="text-4xl urdu">نوے کلے کمیٹی کھاتہ</h1>
      </Link>
    </div>
  )
}

export default Header
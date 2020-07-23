import Link from "next/link"
import React from "react"
import { useState } from "../overmind"

function Header() {
  const { page } = useState()

  return (
    <div>
      <h1>{page}</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  )
}

export default Header

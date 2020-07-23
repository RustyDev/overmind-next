import React from "react"
import { useState } from "../overmind"

function Items() {
  const { items } = useState()

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default Items

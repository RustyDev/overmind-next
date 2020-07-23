import React from "react"
import { useState } from "../overmind"

function Items() {
  const state = useState()

  console.log(state)

  return (
    <ul>
      {state.items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default Items

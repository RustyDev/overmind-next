import React from "react"
import { useState } from "../overmind"

function Items() {
  const state = useState()
  return (
    <ul>
      {state.completedItems.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default Items

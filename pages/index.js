import { createOvermindSSR } from "overmind"
import { config } from "../overmind"
import Header from "../components/Header"
import Items from "../components/Items"

export async function getServerSideProps() {
  // If we want to produce some mutations we do so by instantiating
  // an Overmind SSR instance, do whatever datafetching is needed and
  // change the state directly. We return the mutations performed with
  // "hydrate"
  const overmind = createOvermindSSR(config)

  overmind.state.page = "Index"
  overmind.state.items = [
    {
      id: 0,
      title: "foo",
      completed: false,
    },
    {
      id: 1,
      title: "bar",
      completed: true,
    },
  ]

  return {
    props: { mutations: JSON.parse(JSON.stringify(overmind.hydrate())) },
  }
}

export default function IndexPage() {
  return (
    <div>
      <Header />
      <Items />
    </div>
  )
}

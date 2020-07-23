import { rehydrate, statemachine, derived } from "overmind"
import { createStateHook, createActionsHook } from "overmind-react"

export const config = {
  state: statemachine(
    {
      unauthenticated: ["AUTHENTICATING"],
      authenticating: ["UNAUTHENTICATED", "AUTHENTICATED"],
      authenticated: ["UNAUTHENTICATING"],
      unauthenticating: ["UNAUTHENTICATED", "AUTHENTICATED"],
    },
    {
      completedItems: derived(({ items }) => {
        return items.filter((item) => item.completed)
      }),
      items: [],
      page: null,
    }
  ),
  actions: {
    changePage({ state }, mutations) {
      rehydrate(state, mutations || [])

      switch (state.page) {
        case "Index":
          // Do some additional logic
          break
        case "About":
          // Do some additional logic
          break
        default:
          break
      }
    },
  },
}

export const useState = createStateHook()
export const useActions = createActionsHook()

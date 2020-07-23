import { rehydrate, statemachine, derived } from "overmind"
import { createStateHook, createActionsHook } from "overmind-react"

export const config = {
  state: {
    state: "UNAUTHENTICATED",
    items: [],
    completedItems: derived((state) => {
      return state.items.filter((item) => item.completed)
    }),
    page: null,
  },
  actions: {
    changePage({ state }, mutations) {
      console.log(mutations)
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

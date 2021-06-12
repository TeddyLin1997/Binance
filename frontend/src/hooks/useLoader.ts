import { useReducer, Dispatch, useMemo } from 'react'

type LoaderState = number
type LoaderAction = keyof typeof ACTION_TYPE

const initState: LoaderState = 0

const ACTION_TYPE = {
  load: 'load',
  unload: 'unload',
  reset: 'reset',
}

function reducer (state: LoaderState, action: LoaderAction) {
  if (action === ACTION_TYPE.load) return ++state
  else if (action === ACTION_TYPE.unload) return --state
  else if (action === ACTION_TYPE.reset) return 0
  else return state
}

const useLoader = () => {
  const [ state, dispatch ] = useReducer(reducer, initState)
  const isLoading = useMemo(() => state !== 0, [state])

  return [ isLoading, dispatch ] as [ boolean, Dispatch<LoaderAction>]
}

export default useLoader
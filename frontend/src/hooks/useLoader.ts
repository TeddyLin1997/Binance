import { useState, useEffect } from 'react'

const useLoader = () => {
  let loaderCount = 0
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    if (loaderCount === 0) setIsLoading(false)
    else setIsLoading(true)
  }, [loaderCount])

  return {
    status: isLoading,
    load: () => loaderCount--,
    unload: () => loaderCount++,
    reset: () => (loaderCount = 0),
  }
}

export default useLoader

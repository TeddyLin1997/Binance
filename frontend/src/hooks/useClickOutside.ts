import { useEffect } from 'react'

const useClickOutside = (callback: Function) => {
  const handleClickOutSide = (event: MouseEvent) => callback(event)

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide)
    return () => document.removeEventListener('click', handleClickOutSide)
  }, [])
}

export default useClickOutside
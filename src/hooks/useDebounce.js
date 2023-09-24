import { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    //Clear timeout
    return () => clearTimeout(handler)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return debouncedValue
}

export default useDebounce

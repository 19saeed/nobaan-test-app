import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

export const useKeyPress = (key: string, callback: any, node = null): void => {
  // implement the callback ref pattern
  const callbackRef = useRef(callback)
  useLayoutEffect(() => {
    callbackRef.current = callback
  })

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      // check if key combanition is the one we want
      if (key === event.key && event.ctrlKey && event.shiftKey) {
        callbackRef.current(event)
      }
    },
    [key]
  )

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document
    // attach the event listener
    targetNode.addEventListener('keydown', handleKeyPress)

    // remove the event listener
    return () => {
      targetNode.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress, node])
}

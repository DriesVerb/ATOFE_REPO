import { useState, useLayoutEffect } from 'react'
import { Children } from '#/types/global/common'
import { createPortal } from 'react-dom'

// https://blog.logrocket.com/build-modal-with-react-portals/
 
function createWrapperAndAppend(wrapperId: string) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

function Portal({
  children,
  wrapperId,
}: {
  children: Children
  wrapperId: string
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppend(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element!.parentNode) {
        element!.parentNode.removeChild(element as HTMLElement);
      }
    }
  }, [wrapperId]);

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default Portal

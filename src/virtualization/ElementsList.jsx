import { cloneElement } from 'react'

export const ElementsList = ({ children, list, itemHeight }) => {
  return (
    <>
      {list.map((element, index) => (
        <div style={{ height: itemHeight }}>
          {cloneElement(children, {
            key: element.id,
            element,
            index,
          })}
        </div>
      ))}
    </>
  )
}

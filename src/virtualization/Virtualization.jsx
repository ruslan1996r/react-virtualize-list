import React, { useState } from 'react'

import { ElementsList } from './ElementsList'

export const Virtualization = ({
  data,
  itemCount,
  itemHeight,
  itemsGap = 1,
  width,
  children,
}) => {
  const size = data.length
  const showByDefault = itemCount + itemsGap
  const initialData = data.slice(0, showByDefault)
  const containerHeight = itemHeight * itemCount
  const containerStyle = { height: containerHeight, width }

  const [list, setList] = useState(initialData)
  const [styles, setStyles] = useState({
    height: size * itemHeight,
    paddingTop: 0,
  })

  const onScroll = (event) => {
    const top = Math.round(event.target.scrollTop)

    const startIndex = Math.floor(top / itemHeight)
    const startIndexWithGap =
      startIndex - itemsGap < 0 ? 0 : startIndex - itemsGap

    const lastElementWithGap = startIndex + itemCount + itemsGap

    const list = data.slice(startIndexWithGap, lastElementWithGap)
    const newPadding = startIndexWithGap * itemHeight

    setList(list)
    setStyles({
      height: size * itemHeight - newPadding,
      paddingTop: newPadding,
    })
  }
  return (
    <div>
      <div className="container" onScroll={onScroll} style={containerStyle}>
        <div style={styles}>
          <ElementsList
            children={children}
            list={list}
            itemHeight={itemHeight}
          />
        </div>
      </div>
    </div>
  )
}

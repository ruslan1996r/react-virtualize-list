import './App.css'
import { generateList } from './utils'

export const Element = (props) => {
  const { element, index } = props

  return (
    <div className="element">
      <div>
        <h4>{element.title}</h4>
        <h5>{index + 1}</h5>
      </div>
      <div className="columns">
        {generateList(60).map((element, index) => {
          return (
            <div key={element.id}>
              <div style={{ marginRight: 20 }}>
                <span>SubElemIndex: {index}</span>
                <span>{element.text} </span>
                <span> {element.index}</span>
              </div>
            </div>
          )
        })}
      </div>
      <p>{element.text}</p>
    </div>
  )
}

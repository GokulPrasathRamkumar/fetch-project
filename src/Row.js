import React from 'react'
import Cells from './Cells'

const Row = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return(
          <Cells key={key} cellData={JSON.stringify(value)}/>
        )
      })}
    </tr>
  )
}

export default Row
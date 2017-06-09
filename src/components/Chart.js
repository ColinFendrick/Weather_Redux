import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = props => (
  <div>
    <Sparklines data={props.data} width={180} height={120}>
      <SparklinesLine color={props.color} />
    </Sparklines>
  </div>
)

export default Chart

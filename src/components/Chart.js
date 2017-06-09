import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default props => (
  <div>
    <Sparklines data={props.data} width={180} height={100}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type='avg' />
    </Sparklines>
    <div>{average(props.data)}</div>
  </div>
);
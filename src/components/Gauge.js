import React from 'react';
import { arc } from 'd3';
import { scaleLinear } from 'd3';

const Gauge = ({ min = 0, max = 100, data }) => {
  const { name, score, vsly, sample } = data;
  const backgroundArc = arc()
    .innerRadius(68)
    .outerRadius(80)
    .startAngle(0)
    .endAngle(Math.PI * 2)
    .cornerRadius(1)();
  const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
  const percent = percentScale(score);

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([0, Math.PI * 2])
    .clamp(true);
  const angle = angleScale(percent);
  const filledArc = arc()
    .innerRadius(68)
    .outerRadius(80)
    .startAngle(0)
    .endAngle(angle)
    .cornerRadius(1)();

  return (
    <>
      <div>
        <svg
          width='13%'
          height='13%'
          viewBox={[-100, -150, 200, 300].join(' ')}
          style={{
            border: '1px solid pink',
          }}
        >
          <path d={backgroundArc} fill='#dbdbe7' />
          <path d={filledArc} fill='#00aeef' />
          <text
            x='0'
            y='-100'
            fontFamily='Verdana'
            fontSize='15'
            fill='black'
            textAnchor='middle'
          >
            {name}
          </text>
          <text
            x='0'
            y='0'
            fontFamily='Verdana'
            fontSize='15'
            fill='black'
            textAnchor='middle'
          >
            {score}%
          </text>
          <text
            x='0'
            y='25'
            fontFamily='Verdana'
            fontSize='15'
            fill='black'
            textAnchor='middle'
          >
            {vsly || 'N/A'}
          </text>
          <text
            x='0'
            y='110'
            fontFamily='Verdana'
            fontSize='15'
            fill='black'
            textAnchor='middle'
          >
            Sample: {sample}
          </text>
        </svg>
      </div>
    </>
  );
};
//
export default Gauge;

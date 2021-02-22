import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '../App.css';

const AreChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('path').remove();
    svg.selectAll('linearGradient').remove();
    svg.selectAll('circle').remove();
    svg.selectAll('text').remove();

    const height = 200;
    const width = 600;
    const margin = { top: 20, right: 100, bottom: 20, left: 100 };

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.date))
      .range([margin.left, width - margin.right]);

    const y1 = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.score)])
      .range([height - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(x).tickSizeOuter(0);

    svg
      .select('.x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg
      .append('linearGradient')
      .attr('id', 'areaGradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0)
      .attr('y1', '0%')
      .attr('x2', 0)
      .attr('y2', '100%')
      .selectAll('stop')
      .data([
        { offset: '0%', color: '#0071c5' },
        { offset: '100%', color: 'white' },
      ])
      .enter()
      .append('stop')
      .attr('offset', function (d) {
        return d.offset;
      })
      .attr('stop-color', function (d) {
        return d.color;
      });

    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr(
        'd',
        d3
          .line()
          .curve(d3.curveCardinal)
          .x((d) => {
            return x(d.date);
          })
          .y((d) => {
            return y1(d.score);
          })
      );
    svg
      .append('path')
      .datum(data)
      .attr('class', 'area')
      .attr(
        'd',
        d3
          .area()
          .curve(d3.curveCardinal)
          .x((d) => {
            return x(d.date);
          })
          .y0(y1(0))
          .y1((d) => {
            return y1(d.score);
          })
      );
    svg
      .selectAll('line-circle')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'text-circle')
      .append('circle')
      .attr('class', 'data-circle')
      .attr('r', 8)
      .attr('cx', (d) => {
        return x(d.date);
      })
      .attr('cy', (d) => {
        return y1(d.score);
      });

    svg
      .selectAll('.text-circle')
      .append('text')
      .data(data)
      .text((d) => d.score + '%')
      .attr('x', (d) => x(d.date))
      .attr('y', (d) => y1(d.score + 10))
      .attr('class', 'text');
  }, [data]);

  return (
    <>
      <div>
        <svg
          ref={svgRef}
          viewBox={[150, -30, 200, 300].join(' ')}
          style={{
            height: 500,
            width: '100%',
            marginRight: '0px',
            marginLeft: '0px',
          }}
        >
          <g className='x-axis' />
        </svg>
      </div>
    </>
  );
};

export default AreChart;

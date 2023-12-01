import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  const StSectionS = styled.section`
    background-color: #fff;
    padding: 20px;
    justify-content: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    min-width: 380px;
  `;

  const StTitleS = styled.h2`
    font-weight: 700;
    font-size: 28px;
    color: #000137;
    margin: 0;
  `;

  const StListS = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: space-between;
    text-align: center;
    padding-inline-start: 0;
    margin-top: 30px;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px #c1c1c1;
    width: 90%;
  `;

  const StElementS = styled.li`
    padding: 5px;
    width: 15vw;
    min-width: 60px;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 150px;
  `;

  const StLabelS = styled.span`
    color: #c1c1c1;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  `;

  const StPercentage = styled.span`
    color: #000137;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.5em;
  `;

  const StBar = styled.div`
    background-color: ${({ bgcolor }) => bgcolor};
    width: 90%;
    height: ${({ height }) => height};
    position: absolute;
    bottom: 10px;
  `;

  return (
    <StSectionS>
      <StTitleS>{title}</StTitleS>

      <StListS>
        {stats.map(stat => (
          <StElementS key={stat.id}>
            <StLabelS>{stat.label}</StLabelS>
            <StPercentage>{`${stat.percentage}%`}</StPercentage>
            <StBar
              height={`${stat.percentage}px`}
              bgcolor={getRandomHexColor()}
            ></StBar>
          </StElementS>
        ))}
      </StListS>
    </StSectionS>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 2000)
    .toString(16)
    .padStart(3, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;

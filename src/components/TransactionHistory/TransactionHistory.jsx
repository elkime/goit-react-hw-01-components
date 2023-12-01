import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function TransactionHistory({ title, items }) {
  const StSection = styled.section`
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

  const StTitle = styled.h2`
    font-weight: 700;
    font-size: 28px;
    color: #000137;
    margin: 0;
  `;

  const StTable = styled.table`
    padding: 10px;
    margin-top: 20px;
    width: 90%;
    justify-content: center;
    box-shadow: 5px 5px 5px 2px #c1c1c1;
    border-radius: 10px;
  `;

  const StHead = styled.th`
    width: 19%;
    line-height: 2em;
    min-width: 55px;
    color: #fff;
    background-color: #2E8B57;
  `;

  const StItem = styled.tr`
    height: 30px;
    &:nth-child(2n) {
      background-color: #c1c1c1;
    }
  `;

  const StData = styled.td`
    color: #000;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  `;

  return (
    <StSection>
      <StTitle>{title}</StTitle>
      <StTable>
        <thead>
          <tr>
            <StHead>TYPE</StHead>
            <StHead>AMOUNT</StHead>
            <StHead>CURRENCY</StHead>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <StItem key={item.id}>
              <StData>{item.type}</StData>
              <StData>{item.amount}</StData>
              <StData>{item.currency}</StData>
            </StItem>
          ))}
        </tbody>
      </StTable>
    </StSection>
  );
}

TransactionHistory.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default TransactionHistory;

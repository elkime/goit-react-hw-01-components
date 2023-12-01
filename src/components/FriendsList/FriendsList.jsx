import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FriendsList({ title, friends }) {
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

  const StList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: space-between;
    text-align: center;
    padding-inline-start: 0;
    margin-top: 30px;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
  `;

  const StElement = styled.li`
    padding: 15px;
    width: 19%;
    min-width: 200px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 5px 5px 5px 2px #c1c1c1;
    border-radius: 10px;
  `;

  const StName = styled.span`
    color: #c1c1c1;
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
  `;

  const StPhotoF = styled.img`
    border-radius: 50%;
    margin: 0 15px 0 15px;
  `;

  const StStatus = styled.div`
    background-color: ${({ status }) =>
      status === 'true' ? '#03722e' : '#ff0000'};
    width: 15px;
    height: 15px;
    border-radius: 50%;
  `;

  return (
    <StSection>
      <StTitle>{title}</StTitle>

      <StList>
        {friends.map(friend => (
          <StElement key={friend.id}>
            <StStatus status={friend.isOnline.toString()}></StStatus>
            <StPhotoF src={friend.avatar} alt="User avatar" width="48" />
            <StName>{friend.name}</StName>
          </StElement>
        ))}
      </StList>
    </StSection>
  );
}

FriendsList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.array,
};

export default FriendsList;

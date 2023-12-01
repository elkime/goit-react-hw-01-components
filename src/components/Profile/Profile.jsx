import React from 'react';
import styled from 'styled-components';
import formatNumber from 'formatNumber';
import PropTypes from 'prop-types';

function Profile({ avatar, username, tag, location, stats }) {
  const StProfile = styled.div`
    background-color: #483D8B;
    padding: 20px 0 20px 0;
    min-width: 380px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  `;

  const StDesc = styled.div`
    padding: 50px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #fff;
    width: 300px;
  `;
  const StImg = styled.img`
    border-radius: 50%;
    width: 100px;
  `;

  const StNameP = styled.h1`
    font-weight: 300px;
    font-size: 24px;
    margin: 10px;
    color: #000137;
  `;

  const StTag = styled.h2`
    font-weight: lighter;
    font-size: 20px;
    color: #c2c2c2;
    margin: 0;
  `;

  const StLocation = styled.h2`
    font-weight: normal;
    font-size: 20px;
    color: #c2c2c2;
    margin: 0;
    line-height: 2em;
  `;

  const StListP = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: space-between;
    text-align: center;
    padding-inline-start: 0;
  `;

  const StElement = styled.li`
    border: solid 1px#c2c2c2;
    padding: 5px;
    width: 100px;
    color: #fff;
  `;
  return (
    <StProfile>
      <StDesc>
        <StImg src={avatar} alt={username} />
        <StNameP>{username}</StNameP>
        <StTag>{`@${tag}`}</StTag>
        <StLocation>{location}</StLocation>
      </StDesc>

      <StListP>
        <StElement>
          <span className="label">Followers</span>
          <br />
          <span className="quantity">{formatNumber(stats.followers)}</span>
        </StElement>
        <StElement>
          <span className="label">Views</span>
          <br />
          <span className="quantity">{formatNumber(stats.views)}</span>
        </StElement>
        <StElement>
          <span className="label">Likes</span>
          <br />
          <span className="quantity">{formatNumber(stats.likes)}</span>
        </StElement>
      </StListP>
    </StProfile>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

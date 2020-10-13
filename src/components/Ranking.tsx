import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
import { Trans } from 'react-i18next';

const RankingWrapper = style.section`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  min-height: 80vh;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  table {
    width: 80%;
    margin: auto;
  }

  table th {
    padding-bottom: 20px;
  }

  @media all and (min-width: 576px) {
    width: 70%;
  }
  @media all and (min-width: 768px) {
    width: 60%;
  }
  @media all and (min-width: 992px) {
    width: 50%;
  }
  @media all and (min-width: 1200px) {
    width: 30%;
  }
`;

const Ranking: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  const ranking = [
    { name: 'Xavier', score: 134 },
    { name: 'Damien', score: 124 },
    { name: 'Laura', score: 115 },
    { name: 'Thomas', score: 113 },
    { name: 'Dimitri', score: 98 },
    { name: 'Marion', score: 93 },
    { name: 'Anthony', score: 85 },
    { name: 'Billie', score: 56 },
    { name: 'Matt', score: 30 },
    { name: 'Laurent', score: 1 },
  ];

  return (
    <RankingWrapper>
      <h1>
        <Trans i18nKey="Ranking.ranking">Ranking</Trans>
      </h1>

      <table>
        <thead>
          <tr>
            <th>
              <Trans i18nKey="Ranking.name">Name</Trans>
            </th>
            <th>
              <Trans i18nKey="Ranking.score">Score</Trans>
            </th>
          </tr>
        </thead>
        <tbody>
          {ranking.map(rank => (
            <tr key={`${rank.name}${rank.score}`}>
              <td>{rank.name}</td>
              <td>{rank.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </RankingWrapper>
  );
};

export default Ranking;

import React, {
  FunctionComponent,
  ReactElement,
  useState,
  useEffect,
} from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
import { Trans } from 'react-i18next';
// import { firestore } from '../firebase.js';

import PreFooterCanvas from './PreFooterCanvas';

const RankingWrapper = style.div`
  margin: 30px auto 60px auto;
  width: 80%;
  min-height: 50vh;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  table {
    width: 50%;
    margin: auto;
    background-color: #6d59da;
    padding: 25px;
    box-sizing: box-border;
    color: white;
    border-radius: 10px;
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

// interface DocumentData {
//   score: number;
//   user: {
//     name: string;
//     uid: number;
//   };
// }

const Ranking: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  // const [ranking, setRanking] = useState([] as DocumentData[]);

  // useEffect(() => {
  //   const getRanking = async () => {
  //     const snapshot = await firestore.collection('ranking').get();
  //     const snappedRanking = snapshot.docs.map(
  //       doc => doc.data() as DocumentData,
  //     );
  //     setRanking(snappedRanking);
  //   };
  //   getRanking();
  // });

  return (
    <>
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
            {/* {ranking.map(rank => (
              <tr key={`${rank.user.name}${rank.score}`}>
                <td>{rank.user.name}</td>
                <td>{rank.score}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </RankingWrapper>
      <PreFooterCanvas />
    </>
  );
};

export default Ranking;

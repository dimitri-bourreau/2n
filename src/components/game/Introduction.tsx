import React, { FunctionComponent, ReactElement } from 'react';

import { Button, Card, CardHeader, CardTitle, CardBody } from 'shards-react';
import { Trans } from 'react-i18next';
import { IntroductionProps } from '../../interfaces/game';

const Introduction: FunctionComponent<IntroductionProps> = ({
  handlePlayGame,
}: IntroductionProps): ReactElement => {
  return (
    <>
      <h1 className="mt-5 mx-auto text-center">2n</h1>
      <h6 className="text-center">
        <Trans i18nKey="home.subtitle">Will you remember 2 numbers ago?</Trans>{' '}
        <span role="img" aria-label="emoji-hand-mouth">
          🤭
        </span>
      </h6>

      <Button
        pill
        block
        theme="success"
        className="mt-5"
        size="lg"
        onClick={(): null => handlePlayGame(true)}
      >
        <Trans i18nKey="home.play">Play</Trans>
      </Button>

      <Card className="mx-auto my-5">
        <CardHeader>
          <Trans i18nKey="home.description.title">The game</Trans>
        </CardHeader>
        <CardBody>
          <CardTitle>
            <Trans i18nKey="home.description.subtitle">
              Will you remember 2 digits ago?
            </Trans>
          </CardTitle>
          <p>
            <Trans i18nKey="home.description.p1">
              Every turn the game will show you one digit.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="home.description.p2">
              First two turns just remember the digits.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="home.description.p3">
              Then, the game will ask you if a digit was displayed two turns
              ago!
            </Trans>
          </p>

          <h5>
            <Trans i18nKey="home.description.example.title">Example</Trans>
          </h5>
          <ul>
            <li>
              <Trans i18nKey="home.description.example.list.l1">
                Turn 1 : you remember 2.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="home.description.example.list.l2">
                Turn 2 : you remember 7.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="home.description.example.list.l3">
                Turn 3 : you remember 8. The game asks you if 5 was displayed
                two turns ago: no.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="home.description.example.list.l4">
                Turn 4 : you remember 1. The game asks you if 7 was displayed
                two turns ago: yes.
              </Trans>
            </li>
          </ul>

          <p>
            <Trans i18nKey="home.description.score">
              Go as far as you can, make the biggest score!
            </Trans>
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default Introduction;

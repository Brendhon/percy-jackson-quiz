import React from 'react';
import styled from 'styled-components';

import Widget from '../Widget';
import BackLinkArrow from '../BackLinkArrow';

import success from '../../../assets/img/success.gif';
import sadness from '../../../assets/img/sadness.gif';

const ResultHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  p {
    font-size: 20px;
  }
`;

const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  p {
    font-size: 18px;
  }
`;

const PositiveResult = ({ resultSize, name }) => (
  <Widget.Content>

    <ResultHeader>
      <p>
        Você acertou
        {' '}
        <strong style={{ fontSize: '25px', color: '#00ff8c70' }}>{resultSize}</strong>
        {' '}
        perguntas!
      </p>
      <img src={success} width="300px" alt="Imagem de Sucesso" style={{ borderRadius: '10px' }} />
    </ResultHeader>

    <ResultContent>
      <p>
        Parabéns
        {' '}
        <strong style={{ fontSize: '20px', color: '#00ff8c70' }}>{name}</strong>
        {' '}
        !! Você realmente conhece esse universo 🔱
      </p>
    </ResultContent>

  </Widget.Content>
);

const NegativeResult = ({ resultSize, name }) => (
  <Widget.Content>

    <ResultHeader>
      <p>
        Você acertou
        {' '}
        <strong style={{ fontSize: '25px' }}>{resultSize}</strong>
        {' '}
        perguntas!
      </p>
      <img src={sadness} width="300px" alt="Imagem de Fracasso" style={{ borderRadius: '10px' }} />
    </ResultHeader>

    <ResultContent>
      <p>
        Não foi dessa vez
        {' '}
        <strong style={{ fontSize: '20px', color: '#00ff8c70' }}>{name}</strong>
        {' '}
        !! Quem sabe na proxima 💚
      </p>
    </ResultContent>

  </Widget.Content>
);

export default function ResultScreen({ results, name }) {
  const resultSize = results.filter((result) => result === true).length;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        Resultado
      </Widget.Header>

      {resultSize > Math.floor(results.length / 2)
        ? <PositiveResult resultSize={resultSize} name={name} />
        : <NegativeResult resultSize={resultSize} name={name} />}
    </Widget>
  );
}

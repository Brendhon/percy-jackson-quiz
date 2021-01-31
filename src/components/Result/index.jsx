import React from 'react';
import styled from 'styled-components';

import Widget from '../Widget';

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

const PositiveResult = ({ resultSize }) => (
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
      <p>Parabéns!! Você foi super bem 🔱</p>
    </ResultContent>

  </Widget.Content>
);

const NegativeResult = ({ resultSize }) => (
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
      <p>Não foi dessa vez!! Quem sabe na proxima 💚</p>
    </ResultContent>

  </Widget.Content>
);

export default function ResultScreen({ results }) {
  const resultSize = results.length;

  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>

      {results.filter((result) => result === true).length > Math.floor(resultSize / 2)
        ? <PositiveResult resultSize={resultSize} />
        : <NegativeResult resultSize={resultSize} />}
    </Widget>
  );
}

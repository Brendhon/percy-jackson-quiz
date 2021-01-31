import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import db from '../../../db.json';

export default function Answer({ isQuestionSubmitted, isCorrect }) {
  const success = () => (
    <Alert variant="filled" severity="success" style={{ backgroundColor: db.theme.colors.primary }}>
      <AlertTitle><strong>Parabéns</strong></AlertTitle>
      Você acertou! Uhuuuu 👏👏
    </Alert>
  );
  const fail = () => (
    <Alert variant="filled" severity="error" style={{ backgroundColor: db.theme.colors.wrong }}>
      <AlertTitle><strong>Errada</strong></AlertTitle>
      Mais sorte na proxima 😭😭
    </Alert>
  );
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      margin: 20,
      zIndex: 1000,
    }}
    >
      {isQuestionSubmitted && isCorrect && success()}
      {isQuestionSubmitted && !isCorrect && fail()}
    </div>
  );
}

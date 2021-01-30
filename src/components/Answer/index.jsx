import React from 'react';
import { Alert } from '@material-ui/lab';
import db from '../../../db.json';

export default function Answer({ isQuestionSubmitted, isCorrect }) {
  const success = () => (
    <Alert severity="success" style={{ backgroundColor: db.theme.colors.contrastText }}>
      Vc acertou! Uhuuuuu 👏👏👏👏
    </Alert>
  );
  const fail = () => (
    <Alert severity="error" style={{ backgroundColor: db.theme.colors.contrastText }}>
      Deu bom não 😭😭😭😭😭
    </Alert>
  );
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      margin: 20,
      zIndex: 1,
    }}
    >
      {isQuestionSubmitted && isCorrect && success()}
      {isQuestionSubmitted && !isCorrect && fail()}
    </div>
  );
}

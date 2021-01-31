import React, { useState } from 'react';

import Button from '../Button';
import Widget from '../Widget';
import AlternativesForm from '../AlternativesForm';
import Answer from '../Answer';
import BackLinkArrow from '../BackLinkArrow';

export default function Question({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>

      <Widget.Header>
        <BackLinkArrow href="/" />
        {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>

        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={(e) => {
          e.preventDefault();
          setIsQuestionSubmitted(true);

          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmitted(false);
            setSelectedAlternative(undefined);
          }, 2000);
        }}
        >

          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERRO';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                  disabled={isQuestionSubmitted}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected || isQuestionSubmitted}>
            Confirmar
          </Button>

          <Answer isQuestionSubmitted={isQuestionSubmitted} isCorrect={isCorrect} />

        </AlternativesForm>

      </Widget.Content>

    </Widget>
  );
}

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../../../db.json';

import QuizBackground from '../../components/QuizBackground';
import Loading from '../../components/Loading';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import GitHubCorner from '../../components/GitHubCorner';
import Result from '../../components/Result';
import Question from '../../components/Question';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const router = useRouter();
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  const { name } = router.query;

  const addResult = (result) => setResults([
    ...results,
    result,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  const handleSubmit = () => {
    if ((questionIndex + 1) < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground>

      <Head>
        <title>Percy Jackson</title>
      </Head>

      <QuizContainer>

        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <Question
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <Loading />}

        {screenState === screenStates.RESULT && <Result results={results} name={name} />}

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Brendhon" />

    </QuizBackground>
  );
}

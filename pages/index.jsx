import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground>

      <Head>
        <title>{db.title}</title>
      </Head>

      <QuizContainer>

        <QuizLogo />

        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >

          <Widget.Header>
            Percy Jackson
          </Widget.Header>

          <Widget.Content>

            <p>{db.description}</p>

            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>

          </Widget.Content>

        </Widget>

        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >

          <Widget.Content>
            <h2>Quiz da Galera</h2>

            <ul>
              {db.external.map((link) => {
                const [projectName, githubUser] = link
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={`link__${link}`} style={{ fontSize: '14px' }}>
                    <Widget.Topic href={link}>
                      {`${projectName}/${githubUser}`}
                    </Widget.Topic>
                  </li>
                );
              })}

            </ul>
          </Widget.Content>

        </Widget>

        <Footer
          as={motion.footer}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Brendhon" />

    </QuizBackground>
  );
}

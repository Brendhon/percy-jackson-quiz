import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'

import aluraLogo from '../assets/img/alura-logo.svg'
import db from '../db.json'

import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground>

      <Head>
        <title>{db.title}</title>
      </Head>

      <QuizContainer>

        <Image
          src={aluraLogo}
          alt="Logo do evento"
          width={120}
          height={50}
        />

        <Widget>

          <Widget.Header>
            <h1>Percy Jackson</h1>
          </Widget.Header>

          <Widget.Content>

            <p>Perguntas sobre A saga de livros PERCY JACKSON E OS OLIMPIANOS</p>
          </Widget.Content>

        </Widget>

        <Widget>

          <Widget.Content>
            <h1>Percy Jackson</h1>
            <p>Perguntas sobre A saga de livros PERCY JACKSON E OS OLIMPIANOS</p>
          </Widget.Content>

        </Widget>

        <Footer />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Brendhon" />

    </QuizBackground>
  )
}

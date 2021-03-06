import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index'
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from 'next/head';

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
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta name="og:image" content="https://wallpapercave.com/wp/wp4923981.jpg" />
      </Head>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
              <h1>React Native Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Bem-Vindo ao Mundo Nativo</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Todos os links</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jefersonar-cmd" />
    </QuizBackground>
  );
}

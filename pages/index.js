import styled from 'styled-components'

const Title = styled.h1`
  font-size: 80px;
  font-family: 'Windlass', sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title>My page ABC</Title>
}

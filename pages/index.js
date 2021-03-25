import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: monospace;
  padding:32px;
`

export default function Home() {
  return <h1>Ey ou yipi yipi yei!</h1>
}

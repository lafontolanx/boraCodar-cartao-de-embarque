import { GlobalStyle } from './styles/GlobalStyle'
import { BoardingPass } from './components/Card/BoardingPass'
import { Container } from './styles'

function App() {

  return (
    <div>
      <GlobalStyle />
      <Container>
        <BoardingPass />
      </Container>
    </div>
  )
}

export default App

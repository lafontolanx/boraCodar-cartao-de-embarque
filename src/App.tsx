import { GlobalStyle } from './styles/GlobalStyle'
import { Container } from './styles'

import { BoardingPass } from './components/BoardingPass/BoardingPass'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Header />
        <BoardingPass />
        <Footer />
      </Container>
    </div>
  )
}

export default App

import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, LinkItem, Links } from './styles'

import logo from '../../assets/img/logo.svg'
import carrinho from '../../assets/img/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="E-PLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/Categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/Novidades">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/Promocoes">Promoções</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="/">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header

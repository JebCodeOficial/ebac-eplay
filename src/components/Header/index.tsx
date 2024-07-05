import { Link } from 'react-router-dom'
import { HeaderBar, CartButton, LinkItem, Links } from './styles'

import logo from '../../assets/img/logo.svg'
import carrinho from '../../assets/img/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header

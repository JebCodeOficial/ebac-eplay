import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../ProductsList'
import { Banner, Infos } from './styles'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addTocart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Cliqye aqui para adicionar este jogo ao carrinho"
              variant="primary"
              onClick={addTocart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

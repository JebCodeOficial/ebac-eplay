import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../Services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesRPG } = useGetRpgGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRPG && gamesSimulacao) {
    return (
      <>
        <ProductsList
          background="gray"
          title="Ação"
          games={gamesAcao}
          id="action"
        />
        <ProductsList
          background="black"
          title="Esportes"
          games={gamesEsportes}
          id="sports"
        />
        <ProductsList
          background="gray"
          title="Luta"
          games={gamesLuta}
          id="fight"
        />
        <ProductsList
          background="black"
          title="RPG"
          games={gamesRPG}
          id="rpg"
        />
        <ProductsList
          background="gray"
          title="Simulação"
          games={gamesSimulacao}
          id="simulation"
        />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Categories

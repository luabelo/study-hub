import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const funcaoOK = () => alert = ('Agradecemos o Feedback')
  const funcaoNOK = () => alert = ('Verificaremos')
  const textoOK = 'Pedido já chegou'
  const textoNOK = 'Ainda não chegou'
  const pedidos =[
    { 
      data: '03/09/2025',
      icone: 'car',
      titulo: 'Carro',
      descricao: 'Porsche Amarelo'
    },
    {
      data: '05/09/2025',
      icone: 'plane',
      titulo: 'Avião',
      descricao: 'Avião Amarelo'
    },
    {
      data: '07/09/2025',
      icone: 'building',
      titulo: 'Prédio',
      descricao: 'Prédio Amarelo'
    },
    {
      data: '09/09/2025',
      icone: 'computer',
      titulo: 'Computador',
      descricao: 'Computador Amarelo'
    }
  ]
  const expressaoFeedback = (
    <Feedback
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
      textoOK={textoOK}
      textoNOK={textoNOK} />
  )
  return (
    <div className="container-fluid   p-5" style={{ backgroundColor: 'grey' }}>
      <div className="row">
        <div className="col-12">
          <Cartao cabecalho="Gatopótamos">
            <div className="d-flex-flex-column">
              <div className="d-flex justify-content-center align-items-end mb-5">
                <Animal
                  animal="cat"
                  tamanho="3"
                  espelhamento="1"
                />
                <Animal
                  animal="cat"
                  tamanho="2"
                  espelhamento="-1"
                />
                <Animal
                  animal="cat"
                  tamanho="1"
                  espelhamento="-1"
                />
                <Animal
                  animal="cat"
                  tamanho="1"
                  espelhamento="-1"
                />
                <Animal
                  animal="hippo"
                  tamanho="1"
                  espelhamento="-1"
                />
              </div>
              <Feedback
                textoOK="Adotar um furão?"
                textoNOK="Não adotar!"
                funcaoOK={() => alert('Oba!')}
                funcaoNOK={() => alert(':(')} />
            </div>
          </Cartao>
        </div>
      </div>
      <div className="row mt-2">
        {
          pedidos.map(({data, icone, titulo, descricao}) => {
            return(
            <div className="col-sm-12 col-md-6 col-xl-4">
              <Cartao
                cabecalho={data}>
                <Pedido
                  icone={icone}
                  titulo={titulo}
                  descricao={descricao}/>
                <div className="mt-3"> </div>
                {expressaoFeedback}
              </Cartao>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default App
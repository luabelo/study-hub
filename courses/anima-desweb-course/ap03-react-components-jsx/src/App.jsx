import './styles.css'

const App = () => { 
  const estilosDoBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: '#bb4430', width: '100%', border: 'none', borderRadius: 8, color: 'white'}
  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => 'Enviar'
  const aoClicar = () => alert('Clicou!!!')

  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#231f20', padding: 16, borderRadius: 8}}>
      <label 
        className='rotulo'
        htmlFor='nome'
        style={{display: 'block', marginBottom: 4, color: 'white'}}>
        {textoDoRotulo}
      </label>
      <input
        style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', borderRadius: 8, width: '100%'}}
        type="text" />
      <button
        onClick={() => aoClicar()}
        style={estilosDoBotao}>
        {obterTextoDoBotao()}
      </button>
    </div>
  )
}

export default App
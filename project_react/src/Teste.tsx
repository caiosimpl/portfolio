import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => (props.principal ? '18px' : '14px')};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #ffff;

  span {
    color: green;
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>Fechar</Botao>
      <BotaoPerigo principal>
        <span>Não clique aqui.</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste

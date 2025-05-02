import Paragraph from '../paragraph'
import Title from '../title'
import { Card, Link } from './styles'

const project = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragraph tipo="aside">Lista de tarefas feita com VueJS</Paragraph>
    <Link>Visualizar</Link>
  </Card>
)

export default project

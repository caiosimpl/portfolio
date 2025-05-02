import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'main' | 'aside'
}

const Paragraph = ({ children, tipo = 'main' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragraph

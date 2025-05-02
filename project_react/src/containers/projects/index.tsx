import Title from '../../componets/title'
import Project from '../../componets/project'
import { Lista } from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projects</Title>
    <Lista>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
    </Lista>
  </section>
)

export default Projects

import TitleMain from '../../componets/title'
import Paragraph from '../../componets/paragraph'
import { GitHubSection } from './styles'

const AboutMe = () => (
  <section>
    <TitleMain fontSize={16}>About Me</TitleMain>
    <Paragraph tipo="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam
      voluptatem, quas voluptatum eos necessitatibus esse delectus nihil
      perferendis distinctio recusandae ut, temporibus velit vitae officiis
      sapiente provident quo corporis.
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=caiosimpl&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=caiosimpl&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default AboutMe

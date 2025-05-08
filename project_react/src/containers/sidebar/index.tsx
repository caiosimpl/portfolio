import Avatar from '../../componets/avatar'
import Paragraph from '../../componets/paragraph'
import Title from '../../componets/title'

import { Desc, ProfileButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Caio Simplicio</Title>
      <Paragraph tipo="aside" fontSize={16}>
        caiosimpl
      </Paragraph>
      <Desc tipo="main" fontSize={12}>
        Full-stack Engineer
      </Desc>
      <ProfileButton onClick={props.changeTheme}>Change theme</ProfileButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar

import styled from 'styled-components'
import { P } from '../../componets/paragraph/styles'

export const Desc = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ProfileButton = styled.button`
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 40px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

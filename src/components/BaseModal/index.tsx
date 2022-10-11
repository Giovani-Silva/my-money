import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

export function BaseModal({ children }) {
  console.log(children)
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        {children[0]}
        <CloseButton>
          <X size={24} />
        </CloseButton>
        {children[1]}
      </Content>
    </Dialog.Portal>
  )
}

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay } from './styles';

export function BaseModal({ children }) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        {/* <Dialog.Title>New Transaction</Dialog.Title> */}
        <CloseButton>
          <X size={24} />
        </CloseButton>
        {children}
      </Content>
    </Dialog.Portal>
  );
}

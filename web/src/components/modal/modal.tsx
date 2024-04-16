import { Btn } from '#/elements'
import { Children } from '#/types/global/common'
import Portal from '../portal/portal'

interface ModalProps {
  open: boolean
  children: Children
  setOpen: (state: boolean) => void
}

export const Modal = (props: ModalProps) => {
  const { open, setOpen, children } = props

  return (
    <Portal wrapperId="modal-wrapper">
        <dialog
          id="my_modal_1"
          className={`fixed inset-0 modal modal-${open ? 'open' : 'close'}`}
        >
          <div className="modal-box">
            {children}
            <Btn.Basic onClick={() => setOpen(false)} text="close"/>
          </div>
        </dialog>
    </Portal>
  )
}

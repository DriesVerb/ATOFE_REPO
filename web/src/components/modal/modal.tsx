import Portal from '../portal/portal'

interface ModalProps {
  open: boolean
  setOpen: (state: boolean) => void
}

export const Modal = (props: ModalProps) => {
  const { open, setOpen } = props

  return (
    <Portal wrapperId="modal-wrapper">
        <dialog
          id="my_modal_1"
          className={`fixe inset-0 modal modal-${open ? 'open' : 'close'}`}
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={() => setOpen(false)} className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
    </Portal>
  )
}

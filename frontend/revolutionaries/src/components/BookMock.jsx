import { PopupModal } from "react-calendly";
import { useState } from "react";
function BookMock() {
  const [openModal, setOpenModal] = useState(false);
  const [prefill, setPrefill] = useState(false);

  return (
    <>
      <button
        type="button"
        class="btn btn-outline-primary m-3 p-2"
        onClick={() => setOpenModal(true)}
      >
        Book a mock
      </button>
      <PopupModal
        url="https://calendly.com/acmesales"
        prefill={prefill}
        onModalClose={() => setOpenModal(true)}
        open={openModal}
        rootElement={document.getElementById("root")}
      />
    </>
  );
}
export default BookMock;

import { useState } from "react";
import FindInterviewer from "./FindInterviewer";
function BookMock() {
  const [viewBookInt, setViewBookInt] = useState(true);
  const [viewAvailability, setViewAvailability] = useState(false);

  return (
    <>
      <div class="card p-1 m-2">
        <div class="card-body">
          <h5 class="card-title">Mock Interviews</h5>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => {
                  setViewBookInt(true);
                  setViewAvailability(false);
                }}
              >
                Book interview
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => {
                  setViewBookInt(false);
                  setViewAvailability(true);
                }}
              >
                Set your availability
              </a>
            </li>
          </ul>

          <div className="book-mock">{viewBookInt && <FindInterviewer />}</div>
        </div>
      </div>
    </>
  );
}
export default BookMock;

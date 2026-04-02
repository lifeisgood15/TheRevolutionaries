import { useState } from "react";
import FindInterviewer from "./FindInterviewer";
function BookMock() {
  const [viewBookInt, setViewBookInt] = useState(true);
  const [viewAvailability, setViewAvailability] = useState(false);

  const setActive = (tabId) => {
    let tabs = document.querySelectorAll(".tab-item");
    tabs?.forEach((tab) => {
      tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
  };
  return (
    <>
      <div class="card p-1 m-2">
        <div class="card-body">
          <h5 class="card-title">Mock Interviews</h5>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link tab-item active"
                aria-current="page"
                href="#"
                onClick={() => {
                  setViewBookInt(true);
                  setViewAvailability(false);
                  setActive("book-interview");
                }}
                id="book-interview"
              >
                Book interview
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link tab-item"
                href="#"
                id="set-availability"
                onClick={() => {
                  setViewBookInt(false);
                  setViewAvailability(true);
                  setActive("set-availability");
                }}
              >
                Set your availability
                {/* redirect to callendly */}
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

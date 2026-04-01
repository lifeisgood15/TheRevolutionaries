import React, { useState } from "react";
import { PopupModal } from "react-calendly";

function FindInterviewer() {
  const [openModal, setOpenModal] = useState(false);
  const [prefill, setPrefill] = useState(false);

  const [selectedInterviewer, setSelectedInterviewer] = useState(null);
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  // Mock data for the search results
  const interviewers = [
    {
      id: 1,
      name: "Ananya Sharma",
      program: "MBA 2024",
      workExp: "3 Years / Product Manager",
      expertise: "FinTech, Strategy",
      calendlyUrl: "https://calendly.com/shailypandey/30min",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Rahul Mehta",
      program: "PGDM 2025",
      workExp: "2 Years / Analyst",
      expertise: "Consulting, Data",
      calendlyUrl: "https://calendly.com/shailypandey/30min",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Ananya Sharma",
      program: "MBA 2024",
      workExp: "3 Years / Product Manager",
      expertise: "FinTech, Strategy",
      calendlyUrl: "https://calendly.com/shailypandey/30min",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Rahul Mehta",
      program: "PGDM 2025",
      workExp: "2 Years / Analyst",
      expertise: "Consulting, Data",
      calendlyUrl: "https://calendly.com/shailypandey/30min",
      rating: 4.9,
    },
  ];

  return (
    <>
      <div className="card">
        <form className="p-3">
          <div class="form-group">
            <label for="domainSelect">Domain</label>
            <select class="form-control" id="domainSelect">
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
              <option value="Consulting">Consulting</option>
            </select>
          </div>
          <div class="form-group">
            <label for="domainSelect">Program</label>
            <select class="form-control" id="domainSelect">
              <option value="IPMX">IPMX</option>
              <option value="SM1">SM 1st Year</option>
              <option value="SM2">SM 2nd Year</option>
              <option value="WE1">WE 1st Year</option>
              <option value="WE2">WE 2nd Year</option>
              <option value="other">Other (graduated)</option>
            </select>
          </div>
          <button
            type="button"
            class="btn btn-outline-primary m-3 p-2"
            onClick={() => setDisplaySearchResults(true)}
          >
            Search
          </button>
        </form>
        {displaySearchResults && (
          <div className="search-results">
            <div className="card">
              <div class="card-body">
                <h5 class="card-title">Search results</h5>
                {/* Horizontal scroll, callendly with each book button click, aesthetic small card */}
                {interviewers?.length > 0 && (
                  <>
                    <div class="row border">
                      {interviewers &&
                        interviewers.map((interviewer) => {
                          return (
                            <div class="col">
                              <div
                                className="card ph-1 mt-2"
                                style={{ width: "10rem", minHeight: "16rem" }}
                              >
                                <h5>{interviewer.name}</h5>
                                <ul class="list-group">
                                  <li class="list-group-item">
                                    {interviewer.program}
                                  </li>
                                  <li class="list-group-item">
                                    {interviewer.workExp}
                                  </li>
                                  <li class="list-group-item">
                                    {interviewer.rating}
                                  </li>
                                </ul>
                                <button
                                  type="button"
                                  class="btn btn-outline-primary m-3 p-2"
                                  onClick={(e) => {
                                    console.log(interviewer);
                                    setOpenModal(true);
                                    setSelectedInterviewer(interviewer);
                                  }}
                                >
                                  Book a mock
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </>
                )}
              </div>
            </div>
            {openModal && (
              <PopupModal
                url={selectedInterviewer?.calendlyUrl}
                prefill={prefill}
                onModalClose={() => setOpenModal(false)}
                open={openModal}
                rootElement={document.getElementById("root")}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default FindInterviewer;

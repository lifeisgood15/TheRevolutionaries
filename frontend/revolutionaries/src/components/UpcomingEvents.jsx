import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UpcomingEvents() {
  const [interviews, setInterviews] = useState([]);
  const [interviewPartners, setInterviewPartners] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    //fetch the interviews data from backend
    // See if they can join, else query again on users
    setInterviews([
      {
        CreatedDate: new Date(),
        CreatedBy: "PGPSM11031",
        Interviewer: "PGPSM11031",
        Interviewee: "IPMX123",
        Domain: "Marketing",
        DateTimeDue: new Date(),
        MeetingLink: "https://calendly.com/shailypandey/30min",
      },
      {
        CreatedDate: new Date(),
        CreatedBy: "PGPSM11031",
        Interviewer: "PGPSM11031",
        Interviewee: "IPMX124",
        Domain: "Marketing",
        DateTimeDue: new Date(),
        MeetingLink: "https://calendly.com/shailypandey/30min",
      },
      {
        CreatedDate: new Date(),
        CreatedBy: "PGPSM11031",
        Interviewer: "PGPWE123",
        Interviewee: "PGPSM11031",
        Domain: "Marketing",
        DateTimeDue: new Date(),
        MeetingLink: "https://calendly.com/shailypandey/30min",
      },
      {
        CreatedDate: new Date(),
        CreatedBy: "PGPSM11031",
        Interviewer: "PGPWE123",
        Interviewee: "PGPSM11031",
        Domain: "Marketing",
        DateTimeDue: new Date(),
        MeetingLink: "https://calendly.com/shailypandey/30min",
      },
    ]);
  }, [navigate]);
  return (
    <>
      <div className="card mt-2">
        <div class="card-body">
          <h5 class="card-title">Your Schedule</h5>
          <div className="schedule-container">
            {interviews?.length > 0 &&
              interviews.map((interview) => {
                return (
                  <>
                    <div className="card m-2 p-2">
                      <h5>{interview.DateTimeDue.toLocaleString()}</h5>
                      <h5>
                        {interview.Interviewer === "PGPSM11031"
                          ? "You are interviewing"
                          : "You have an interview with"}
                      </h5>
                      <p>
                        <strong>
                          {interview.Interviewer === "PGPSM11031"
                            ? interview.Interviewee
                            : interview.Interviewer}
                        </strong>
                        <br />

                        <strong>Domain: </strong>
                        {interview.Domain}
                      </p>

                      <a
                        class="btn btn-primary mx-4 mb-2"
                        href={interview.MeetingLink}
                        role="button"
                      >
                        Join Meeting
                      </a>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingEvents;

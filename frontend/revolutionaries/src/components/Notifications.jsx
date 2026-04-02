import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState([]);
  const [giveFeedback, setGiveFeedback] = useState([]);
  const [seekFeedback, setSeekFeedback] = useState([]);
  useEffect(() => {
    //fetch the interviews data from backend
    // See if they can join user and interview table, else query again on users
    setInterviews((prev) => {
      setGiveFeedback([]);
      setSeekFeedback([]);
      let dummy = [
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
          Interviewer: "PGPWE124",
          Interviewee: "PGPSM11031",
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
          Interviewer: "PGPWE124",
          Interviewee: "PGPSM11031",
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
          Interviewer: "PGPWE124",
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
      ];

      dummy?.forEach((interview) => {
        console.log(interview);
        if (interview.Interviewee === "PGPSM11031") {
          setSeekFeedback((prev) => [...prev, interview]);
        } else {
          setGiveFeedback((prev) => [...prev, interview]);
        }

        return dummy;
      });
      return dummy;
    });
  }, [navigate]);
  return (
    <div class="card p-1 m-2">
      <div class="card-body">
        <h5 class="card-title">
          Feedback & Actions <i class="bi bi-bell-fill"></i>
          <sup>{interviews?.length}</sup>
        </h5>
        <div class="row feedback-container">
          <div class="col">
            {giveFeedback?.length > 0 &&
              giveFeedback?.map((interview) => {
                return (
                  <div class="row">
                    <div class="col">
                      <div className="card mt-2">
                        <div class="card-body">
                          <p>
                            <strong>Interviewer: </strong>
                            {interview.Interviewer}
                            <br />
                            <strong>Date: </strong>
                            {interview.DateTimeDue.toLocaleString()}
                          </p>
                          <a
                            class="btn btn-primary mx-4 mb-2"
                            href={interview.MeetingLink}
                            role="button"
                          >
                            Give Feedback
                            {/* Open googleform in modal */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div class="col">
            {seekFeedback?.length > 0 &&
              seekFeedback?.map((interview) => {
                return (
                  <div class="row">
                    <div class="col">
                      <div className="card mt-2">
                        <div class="card-body">
                          <p>
                            <strong>Interviewer: </strong>
                            {interview.Interviewer}
                            <br />
                            <strong>Date: </strong>
                            {interview.DateTimeDue.toLocaleString()}
                          </p>
                          <a
                            class="btn btn-primary mx-4 mb-2"
                            href={interview.MeetingLink}
                            role="button"
                          >
                            Seek Feedback
                            {/* Send a reminder */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Notifications;

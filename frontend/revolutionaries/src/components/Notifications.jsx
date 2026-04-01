import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();

  const [notificationList, setNotificationList] = useState([]);
  useEffect(() => {
    // Fetch notifications for user
    setNotificationList([
      {
        dueDate: new Date(),
        title: "Feedback overdue for interview with John Doe",
        type: "feedback-due",
        interviewId: "123",
      },
      {
        dueDate: new Date(),
        title: "Upcoming interview with Jane Doe  ",
        type: "interview-upcoming",
        interviewId: "123",
      },
    ]);
  }, [navigate]);
  //   style={{ width: "21rem" }}
  return (
    <div class="card p-1 m-2">
      <div class="card-body">
        <h5 class="card-title">Notifications</h5>
        {notificationList &&
          notificationList.length > 0 &&
          notificationList?.map((notification) => {
            return (
              <ul class="list-group" key={notification.id}>
                <li class="list-group-item">
                  {notification.dueDate.toLocaleString()} - {notification.title}
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
export default Notifications;

import { useEffect, useState } from "react";
import { db } from "../app/firebase"; // Assume you have already set up Firebase
import { collection, getDocs } from "firebase/firestore";

function SideMenu() {
  const [sessions, setSessions] = useState<any>([]);

  useEffect(() => {
    async function fetchSessions() {
      const querySnapshot = await getDocs(collection(db, "script"));
      const sessionsData = querySnapshot.docs.map((doc) => doc.data());
      setSessions(sessionsData);
    }

    fetchSessions();
  }, []);

  return (
    <div className="sidemenu">
      <h2>Sessions</h2>
      <ul>
        {sessions.map((session:any, index:any) => (
          <li key={index} className="session-item">
            <div>
              <strong>{session.Username}</strong>
              <p>{session.Question}</p>
              <p>{session.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;


// //
// // REACT-TASK-MANAGEMENT/task-client/src/components/task-dashboard.js
// //
// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import {
//   User,
//   CheckSquare,
//   FolderKanban,
//   Settings,
//   Archive,
//   HelpCircle,
//   LogOut,
// } from "lucide-react";
// import "./task-dashboard.css";

// const SidebarItem = ({ icon: Icon, label }) => (
//   <div className="sidebar-item flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition">
//     <Icon size={22} />
//     <span className="font-medium">{label}</span>
//   </div>
// );

// const TaskDashboard = () => {

//   const navigate = useNavigate();
//   const [user, setUser] = React.useState({ firstname: "User" });

//   React.useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);
//       }
//     } catch (err) {
//       console.error("Failed to parse user from localStorage:", err);
//     }
//   }, []);


//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token"); // optional
//     navigate('/login'); // go back to login page
//   };


//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside className="sidebar w-64 p-4 flex flex-col">
//         <div className="flex flex-col items-center mb-8">
//           <img
//             src="https://placehold.co/80x80"
//             alt="Profile"
//             className="profile-pic w-20 h-20"
//           />
//           <h3 className="text-lg font-semibold text-gray-700 text-center">
//             Welcome, <span className="text-blue-600">{user?.firstname}</span>
//           </h3>

//         </div>

//         <SidebarItem icon={User} label="Profile" />
//         <SidebarItem icon={CheckSquare} label="Tasks" />
//         <SidebarItem icon={FolderKanban} label="Projects" />
//         <SidebarItem icon={Settings} label="Settings" />
//         <SidebarItem icon={Archive} label="Archive" />
//         <SidebarItem icon={HelpCircle} label="Help" />

//       <div className={`logout-btn mt-auto`} onClick={handleLogout}>
//         <LogOut size={20} />
//         <span>Logout</span>
//       </div>

//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Daily Planning Card */}
//           <div className="card">
//             <h2>Daily Planning</h2>
//             <p>Plan your day and create hourly tasks</p>
//             <form className="mt-4">
//               <input type="text" placeholder="Task Title" />
//               <input type="time" placeholder="Start Time" />
//               <input type="time" placeholder="End Time" />
//               <button type="submit">Add Task</button>
//             </form>
//           </div>

//           {/* Project Management Card */}
//           <div className="card">
//             <h2>Projects</h2>
//             <p>Create projects, invite people, assign tasks & set deadlines</p>
//             <form className="mt-4">
//               <input type="text" placeholder="Project Name" />
//               <textarea placeholder="Description"></textarea>
//               <input type="email" placeholder="Invite by Email" />
//               <input type="date" placeholder="Deadline" />
//               <button type="submit">Create Project</button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TaskDashboard;


import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  User,
  CheckSquare,
  FolderKanban,
  Settings,
  Archive,
  HelpCircle,
  LogOut,
} from "lucide-react";
import "./task-dashboard.css";

const SidebarItem = ({ icon: Icon, label }) => (
  <div className="sidebar-item flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition">
    <Icon size={22} />
    <span className="font-medium">{label}</span>
  </div>
);

const TaskDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstname: "User" });

  // Tasks and Projects state
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  // Load user from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    } catch (err) {
      console.error("Failed to parse user:", err);
    }

    // For now, we mock tasks and projects
    setTasks([
      { id: 1, title: "Morning Meeting", start: "09:00", end: "09:30" },
      { id: 2, title: "Write Report", start: "10:00", end: "12:00" }
    ]);

    setProjects([
      { 
        id: 1, 
        name: "Website Redesign", 
        deadline: "2025-10-25", 
        team: ["Nana", "Herve"] 
      },
      { 
        id: 2, 
        name: "Marketing Campaign", 
        deadline: "2025-11-05", 
        team: ["Lomo", "Anna"] 
      }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="sidebar w-64 p-4 flex flex-col">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://placehold.co/80x80"
            alt="Profile"
            className="profile-pic w-20 h-20"
          />
          <h3 className="text-lg font-semibold text-gray-700 text-center">
           <span className="text-blue-600">{user?.firstname} {" "} {user?.lastname}</span>
          </h3>
        </div>

        <SidebarItem icon={User} label="Profile" />
        <SidebarItem icon={CheckSquare} label="Tasks" />
        <SidebarItem icon={FolderKanban} label="Projects" />
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={Archive} label="Archive" />
        <SidebarItem icon={HelpCircle} label="Help" />

        <div className="logout-btn mt-auto" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <br/>
        <h3 className="text-gray-600 mb-4">Welcome back, {user?.firstname}!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Daily Planning Card */}
          <div className="card">
            <h2>Daily Planning</h2>
            {tasks.length > 0 ? (
              <ul className="mt-4">
                {tasks.map(task => (
                  <li key={task.id} className="task-item">
                    <span className="task-title">{task.title}</span>
                    <span className="task-time">{task.start} - {task.end}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500">Nothing to do right now</p>
            )}
          </div>
          <br/>
          {/* Project Management Card */}
          <div className="card">
            <h2>Projects</h2>
            {projects.length > 0 ? (
              <ul className="mt-4">
                {projects.map(project => (
                  <li key={project.id} className="project-item mb-4">
                    <span className="project-name font-semibold">{project.name}</span>
                    <div className="project-meta text-gray-600 text-sm">
                      Deadline: {project.deadline} | Team: {project.team.join(", ")}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500">No Project</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskDashboard;

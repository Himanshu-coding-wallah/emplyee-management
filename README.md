## Project Overview

- This project is built in react and fits on all screen devices 
- It can register , login and logout users
- For storing data and login details i have used local storage  
- A person can register based on its role, if he is employee than he can select employee and if he is an admin he can select admin  

## Data used

```   
const employees = [
  {
    id: 1,
    name: "Himanshu Sharma",
    email: "himanshu@gmail.com",
    password: "123456",
    role: "employee",
    newTask: 2,
    completedTask: 3,
    activeTask: 1,
    failedTask: 1,
    tasks: [
      { title: "Design Login UI", status: "new", priority: "High", date: "2026-05-10" },
      { title: "Fix Navbar Bug", status: "completed", priority: "Medium", date: "2026-05-02" },
      { title: "Create Dashboard Layout", status: "active", priority: "High", date: "2026-05-08" },
      { title: "API Integration", status: "failed", priority: "High", date: "2026-05-01" },
      { title: "Responsive Testing", status: "completed", priority: "Low", date: "2026-04-28" }
    ]
  },
  {
    id: 2,
    name: "Ananya Verma",
    email: "ananya@gmail.com",
    password: "123456",
    role: "employee",
    newTask: 1,
    completedTask: 4,
    activeTask: 1,
    failedTask: 0,
    tasks: [
      { title: "Update Profile Page", status: "completed", priority: "Medium", date: "2026-05-03" },
      { title: "Implement Search", status: "active", priority: "High", date: "2026-05-09" },
      { title: "Optimize Images", status: "completed", priority: "Low", date: "2026-05-01" },
      { title: "Write Documentation", status: "new", priority: "Medium", date: "2026-05-11" },
      { title: "Bug Fixing", status: "completed", priority: "High", date: "2026-04-30" }
    ]
  },
  {
    id: 3,
    name: "Rahul Singh",
    email: "rahul@gmail.com",
    password: "123456",
    role: "employee",
    newTask: 2,
    completedTask: 2,
    activeTask: 2,
    failedTask: 1,
    tasks: [
      { title: "Setup Backend Server", status: "active", priority: "High", date: "2026-05-07" },
      { title: "Database Schema Design", status: "completed", priority: "High", date: "2026-05-02" },
      { title: "Authentication Flow", status: "new", priority: "High", date: "2026-05-12" },
      { title: "Deploy App", status: "failed", priority: "Medium", date: "2026-05-04" },
      { title: "API Testing", status: "active", priority: "Medium", date: "2026-05-09" }
    ]
  },
  {
    id: 4,
    name: "Priya Mehta",
    email: "priya@gmail.com",
    password: "123456",
    role: "employee",
    newTask: 1,
    completedTask: 5,
    activeTask: 1,
    failedTask: 0,
    tasks: [
      { title: "Design Landing Page", status: "completed", priority: "High", date: "2026-05-01" },
      { title: "Add Animations", status: "completed", priority: "Medium", date: "2026-05-03" },
      { title: "SEO Optimization", status: "new", priority: "Low", date: "2026-05-13" },
      { title: "Cross Browser Testing", status: "active", priority: "Medium", date: "2026-05-10" },
      { title: "Refactor CSS", status: "completed", priority: "Low", date: "2026-04-29" }
    ]
  },
  {
    id: 5,
    name: "Arjun Kapoor",
    email: "arjun@gmail.com",
    password: "123456",
    role: "employee",
    newTask: 3,
    completedTask: 2,
    activeTask: 1,
    failedTask: 1,
    tasks: [
      { title: "Create Admin Panel", status: "new", priority: "High", date: "2026-05-14" },
      { title: "Integrate Payment Gateway", status: "active", priority: "High", date: "2026-05-09" },
      { title: "Fix Security Issues", status: "failed", priority: "High", date: "2026-05-05" },
      { title: "Unit Testing", status: "completed", priority: "Medium", date: "2026-05-02" },
      { title: "Performance Optimization", status: "new", priority: "Medium", date: "2026-05-15" }
    ]
  },

  {
    id: 6,
    name: "Raj",
    email: "adminraj@gmail.com",
    password: "admin123",
    role: "admin",
    totalEmployees: 5,
    totalTasks: 25,
    createdTasks: [
      {
        title: "Prepare Monthly Report",
        assignedTo: "Himanshu Sharma",
        priority: "High",
        status: "active",
        date: "2026-05-10"
      },
      {
        title: "Update Company Website",
        assignedTo: "Ananya Verma",
        priority: "Medium",
        status: "new",
        date: "2026-05-12"
      },
      {
        title: "Database Backup",
        assignedTo: "Rahul Singh",
        priority: "High",
        status: "completed",
        date: "2026-05-05"
      }
    ]
  },
  {
    id: 7,
    name: "Neha",
    email: "adminneha@gmail.com",
    password: "admin123",
    role: "admin",
    totalEmployees: 5,
    totalTasks: 18,
    createdTasks: [
      {
        title: "Design Marketing Banner",
        assignedTo: "Priya Mehta",
        priority: "Medium",
        status: "active",
        date: "2026-05-11"
      },
      {
        title: "Fix Payment Gateway Bug",
        assignedTo: "Arjun Kapoor",
        priority: "High",
        status: "failed",
        date: "2026-05-06"
      },
      {
        title: "Client Meeting Preparation",
        assignedTo: "Himanshu Sharma",
        priority: "Low",
        status: "new",
        date: "2026-05-13"
      }
    ]
  }
];
```

We can use this data to check the functinality of the project

## Link of the project

https://emplyee-management-chi.vercel.app/
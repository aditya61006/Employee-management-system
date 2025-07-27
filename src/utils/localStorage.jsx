const empS = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "emp1@eg.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve login issue for older devices.",
        date: "2025-07-15",
        category: "Bug",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update landing page",
        description: "Change layout and update text.",
        date: "2025-07-10",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API integration",
        description: "Integrate third-party movie API.",
        date: "2025-07-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      completed: 1,
      newTask: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "emp2@eg.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Create weekly backup of all databases.",
        date: "2025-07-15",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix broken links",
        description: "Check and fix broken URLs on all pages.",
        date: "2025-07-13",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare presentation",
        description: "Make slides for project review.",
        date: "2025-07-12",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "SEO optimization",
        description: "Improve website SEO score.",
        date: "2025-07-11",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      completed: 1,
      newTask: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "emp3@eg.com",
    password: "123",
    tasks: [
      {
        title: "Add dark mode",
        description: "Implement dark mode toggle.",
        date: "2025-07-09",
        category: "Feature",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor CSS",
        description: "Clean up and modularize stylesheets.",
        date: "2025-07-13",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Form validation",
        description: "Add client-side validation to all forms.",
        date: "2025-07-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Test payment gateway",
        description: "Run test cases for payment flow.",
        date: "2025-07-12",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for login module.",
        date: "2025-07-11",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 3,
      completed: 1,
      newTask: 1,
      failed: 1
    }
  },
  {
    id: 4,
    name: "Sneha Joshi",
    email: "emp4@eg.com",
    password: "123",
    tasks: [
      {
        title: "Create user report",
        description: "Generate weekly user activity report.",
        date: "2025-07-08",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix scroll issue",
        description: "Resolve infinite scroll bug on dashboard.",
        date: "2025-07-14",
        category: "Bug",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Email template update",
        description: "Update email HTML templates for notifications.",
        date: "2025-07-12",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      completed: 1,
      newTask: 0,
      failed: 0
    }
  },
  {
    id: 5,
    name: "Rohan Mehta",
    email: "emp5@eg.com",
    password: "123",
    tasks: [
      {
        title: "Optimize images",
        description: "Compress and optimize all website images.",
        date: "2025-07-10",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Configure CDN",
        description: "Set up CDN for faster asset delivery.",
        date: "2025-07-11",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Accessibility audit",
        description: "Ensure website is WCAG compliant.",
        date: "2025-07-13",
        category: "Compliance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Onboarding guide",
        description: "Write onboarding steps for new team members.",
        date: "2025-07-14",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      completed: 2,
      newTask: 2,
      failed: 0
    }
  }
];


const admin = {
  id: 101,
  name: "Kiran Desai",
  email: "admin@example.com",
  password: "321"
}



export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(empS));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};


export const getLocalStorage = ()=>{
    const employeesData =JSON.parse(localStorage.getItem('employees')) 
    const adminData =JSON.parse(localStorage.getItem('admin')) 

    return {employeesData,adminData}
}
const courses = [
  {
    id: 1,
    name: "Introduction to React Native",
    rating: 4.1,
    instructor: "Virat Kohli",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "/thumbnail.jpg",
    duration: "4 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript", "Familiarity with React"],
    syllabus: [
      { week: 1, topic: "Intro to React Native", content: "Setup and Basics" },
      {
        week: 2,
        topic: "Components & Props",
        content: "Building UI with React Native",
      },
      {
        week: 3,
        topic: "State Management",
        content: "Using useState & Context API",
      },
      {
        week: 4,
        topic: "Navigation & APIs",
        content: "React Navigation & Fetching Data",
      },
    ],
    students: [
      { id: 101, progress: 50 },
      { id: 102, progress: 75 },
    ],
  },
  {
    id: 2,
    name: "Full-Stack Web Development",
    rating: 4.3,
    instructor: "Rohit Sharma",
    description: "Master full-stack web development with MERN stack.",
    enrollmentStatus: "In Progress",
    thumbnail: "/thumbnail.jpg",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Hybrid",
    prerequisites: ["HTML", "CSS", "JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "HTML & CSS Basics",
        content: "Fundamentals of Web Pages",
      },
      {
        week: 2,
        topic: "JavaScript Fundamentals",
        content: "Variables, Functions",
      },
      {
        week: 3,
        topic: "Frontend with React",
        content: "Building UI with React",
      },
      { week: 4, topic: "Backend with Node.js", content: "Express & MongoDB" },
    ],
    students: [
      { id: 103, progress: 30 },
      { id: 104, progress: 60 },
    ],
  },
  {
    id: 3,
    name: "Data Structures and Algorithms",
    rating: 4.7,
    instructor: "Raunak Kumar",
    description: "Deep dive into DSA concepts and problem-solving techniques.",
    enrollmentStatus: "Closed",
    thumbnail: "/thumbnail.jpg",
    duration: "8 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic Programming Knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Arrays & Strings",
        content: "Basic Operations & Patterns",
      },
      {
        week: 2,
        topic: "Linked Lists",
        content: "Singly & Doubly Linked Lists",
      },
      {
        week: 3,
        topic: "Stacks & Queues",
        content: "Implementation & Applications",
      },
      { week: 4, topic: "Trees & Graphs", content: "Traversal Techniques" },
    ],
    students: [
      { id: 101, progress: 40 },
      { id: 103, progress: 70 },
    ],
  },
  {
    id: 4,
    name: "Machine Learning Basics",
    instructor: "kavita roy",
    rating: 3.9,
    description: "Introduction to ML concepts, algorithms, and applications.",
    enrollmentStatus: "Open",
    thumbnail: "/thumbnail.jpg",
    duration: "6 weeks",
    schedule: "Weekends, 10:00 AM - 12:00 PM",
    location: "In-Person",
    prerequisites: ["Python", "Statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Linear Regression",
        content: "Mathematical Foundations",
      },
      {
        week: 2,
        topic: "Logistic Regression",
        content: "Binary Classification",
      },
      { week: 3, topic: "Decision Trees", content: "Concept & Implementation" },
      { week: 4, topic: "Neural Networks", content: "Intro to Deep Learning" },
    ],
    students: [
      { id: 103, progress: 50 },
      { id: 102, progress: 80 },
    ],
  },
  {
    id: 5,
    name: "Cybersecurity Fundamentals",
    rating: 4.0,
    instructor: "Ben stokes",
    description:
      "Learn about network security, cryptography, and ethical hacking.",
    enrollmentStatus: "In Progress",
    thumbnail: "/thumbnail.jpg",
    duration: "5 weeks",
    schedule: "Tuesdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Networking Basics"],
    syllabus: [
      { week: 1, topic: "Network Security", content: "Firewalls & VPNs" },
      { week: 2, topic: "Cryptography", content: "Encryption & Hashing" },
      { week: 3, topic: "Ethical Hacking", content: "Pentesting Basics" },
      {
        week: 4,
        topic: "Security Best Practices",
        content: "Safe Coding Techniques",
      },
    ],
    students: [
      { id: 104, progress: 35 },
      { id: 102, progress: 65 },
    ],
  },
  {
    id: 6,
    name: "DevOps & CI/CD Pipelines",
    rating: 4.5,
    instructor: "Daniel Wilson",
    description: "Understand DevOps practices and build automated pipelines.",
    enrollmentStatus: "Open",
    thumbnail: "/thumbnail.jpg",
    duration: "4 weeks",
    schedule: "Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Linux Basics", "Cloud Knowledge"],
    syllabus: [
      { week: 1, topic: "Introduction to DevOps", content: "Concepts & Tools" },
      {
        week: 2,
        topic: "CI/CD Pipelines",
        content: "Jenkins & GitHub Actions",
      },
      { week: 3, topic: "Containerization", content: "Docker & Kubernetes" },
      {
        week: 4,
        topic: "Infrastructure as Code",
        content: "Terraform & Ansible",
      },
    ],
    students: [
      { id: 103, progress: 90 },
      { id: 101, progress: 75 },
    ],
  },
  {
    id: 7,
    name: "Cloud Computing with AWS",
    rating: 3.8,
    instructor: "Sunil pandey",
    description: "Learn cloud computing concepts with hands-on AWS experience.",
    enrollmentStatus: "Closed",
    thumbnail: "/thumbnail.jpg",
    duration: "5 weeks",
    schedule: "Wednesdays, 7:00 PM - 9:00 PM",
    location: "Hybrid",
    prerequisites: ["Basic Networking", "Linux"],
    syllabus: [
      { week: 1, topic: "AWS Fundamentals", content: "EC2, S3, IAM" },
      { week: 2, topic: "Networking in AWS", content: "VPCs & Route Tables" },
      { week: 3, topic: "Serverless Computing", content: "Lambda & DynamoDB" },
      { week: 4, topic: "Security in AWS", content: "Policies & Compliance" },
    ],
    students: [
      { id: 103, progress: 45 },
      { id: 104, progress: 85 },
    ],
  },
];

export const fetchCourses = () =>
  new Promise((resolve) => setTimeout(() => resolve(courses), 500));

export const fetchCourseById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => {
      const course = courses.find((course) => course.id === id);
      resolve(course || []);
    }, 500)
  );

const students = [
  {
    id: 101,
    name: "Aarav Sharma",
  },
  {
    id: 102,
    name: "Ishaan Verma",
  },
  {
    id: 103,
    name: "Diya Patel",
  },
  {
    id: 104,
    name: "Rohan Mehta",
  },
  {
    id: 105,
    name: "Ananya Iyer",
  },
];

export const fetchStudents = () =>
  new Promise((resolve) => setTimeout(() => resolve(students), 500));

export const fetchStudentById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => {
      const student = students.find((student) => student.id === id);
      resolve(student || []);
    }, 500)
  );

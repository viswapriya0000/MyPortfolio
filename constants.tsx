import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Viswa Priya Obulsetty",
  designation: "Java Backend Developer at Capgemini",
  bio: "Java Developer with 3 years of experience in Spring Boot, Microservices, and Hibernate. Specialized in building scalable, high-performance distributed systems with a deep focus on clean code and cloud architecture.",
  codeBio: `public class ViswaPriya extends JavaDeveloper {
  private double experience = 3.2; // years
  private String[] stack = {"Spring Boot", "Microservices", "Hibernate"};

  public void profile() {
    this.build("Scalable Distributed Systems");
    this.apply(CleanCode.STRICT);
    this.deploy(CloudArchitecture.NATIVE);
  }
}`,
  email: "viswapriya0000@gmail.com",
  phone: "+91-9515717805",
  linkedin: "https://www.linkedin.com/in/viswa-priya-obulsetty-395862172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/viswapriya0000/MyDemoPortfolioForPracticsing",
  // Standard view link for Google Drive PDF
  resumeUrl: "https://drive.google.com/file/d/15m6UPTT1lBmOJaNK4JuZlahlzpj5GuRO/view?usp=sharing",
  location: "Bangalore, India",
  education: {
    degree: "Bachelor of Technology (B. Tech) in Electronics and Communication Engineering",
    college: "Sri Venkateswara College of Engineering",
    cgpa: "8.9/10",
    period: "06/2018 – 08/2022"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    icon: "fa-code",
    skills: ["Core Java", "Java 8", "C", "Data Structures & Algorithms"]
  },
  {
    category: "Frameworks",
    icon: "fa-layer-group",
    skills: ["Spring Boot", "Spring Core", "Microservices", "Hibernate", "Spring MVC", "Spring Security", "Spring WebFlux"]
  },
  {
    category: "Messaging & DB",
    icon: "fa-database",
    skills: ["PostgreSQL", "MySQL", "DB2", "Apache Kafka", "IBM MQ"]
  },
  {
    category: "DevOps & Cloud",
    icon: "fa-cloud",
    skills: ["Docker", "Kubernetes", "Jenkins", "Azure", "GCP", "GitHub Actions"]
  },
  {
    category: "Tools & Quality",
    icon: "fa-wrench",
    skills: ["Git", "Postman", "Swagger", "SonarQube", "Liquibase", "JUnit/Mockito"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Java Developer - Outbound (MBRDI)",
    company: "Mercedes-Benz Research and Development India",
    period: "07/2023 – Present",
    description: [
      "Developed high-performance RESTful APIs using Spring Boot and PostgreSQL for robust backend solutions.",
      "Modernized existing Core Java applications, significantly improving UI performance and user experience.",
      "Managed database versioning and migrations using Liquibase across multiple environments.",
      "Automated build and deployment cycles using Jenkins pipelines and Docker containerization.",
      "Engineered real-time data streaming pipelines with Apache Kafka for microservices communication.",
      "Achieved 90%+ test coverage using JUnit and Mockito, adhering to strict SonarQube quality gates."
    ]
  },
  {
    role: "Jira Administrator - Aftersales (MBAG)",
    company: "Mercedes-Benz AG",
    period: "01/2023 – 06/2023",
    description: [
      "Orchestrated successful large-scale migration of Jira instance from Data Center to Cloud.",
      "Configured complex workflows, custom screens, and field configurations for thousands of users.",
      "Integrated Xray for comprehensive test management and synchronized Jira with GitHub enterprise."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Quiz Application using microservices architecture",
    description: "Built a robust RESTful backend for managing dynamic quizzes using Spring Boot microservices. Features real-time scoring, Kafka-based result processing, and PostgreSQL integration.",
    tech: ["Java","Spring Boot", "PostgreSQL", "Kafka", "Microservices", "Feign Client"],
    link: "https://github.com/viswapriya0000/MyDemoPortfolioForPracticsing/tree/main/MicroserviceTutorials-main",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "2",
    title: "Login page using Spring Security",
    description: "Developed a centralized authentication and authorization service using Spring Security and JWT. Implemented DTO-Entity patterns and custom exception handling for high security and loose coupling.",
    tech: ["Java","Spring boot","Spring Security", "JWT", "Java 8", "PostgreSQL"],
    link: "https://github.com/viswapriya0000/MyDemoPortfolioForPracticsing/tree/main/Login-Page",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600"
  }
];

export const CERTIFICATIONS = [
  "AZ-900 Microsoft Azure Fundamentals Certification",
  "GCDL Google Cloud Digital Leader"
];

export const LANGUAGES = ["English", "Hindi", "Telugu"];
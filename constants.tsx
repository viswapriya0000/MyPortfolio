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
      "Architected highly decoupled service layers and robust centralized exception-handling frameworks to ensure system stability and fault tolerance.",
      "Streamlined development by implementing sophisticated Mapper patterns for seamless DTO-to-Entity transformations and designing modular, reusable utility components to maximize codebase maintainability.",
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
    description: "Architected a scalable Quiz Application leveraging a Microservices pattern with Spring Cloud OpenFeign for seamless inter-service communication between Quiz and Question microservices. The system dynamically generates customized assessments based on user-selected categories (e.g., Java, Python) and configurable question volumes. It includes a robust evaluation engine that processes user responses in real-time to provide instant and accurate performance results.",
    tech: ["Java","Spring Boot", "PostgreSQL", "Kafka", "Microservices", "Feign Client"],
    link: "https://github.com/viswapriya0000/MyDemoPortfolioForPracticsing/tree/main/MicroserviceTutorials-main",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "2",
    title: "Identity and Access Management with Spring Security",
    description: "Engineered a sophisticated Identity and Access Management system designed to handle multi-user scenarios with a high level of security. I implemented customized security filters and filter chains to manage fine-grained access control, while leveraging BCrypt Password Encoder to ensure the highest standards for credential hashing. The solution supports a hybrid authentication model, incorporating both Basic Authorization and stateless Bearer Tokens (JWT). Furthermore, I successfully integrated OAuth2 social login for platforms like Google and GitHub, allowing users to authenticate securely without storing sensitive external credentials in the local database.",
    tech: ["Spring Security", "OAuth2", "JWT", "BCrypt", "Spring Boot", "Java 8", "PostgreSQL"],
    link: "https://github.com/viswapriya0000/MyDemoPortfolioForPracticsing/tree/main/Login-Page",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600"
  }
];

export const CERTIFICATIONS = [
  {
    title: "AZ-900 Microsoft Azure Fundamentals",
    link: "https://learn.microsoft.com/en-us/users/priyaobulsettyviswa-4389/credentials/6138391bb2f36421"
  },
  {
    title: "AZ-204 Developing Solutions for Microsoft Azure",
    link: "https://learn.microsoft.com/en-us/users/priyaobulsettyviswa-4389/credentials/F83DEC3B663AD878"
  },
  {
    title: "GCDL Google Cloud Digital Leader",
    link: "https://www.credential.net/google-cloud-digital-leader"
  }
];

export const LANGUAGES = ["English", "Hindi", "Telugu"];
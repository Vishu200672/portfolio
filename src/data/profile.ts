export interface ProfileInfo {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  statusText: string;
  github: string;
  linkedin: string;
  huggingface: string;
  resumeUrl: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
    details: string;
  };
  certifications: Array<{
    title: string;
    issuer: string;
    period?: string;
    verificationLink?: string;
  }>;
}

export const profileData: ProfileInfo = {
  name: "Vishvam Trivedi",
  role: "AI/ML & Computer Vision Engineer",
  headline: "Building intelligent systems across Computer Vision, NLP, and Machine Learning APIs.",
  subheadline:
    "Fourth-year B.Tech CSE student specializing in taking machine-learning models from experimentation to production-ready APIs, edge deployments, and interactive systems.",
  email: "vtpt2072@gmail.com",
  phone: "+91 9925830783",
  location: "Halol, Gujarat (Remote-ready)",
  availability: "Open to AI/ML Engineering & Computer Vision Roles",
  statusText: "BUILDING • LEARNING • DEPLOYING",
  github: "https://github.com/Vishu200672",
  linkedin: "https://linkedin.com/in/vishvam-trivedi-90a08628a",
  huggingface: "https://huggingface.co/Vishu2006",
  resumeUrl: "/Vishvam_Trivedi_Resume.pdf",
  education: {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "ITM (SLS) Baroda University",
    period: "2023 – 2027 (Expected)",
    cgpa: "8.62",
    details: "Focus on Applied Deep Learning, Computer Vision, Transformers, and Systems Architecture."
  },
  certifications: [
    {
      title: "SAP Certified Back-End Developer – ABAP Cloud",
      issuer: "SAP (Credly Verified)",
      period: "Apr 2026 – Apr 2027",
      verificationLink: "https://www.credly.com"
    },
    {
      title: "Claude Code: Software Engineering with Generative AI Agents",
      issuer: "Vanderbilt University"
    },
    {
      title: "Generative AI for Software Developers",
      issuer: "LinkedIn Learning"
    },
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      issuer: "Google"
    }
  ]
};

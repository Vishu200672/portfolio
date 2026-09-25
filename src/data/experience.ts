export interface HackathonAchievement {
  id: string;
  year: string;
  event: string;
  role: string;
  result: string;
  badge: string;
  problem: string;
  solution: string;
  myContribution: string;
  outcome: string;
  linkedProjectId?: string;
  linkedProjectName?: string;
  verified: boolean;
}

export const hackathonsData: HackathonAchievement[] = [
  {
    id: "bytexl-build-summit-2026",
    year: "2026",
    event: "ByteXL Build Summit × Chandigarh University",
    role: "Lead ML Developer",
    result: "Top 10 Finalist Nationwide",
    badge: "TOP 10 NATIONWIDE",
    problem:
      "Businesses needed an intelligent customer-management system capable of understanding customer behaviour, predicting churn and purchase intent, estimating customer value, and recommending appropriate next-best actions.",
    solution:
      "Customer360 AI — an end-to-end ML intelligence engine for customer segmentation, prediction, explainability, and next-best-action recommendations.",
    myContribution:
      "Built the ML intelligence layer covering RFM feature engineering, K-Means customer segmentation, churn prediction, purchase propensity, Customer Lifetime Value, SHAP explainability, and rules-backed Next Best Action logic.",
    outcome:
      "Selected among the Top 10 teams nationwide from over 600+ competitive teams across Indian universities, qualifying for the Grand Finale round.",
    linkedProjectId: "customer360-ai",
    linkedProjectName: "Customer360 AI",
    verified: true
  },
  {
    id: "odoo-hackathon-2026",
    year: "2026",
    event: "Odoo National Hackathon",
    role: "Full-Stack & Systems Developer",
    result: "National Finalist (Offline Finale)",
    badge: "TOP ~13% NATIONWIDE",
    problem:
      "Enterprise teams needed rapid, scalable automation of business workflows and transactional verification across operational departments.",
    solution:
      "Enterprise workflow automation system engineered for high-throughput transactional integrity and cross-module processing.",
    myContribution:
      "Engineered backend workflow models, transactional service logic, and end-to-end architecture under intense 24-hour hackathon constraints.",
    outcome:
      "Selected among 847 national finalist teams out of 6,500+ competing teams across India; invited to the prestigious offline finale at Gandhinagar.",
    verified: true
  },
  {
    id: "hackitm-2025",
    year: "2025",
    event: "HackITM",
    role: "ML & Backend Lead",
    result: "Runner-up",
    badge: "PODIUM FINISH // RUNNER-UP",
    problem:
      "Companies needed a smarter way to screen and match candidates against job requirements instead of relying entirely on manual resume evaluation.",
    solution:
      "SmartHire AI — an intelligent resume-to-job matching system using transformer-based semantic representations and candidate ranking.",
    myContribution:
      "Designed and developed the ML matching pipeline, including transformer-based embeddings, semantic similarity, candidate ranking, and model inference/API integration.",
    outcome:
      "Awarded Runner-up in university-wide hackathon; problem directly resulted in the production-grade SmartHire AI semantic ATS matching engine.",
    linkedProjectId: "smarthire-ai",
    linkedProjectName: "SmartHire AI",
    verified: true
  },
  {
    id: "sih-2025",
    year: "2025",
    event: "Smart India Hackathon (SIH)",
    role: "AI/ML Solutions Developer (Team Project)",
    result: "Advanced University Internal Round",
    badge: "TOP <25 TEAMS (UNIVERSITY ROUND)",
    problem:
      "Field workers needed an image-based system capable of identifying Indian cattle and buffalo breeds to support practical breed recognition.",
    solution:
      "Cattle & Buffalo Breed Recognizer — a computer-vision classification system designed for Indian bovine breed recognition.",
    myContribution:
      "Worked on the computer-vision pipeline using deep learning, transfer learning, image augmentation, model optimization, and practical/on-device inference.",
    outcome:
      "Ranked among top <25 teams in the rigorous internal university screening hackathon for the premier government innovation contest.",
    linkedProjectId: "breed-recognizer",
    linkedProjectName: "Cattle & Buffalo Breed Recognizer",
    verified: true
  },
  {
    id: "hackbaroda-2025",
    year: "2025",
    event: "HackBaroda",
    role: "Developer & Technical Contributor",
    result: "Competitive Participant",
    badge: "COMPETITIVE PARTICIPANT",
    problem:
      "Companies needed a systematic way to evaluate tenders and determine whether a tender was suitable and potentially beneficial based on its requirements, conditions, and relevant business considerations.",
    solution:
      "Tender evaluation and selection system designed to assist companies in identifying and evaluating suitable tender opportunities.",
    myContribution:
      "Engineered the technical and data-driven evaluation pipeline, structuring multi-attribute criteria extraction, requirement scoring, and decision matrices.",
    outcome:
      "Successfully shipped functional prototype and multi-criteria tender suitability workflow evaluation in 24-hour sprint.",
    verified: true
  }
];

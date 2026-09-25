export interface HackathonAchievement {
  id: string;
  year: string;
  event: string;
  role: string;
  projectFocus: string;
  outcome: string;
  badge: string;
  description: string;
  verified: boolean;
}

export const hackathonsData: HackathonAchievement[] = [
  {
    id: "hackitm-2025",
    year: "2025",
    event: "HackITM",
    role: "ML & Backend Lead",
    projectFocus: "AI-driven system architecture & rapid prototyping",
    outcome: "Runner-up",
    badge: "PODIUM FINISH",
    description:
      "Awarded Runner-up in university-wide hackathon, architecting and shipping a functional working prototype under intense time constraints.",
    verified: true
  },
  {
    id: "odoo-hackathon-2026",
    year: "2026",
    event: "Odoo National Hackathon",
    role: "Full-Stack & Systems Developer",
    projectFocus: "Enterprise workflows & rapid system implementation",
    outcome: "National Finalist (Offline Finale)",
    badge: "TOP ~13% NATIONWIDE",
    description:
      "Selected among 847 national finalist teams out of 6,500+ competing teams across India; invited to the prestigious offline finale at Gandhinagar.",
    verified: true
  },
  {
    id: "bytexl-build-summit-2026",
    year: "2026",
    event: "ByteXL Build Summit × Chandigarh University",
    role: "Lead ML Developer",
    projectFocus: "Applied Machine Learning & Scalable Architectures",
    outcome: "Top 10 Finalist Nationwide",
    badge: "TOP 10 NATIONWIDE",
    description:
      "Selected among the Top 10 teams nationwide from over 600+ competitive teams across Indian universities, qualifying for the Grand Finale round.",
    verified: true
  },
  {
    id: "sih-2025",
    year: "2025",
    event: "Smart India Hackathon (SIH)",
    role: "AI/ML Solutions Developer",
    projectFocus: "Public interest & real-world technological intervention",
    outcome: "Advanced University Internal Round",
    badge: "TOP <25 TEAMS",
    description:
      "Ranked among top <25 teams in the rigorous internal university screening hackathon for the premier government innovation contest.",
    verified: true
  },
  {
    id: "hackbaroda",
    year: "2024",
    event: "HackBaroda",
    role: "Developer",
    projectFocus: "Civic tech & community software challenge",
    outcome: "Competitive Participant",
    badge: "PARTICIPANT",
    description:
      "Competed in regional 24-hour hackathon exploring collaborative developer workflows and rapid product scoping.",
    verified: true
  }
];

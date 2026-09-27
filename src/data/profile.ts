export interface ProfileInfo {
  name: string;
  title: string;
  secondaryTitle: string;
  location: string;
  email: string;
  phone: string;
  status: string;
  yearsOfExperience: string;
  summary: string;
  careerDirection: string[];
  education: Array<{
    degree: string;
    institution: string;
    field?: string;
  }>;
  certifications: {
    completed: Array<{
      name: string;
      issuer: string;
      status: 'Completed';
    }>;
    planned: Array<{
      name: string;
      code?: string;
      status: 'Planned / Learning';
      description: string;
    }>;
  };
  softSkills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const profileData: ProfileInfo = {
  name: "Ragib Khan",
  title: "Desktop Support Engineer (L2) | Endpoint & Mac Support",
  secondaryTitle: "IT Infrastructure • Endpoint Management • Automation • Cloud Learning",
  location: "Delhi, India",
  email: "ragibk2@gmail.com",
  phone: "+91-8868886769",
  status: "Open to System Administrator / Cloud-focused opportunities",
  yearsOfExperience: "6+ Years",
  summary: "Experienced Desktop Support Engineer (L2) with 6+ years of corporate IT experience supporting Windows and macOS environments in enterprise setups. Strong background in end-user support, hardware and software troubleshooting, VPN configuration, asset management, remote support and enterprise IT operations.",
  careerDirection: [
    "Desktop Support L2",
    "System Administrator",
    "Cloud / Endpoint Administrator",
    "IT Infrastructure Engineer"
  ],
  education: [
    {
      degree: "Bachelor of Arts (B.A.)",
      institution: "Bareilly College, Bareilly"
    },
    {
      degree: "Intermediate (PCM)",
      institution: "U.P. Board",
      field: "Physics, Chemistry, Mathematics"
    },
    {
      degree: "High School (PCM)",
      institution: "U.P. Board",
      field: "Science & Mathematics"
    }
  ],
  certifications: {
    completed: [
      {
        name: "Hardware & Networking",
        issuer: "Syscom Institute",
        status: "Completed"
      }
    ],
    planned: [
      {
        name: "Microsoft Certified: Azure Fundamentals",
        code: "AZ-900",
        status: "Planned / Learning",
        description: "Cloud computing fundamentals, security, compliance, identity, and Azure architectural components."
      },
      {
        name: "Microsoft Certified: Azure Administrator Associate",
        code: "AZ-104",
        status: "Planned / Learning",
        description: "Managing Azure identities and governance, implementing storage, compute, and virtual networking."
      },
      {
        name: "Microsoft 365 Endpoint Administrator",
        code: "MD-102",
        status: "Planned / Learning",
        description: "Deploying and managing endpoints with Microsoft Intune, compliance policies, and identity management."
      },
      {
        name: "AWS Certified Cloud Practitioner",
        code: "CLF-C02",
        status: "Planned / Learning",
        description: "Overall understanding of AWS Cloud platform, basic global infrastructure, and security posture."
      },
      {
        name: "Linux Administration (LPIC-1 / RHCSA concepts)",
        status: "Planned / Learning",
        description: "Linux system architecture, package management, shell scripting, and storage administration."
      }
    ]
  },
  softSkills: [
    "Problem solving",
    "Troubleshooting",
    "Communication",
    "User handling",
    "Quick learning",
    "Proactive approach",
    "Team collaboration",
    "Adaptability",
    "Responsibility"
  ],
  socialLinks: {
    github: "[ADD GITHUB URL]",
    linkedin: "[ADD LINKEDIN URL]",
    email: "mailto:ragibk2@gmail.com"
  }
};

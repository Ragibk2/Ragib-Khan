export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  badge: 'Personal Project' | 'Personal Lab / Portfolio Project' | 'Planned Project';
  status: 'Active Development' | 'Active Development / Lab' | 'Planned';
  description: string;
  image: string;
  technologies: string[];
  features: {
    category?: string;
    items: string[];
  }[];
  architecture?: {
    title: string;
    steps: string[];
    description: string;
  };
  aiEnhancement?: {
    title: string;
    description: string;
    capabilities: string[];
    disclaimer: string;
  };
  links: {
    github: string;
    demo?: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "pulsex",
    name: "PulseX",
    subtitle: "AI-Assisted News & Market Intelligence Platform",
    category: "Full-Stack Web & Intelligence",
    badge: "Personal Project",
    status: "Active Development",
    description: "PulseX is a personal technology project designed to aggregate, organize and analyze recent news and market information across India, World, Technology, AI, Cybersecurity and Business & Markets.",
    image: "/src/assets/images/pulsex_platform_preview_1790518359708.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "RSS Feeds",
      "AI Processing",
      "Tailwind CSS"
    ],
    features: [
      {
        category: "Information & Desks",
        items: [
          "Curated India Desk covering national and regional policy developments",
          "World Desk delivering international geopolitical and macro news",
          "Technology Desk tracking hardware breakthroughs and operating system updates",
          "Specialized AI & Cybersecurity intelligence feeds for IT professionals",
          "Recent-news time window filtering with duplicate deduplication"
        ]
      },
      {
        category: "Market Radar & Indices",
        items: [
          "Domestic equity indices tracking: NIFTY 50 and SENSEX",
          "Global market benchmarks: S&P 500 and NASDAQ 100",
          "Commodity and currency monitors: BTC/USD, Gold, Brent Crude, and USD/INR",
          "Automated financial data ingestion via REST APIs and real-time polling",
          "Source verification metrics and social media feed concept aggregation"
        ]
      }
    ],
    links: {
      github: "[ADD GITHUB URL]",
      demo: "https://ragibkhan.dev/projects/pulsex"
    }
  },
  {
    id: "ht-it-automation-suite",
    name: "HT IT Automation Suite",
    subtitle: "IT Support & Software Deployment Automation",
    category: "Desktop Engineering & Automation",
    badge: "Personal Lab / Portfolio Project",
    status: "Active Development",
    description: "A personal IT automation project designed to simplify repetitive desktop support and software deployment tasks, inspired by real-world enterprise IT support workflows.",
    image: "/src/assets/images/it_automation_suite_preview_1790518374259.jpg",
    technologies: [
      "C#",
      ".NET",
      "WinForms",
      "PowerShell",
      "Windows Administration",
      "WMI"
    ],
    features: [
      {
        category: "Windows Diagnostic Utilities",
        items: [
          "Network Toolkit: One-click IP Information, Ping tests, DNS lookup, and Flush DNS",
          "Group Policy Manager: Remote and local GPUpdate /force with result verification",
          "Storage Optimizer: Automated Disk Cleanup and Temporary File sanitation",
          "Security & Services: BitLocker encryption status reader and service restart manager",
          "Windows Troubleshooter: SFC scan launcher, DISM repair routines, and print spooler reset"
        ]
      },
      {
        category: "Silent Enterprise Software Deployment",
        items: [
          "Automated package installers: FortiClient VPN, ManageEngine agent, and Chrome",
          "Security agents: CrowdStrike Falcon, Netskope, and Proofpoint email protection",
          "Productivity tools: Microsoft 365, Adobe Reader/Acrobat, Zoom, and Power BI",
          "Live installation progress feedback, log window, and exit code validation",
          "Network share source integration with customizable installer package definitions"
        ]
      }
    ],
    links: {
      github: "[ADD GITHUB URL]"
    }
  },
  {
    id: "ht-it-monitor-tool",
    name: "HT IT Monitor Tool",
    subtitle: "Agentless IT Infrastructure Monitoring",
    category: "Infrastructure & Telemetry",
    badge: "Personal Lab / Portfolio Project",
    status: "Active Development / Lab",
    description: "A personal infrastructure monitoring project designed to explore agentless monitoring of Windows domain computers using Active Directory, PowerShell, WinRM/WMI and a modern web dashboard.",
    image: "/src/assets/images/it_monitor_agentless_preview_1790518386615.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PowerShell",
      "Active Directory",
      "WinRM",
      "WMI",
      "REST APIs"
    ],
    architecture: {
      title: "Agentless Telemetry Architecture",
      steps: [
        "Web Dashboard (React + TypeScript UI displaying real-time node health)",
        "Node.js Backend (REST API orchestrator and asynchronous task runner)",
        "PowerShell Pipeline (Encapsulated scripts executing query cmdlets)",
        "Active Directory / WinRM / WMI (Native Windows remote management protocols)",
        "Target Windows Endpoints (Zero-footprint agentless telemetry extraction)"
      ],
      description: "By leveraging native WinRM and WMI services already built into enterprise Windows operating systems, the architecture requires zero third-party agent installations on target endpoints, significantly reducing overhead and attack surface."
    },
    features: [
      {
        category: "Active Directory Integration",
        items: [
          "Automated computer account discovery from domain directory services",
          "Hostname, domain membership status, and OU location lookup",
          "User account information, lockout status, and security group memberships",
          "Sanitized demo data representation with zero exposure of private credentials"
        ]
      },
      {
        category: "Endpoint & Network Health",
        items: [
          "Online / Offline status polling with ping latency and DNS validation",
          "Resource telemetry: Real-time CPU usage, RAM utilization, and disk free space",
          "Operating system version, build number, and installed software catalog",
          "Connectivity matrix tracking gateway reachability and network bottlenecks"
        ]
      }
    ],
    aiEnhancement: {
      title: "AI-Assisted Infrastructure Monitoring",
      description: "AI is implemented strictly as an operational advisory copilot to enhance engineer workflows and summarize raw telemetry, rather than autonomously making destructive modifications.",
      capabilities: [
        "Log Analysis: Parsing Windows Event Viewer security and system logs to highlight anomalies",
        "Alert Summarization: Condensing multi-node outage cascades into clean 2-sentence executive summaries",
        "Troubleshooting Suggestions: Presenting step-by-step remediation procedures for detected symptoms",
        "Pattern Identification: Flagging recurring memory leaks or disk space degradation trends",
        "Natural-Language Explanations: Translating obscure Windows error codes into clear technical insights"
      ],
      disclaimer: "Note: AI provides diagnostic assistance, incident context, and health summaries. It does NOT independently control production systems or execute unauthorized write operations."
    },
    links: {
      github: "[ADD GITHUB URL]"
    }
  },
  {
    id: "cross-platform-it-support",
    name: "Cross-Platform IT Support Platform",
    subtitle: "Windows • macOS • Linux Support Hub",
    category: "Systems & Endpoint Strategy",
    badge: "Planned Project",
    status: "Planned",
    description: "A planned unified IT support platform providing automated troubleshooting, software installation, system information, network diagnostics, printer setup, and standard operating procedures (SOPs) across Windows, macOS, and Linux.",
    image: "/src/assets/images/infrastructure_lab_topology_1790518398404.jpg",
    technologies: [
      "Electron / Web",
      "PowerShell",
      "Bash / Zsh",
      "Python",
      "Cross-Platform APIs",
      "Markdown SOPs"
    ],
    features: [
      {
        category: "Planned Core Modules",
        items: [
          "Windows Tools: Registry fixes, DISM repair, printer spooler reset, BitLocker verification",
          "macOS Tools: CUPS printer setup, permission resets, FileVault check, Keychain repair",
          "Ubuntu Tools: NetworkManager diagnostics, UFW firewall verification, APT package repairs",
          "Unified Hardware & System Information: Single-click hardware spec and serial number export",
          "Centralized IT SOP & Knowledge Base: Searchable step-by-step guides for support engineers"
        ]
      }
    ],
    links: {
      github: "[ADD GITHUB URL]"
    }
  }
];

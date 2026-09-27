export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
  tags: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "team-computers",
    role: "Senior Support Engineer",
    company: "Team Computers Pvt. Ltd.",
    client: "HT Media Limited",
    location: "New Delhi, India",
    period: "Aug 2025 – Present",
    isCurrent: true,
    responsibilities: [
      "Providing L2 desktop and endpoint support for enterprise users across corporate offices.",
      "Troubleshooting hardware, operating system, VPN, and business application issues.",
      "Supporting mixed enterprise fleets of Windows (Windows 10/11) and macOS (MacBook Pro/Air/iMac).",
      "Coordinating with internal infrastructure and network engineering teams for escalations.",
      "Ensuring timely issue resolution and strict SLA compliance for corporate users.",
      "Supporting enterprise users both remotely and through on-site hands-on troubleshooting.",
      "Troubleshooting complex endpoint software configurations and driver/system conflicts."
    ],
    tags: [
      "Windows",
      "macOS",
      "VPN",
      "Endpoint Support",
      "Hardware",
      "Software",
      "Remote Support"
    ]
  },
  {
    id: "quess-corp",
    role: "Desktop & Mac Support Engineer",
    company: "Quess Corp Ltd.",
    client: "HT Media Limited",
    location: "New Delhi, India",
    period: "Aug 2021 – Jul 2025",
    isCurrent: false,
    responsibilities: [
      "Delivered end-to-end desktop and macOS support in a fast-paced corporate media environment.",
      "Resolved hardware, OS, software, VPN, and network-related issues across departments.",
      "Supported Microsoft Outlook, Microsoft 365 / Exchange mailboxes, and collaboration tools.",
      "Supported enterprise business applications and media production software suites.",
      "Provided prompt remote and on-site support to VIPs, editors, and operational staff.",
      "Ensured consistent SLA compliance and ticket lifecycle management.",
      "Managed IT assets: device allocation, hardware refresh, and inventory tracking with ManageEngine.",
      "Handled laptop provisioning, BitLocker encryption setup, and peripheral configuration."
    ],
    tags: [
      "Windows",
      "macOS",
      "Microsoft 365",
      "Outlook",
      "VPN",
      "ManageEngine",
      "RDP",
      "Hardware",
      "IT Asset Management"
    ]
  },
  {
    id: "vserv-infosystems",
    role: "Associate Engineer",
    company: "VSERV Infosystems Pvt. Ltd.",
    client: "Army Group Insurance",
    location: "New Delhi, India",
    period: "Feb 2020 – Jul 2021",
    isCurrent: false,
    responsibilities: [
      "Provided desktop support and foundational system administration for client workstations.",
      "Performed Windows OS installation, formatting, image deployment, and driver setup.",
      "Carried out network and desktop printer installation, print queue configuration, and toner servicing.",
      "Assisted with network device cabling, switch port patching, and basic TCP/IP setup.",
      "Conducted LAN/WAN connectivity troubleshooting, ping tests, and cable testing.",
      "Supported daily IT operations, user onboarding hardware handover, and ticket logging."
    ],
    tags: [
      "Desktop Support",
      "Windows Setup",
      "Printer Installation",
      "Network Devices",
      "LAN/WAN",
      "Hardware Support",
      "IT Operations"
    ]
  }
];

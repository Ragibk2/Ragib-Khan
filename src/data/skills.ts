export type SkillStatus = 'Professional Experience' | 'Working Knowledge' | 'Currently Learning';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Operating Systems' | 'Endpoint & Support' | 'Networking' | 'Enterprise Tools' | 'Programming & Automation' | 'Cloud & Systems';
  status: SkillStatus;
  experienceYears?: string;
  whatIKnow: string[];
  whatIAmLearning: string[];
  recommendedTopics: string[];
  relatedProjects: string[];
  docUrl: string;
}

export const skillsDatabase: SkillItem[] = [
  // Operating Systems
  {
    id: "win-10-11",
    name: "Windows 10 & Windows 11",
    category: "Operating Systems",
    status: "Professional Experience",
    experienceYears: "6+ Years",
    whatIKnow: [
      "Enterprise deployment, servicing, and driver troubleshooting",
      "BitLocker encryption, TPM administration, and recovery key management",
      "Registry editing, Event Viewer log auditing, and service management",
      "Windows Update for Business troubleshooting and SFC/DISM health repairs"
    ],
    whatIAmLearning: [
      "Autopilot zero-touch cloud provisioning",
      "Windows 11 hardening with Microsoft Defender Application Guard"
    ],
    recommendedTopics: ["Windows Autopilot", "Modern Device Management", "WinPE Scripting"],
    relatedProjects: ["HT IT Automation Suite", "HT IT Monitor Tool"],
    docUrl: "https://learn.microsoft.com/en-us/windows/"
  },
  {
    id: "macos-enterprise",
    name: "macOS (MacBook Pro, Air, iMac)",
    category: "Operating Systems",
    status: "Professional Experience",
    experienceYears: "5+ Years",
    whatIKnow: [
      "Enterprise macOS onboarding, FileVault encryption setup, and Keychain troubleshooting",
      "macOS Terminal diagnostics, system extensions, and permission management",
      "Integration with corporate Wi-Fi (802.1X), VPN clients, and network shares (SMB)",
      "Office 365, Teams, and Outlook troubleshooting on Apple Silicon and Intel Macs"
    ],
    whatIAmLearning: [
      "Jamf Pro and Apple Business Manager (ABM) integration",
      "Declarative Device Management (DDM) on macOS Sequoia"
    ],
    recommendedTopics: ["Jamf 200", "Apple Platform Deployment", "Zsh Scripting for IT"],
    relatedProjects: ["Cross-Platform IT Support Platform"],
    docUrl: "https://support.apple.com/guide/deployment/welcome/web"
  },
  {
    id: "win-server",
    name: "Windows Server (2019 / 2022)",
    category: "Operating Systems",
    status: "Working Knowledge",
    experienceYears: "Lab & Operations",
    whatIKnow: [
      "Installation and baseline server configuration in Hyper-V lab",
      "Active Directory Domain Services (AD DS) installation and promotion",
      "DNS Server role, reverse lookup zones, and DHCP scope configuration",
      "File Server Resource Manager (FSRM) and NTFS share permissions"
    ],
    whatIAmLearning: [
      "Windows Admin Center modern hybrid management",
      "Failover Clustering and Azure Arc onboarding"
    ],
    recommendedTopics: ["Group Policy Objects (GPO)", "Hyper-V Virtualization", "PowerShell Remoting"],
    relatedProjects: ["Infrastructure Lab", "HT IT Monitor Tool"],
    docUrl: "https://learn.microsoft.com/en-us/windows-server/"
  },
  {
    id: "ubuntu-linux",
    name: "Ubuntu Linux & Shell",
    category: "Operating Systems",
    status: "Working Knowledge",
    experienceYears: "Lab / Systems",
    whatIKnow: [
      "Linux terminal navigation, file permissions (chmod/chown), and user management",
      "Package management via APT, systemd service management (systemctl/journalctl)",
      "SSH key pair generation, secure remote access, and firewall basics (UFW)",
      "Network diagnostics using ip, netstat, ping, and traceroute"
    ],
    whatIAmLearning: [
      "Bash automation scripts for system maintenance",
      "Linux integration into Windows Active Directory with SSSD"
    ],
    recommendedTopics: ["Bash Scripting", "SSSD Domain Join", "Docker Containers"],
    relatedProjects: ["Infrastructure Lab", "Cross-Platform IT Support Platform"],
    docUrl: "https://ubuntu.com/server/docs"
  },

  // Endpoint & IT Support
  {
    id: "endpoint-support-l2",
    name: "Desktop & Endpoint Support (L2)",
    category: "Endpoint & Support",
    status: "Professional Experience",
    experienceYears: "6+ Years",
    whatIKnow: [
      "Multi-tier incident triage, VIP user support, and root-cause analysis",
      "Hardware component replacement (RAM, NVMe SSD, motherboards, displays)",
      "Driver conflict resolution, BSOD crash dump analysis using WinDbg basics",
      "BIOS/UEFI firmware updates, boot priority, and secure boot configuration"
    ],
    whatIAmLearning: [
      "Automated endpoint self-healing scripts",
      "Proactive remediation telemetry with Intune"
    ],
    recommendedTopics: ["Endpoint Analytics", "WinDbg Analysis", "Automated Provisioning"],
    relatedProjects: ["HT IT Automation Suite"],
    docUrl: "https://learn.microsoft.com/en-us/microsoft-365/admin/"
  },
  {
    id: "it-asset-management",
    name: "IT Asset & Inventory Management",
    category: "Endpoint & Support",
    status: "Professional Experience",
    experienceYears: "5+ Years",
    whatIKnow: [
      "Device allocation, lifecycle tracking, and depreciation auditing",
      "Hardware refresh cycles, warranty checkups, and vendor RMA handling",
      "ManageEngine AssetExplorer inventory logging and barcode tracking",
      "Secure drive sanitization and e-waste disposal documentation"
    ],
    whatIAmLearning: [
      "Intune automated hardware inventory and compliance reporting",
      "ITAM integration with ServiceNow CMDB"
    ],
    recommendedTopics: ["ITIL v4 Foundations", "Hardware Lifecycle Auditing", "CMDB"],
    relatedProjects: ["HT IT Automation Suite"],
    docUrl: "https://www.manageengine.com/products/asset-explorer/"
  },
  {
    id: "remote-support-tools",
    name: "Remote Support & Administration",
    category: "Endpoint & Support",
    status: "Professional Experience",
    experienceYears: "6+ Years",
    whatIKnow: [
      "Enterprise remote control tools: TeamViewer Tensor, AnyDesk, RDP / MSTSC",
      "Remote shadow sessions for executive & newsroom desk troubleshooting",
      "Remote command line administration via PowerShell Remoting and PsExec",
      "WFH user setup, dual-monitor remote display optimization, and bandwidth limits"
    ],
    whatIAmLearning: [
      "Intune Remote Help cloud-integrated assistance",
      "Just-in-Time (JIT) remote elevation policies"
    ],
    recommendedTopics: ["PowerShell JEA (Just Enough Administration)", "Intune Remote Help"],
    relatedProjects: ["HT IT Automation Suite"],
    docUrl: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help"
  },

  // Networking
  {
    id: "vpn-wfh-support",
    name: "Enterprise VPN & WFH Connectivity",
    category: "Networking",
    status: "Professional Experience",
    experienceYears: "6+ Years",
    whatIKnow: [
      "FortiClient, Cisco AnyConnect, and native Windows/macOS VPN configurations",
      "SSL-VPN vs IPsec client troubleshooting and certificate-based authentication",
      "Split-tunneling routing diagnostics, MTU optimization, and gateway reachability",
      "Troubleshooting home ISP router conflicts and DNS leak/binding issues"
    ],
    whatIAmLearning: [
      "Zero Trust Network Access (ZTNA) architectures",
      "Netskope Private Access and cloud security brokers"
    ],
    recommendedTopics: ["ZTNA Architecture", "SVI & VLAN Routing", "Wireshark Packet Analysis"],
    relatedProjects: ["HT IT Automation Suite"],
    docUrl: "https://docs.fortinet.com/document/forticlient"
  },
  {
    id: "tcpip-dns-dhcp",
    name: "TCP/IP, DNS & DHCP Troubleshooting",
    category: "Networking",
    status: "Professional Experience",
    experienceYears: "6+ Years",
    whatIKnow: [
      "Subnetting fundamentals, default gateways, and static vs dynamic IP assignment",
      "DNS resolution diagnostics using nslookup, Resolve-DnsName, and dig",
      "DNS cache clearing (ipconfig /flushdns), HOSTS file testing, and root hint queries",
      "DHCP lease renewal, DORA process analysis, and rogue DHCP detection"
    ],
    whatIAmLearning: [
      "Active Directory Integrated DNS zones and DNSSEC",
      "IPv6 enterprise dual-stack addressing"
    ],
    recommendedTopics: ["DHCP Failover", "DNS Forwarding & Conditional Forwarders", "Wireshark"],
    relatedProjects: ["HT IT Automation Suite", "Infrastructure Lab"],
    docUrl: "https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-top"
  },

  // Enterprise Tools
  {
    id: "microsoft-365",
    name: "Microsoft 365 / Outlook / Exchange Online",
    category: "Enterprise Tools",
    status: "Professional Experience",
    experienceYears: "5+ Years",
    whatIKnow: [
      "Outlook OST corruption repairs, profile rebuilding, and cached mode tuning",
      "Mailbox delegation, shared mailbox permissions, and calendar sync issues",
      "M365 Admin Center user provisioning, password resets, and license allocation",
      "OneDrive for Business sync client troubleshooting and Teams cache reset"
    ],
    whatIAmLearning: [
      "Exchange Online PowerShell administration (EXO V3 module)",
      "Conditional Access policies and Self-Service Password Reset (SSPR)"
    ],
    recommendedTopics: ["Exchange Online Management", "M365 Security Center", "SharePoint Online Admin"],
    relatedProjects: ["HT IT Automation Suite"],
    docUrl: "https://learn.microsoft.com/en-us/microsoft-365/"
  },
  {
    id: "manageengine-suite",
    name: "ManageEngine ServiceDesk & Desktop Central",
    category: "Enterprise Tools",
    status: "Professional Experience",
    experienceYears: "4+ Years",
    whatIKnow: [
      "SLA ticket lifecycle management, escalation matrices, and incident resolution notes",
      "Agent-based endpoint software package distribution and silent switch verification",
      "Patch scanning, vulnerability auditing, and automated reboot scheduling",
      "Asset discovery agent deployment and hardware contract tracking"
    ],
    whatIAmLearning: [
      "Transitioning from on-premises ManageEngine to Microsoft Intune",
      "Automating ticket dispatch via webhook integrations"
    ],
    recommendedTopics: ["Endpoint Central Best Practices", "ITSM Workflow Automation"],
    relatedProjects: ["HT IT Automation Suite"],
    docUrl: "https://www.manageengine.com/"
  },

  // Programming & Automation
  {
    id: "powershell-automation",
    name: "PowerShell Scripting & Windows Automation",
    category: "Programming & Automation",
    status: "Professional Experience",
    experienceYears: "4+ Years",
    whatIKnow: [
      "Cmdlets for Active Directory queries (Get-ADUser, Get-ADComputer)",
      "Automated system maintenance scripts (Disk cleanup, temp flush, service restarts)",
      "Remote management scripts utilizing WinRM, Invoke-Command, and CIM sessions",
      "Error handling with Try/Catch, structured logging, and script parameterization"
    ],
    whatIAmLearning: [
      "PowerShell 7 cross-platform scripting on Linux and macOS",
      "Microsoft Graph PowerShell SDK for Azure/Intune automation"
    ],
    recommendedTopics: ["Microsoft Graph SDK", "Advanced PS Functions", "Pester Testing"],
    relatedProjects: ["HT IT Automation Suite", "HT IT Monitor Tool"],
    docUrl: "https://learn.microsoft.com/en-us/powershell/"
  },
  {
    id: "csharp-dotnet",
    name: "C# & .NET (WinForms / Desktop Apps)",
    category: "Programming & Automation",
    status: "Working Knowledge",
    experienceYears: "Projects & Lab",
    whatIKnow: [
      "Desktop GUI engineering for internal IT support utilities",
      "Process execution (System.Diagnostics.Process) for silent installations",
      "Asynchronous background workers to keep UI responsive during script execution",
      "Event-driven architecture, file I/O, and settings management"
    ],
    whatIAmLearning: [
      ".NET 8 modern console and WPF utilities",
      "C# Interop with Windows API and WMI"
    ],
    recommendedTopics: [".NET Modern CLI", "WPF / MAUI", "Asynchronous Programming"],
    relatedProjects: ["HT IT Automation Suite"],
    docUrl: "https://learn.microsoft.com/en-us/dotnet/csharp/"
  },
  {
    id: "node-typescript-react",
    name: "TypeScript, Node.js & React",
    category: "Programming & Automation",
    status: "Working Knowledge",
    experienceYears: "Projects",
    whatIKnow: [
      "Modern React component architecture, hooks, and responsive design",
      "Node.js backend microservices, Express REST endpoints, and child processes",
      "TypeScript static typing, interfaces, and clean project structuring",
      "Integrating web dashboards with local automation scripts and APIs"
    ],
    whatIAmLearning: [
      "Full-stack IT monitoring dashboards with live telemetry",
      "Secure backend token authentication and rate limiting"
    ],
    recommendedTopics: ["Tailwind CSS", "Server-Sent Events", "REST API Security"],
    relatedProjects: ["PulseX", "HT IT Monitor Tool", "Portfolio Website"],
    docUrl: "https://www.typescriptlang.org/"
  },
  {
    id: "git-github",
    name: "Git & GitHub Version Control",
    category: "Programming & Automation",
    status: "Working Knowledge",
    experienceYears: "Projects",
    whatIKnow: [
      "Repository initialization, commit structuring, branch management",
      "Merge conflict resolution and remote synchronization",
      "GitHub releases, issue tracking, and markdown project documentation"
    ],
    whatIAmLearning: [
      "GitHub Actions CI/CD workflows for script deployment",
      "Infrastructure as Code (IaC) versioning"
    ],
    recommendedTopics: ["GitHub Actions", "Git Flow", "IaC Repositories"],
    relatedProjects: ["PulseX", "HT IT Automation Suite", "HT IT Monitor Tool"],
    docUrl: "https://git-scm.com/doc"
  },

  // Cloud & Systems (Upskilling Roadmap Focus)
  {
    id: "microsoft-intune",
    name: "Microsoft Intune (Endpoint Management)",
    category: "Cloud & Systems",
    status: "Currently Learning",
    experienceYears: "Upskilling Roadmap",
    whatIKnow: [
      "Core principles of MDM (Mobile Device Management) and MAM",
      "Device enrollment methods (Company Portal, Autopilot basics)",
      "Application packaging (.intunewin Win32 app wrapper preparation)",
      "Compliance policies and device configuration profile concepts"
    ],
    whatIAmLearning: [
      "Creating granular Configuration Profiles for Windows 11 & macOS",
      "Intune Suite advanced features (Endpoint Privilege Management)",
      "Conditional Access policy integration with Microsoft Entra ID"
    ],
    recommendedTopics: ["Win32 App Packaging", "Intune Configuration Profiles", "Compliance Rules"],
    relatedProjects: ["Learning Roadmap", "Cross-Platform IT Support Platform"],
    docUrl: "https://learn.microsoft.com/en-us/mem/intune/"
  },
  {
    id: "sccm-configmgr",
    name: "SCCM / Microsoft Configuration Manager",
    category: "Cloud & Systems",
    status: "Currently Learning",
    experienceYears: "Upskilling Roadmap",
    whatIKnow: [
      "Architecture overview: Site servers, distribution points, and client agents",
      "Software distribution packages vs application deployment model",
      "Boundary groups, device collections, and software metering concepts",
      "OS deployment (OSD) task sequences and driver catalog structure"
    ],
    whatIAmLearning: [
      "Co-management bridge between SCCM and Microsoft Intune",
      "Software update management (SUM) ring deployment"
    ],
    recommendedTopics: ["Task Sequences", "Collection Queries (WQL)", "Co-management"],
    relatedProjects: ["Learning Roadmap", "HT IT Automation Suite"],
    docUrl: "https://learn.microsoft.com/en-us/mem/configmgr/"
  },
  {
    id: "microsoft-azure",
    name: "Microsoft Azure (Cloud Administration)",
    category: "Cloud & Systems",
    status: "Currently Learning",
    experienceYears: "Upskilling Roadmap",
    whatIKnow: [
      "Azure fundamental concepts: IaaS, PaaS, SaaS, regions, and resource groups",
      "Microsoft Entra ID (Azure AD) user and group management",
      "Virtual Machine deployment, network security groups (NSGs), and virtual networks (VNets)",
      "Azure Storage Accounts (Blob, File Shares) and access tiers"
    ],
    whatIAmLearning: [
      "Preparing for AZ-900 & AZ-104 certification objectives",
      "Azure Bastion secure VM access and hybrid network peering",
      "Azure Monitor and Log Analytics workspace log queries (KQL)"
    ],
    recommendedTopics: ["AZ-900 Objectives", "AZ-104 Objectives", "Entra ID Governance"],
    relatedProjects: ["Learning Roadmap"],
    docUrl: "https://learn.microsoft.com/en-us/azure/"
  },
  {
    id: "active-directory-sysadmin",
    name: "Active Directory & Windows System Administration",
    category: "Cloud & Systems",
    status: "Currently Learning",
    experienceYears: "Lab & Upskilling",
    whatIKnow: [
      "Organizational Unit (OU) structuring and administrative delegation",
      "Security Groups vs Distribution Groups and permission assignment",
      "Group Policy Object (GPO) configuration for desktop restrictions and drive mappings",
      "DNS forward/reverse lookup zones and domain-join troubleshooting"
    ],
    whatIAmLearning: [
      "Kerberos authentication flow and SPN troubleshooting",
      "Active Directory Certificate Services (AD CS) PKI basics",
      "Hybrid Entra Connect sync configuration"
    ],
    recommendedTopics: ["GPO Precedence & Filtering", "Entra Connect Sync", "AD Health Checks"],
    relatedProjects: ["Infrastructure Lab", "HT IT Monitor Tool"],
    docUrl: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services"
  }
];

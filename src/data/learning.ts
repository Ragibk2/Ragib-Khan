export interface LearningDomain {
  id: string;
  title: string;
  subtitle: string;
  focusArea: string;
  status: 'Currently Active' | 'Next in Sequence';
  topics: {
    title: string;
    description: string;
    handsOnLab: string;
  }[];
}

export const learningRoadmapData: LearningDomain[] = [
  {
    id: "sccm",
    title: "SCCM / Microsoft Configuration Manager",
    subtitle: "Enterprise-Scale Endpoint & Software Lifecycle Management",
    focusArea: "Endpoint Architecture",
    status: "Currently Active",
    topics: [
      {
        title: "Software Deployment",
        description: "Packaging, testing silent parameters, and orchestrating phased rollouts.",
        handsOnLab: "Building scripted distribution packages with return-code verification."
      },
      {
        title: "Application Deployment Model",
        description: "Configuring detection methods, dependencies, supersedence, and user targeting.",
        handsOnLab: "Creating Win32 application wrappers and silent uninstall command-chains."
      },
      {
        title: "Endpoint & Device Management",
        description: "Managing hardware inventories, boundary groups, distribution points, and client health.",
        handsOnLab: "Creating dynamic device collections based on WQL hardware queries."
      },
      {
        title: "Co-Management Bridge",
        description: "Enabling dual-management workloads between on-premises SCCM and cloud Intune.",
        handsOnLab: "Configuring client settings and workload slider shifts to Intune."
      }
    ]
  },
  {
    id: "intune",
    title: "Microsoft Intune",
    subtitle: "Modern Cloud-First Endpoint Management & Zero Trust",
    focusArea: "Cloud Endpoint Management",
    status: "Currently Active",
    topics: [
      {
        title: "Device Management & Enrollment",
        description: "Windows Autopilot cloud provisioning, Apple Business Manager (ABM), and BYOD.",
        handsOnLab: "Simulating cloud hardware hash imports and Out-of-Box-Experience (OOBE) profiles."
      },
      {
        title: "Application Deployment",
        description: "Distributing Microsoft 365 Apps, Line-of-Business (LOB), and .intunewin Win32 apps.",
        handsOnLab: "Packaging custom PowerShell installation scripts using Microsoft Win32 Content Prep Tool."
      },
      {
        title: "Endpoint Configuration",
        description: "Creating granular Configuration Profiles, BitLocker policies, and Administrative Templates.",
        handsOnLab: "Building standardized baseline security configurations for Windows 11 and macOS."
      },
      {
        title: "Compliance Policies",
        description: "Enforcing minimum OS versions, TPM 2.0 requirements, and firewall states before granting access.",
        handsOnLab: "Integrating compliance policy status with Microsoft Entra Conditional Access."
      }
    ]
  },
  {
    id: "azure",
    title: "Microsoft Azure",
    subtitle: "Enterprise Cloud Administration & Hybrid Infrastructure",
    focusArea: "Cloud Infrastructure",
    status: "Currently Active",
    topics: [
      {
        title: "Azure Fundamentals (AZ-900)",
        description: "Cloud computing concepts, regions, availability zones, SLA tiers, and resource management.",
        handsOnLab: "Structuring resource groups, tags, and cost-budget alerts in Azure Sandbox."
      },
      {
        title: "Identity & Entra ID",
        description: "User/group provisioning, Role-Based Access Control (RBAC), and Privileged Identity Management (PIM).",
        handsOnLab: "Configuring Self-Service Password Reset (SSPR) and Multi-Factor Authentication (MFA)."
      },
      {
        title: "Virtual Machines & Compute",
        description: "Deploying Windows Server and Linux VMs, sizing compute SKUs, and managing managed disks.",
        handsOnLab: "Automating VM deployment via ARM / Bicep templates and configuring auto-shutdown schedules."
      },
      {
        title: "Networking & Cloud Security",
        description: "Virtual Networks (VNets), subnets, Network Security Groups (NSGs), and Azure Bastion.",
        handsOnLab: "Setting up private VNet peering and securing VM RDP access through Azure Bastion."
      }
    ]
  },
  {
    id: "sysadmin",
    title: "System Administration",
    subtitle: "Core Windows Server, Active Directory & Hybrid Services",
    focusArea: "Infrastructure & Directory Services",
    status: "Currently Active",
    topics: [
      {
        title: "Active Directory Domain Services",
        description: "Forest and domain topology, schema, OU structures, delegation, and security principals.",
        handsOnLab: "Building a multi-tier OU hierarchy with least-privilege administrative roles."
      },
      {
        title: "Windows Server Management",
        description: "Installing and administering Windows Server 2022, storage pools, and server baselines.",
        handsOnLab: "Configuring File Server Resource Manager with automated quota alerting."
      },
      {
        title: "DNS & DHCP Infrastructure",
        description: "Forward and reverse lookup zones, conditional forwarders, scavenge rules, and DHCP scopes.",
        handsOnLab: "Setting up split-brain DNS resolution and high-availability DHCP failover."
      },
      {
        title: "Group Policy Objects (GPO)",
        description: "Designing security baselines, software restriction policies, drive maps, and WMI filtering.",
        handsOnLab: "Deploying automated workstation lockouts, wallpaper standards, and local admin restrictions."
      },
      {
        title: "PowerShell & Automation",
        description: "Scripting Active Directory health reports, bulk user onboarding, and system remediation.",
        handsOnLab: "Writing modular scripts to audit inactive accounts and export CSV reports."
      },
      {
        title: "Linux Administration",
        description: "Command-line administration, systemd daemon control, package updates, and SSH key security.",
        handsOnLab: "Configuring Ubuntu server as an internal utility host with automated cron backup jobs."
      }
    ]
  }
];

export const careerProgressionSteps = [
  {
    stage: "Stage 01",
    title: "Desktop Support L2",
    badge: "Current Mastery (6+ Yrs)",
    description: "Enterprise endpoint hardware & software support, macOS & Windows mixed fleet management, VPN/network diagnostics, VIP handling, and asset tracking.",
    status: "Achieved",
    accent: "border-blue-500/40 text-blue-400 bg-blue-950/20"
  },
  {
    stage: "Stage 02",
    title: "System Administration",
    badge: "Active Upskilling",
    description: "Active Directory management, Windows Server 2022 administration, Group Policy Objects, DNS/DHCP infrastructure, and PowerShell automation.",
    status: "In Progress",
    accent: "border-sky-500/40 text-sky-400 bg-sky-950/20"
  },
  {
    stage: "Stage 03",
    title: "Endpoint Administration",
    badge: "Active Upskilling",
    description: "Modern cloud device management with Microsoft Intune, SCCM co-management, Win32 application packaging, Autopilot, and compliance baselines.",
    status: "In Progress",
    accent: "border-indigo-500/40 text-indigo-400 bg-indigo-950/20"
  },
  {
    stage: "Stage 04",
    title: "Azure / Cloud Administration",
    badge: "Target Milestone",
    description: "Microsoft Entra ID governance, Azure Virtual Machines, Virtual Networking, storage account administration, and AZ-900 / AZ-104 certification goals.",
    status: "Upcoming",
    accent: "border-violet-500/40 text-violet-400 bg-violet-950/20"
  },
  {
    stage: "Stage 05",
    title: "IT Infrastructure Engineer",
    badge: "Long-Term Vision",
    description: "Architecting resilient hybrid enterprise infrastructures, automated zero-touch provisioning, cloud security posture, and infrastructure-as-code.",
    status: "Upcoming",
    accent: "border-emerald-500/40 text-emerald-400 bg-emerald-950/20"
  }
];

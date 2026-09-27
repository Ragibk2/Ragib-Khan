export interface LabNode {
  id: string;
  name: string;
  role: string;
  os: string;
  ip: string;
  specs: string;
  status: 'Running' | 'Standby';
  description: string;
  installedRoles: string[];
}

export interface AdTreeSection {
  name: string;
  iconType: string;
  description: string;
  items: string[];
}

export const labNodesData: LabNode[] = [
  {
    id: "host-node",
    name: "LAB-HYPERV-01",
    role: "Virtualization Host",
    os: "Windows 11 Enterprise (Hyper-V Hypervisor)",
    ip: "192.168.10.10/24 (Private Lab Subnet)",
    specs: "32 GB DDR4 RAM · 1 TB NVMe SSD · 8 Cores",
    status: "Running",
    description: "Core bare-metal virtualization platform hosting isolated virtual internal switches, NAT forwarding, and nested lab environments.",
    installedRoles: ["Hyper-V Virtual Switch", "NAT Gateway Routing", "Disk Management"]
  },
  {
    id: "dc-node",
    name: "LAB-DC01",
    role: "Primary Domain Controller & DNS",
    os: "Windows Server 2022 Datacenter",
    ip: "192.168.10.20/24 (Static DNS)",
    specs: "8 GB vRAM · 4 vCPU · 120 GB VHDX",
    status: "Running",
    description: "Hosts the lab Active Directory Domain Services forest (lab.internal), primary DNS forward/reverse lookup zones, and Group Policy baseline enforcement.",
    installedRoles: ["Active Directory Domain Services (AD DS)", "DNS Server Role", "DHCP Server", "Group Policy Management"]
  },
  {
    id: "filesrv-node",
    name: "LAB-FS01",
    role: "Member File & Management Server",
    os: "Windows Server 2022 Standard",
    ip: "192.168.10.25/24",
    specs: "4 GB vRAM · 2 vCPU · 200 GB VHDX",
    status: "Running",
    description: "Member server utilized for File Server Resource Manager (FSRM), NTFS security delegation, DFS namespace testing, and WinRM endpoint management.",
    installedRoles: ["File and Storage Services", "FSRM Quota Management", "WinRM Remote Endpoint", "Print Server Testbed"]
  },
  {
    id: "win11-client",
    name: "CLIENT-WIN11-01",
    role: "Domain-Joined Enterprise Client",
    os: "Windows 11 Enterprise 23H2",
    ip: "192.168.10.101 (DHCP Lease)",
    specs: "4 GB vRAM · 2 vCPU · 80 GB VHDX",
    status: "Running",
    description: "Primary client workstation for testing GPO inheritance, BitLocker TPM policies, silent software deployments, and PowerShell remoting scripts.",
    installedRoles: ["Domain Member", "BitLocker Encrypted", "ManageEngine Agent", "PowerShell 7.4"]
  },
  {
    id: "ubuntu-node",
    name: "LAB-UBUNTU-01",
    role: "Linux Member & Utility Host",
    os: "Ubuntu Server 22.04 LTS",
    ip: "192.168.10.150 (Static)",
    specs: "2 GB vRAM · 2 vCPU · 40 GB VHDX",
    status: "Running",
    description: "Linux utility server configured with OpenSSH for key-based authentication, testing SSSD Active Directory authentication join, and cross-platform monitoring.",
    installedRoles: ["SSSD AD Join Client", "OpenSSH Server", "UFW Firewall", "Automated Bash Scripts"]
  },
  {
    id: "macos-client",
    name: "MAC-TEST-CLIENT",
    role: "macOS Enterprise Client",
    os: "macOS Sonoma (Physical Testbed)",
    ip: "192.168.10.180 (Lab Wi-Fi)",
    specs: "16 GB Unified RAM · Apple Silicon M-Series",
    status: "Running",
    description: "Dedicated Mac workstation used to test FileVault encryption keys, Microsoft 365 Outlook profile stability, SMB network drive mounting, and corporate Wi-Fi profiles.",
    installedRoles: ["FileVault Enabled", "Company Portal Setup", "Microsoft 365 Apps", "Zsh Scripts"]
  }
];

export const adHierarchySections: AdTreeSection[] = [
  {
    name: "Organizational Units (OUs)",
    iconType: "folder",
    description: "Structured tiered OU hierarchy separating Workstations, Tier-1 Servers, Administrative Accounts, and Regular Users.",
    items: [
      "OU=Corporate-Users (Separated by Department: Editorial, Support, Finance)",
      "OU=IT-Endpoints (Windows-Clients, macOS-Fleet, Temp-Staging)",
      "OU=Lab-Servers (Domain-Controllers, File-Servers, Application-Hosts)",
      "OU=Admin-Accounts (Tier-0 and Tier-1 privileged credentials with elevated policies)"
    ]
  },
  {
    name: "Users & Identities",
    iconType: "users",
    description: "Directory accounts created for testing automated provisioning scripts, password rotation policies, and account lockouts.",
    items: [
      "Standard User templates with Department, Manager, and Email attributes populated",
      "Dedicated Service Accounts (gMSA) for automated script query runners",
      "Helpdesk Tier-1 operator accounts with delegated password reset permissions",
      "Automated PowerShell test script generating bulk test accounts with random attributes"
    ]
  },
  {
    name: "Security Groups & RBAC",
    iconType: "shield",
    description: "Role-Based Access Control model utilizing AGDLP (Account -> Global -> Domain Local -> Permission) structuring.",
    items: [
      "SG-Department-Editorial-RW (Read/Write access to Editorial shared storage)",
      "SG-RemoteDesktop-Users (Allowed inbound RDP to designated lab machines)",
      "SG-LocalAdmin-L2Support (Delegated local administrative rights on endpoints)",
      "SG-BitLocker-Recovery-Viewers (Authorized to extract BitLocker recovery keys)"
    ]
  },
  {
    name: "Group Policy Objects (GPOs)",
    iconType: "file-code",
    description: "Granular baseline policies applied to enforce security baselines, map network drives, and disable unapproved peripherals.",
    items: [
      "GPO-Endpoint-Security-Baseline (Screen lock timer, UAC max, Windows Firewall active)",
      "GPO-NetworkDrive-Mappings (Automatic department drive mapping via GPO Preferences)",
      "GPO-Browser-Enterprise-Config (Chrome and Edge managed bookmarks and security)",
      "GPO-L2-RemoteHelp-Firewall (Enables WinRM and ICMP ping replies for monitoring)"
    ]
  },
  {
    name: "DNS & Name Resolution",
    iconType: "network",
    description: "Active Directory Integrated DNS maintaining dynamic update records, conditional forwarders, and reverse lookups.",
    items: [
      "Forward Lookup Zone: lab.internal (Dynamic secure updates only)",
      "Reverse Lookup Zone: 10.168.192.in-addr.arpa for fast PTR IP-to-hostname queries",
      "Conditional Forwarders pointing to external DNS resolvers for split-horizon testing",
      "DNS Scavenging configured with 7-day stale record refresh intervals"
    ]
  }
];

export const labActivitiesList = [
  "Active Directory Forest deployment and schema inspection",
  "Domain Join procedures for Windows 10/11 and Linux (SSSD/Realmd)",
  "Tiered OU architecture design and administrative permission delegation",
  "Security Group hierarchy management following AGDLP standards",
  "Group Policy Object (GPO) authoring, precedence debugging, and WMI filtering",
  "DNS forward/reverse lookup zones, conditional forwarding, and scavenge routines",
  "File Server Resource Manager (FSRM) quotas, screening, and NTFS permissions",
  "Windows Server 2022 baseline configuration and service hardening",
  "Ubuntu Linux headless server administration and SSH key authentication",
  "PowerShell Remoting (WinRM) automation and remote fleet diagnostics",
  "Remote Administration via RSAT (Remote Server Administration Tools)"
];

export interface AssistantResponse {
  answer: string;
  source: 'offline-knowledge-base' | 'gemini-api';
  keyTakeaways: string[];
  suggestedFollowUps: string[];
}

export interface PresetQuestion {
  id: string;
  label: string;
  query: string;
}

export const presetQuestions: PresetQuestion[] = [
  {
    id: "learn-next",
    label: "What should I learn next?",
    query: "What should I learn next to advance from Desktop Support L2 to System Administrator?"
  },
  {
    id: "sysadmin-skills",
    label: "What skills am I missing?",
    query: "What skills am I missing for enterprise System Administrator roles?"
  },
  {
    id: "explain-ad",
    label: "Explain Active Directory",
    query: "Explain Active Directory concepts (OUs, GPOs, DNS, Kerberos) from an enterprise IT perspective."
  },
  {
    id: "azure-plan",
    label: "Azure Learning Plan",
    query: "Give me an Azure learning plan tailored for a desktop support engineer."
  },
  {
    id: "portfolio-tips",
    label: "Portfolio Suggestions",
    query: "What should I add to my IT portfolio to impress technical infrastructure managers?"
  },
  {
    id: "troubleshooting-guide",
    label: "IT Troubleshooting Guide",
    query: "Explain a systematic methodology for resolving complex enterprise IT troubleshooting issues."
  }
];

export async function askCareerAssistant(question: string): Promise<AssistantResponse> {
  const cleanQ = question.trim().toLowerCase();

  // If a backend proxy endpoint or Gemini API is configured in environment, attempt call
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (geminiApiKey && geminiApiKey !== "MY_GEMINI_API_KEY") {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an executive IT Infrastructure & Career Mentor advising Ragib Khan, an experienced Desktop Support Engineer (L2) with 6+ years corporate IT experience supporting Windows and macOS environments. Ragib is transitioning into System Administration, Endpoint Management (Intune/SCCM), and Azure Cloud Administration. Answer this query concisely, with high technical precision and encouragement:\n\nQuery: ${question}`
            }]
          }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return {
            answer: text,
            source: 'gemini-api',
            keyTakeaways: [
              "Focus on hands-on lab validation over passive theory.",
              "Anchor your identity as an infrastructure engineer who understands end-user pain points.",
              "Automate repetitive tasks with PowerShell."
            ],
            suggestedFollowUps: [
              "What lab projects demonstrate Azure expertise?",
              "How should I structure my resume for SysAdmin jobs?",
              "Explain Intune device compliance policies."
            ]
          };
        }
      }
    } catch {
      // Graceful fallback to offline expert knowledge base
    }
  }

  // Simulate minimal realistic processing latency
  await new Promise(resolve => setTimeout(resolve, 350));

  // Intelligent offline curated knowledge engine
  if (cleanQ.includes("learn next") || cleanQ.includes("next step") || cleanQ.includes("advance")) {
    return {
      answer: `Based on your strong 6+ years of Windows & macOS L2 support background, your highest-ROI next steps are:

1. **Microsoft Intune & Modern Endpoint Management (MD-102)**: Enterprise fleets are transitioning off traditional legacy agents to cloud-native Intune. Master Win32 app packaging (.intunewin), Autopilot device profiles, and compliance baseline policies.
2. **PowerShell Automation & Microsoft Graph API**: Move from simple one-liners to modular scripts and functions. Practice automating Active Directory user onboarding, group membership audits, and Azure Entra ID license assignments.
3. **Azure Fundamentals & Administration (AZ-900 → AZ-104)**: Master virtual networks (VNets), subnets, NSGs, and Azure Virtual Machine provisioning.
4. **Active Directory & Windows Server 2022 Core Roles**: Deepen your hands-on experience with Group Policy Object (GPO) precedence, DNS reverse lookup zones, and DHCP failover in your Hyper-V lab.`,
      source: 'offline-knowledge-base',
      keyTakeaways: [
        "Prioritize Microsoft Intune (MD-102) & Azure Administrator (AZ-104).",
        "Master the Microsoft Graph PowerShell SDK for cloud automation.",
        "Document home lab deployments in public GitHub repositories."
      ],
      suggestedFollowUps: [
        "What skills am I missing for System Administrator roles?",
        "Give me an Azure learning plan.",
        "What should I add to my portfolio?"
      ]
    };
  }

  if (cleanQ.includes("missing") || cleanQ.includes("skills") || cleanQ.includes("sysadmin") || cleanQ.includes("system administrator")) {
    return {
      answer: `Recruiters and technical managers hiring for System Administrator roles look for specific evidence that distinguishes an L2 engineer from an administrator:

### Skills You Already Excel At (Your Strength):
- Enterprise end-user triage, VIP handling, and macOS/Windows troubleshooting.
- Hardware diagnostics, BitLocker, VPN client configurations, and asset management.
- Day-to-day familiarity with enterprise tools (ManageEngine, Office 365, RDP).

### The Key Bridge Skills to Highlight:
1. **Server-Side Identity Management**: Not just resetting passwords in AD, but configuring Organizational Unit (OU) structures, Group Policy Objects (GPO) security filtering, and Kerberos/SPN fundamentals.
2. **Infrastructure Services**: DNS zones (forwarders, root hints, scavenging), DHCP scope reservation, and server backup routines.
3. **Automated Provisioning**: Writing reusable PowerShell scripts with structured parameter blocks and error handling rather than manual GUI clicks.
4. **Cloud Identity (Microsoft Entra ID)**: Hybrid identity sync with Entra Connect, Conditional Access rules, and MFA enforcement.`,
      source: 'offline-knowledge-base',
      keyTakeaways: [
        "Shift language from 'resolved ticket' to 'engineered standard operating procedure'.",
        "Highlight your Windows Server and Active Directory lab projects prominently.",
        "Emphasize your C# and PowerShell automation suite."
      ],
      suggestedFollowUps: [
        "Explain Active Directory.",
        "What should I add to my portfolio?",
        "What should I learn next?"
      ]
    };
  }

  if (cleanQ.includes("active directory") || cleanQ.includes("ad") || cleanQ.includes("domain controller")) {
    return {
      answer: `**Active Directory Domain Services (AD DS)** is the central identity and access management backbone of enterprise Windows networks:

### Key Core Architectural Components:
- **Domain Controllers (DC)**: Servers running AD DS holding the multi-master replicated directory database (\`NTDS.dit\`).
- **Organizational Units (OUs)**: Logical containers within a domain used to organize users, computers, and groups. Crucially, OUs are the smallest level to which Group Policy Objects (GPOs) and administrative permissions can be delegated.
- **Security Groups vs Distribution Groups**: Security groups grant access to resources (file shares, printer permissions) and can be used for email distribution; Distribution groups are email-only.
- **Group Policy Objects (GPO)**: Automated configuration engines evaluated in strict order: **L**ocal → **S**ite → **D**omain → **O**U (LSDO). The lowest OU policy takes final precedence unless "Enforced" is enabled.
- **DNS Integration**: AD is tightly bound to DNS. Domain controllers dynamically register SRV (Service Location) records so domain workstations can locate Kerberos and LDAP services.`,
      source: 'offline-knowledge-base',
      keyTakeaways: [
        "Remember GPO processing order: Local, Site, Domain, OU (LSDO).",
        "OUs are organizational and delegation boundaries; Groups are security boundaries.",
        "Always verify SRV records in DNS when troubleshooting domain join failures."
      ],
      suggestedFollowUps: [
        "What skills am I missing for System Administrator roles?",
        "Give me an Azure learning plan.",
        "Explain this IT troubleshooting issue."
      ]
    };
  }

  if (cleanQ.includes("azure") || cleanQ.includes("cloud") || cleanQ.includes("learning plan")) {
    return {
      answer: `Here is a structured, 4-phase Azure learning roadmap tailored specifically for your desktop support and endpoint background:

### Phase 1: Cloud & Identity Fundamentals (Weeks 1–3)
- Complete **AZ-900 (Azure Fundamentals)** curriculum.
- Master Microsoft Entra ID (formerly Azure AD): Users, Security Groups, Enterprise Applications, and Self-Service Password Reset (SSPR).
- Understand Role-Based Access Control (RBAC): Built-in Owner, Contributor, Reader roles and custom role definitions.

### Phase 2: Compute & Storage (Weeks 4–7)
- Provision Windows Server 2022 and Ubuntu Linux VMs in Azure Sandbox.
- Configure Azure Bastion for secure browser-based RDP without public IPs.
- Manage Azure Storage Accounts: Blob storage, Azure Files, SMB network shares, and SAS tokens.

### Phase 3: Networking & Hybrid Connectivity (Weeks 8–11)
- Build Virtual Networks (VNets), subnets, and Network Security Groups (NSGs).
- Configure VNet Peering between regions and test inter-VM latency.
- Explore Point-to-Site (P2S) VPN gateways for remote hybrid connectivity.

### Phase 4: Monitoring & Certification Prep (Weeks 12–14)
- Set up Azure Monitor, Log Analytics Workspaces, and learn basic Kusto Query Language (KQL) queries.
- Sit for **AZ-104 (Azure Administrator Associate)** certification.`,
      source: 'offline-knowledge-base',
      keyTakeaways: [
        "Start with Entra ID identity governance—it builds naturally on your AD knowledge.",
        "Use Azure free credits to build real VM and VNet topologies.",
        "Target AZ-900 first for confidence, followed by AZ-104 for job market impact."
      ],
      suggestedFollowUps: [
        "What should I learn next?",
        "What should I add to my portfolio?",
        "What skills am I missing for System Administrator roles?"
      ]
    };
  }

  if (cleanQ.includes("portfolio") || cleanQ.includes("add") || cleanQ.includes("project")) {
    return {
      answer: `Your current portfolio is already positioned very well because it highlights practical engineering rather than just generic helpdesk tickets. To maximize impact with technical hiring managers:

1. **Keep PulseX, HT IT Automation Suite, and HT IT Monitor Tool prominently featured**:
   - PulseX demonstrates full-stack web and modern API integration capability.
   - HT IT Automation Suite proves you proactively automate manual desktop support pain points with C# and PowerShell.
   - HT IT Monitor Tool showcases agentless infrastructure telemetry using native WinRM and WMI.
2. **Add Your Home Lab Topology (Hyper-V / AD / GPO)**:
   - Showing an actual Hyper-V or Proxmox lab with Windows Server 2022, domain-joined clients, and Ubuntu hosts proves true administrator initiative.
3. **Include Script Walkthroughs with Safety Mechanisms**:
   - Technical managers love seeing error handling (\`try/catch\`), parameters, logging, and non-destructive dry-run modes (\`-WhatIf\`).
4. **Maintain Clear Lab & Project Labeling**:
   - Presenting projects as personal lab initiatives inspired by enterprise workflows demonstrates integrity and professional ethics.`,
      source: 'offline-knowledge-base',
      keyTakeaways: [
        "Highlight your C# & PowerShell scripts with GitHub repository links.",
        "Emphasize the 'Agentless' architecture of your monitoring project.",
        "Keep your Infrastructure Lab architecture diagram updated."
      ],
      suggestedFollowUps: [
        "What should I learn next?",
        "Explain Active Directory.",
        "What skills am I missing for System Administrator roles?"
      ]
    };
  }

  // General troubleshooting / default response
  return {
    answer: `Here is a disciplined 5-stage enterprise IT troubleshooting framework for complex endpoint and infrastructure issues:

1. **Define the Scope & Blast Radius**:
   - Is the issue affecting a single user, an entire department, or an entire subnet?
   - What changed recently? (Windows updates, password change, VPN policy, router firmware).
2. **OSI Layered Verification**:
   - **Physical/Data Link**: Cable connection, link lights, Wi-Fi signal, IP address assignment (verify no 169.254.x.x APIPA address).
   - **Network/Transport**: Ping default gateway, test DNS resolution (\`nslookup\`), test TCP port reachability (\`Test-NetConnection -Port 443\`).
   - **Application**: Verify service states (\`Get-Service\`), certificates, and user permissions.
3. **Isolate Environment Variables**:
   - Does the issue reproduce under a clean local Windows profile?
   - Does it reproduce when connected to mobile hotspot vs corporate network?
4. **Event Log Deep Dive**:
   - Review Windows Event Viewer under \`Applications and Services Logs\` and \`System\` for Event IDs 4625 (Logon Failure), 1000 (App Crash), or 7036 (Service State).
5. **Implement Minimal Invasive Fix & Document**:
   - Make one change at a time, document the root cause, and evaluate whether a PowerShell script can prevent recurrence.`,
    source: 'offline-knowledge-base',
    keyTakeaways: [
      "Always verify Layer 1 and Layer 3 (IP & DNS) before reinstalling applications.",
      "Check Windows Event Viewer Event IDs for exact error codes.",
      "Turn recurring support tickets into automated remediation scripts."
    ],
    suggestedFollowUps: [
      "What should I learn next?",
      "Explain Active Directory.",
      "Give me an Azure learning plan."
    ]
  };
}

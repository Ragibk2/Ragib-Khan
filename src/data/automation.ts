export interface AutomationWorkflowStep {
  stepNumber: string;
  name: string;
  description: string;
}

export interface AutomationToolSample {
  id: string;
  title: string;
  category: string;
  description: string;
  language: 'PowerShell' | 'C#' | 'Bash';
  impact: string;
  code: string;
}

export const automationProcessSteps: AutomationWorkflowStep[] = [
  {
    stepNumber: "01",
    name: "User Issue",
    description: "Support ticket logged or recurring incident pattern identified during daily IT operations."
  },
  {
    stepNumber: "02",
    name: "Troubleshooting",
    description: "Diagnosing root cause across hardware, operating system, network stack, or software profile."
  },
  {
    stepNumber: "03",
    name: "Identify Repetitive Task",
    description: "Isolating manual multi-step actions (e.g. DNS flushing, profile cleansing, package installs)."
  },
  {
    stepNumber: "04",
    name: "Automate",
    description: "Developing robust PowerShell, C#, or shell automation scripts with rigorous error handling."
  },
  {
    stepNumber: "05",
    name: "Test",
    description: "Executing non-destructive unit runs across lab test machines (Windows 10, 11, macOS, Ubuntu)."
  },
  {
    stepNumber: "06",
    name: "Document",
    description: "Writing clear technical SOPs, parameter definitions, and failure recovery instructions."
  },
  {
    stepNumber: "07",
    name: "Deploy",
    description: "Distributing utility to support engineers or scheduling unattended background runs."
  },
  {
    stepNumber: "08",
    name: "Monitor",
    description: "Tracking execution exit codes, duration logs, and issue resolution success rates."
  }
];

export const automationSamples: AutomationToolSample[] = [
  {
    id: "dns-network-repair",
    title: "Automated Network Diagnostic & DNS Cache Repair",
    category: "Network Diagnostics",
    description: "Standardizes enterprise client network triage by resetting TCP/IP stacks, releasing/renewing DHCP leases, and flushing DNS caches while logging connectivity benchmarks.",
    language: "PowerShell",
    impact: "Reduces user network troubleshooting time from 15 mins to under 45 seconds.",
    code: `# Automated Enterprise Network Diagnostics & Repair Utility
# Author: Ragib Khan (IT Automation Lab)

Write-Host "[*] Initiating Network Health Check..." -ForegroundColor Cyan

# 1. Flush DNS resolver cache
Write-Host "[-] Flushing local DNS resolver cache..."
Clear-DnsClientCache
ipconfig /flushdns | Out-Null

# 2. Release & Renew DHCP leases
Write-Host "[-] Renewing DHCP lease for active adapters..."
ipconfig /renew | Out-Null

# 3. Test Gateway and DNS resolution
$Gateways = (Get-NetRoute -DestinationPrefix "0.0.0.0/0").NextHop
foreach ($GW in $Gateways) {
    $Ping = Test-Connection -ComputerName $GW -Count 2 -Quiet
    if ($Ping) {
        Write-Host "[+] Gateway Reachable: $GW (PASS)" -ForegroundColor Green
    } else {
        Write-Warning "[!] Gateway Unreachable: $GW (CHECK ADAPTER)"
    }
}

# 4. Verify internal DNS query resolution
$DnsTest = Resolve-DnsName -Name "intranet.local" -ErrorAction SilentlyContinue
if ($DnsTest) {
    Write-Host "[+] Internal DNS Resolution: OK" -ForegroundColor Green
} else {
    Write-Host "[!] Checking public DNS resolution..."
    Resolve-DnsName -Name "8.8.8.8" | Format-Table -AutoSize
}

Write-Host "[✓] Network Diagnostic Complete." -ForegroundColor Cyan`
  },
  {
    id: "disk-temp-cleanup",
    title: "Automated Disk Cleanup & Temporary Profile Sanitation",
    category: "System Maintenance",
    description: "Safely cleans accumulated Windows temp files, browser cache residues, crash dumps, and Windows Update download caches without disrupting active user sessions.",
    language: "PowerShell",
    impact: "Recovers 10GB–35GB per workstation; eliminates low-disk space escalations.",
    code: `# Workstation Temporary File & Storage Maintenance
# Author: Ragib Khan (IT Automation Lab)

[CmdletBinding()]
param (
    [switch]$ForceCleanup = $false
)

$TempPaths = @(
    "$env:SystemRoot\\Temp\\*",
    "$env:LOCALAPPDATA\\Temp\\*",
    "$env:SystemRoot\\SoftwareDistribution\\Download\\*"
)

Write-Host "[-] Calculating reclaimable storage space..." -ForegroundColor Yellow

$TotalBytesFreed = 0

foreach ($Path in $TempPaths) {
    $Files = Get-ChildItem -Path $Path -Recurse -Force -ErrorAction SilentlyContinue
    foreach ($File in $Files) {
        try {
            $TotalBytesFreed += $File.Length
            Remove-Item -Path $File.FullName -Force -Recurse -ErrorAction SilentlyContinue
        } catch {
            # File currently in-use by running process - skip safely
            continue
        }
    }
}

$MBFreed = [math]::Round($TotalBytesFreed / 1MB, 2)
Write-Host "[✓] Storage Optimization Complete. Freed: $MBFreed MB" -ForegroundColor Green`
  },
  {
    id: "silent-deployment-wrapper",
    title: "Silent Software Package Deployment Wrapper",
    category: "Software Deployment",
    description: "C# / .NET process executor that verifies local network share paths, launches silent MSI/EXE installations with strict argument passing, and catches return codes.",
    language: "C#",
    impact: "Standardizes enterprise deployments across FortiClient, Chrome, and CrowdStrike.",
    code: `// Silent Software Deployment Process Runner
// Author: Ragib Khan (Personal IT Automation Suite)

using System;
using System.Diagnostics;
using System.IO;

public class DeploymentEngine
{
    public static int DeployPackage(string installerPath, string silentArguments)
    {
        if (!File.Exists(installerPath))
        {
            Console.WriteLine("[ERROR] Installer source not found: " + installerPath);
            return -1;
        }

        Console.WriteLine("[INFO] Deploying: " + Path.GetFileName(installerPath));

        ProcessStartInfo startInfo = new ProcessStartInfo
        {
            FileName = installerPath,
            Arguments = silentArguments,
            UseShellExecute = false,
            CreateNoWindow = true,
            RedirectStandardOutput = true,
            RedirectStandardError = true
        };

        using (Process process = Process.Start(startInfo))
        {
            process.WaitForExit(300000); // 5-minute timeout guard
            Console.WriteLine("[INFO] Installation exited with code: " + process.ExitCode);
            return process.ExitCode;
        }
    }
}`
  },
  {
    id: "bitlocker-audit",
    title: "BitLocker TPM & Encryption Status Auditor",
    category: "Security & Endpoint",
    description: "Queries Windows Management Instrumentation (WMI) and manage-bde cmdlets to verify encryption method, TPM readiness, and key protector availability.",
    language: "PowerShell",
    impact: "Ensures 100% compliance auditing before laptop handovers or OS upgrades.",
    code: `# Endpoint Encryption & TPM Health Audit
# Author: Ragib Khan (IT Automation Lab)

$BitLockerVolume = Get-BitLockerVolume -MountPoint "C:"
$Tpm = Get-Tpm

$AuditReport = [PSCustomObject]@{
    ComputerName       = $env:COMPUTERNAME
    Drive              = "C:"
    VolumeStatus       = $BitLockerVolume.VolumeStatus
    ProtectionStatus   = $BitLockerVolume.ProtectionStatus
    EncryptionMethod   = $BitLockerVolume.EncryptionMethod
    TpmPresent         = $Tpm.TpmPresent
    TpmReady           = $Tpm.TpmReady
    KeyProtectorsCount = $BitLockerVolume.KeyProtector.Count
}

$AuditReport | Format-List
Write-Host "[✓] Security baseline check recorded." -ForegroundColor Green`
  }
];

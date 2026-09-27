export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    automation: string;
    lab: string;
    more: string;
    upskilling: string;
    skillSearch: string;
    aiAssistant: string;
    educationCerts: string;
    resume: string;
    contact: string;
    downloadResume: string;
  };
  hero: {
    status: string;
    title: string;
    secondaryTitle: string;
    summary: string;
    viewProjects: string;
    downloadResume: string;
    contactMe: string;
    location: string;
    yearsExp: string;
    fleets: string;
    activeLab: string;
    engineeringProfile: string;
    targetTitle: string;
    endpointFleet: string;
    endpointFleetDesc: string;
    automationScripting: string;
    automationScriptingDesc: string;
    infraCloudPath: string;
    infraCloudPathDesc: string;
    careerDirection: string;
    exploreRoadmap: string;
  };
  about: {
    badge: string;
    heading: string;
    bio: string;
    areasExpTitle: string;
    areasExpSubtitle: string;
    currentFocusTitle: string;
    currentFocusSubtitle: string;
    quote: string;
    trajectoryBadge: string;
    trajectoryHeading: string;
    trajectorySubtitle: string;
    educationHeading: string;
    certsHeading: string;
    completedCerts: string;
    plannedCerts: string;
    softSkillsHeading: string;
    softSkillsDesc: string;
  };
  experience: {
    badge: string;
    heading: string;
    subtitle: string;
    currentRole: string;
    client: string;
    keyDeliverables: string;
    technologies: string;
  };
  skills: {
    badge: string;
    heading: string;
    subtitle: string;
    tier1: string;
    tier1Desc: string;
    tier2: string;
    tier2Desc: string;
    tier3: string;
    tier3Desc: string;
    filterCategory: string;
    clearFilter: string;
    whatIKnow: string;
    focus: string;
    appliedIn: string;
    searchPrompt: string;
  };
  projects: {
    badge: string;
    heading: string;
    subtitle: string;
    viewArchitecture: string;
    projectOverview: string;
    keyFeatures: string;
    techFrameworks: string;
    closeModal: string;
    githubRepo: string;
    liveDemo: string;
  };
  automation: {
    badge: string;
    heading: string;
    quote: string;
    lifecycleHeading: string;
    modulesHeading: string;
    inspectorHeading: string;
    inspectorSubtitle: string;
    copyCode: string;
    copied: string;
    impact: string;
    safetyTitle: string;
    safetyDesc: string;
  };
  lab: {
    badge: string;
    heading: string;
    subtitle: string;
    tabTopology: string;
    tabAdTree: string;
    tabActivities: string;
    topologyHeading: string;
    hostTitle: string;
    hostDesc: string;
    systemSpecs: string;
    os: string;
    purpose: string;
    installedRoles: string;
    adTreeHeading: string;
    activitiesHeading: string;
  };
  upskilling: {
    badge: string;
    heading: string;
    subtitle: string;
    roadmapHeading: string;
    roadmapSubtitle: string;
    handsOnLab: string;
  };
  search: {
    badge: string;
    heading: string;
    subtitle: string;
    inputPlaceholder: string;
    quickSuggestions: string;
    resetSearch: string;
    matchesFound: string;
    noResults: string;
    noResultsDesc: string;
    whatIKnow: string;
    whatIAmLearning: string;
    recommendedTopics: string;
    relatedProjects: string;
    officialDocs: string;
  };
  assistant: {
    badge: string;
    heading: string;
    subtitle: string;
    suggestedPrompts: string;
    copilotHeading: string;
    copilotSub: string;
    onlineStatus: string;
    inputPlaceholder: string;
    send: string;
    disclaimer: string;
    synthesizing: string;
  };
  resume: {
    badge: string;
    heading: string;
    subtitle: string;
    cardTitle: string;
    cardSub: string;
    cardDesc: string;
    btnDownload: string;
    btnView: string;
    verified: string;
    fleets: string;
    atsOptimized: string;
    locationNote: string;
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    directEmail: string;
    phoneMobile: string;
    locationTitle: string;
    locationSub: string;
    profilesTitle: string;
    sendMessage: string;
    dispatchesTo: string;
    promptResponse: string;
    formSuccess: string;
    yourName: string;
    workEmail: string;
    company: string;
    roleCategory: string;
    messageScope: string;
    messagePlaceholder: string;
    btnSend: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      automation: "Automation",
      lab: "Lab",
      more: "More",
      upskilling: "Upskilling",
      skillSearch: "Skill Search",
      aiAssistant: "AI Assistant",
      educationCerts: "Education & Certs",
      resume: "Resume",
      contact: "Contact",
      downloadResume: "Resume"
    },
    hero: {
      status: "Open to System Administrator / Cloud-focused opportunities",
      title: "Desktop Support Engineer (L2) | Endpoint & Mac Support",
      secondaryTitle: "IT Infrastructure • Endpoint Management • Automation • Cloud Learning",
      summary: "Experienced Desktop Support Engineer (L2) with 6+ years of corporate IT experience supporting Windows and macOS environments in enterprise setups. Strong background in end-user support, hardware and software troubleshooting, VPN configuration, asset management, remote support and enterprise IT operations.",
      viewProjects: "View My Projects",
      downloadResume: "Download Resume",
      contactMe: "Contact Me",
      location: "Delhi, India",
      yearsExp: "6+ Years Enterprise IT",
      fleets: "Windows & macOS Fleets",
      activeLab: "Active Lab Environment",
      engineeringProfile: "Engineering Profile",
      targetTitle: "L2 → SysAdmin",
      endpointFleet: "Endpoint Fleet Mastery",
      endpointFleetDesc: "6+ yrs corporate media environments supporting high-availability Windows 10/11 & macOS workstations, VPN, and VIP escalations.",
      automationScripting: "Automation & Scripting",
      automationScriptingDesc: "Custom C# .NET desktop tools and PowerShell scripts for automated DNS repairs, silent app deployment, and disk optimization.",
      infraCloudPath: "Infrastructure & Cloud Path",
      infraCloudPathDesc: "Active Hyper-V lab hosting Windows Server 2022, Active Directory OUs, GPOs, and structured study for Azure & Intune certifications.",
      careerDirection: "Career Direction",
      exploreRoadmap: "Explore Roadmap"
    },
    about: {
      badge: "Professional Summary",
      heading: "About Ragib Khan",
      bio: "With 6+ years of front-line corporate IT experience, I have developed deep expertise in supporting mission-critical enterprise environments. Today, I am combining that hands-on operational foundation with rigorous lab work in system administration, endpoint management, and cloud architecture.",
      areasExpTitle: "Areas of Enterprise Experience",
      areasExpSubtitle: "Proven hands-on operational capabilities honed across corporate newsroom, media, and enterprise setups:",
      currentFocusTitle: "Current Development Focus",
      currentFocusSubtitle: "Active engineering upskilling through dedicated home lab virtualization, script development, and official certification curricula:",
      quote: "\"Great system administrators are born from great support engineers who understand user friction firsthand and systematically automate it out of existence.\"",
      trajectoryBadge: "Strategic Trajectory",
      trajectoryHeading: "Career Direction",
      trajectorySubtitle: "Support Fundamentals → System Administration → Cloud Infrastructure",
      educationHeading: "Education",
      certsHeading: "Certifications & Training",
      completedCerts: "Completed",
      plannedCerts: "Future / Planned (Active Study)",
      softSkillsHeading: "Professional Soft Skills",
      softSkillsDesc: "Key operational attributes developed through years of handling high-pressure media deadlines and executive end-user escalations:"
    },
    experience: {
      badge: "Career Timeline",
      heading: "Professional Experience",
      subtitle: "Over 6 years supporting enterprise media and organizational users in high-availability desktop, macOS, network, and endpoint environments.",
      currentRole: "Current Role",
      client: "Client",
      keyDeliverables: "Key Responsibilities & Deliverables",
      technologies: "Technologies"
    },
    skills: {
      badge: "Technical Competencies",
      heading: "Technical Skills Dashboard",
      subtitle: "Organized strictly by verified operational competence, working lab experience, and active certification learning—with zero arbitrary vanity percentages.",
      tier1: "Professional Experience",
      tier1Desc: "6+ years demonstrated in corporate production environments and enterprise media desks.",
      tier2: "Working Knowledge",
      tier2Desc: "Practiced through internal tooling, lab setups, C#/.NET scripts, and daily operational support.",
      tier3: "Currently Learning",
      tier3Desc: "Active upskilling trajectory: SCCM, Intune, Azure cloud administration, and advanced AD DS.",
      filterCategory: "Filter Category",
      clearFilter: "Clear Status Filter",
      whatIKnow: "What I Know",
      focus: "Focus",
      appliedIn: "Applied in",
      searchPrompt: "Search specific tools, view documentation links, and learning topics in the interactive database"
    },
    projects: {
      badge: "Engineering Portfolio",
      heading: "Featured IT Projects",
      subtitle: "Real software systems, automation suites, and infrastructure monitoring prototypes engineered to solve concrete enterprise IT support, telemetry, and information challenges.",
      viewArchitecture: "View Architecture & Features",
      projectOverview: "Project Overview",
      keyFeatures: "Key Technical Features",
      techFrameworks: "Technologies & Frameworks",
      closeModal: "Close Window",
      githubRepo: "View GitHub Repository",
      liveDemo: "Live Demo"
    },
    automation: {
      badge: "Engineering Practice",
      heading: "IT Automation Lab",
      quote: "\"I build small tools and automation workflows to reduce repetitive IT support tasks, standardize troubleshooting and improve support efficiency.\"",
      lifecycleHeading: "The Automation Lifecycle",
      modulesHeading: "Standardized Automation Modules In Production & Lab",
      inspectorHeading: "Interactive Automation Script Inspector",
      inspectorSubtitle: "Select an enterprise utility script to inspect architecture and implementation details",
      copyCode: "Copy Code",
      copied: "Copied",
      impact: "Business / Support Impact",
      safetyTitle: "Safety Standard:",
      safetyDesc: "All lab scripts include strict validation switches, non-destructive error handling, and parameterization."
    },
    lab: {
      badge: "Personal Learning Lab",
      heading: "My Infrastructure Lab",
      subtitle: "An isolated, virtualized enterprise testbed used for engineering Active Directory forest topologies, Group Policy baselines, DNS forwarders, and cross-platform remote administration.",
      tabTopology: "Interactive Topology",
      tabAdTree: "Active Directory Tree",
      tabActivities: "Lab Activities",
      topologyHeading: "Network Topology Architecture",
      hostTitle: "Virtualization / Lab Host (Windows 11 Enterprise Hyper-V)",
      hostDesc: "Dedicated hypervisor with 32 GB DDR4 RAM and internal isolated vSwitches",
      systemSpecs: "System Specs",
      os: "Operating System",
      purpose: "Node Purpose",
      installedRoles: "Installed Roles & Services",
      adTreeHeading: "Active Directory Directory Tree",
      activitiesHeading: "Hands-On Lab Activities & Exercises"
    },
    upskilling: {
      badge: "Continuous Professional Development",
      heading: "Currently Upskilling",
      subtitle: "A structured, intentional learning roadmap bridging enterprise L2 support excellence with System Administration, Microsoft Intune, SCCM, and Azure Cloud infrastructure.",
      roadmapHeading: "From Endpoint Support to Infrastructure Engineering",
      roadmapSubtitle: "5-Stage Strategy",
      handsOnLab: "Hands-On Lab Activity:"
    },
    search: {
      badge: "Interactive Technical Lookup",
      heading: "Skills & Technology Updates",
      subtitle: "Search technologies across operating systems, enterprise tools, network protocols, and cloud platforms to explore my current mastery, active lab learning topics, and official documentation references.",
      inputPlaceholder: "Search technology or skill (e.g. Azure, Intune, SCCM, PowerShell, Active Directory)...",
      quickSuggestions: "Quick suggestions:",
      resetSearch: "Reset Search",
      matchesFound: "matches found",
      noResults: "No matching technologies found",
      noResultsDesc: "Try searching for \"Azure\", \"Intune\", \"PowerShell\", \"Active Directory\", or click one of the quick suggestions above.",
      whatIKnow: "What I Already Know & Execute",
      whatIAmLearning: "What I Am Learning / Active Focus",
      recommendedTopics: "Recommended Next Study Topics:",
      relatedProjects: "Related Projects:",
      officialDocs: "Official Docs"
    },
    assistant: {
      badge: "Operational Guidance & Technical Q&A",
      heading: "AI IT Career Assistant",
      subtitle: "Inquire about career milestones, technical troubleshooting methodologies, System Administrator requirements, or tailored Azure upskilling strategies. Fully operational out of the box with zero external dependencies.",
      suggestedPrompts: "Suggested Prompts:",
      copilotHeading: "IT Infrastructure & Career Copilot",
      copilotSub: "Grounded in enterprise support & cloud architectures",
      onlineStatus: "Online / Ready",
      inputPlaceholder: "Ask about Ragib's skillset, Active Directory, Azure learning, or troubleshooting...",
      send: "Send",
      disclaimer: "Works offline via client-side expert heuristic knowledge base. Ready for backend API keys if enabled.",
      synthesizing: "Synthesizing IT infrastructure response..."
    },
    resume: {
      badge: "Curriculum Vitae",
      heading: "Professional Resume",
      subtitle: "Download the official verified curriculum vitae or inspect the formatted document directly in-browser. Contains 6+ years of enterprise IT support achievements and verified technical credentials.",
      cardTitle: "Ragib Khan — Official Resume",
      cardSub: "Desktop Support Engineer (L2) • IT Infrastructure & Automation",
      cardDesc: "Tailored for IT recruiters, hiring managers, and infrastructure directors evaluating candidates for L2/L3 Desktop Support, System Administrator, and Endpoint Management positions.",
      btnDownload: "Download Resume PDF",
      btnView: "View Full Resume",
      verified: "Verified 6+ Yrs Corporate IT",
      fleets: "Mac & Windows Fleets",
      atsOptimized: "Print & ATS-Optimized",
      locationNote: "Resume PDF File Location:"
    },
    contact: {
      badge: "Get In Touch",
      heading: "Let's Connect",
      subtitle: "Interested in discussing an enterprise L2 Desktop Support, System Administrator, Endpoint Management, or Cloud Infrastructure role? Reach out directly via email, phone, or the quick form below.",
      directEmail: "Direct Email",
      phoneMobile: "Phone / Mobile",
      locationTitle: "Current Location",
      locationSub: "Open to on-site roles across Delhi NCR and hybrid/remote opportunities.",
      profilesTitle: "Professional Online Profiles",
      sendMessage: "Send Direct Message",
      dispatchesTo: "Directly dispatches an email to ragibk2@gmail.com",
      promptResponse: "Prompt Response",
      formSuccess: "Inquiry formatted! Your email client has been opened to dispatch your message to Ragib.",
      yourName: "Your Name",
      workEmail: "Work Email",
      company: "Company / Organization",
      roleCategory: "Opportunity Role Category",
      messageScope: "Message / Opportunity Scope",
      messagePlaceholder: "Provide details about the role, technical environment (Windows/Mac/Intune/Azure), location, and timeline...",
      btnSend: "Send Message"
    }
  },
  hi: {
    nav: {
      home: "होम",
      about: "परिचय",
      experience: "अनुभव",
      skills: "कौशल",
      projects: "प्रोजेक्ट्स",
      automation: "ऑटोमेशन",
      lab: "आईटी लैब",
      more: "अधिक",
      upskilling: "नई सीख",
      skillSearch: "स्किल खोज",
      aiAssistant: "एआई सहायक",
      educationCerts: "शिक्षा व प्रमाणन",
      resume: "बायोडाटा",
      contact: "संपर्क करें",
      downloadResume: "बायोडाटा"
    },
    hero: {
      status: "सिस्टम एडमिनिस्ट्रेटर / क्लाउड-आधारित अवसरों के लिए उपलब्ध",
      title: "डेस्कटॉप सपोर्ट इंजीनियर (L2) | एंडपॉइंट एवं मैक सपोर्ट",
      secondaryTitle: "आईटी इंफ्रास्ट्रक्चर • एंडपॉइंट मैनेजमेंट • ऑटोमेशन • क्लाउड लर्निंग",
      summary: "विंडोज और मैकओएस (macOS) कॉर्पोरेट वातावरण में 6+ वर्षों के अनुभव वाले कुशल डेस्कटॉप सपोर्ट इंजीनियर (L2)। एंड-यूज़र सपोर्ट, हार्डवेयर व सॉफ्टवेयर समस्या निवारण, वीपीएन कॉन्फ़िगरेशन, एसेट मैनेजमेंट, रिमोट सपोर्ट और एंटरप्राइज आईटी ऑपरेशंस में सशक्त पृष्ठभूमि।",
      viewProjects: "मेरे प्रोजेक्ट्स देखें",
      downloadResume: "बायोडाटा डाउनलोड करें",
      contactMe: "संपर्क करें",
      location: "दिल्ली, भारत",
      yearsExp: "6+ वर्ष एंटरप्राइज आईटी",
      fleets: "विंडोज एवं मैकओएस फ्लीट्स",
      activeLab: "सक्रिय लैब वातावरण",
      engineeringProfile: "इंजीनियरिंग प्रोफाइल",
      targetTitle: "L2 → सिस्टम एडमिनिस्ट्रेटर",
      endpointFleet: "एंडपॉइंट फ्लीट विशेषज्ञता",
      endpointFleetDesc: "हाई-अवेलेबिलिटी विंडोज 10/11 और मैक वर्कस्टेशन्स, वीपीएन और वीआईपी एस्केलेशन सपोर्ट में 6+ वर्षों का अनुभव।",
      automationScripting: "ऑटोमेशन एवं स्क्रिप्टिंग",
      automationScriptingDesc: "स्वचालित डीएनएस मरम्मत, साइलेंट सॉफ्टवेयर डिप्लॉयमेंट और स्टोरेज अनुकूलन के लिए कस्टम C# .NET और पॉवरशेल स्क्रिप्ट्स।",
      infraCloudPath: "इंफ्रास्ट्रक्चर व क्लाउड पथ",
      infraCloudPathDesc: "विंडोज सर्वर 2022, एक्टिव डायरेक्ट्री OUs, GPOs और एज्योर व इनट्यून सर्टिफिकेशन की तैयारी हेतु सक्रिय हाइपर-वी लैब।",
      careerDirection: "करियर दिशा",
      exploreRoadmap: "रोडमैप देखें"
    },
    about: {
      badge: "व्यावसायिक सारांश",
      heading: "रागिब खान का परिचय",
      bio: "6+ वर्षों के कॉर्पोरेट आईटी अनुभव के साथ, मैंने मिशन-क्रिटिकल एंटरप्राइज वातावरण को सपोर्ट करने में गहन विशेषज्ञता हासिल की है। आज, मैं इस व्यावहारिक आधार को सिस्टम एडमिनिस्ट्रेशन, एंडपॉइंट मैनेजमेंट और क्लाउड आर्किटेक्चर के गहन लैब कार्य के साथ आगे बढ़ा रहा हूँ।",
      areasExpTitle: "एंटरप्राइज अनुभव के प्रमुख क्षेत्र",
      areasExpSubtitle: "कॉर्पोरेट न्यूज़रुम, मीडिया और संगठनात्मक सेटअप में सिद्ध परिचालन क्षमताएँ:",
      currentFocusTitle: "वर्तमान विकास एवं अध्ययन लक्ष्य",
      currentFocusSubtitle: "होम लैब वर्चुअलाइजेशन, स्क्रिप्टिंग और आधिकारिक प्रमाणन के माध्यम से निरंतर अपस्किलिंग:",
      quote: "\"महान सिस्टम एडमिनिस्ट्रेटर उन कुशल सपोर्ट इंजीनियर्स से बनते हैं जो यूज़र की समस्याओं को प्रत्यक्ष समझते हैं और उन्हें व्यवस्थित रूप से ऑटोमेट करते हैं।\"",
      trajectoryBadge: "रणनीतिक दिशा",
      trajectoryHeading: "करियर प्रगति मार्ग",
      trajectorySubtitle: "सपोर्ट फंडामेंटल्स → सिस्टम एडमिनिस्ट्रेशन → क्लाउड इंफ्रास्ट्रक्चर",
      educationHeading: "शिक्षा",
      certsHeading: "प्रमाणपत्र एवं प्रशिक्षण",
      completedCerts: "पूर्ण प्रमाणन",
      plannedCerts: "प्रगतिशील / नियोजित (सक्रिय अध्ययन)",
      softSkillsHeading: "व्यावसायिक सॉफ्ट स्किल्स",
      softSkillsDesc: "हाई-प्रेशर मीडिया डेडलाइन्स और एग्जीक्यूटिव एंड-यूज़र सपोर्ट के वर्षों के दौरान विकसित आवश्यक गुण:"
    },
    experience: {
      badge: "करियर टाइमलाइन",
      heading: "व्यावसायिक अनुभव",
      subtitle: "हाई-अवेलेबिलिटी डेस्कटॉप, मैकओएस, नेटवर्क और एंडपॉइंट परिवेश में एंटरप्राइज उपयोगकर्ताओं को 6 से अधिक वर्षों का निरंतर सपोर्ट।",
      currentRole: "वर्तमान पद",
      client: "क्लाइंट",
      keyDeliverables: "मुख्य जिम्मेदारियाँ व कार्य",
      technologies: "तकनीकी कौशल"
    },
    skills: {
      badge: "तकनीकी क्षमताएँ",
      heading: "तकनीकी कौशल डैशबोर्ड",
      subtitle: "वास्तविक परिचालन क्षमता, लैब अनुभव और सक्रिय प्रमाणन अध्ययन के अनुसार स्पष्ट वर्गीकरण—बिना किसी फर्जी प्रतिशत के।",
      tier1: "व्यावसायिक अनुभव",
      tier1Desc: "कॉर्पोरेट प्रोडक्शन और एंटरप्राइज मीडिया डेस्क में 6+ वर्षों का प्रमाणित कार्य अनुभव।",
      tier2: "कार्यसाधक ज्ञान",
      tier2Desc: "आंतरिक टूल्स, लैब सेटअप्स, C#/.NET स्क्रिप्ट्स और दैनिक आईटी ऑपरेशंस में नियमित उपयोग।",
      tier3: "वर्तमान में सीख रहे हैं",
      tier3Desc: "सक्रिय अपस्किलिंग: SCCM, माइक्रोसॉफ्ट इनट्यून, एज्योर क्लाउड एडमिनिस्ट्रेशन और एक्टिव डायरेक्ट्री।",
      filterCategory: "श्रेणी फ़िल्टर करें",
      clearFilter: "स्थिति फ़िल्टर हटाएं",
      whatIKnow: "अनुभव",
      focus: "सक्रिय लक्ष्य",
      appliedIn: "परियोजना में उपयोग",
      searchPrompt: "विशिष्ट टूल्स, दस्तावेज़ीकरण लिंक और सीखने के विषयों को खोजने के लिए सर्च का उपयोग करें"
    },
    projects: {
      badge: "इंजीनियरिंग पोर्टफोलियो",
      heading: "प्रमुख आईटी प्रोजेक्ट्स",
      subtitle: "वास्तविक सॉफ्टवेयर सिस्टम्स, ऑटोमेशन सूट और इंफ्रास्ट्रक्चर मॉनिटरिंग प्रोटोटाइप जो एंटरप्राइज आईटी चुनौतियों का समाधान करते हैं।",
      viewArchitecture: "आर्किटेक्चर और फीचर्स देखें",
      projectOverview: "प्रोजेक्ट का विवरण",
      keyFeatures: "प्रमुख तकनीकी विशेषताएँ",
      techFrameworks: "प्रयुक्त तकनीकें",
      closeModal: "विंडो बंद करें",
      githubRepo: "गिटहब रिपॉजिटरी देखें",
      liveDemo: "लाइव डेमो"
    },
    automation: {
      badge: "इंजीनियरिंग अभ्यास",
      heading: "आईटी ऑटोमेशन लैब",
      quote: "\"मैं बार-बार होने वाले आईटी सपोर्ट कार्यों को कम करने, समस्या निवारण को मानकीकृत करने और कार्यक्षमता बढ़ाने के लिए टूल्स और ऑटोमेशन वर्कफ़्लो बनाता हूँ।\"",
      lifecycleHeading: "ऑटोमेशन जीवनचक्र (8 चरण)",
      modulesHeading: "मानकीकृत ऑटोमेशन मॉड्यूल्स",
      inspectorHeading: "इंटरएक्टिव ऑटोमेशन स्क्रिप्ट इंस्पेक्टर",
      inspectorSubtitle: "आर्किटेक्चर और कार्यान्वयन विवरण देखने के लिए किसी स्क्रिप्ट का चयन करें",
      copyCode: "कोड कॉपी करें",
      copied: "कॉपी हो गया",
      impact: "व्यावसायिक / सपोर्ट प्रभाव",
      safetyTitle: "सुरक्षा मानक:",
      safetyDesc: "सभी लैब स्क्रिप्ट्स में सख्त वैलिडेशन, त्रुटि प्रबंधन और पैरामीटराइजेशन शामिल हैं।"
    },
    lab: {
      badge: "व्यक्तिगत शिक्षण लैब",
      heading: "माई इंफ्रास्ट्रक्चर लैब",
      subtitle: "एक्टिव डायरेक्ट्री फॉरेस्ट, ग्रुप पॉलिसी, डीएनएस फॉरवर्डर्स और क्रॉस-प्लेटफॉर्म रिमोट एडमिनिस्ट्रेशन के परीक्षण हेतु एक पृथक वर्चुअलाइज्ड लैब।",
      tabTopology: "इंटरएक्टिव टोपोलॉजी",
      tabAdTree: "एक्टिव डायरेक्ट्री ट्री",
      tabActivities: "लैब गतिविधियाँ",
      topologyHeading: "नेटवर्क टोपोलॉजी आर्किटेक्चर",
      hostTitle: "वर्चुअलाइजेशन / लैब होस्ट (विंडोज 11 एंटरप्राइज हाइपर-वी)",
      hostDesc: "32 GB DDR4 रैम और इंटरनल पृथक vSwitches युक्त समर्पित हाइपरवाइजर",
      systemSpecs: "सिस्टम स्पेक्स",
      os: "ऑपरेटिंग सिस्टम",
      purpose: "नोड का उद्देश्य",
      installedRoles: "इंस्टॉल किए गए रोल्स व सर्विसेज",
      adTreeHeading: "एक्टिव डायरेक्ट्री डायरेक्ट्री ट्री",
      activitiesHeading: "हैंड्स-ऑन लैब गतिविधियाँ व अभ्यास"
    },
    upskilling: {
      badge: "सतत व्यावसायिक विकास",
      heading: "वर्तमान अपस्किलिंग",
      subtitle: "एंटरप्राइज L2 सपोर्ट विशेषज्ञता को सिस्टम एडमिनिस्ट्रेशन, माइक्रोसॉफ्ट इनट्यून, SCCM और एज्योर क्लाउड से जोड़ने वाला एक सुनियोजित रोडमैप।",
      roadmapHeading: "एंडपॉइंट सपोर्ट से इंफ्रास्ट्रक्चर इंजीनियरिंग तक",
      roadmapSubtitle: "5-चरणीय रणनीति",
      handsOnLab: "हैंड्स-ऑन लैब गतिविधि:"
    },
    search: {
      badge: "इंटरएक्टिव तकनीकी खोज",
      heading: "स्किल एवं तकनीकी अपडेट्स",
      subtitle: "ऑपरेटिंग सिस्टम, एंटरप्राइज टूल्स, नेटवर्क प्रोटोकॉल और क्लाउड प्लेटफॉर्म्स पर मेरी वर्तमान दक्षता, अध्ययनरत विषय और आधिकारिक दस्तावेज़ खोजें।",
      inputPlaceholder: "तकनीक या कौशल खोजें (उदा. Azure, Intune, SCCM, PowerShell, Active Directory)...",
      quickSuggestions: "त्वरित सुझाव:",
      resetSearch: "सर्च रीसेट करें",
      matchesFound: "परिणाम मिले",
      noResults: "कोई मेल खाती तकनीक नहीं मिली",
      noResultsDesc: "\"Azure\", \"Intune\", \"PowerShell\", \"Active Directory\" आदि खोजें या ऊपर दिए गए त्वरित सुझावों पर क्लिक करें।",
      whatIKnow: "जो मैं पहले से जानता हूँ और लागू करता हूँ",
      whatIAmLearning: "जो मैं वर्तमान में सीख रहा हूँ / सक्रिय ध्यान",
      recommendedTopics: "अगले अनुशंसित अध्ययन विषय:",
      relatedProjects: "संबंधित प्रोजेक्ट्स:",
      officialDocs: "आधिकारिक दस्तावेज़"
    },
    assistant: {
      badge: "परिचालन मार्गदर्शन व तकनीकी प्रश्नोत्तर",
      heading: "एआई आईटी करियर असिस्टेंट",
      subtitle: "करियर मील के पत्थर, तकनीकी समस्या निवारण, सिस्टम एडमिनिस्ट्रेटर आवश्यकताओं या एज्योर क्लाउड सीखने की रणनीतियों के बारे में पूछें। तुरंत कार्यशील।",
      suggestedPrompts: "सुझाए गए प्रश्न:",
      copilotHeading: "आईटी इंफ्रास्ट्रक्चर एवं करियर कोपायलट",
      copilotSub: "एंटरप्राइज सपोर्ट और क्लाउड आर्किटेक्चर पर आधारित",
      onlineStatus: "ऑनलाइन / तैयार",
      inputPlaceholder: "रागिब के कौशल, एक्टिव डायरेक्ट्री, एज्योर लर्निंग या ट्रबलशूटिंग के बारे में पूछें...",
      send: "भेजें",
      disclaimer: "क्लाइंट-साइड विशेषज्ञ ज्ञान के माध्यम से ऑफलाइन कार्य करता है। बैकएंड एपीआई के लिए पूरी तरह अनुकूल।",
      synthesizing: "आईटी इंफ्रास्ट्रक्चर उत्तर तैयार किया जा रहा है..."
    },
    resume: {
      badge: "बायोडाटा / सीवी",
      heading: "व्यावसायिक बायोडाटा (Resume)",
      subtitle: "आधिकारिक सत्यापित बायोडाटा डाउनलोड करें या सीधे ब्राउज़र में देखें। इसमें 6+ वर्षों की कॉर्पोरेट उपलब्धियाँ और सत्यापित साख शामिल हैं।",
      cardTitle: "रागिब खान — आधिकारिक बायोडाटा",
      cardSub: "डेस्कटॉप सपोर्ट इंजीनियर (L2) • आईटी इंफ्रास्ट्रक्चर एवं ऑटोमेशन",
      cardDesc: "आईटी रिक्रूटर्स, हायरिंग मैनेजर्स और इंफ्रास्ट्रक्चर डायरेक्टर्स के लिए विशेष रूप से संरचित और अनुकूलित।",
      btnDownload: "बायोडाटा पीडीएफ डाउनलोड करें",
      btnView: "पूर्ण बायोडाटा देखें",
      verified: "सत्यापित 6+ वर्ष कॉर्पोरेट आईटी",
      fleets: "मैक व विंडोज फ्लीट्स",
      atsOptimized: "प्रिंट एवं एटीएस-अनुकूलित",
      locationNote: "बायोडाटा पीडीएफ फाइल स्थान:"
    },
    contact: {
      badge: "संपर्क करें",
      heading: "आइए जुड़ें",
      subtitle: "क्या आप L2 डेस्कटॉप सपोर्ट, सिस्टम एडमिनिस्ट्रेटर, एंडपॉइंट मैनेजमेंट या क्लाउड इंफ्रास्ट्रक्चर भूमिका पर चर्चा करना चाहते हैं? ईमेल, फोन या फॉर्म के जरिए सीधे संपर्क करें।",
      directEmail: "प्रत्यक्ष ईमेल",
      phoneMobile: "फोन / मोबाइल",
      locationTitle: "वर्तमान स्थान",
      locationSub: "दिल्ली एनसीआर में ऑन-साइट और हाइब्रिड/रिमोट अवसरों के लिए खुला।",
      profilesTitle: "व्यावसायिक ऑनलाइन प्रोफाइल",
      sendMessage: "सीधा संदेश भेजें",
      dispatchesTo: "सीधे ragibk2@gmail.com पर ईमेल प्रेषित करता है",
      promptResponse: "शीघ्र उत्तर",
      formSuccess: "पूछताछ तैयार! रागिब को संदेश भेजने के लिए आपका ईमेल क्लाइंट खुल गया है।",
      yourName: "आपका नाम",
      workEmail: "कार्यस्थल का ईमेल",
      company: "कंपनी / संगठन",
      roleCategory: "अवसर / पद श्रेणी",
      messageScope: "संदेश / अवसर का विवरण",
      messagePlaceholder: "पद, तकनीकी वातावरण (Windows/Mac/Intune/Azure), स्थान और समयसीमा का विवरण दें...",
      btnSend: "संदेश भेजें"
    }
  }
};

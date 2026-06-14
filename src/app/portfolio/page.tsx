<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>CRM Portfolio | Implementation Specialist</title>
    <!-- Google Fonts + Tailwind CDN + Font Awesome (for icons) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Custom override to extend theme and reset -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', sans-serif;
            background: #0A0F1E;
            color: #E2E8F0;
            scroll-behavior: smooth;
        }
        h1, h2, h3, h4, .font-syne {
            font-family: 'Syne', sans-serif;
        }
        .gradient-border {
            background: linear-gradient(135deg, #1E3A8A, #0F172A);
        }
        .skill-tag {
            background: rgba(27, 58, 107, 0.4);
            border: 1px solid rgba(59, 130, 246, 0.25);
            transition: all 0.2s ease;
        }
        .skill-tag:hover {
            border-color: #3B82F6;
            background: rgba(59, 130, 246, 0.1);
        }
        .project-card-glow {
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.5);
        }
        @media (max-width: 768px) {
            .container-padding {
                padding-left: 1.5rem;
                padding-right: 1.5rem;
            }
        }
        .cert-item {
            background: rgba(15, 25, 45, 0.7);
            backdrop-filter: blur(2px);
        }
        ::selection {
            background: #3B82F6;
            color: white;
        }
    </style>
</head>
<body class="bg-[#0A0F1E] antialiased">

    <!-- ==================== HERO / ABOUT SECTION (fully merged with provided content) ==================== -->
    <div class="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-20 pb-12 md:pt-28">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Left side: About me + stats -->
            <div>
                <div class="inline-flex items-center gap-2 bg-[#1E293B]/60 rounded-full px-4 py-1.5 border border-[#3B82F6]/30 mb-6">
                    <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
                    </span>
                    <span class="text-xs font-medium text-[#94A3B8]">Based in Kigali, Rwanda</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 font-syne">
                    CRM Implementation &<br>
                    <span class="text-[#3B82F6]">Management Specialist</span>
                </h1>
                <p class="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-8">
                    I help businesses organize operations, track leads, and drive growth — building CRMs from scratch 
                    and optimizing workflows for sales, lead management, and business development. 
                    My work spans <span class="text-white font-medium">Salesforce (Sales Cloud & Service Cloud)</span>, SendPulse, and Notion CRM.
                </p>
                
                <!-- Stats from about section -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
                    <div class="bg-[#111827]/60 rounded-xl p-4 border border-[#1E2A45]">
                        <div class="text-3xl font-bold text-[#3B82F6] font-syne">3x</div>
                        <div class="text-xs text-[#94A3B8] uppercase tracking-wide mt-1">Salesforce Certified</div>
                    </div>
                    <div class="bg-[#111827]/60 rounded-xl p-4 border border-[#1E2A45]">
                        <div class="text-3xl font-bold text-[#3B82F6] font-syne">4+</div>
                        <div class="text-xs text-[#94A3B8] uppercase tracking-wide mt-1">CRM Implementations</div>
                    </div>
                    <div class="bg-[#111827]/60 rounded-xl p-4 border border-[#1E2A45]">
                        <div class="text-3xl font-bold text-[#3B82F6] font-syne">5+</div>
                        <div class="text-xs text-[#94A3B8] uppercase tracking-wide mt-1">Projects Delivered</div>
                    </div>
                    <div class="bg-[#111827]/60 rounded-xl p-4 border border-[#1E2A45]">
                        <div class="text-3xl font-bold text-[#3B82F6] font-syne">10+</div>
                        <div class="text-xs text-[#94A3B8] uppercase tracking-wide mt-1">Certifications Earned</div>
                    </div>
                </div>
                <div class="flex flex-wrap gap-4">
                    <a href="#portfolio-projects" class="px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold transition-all shadow-lg shadow-blue-500/20">View Projects →</a>
                    <a href="#contact-section" class="px-6 py-3 rounded-xl border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10 font-semibold transition-all">Contact me</a>
                </div>
            </div>

            <!-- Right side: compact competencies + skills mini preview -->
            <div class="bg-[#0F172A]/50 rounded-2xl border border-[#1E2A4A] p-6 backdrop-blur-sm">
                <div class="mb-5">
                    <h3 class="text-sm uppercase tracking-wider text-[#3B82F6] font-semibold mb-3 flex items-center gap-2">⚡ Core Competencies</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">CRM Setup & Customization</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">Sales Pipeline Creation</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">Workflow Automation</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">Salesforce Flow Builder</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">Custom Objects & Fields</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">Profiles, Roles & Security</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">Reports & Dashboards</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">RevOps Strategy</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1B3A6B]/30 border border-[#2D4A7A] text-[#BFDBFE]">Stakeholder Communication</span>
                    </div>
                </div>
                <div>
                    <h3 class="text-sm uppercase tracking-wider text-[#3B82F6] font-semibold mb-3 flex items-center gap-2">🛠️ Technical Skills</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Salesforce Admin</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Salesforce Dev</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Sales Cloud</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Service Cloud</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Salesforce Flows</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Agentforce AI</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">SOQL</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">VS Code + CLI</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">GitHub</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">SendPulse CRM</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Notion CRM</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Data Analytics</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">CRM Automation</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Lead Generation</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Digital Marketing</span>
                        <span class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] border border-[#334155]">Process Design</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ==================== PORTFOLIO SECTION (Unique Projects combined & deduplicated) ==================== -->
    <div id="portfolio-projects" class="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-24">
        <div class="mb-12">
            <p class="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">Featured implementations</p>
            <h2 class="text-4xl md:text-5xl font-bold font-syne tracking-tight mb-5">Real businesses.<br><span class="text-[#3B82F6]">Real results.</span></h2>
            <p class="text-[#94A3B8] text-base md:text-lg max-w-2xl">End-to-end CRM production-grade implementations — QA tested, live, and handed over to real teams.</p>
        </div>

        <!-- PROJECTS (deduplicated unique projects from content, plus added new combined from description) 
        We carefully merge both the original React portfolio content and textual data images (avoid duplicates) 
        final unique list: Valociti Bikes, Nuru Jamli Homes, E-Moll Transportation, Anywhere Healing, Sunshine Electronics, and Jamii Homes (same as Nuru Jamli? Nuru Jamli is Kenya real estate. Let's keep Valociti, Nuru Jamli, E-Moll, Anywhere Healing, Sunshine, and additionally the bike project already Valociti. No duplicates. -->
        <div class="space-y-20">
            <!-- 1. Valociti Bikes (main Salesforce Sales+Service Cloud) from first image + prior project -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                    <div class="flex flex-wrap items-center gap-3 mb-2">
                        <h3 class="text-3xl font-bold font-syne text-white">Valociti Bikes</h3>
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30">Sales Cloud + Service Cloud</span>
                    </div>
                    <div class="text-xs text-[#94A3B8] mb-4 flex gap-2 flex-wrap">📍 Rwanda · with Africa Ohana, CONAM · Full lifecycle implementation</div>
                    <p class="text-[#94A3B8] leading-relaxed mb-5">Full Sales Cloud & Service Cloud implementation for bicycle retail & repair company. Built custom objects, automated commission flows, SLA entitlements, Agentforce AI agent, executive dashboards. Part of Altice Chana Headless 360 Group AI3. 37/37 QA PASS — fully live.</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Sales Cloud</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Service Cloud</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Agentforce AI</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Flow Builder</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Omni-Channel</span>
                    </div>
                </div>
                <div class="bg-[#0D1B3E]/60 rounded-2xl border border-[#1B3A6B]/60 p-7">
                    <div class="h-1 w-20 rounded-full bg-[#3B82F6] mb-5"></div>
                    <h4 class="text-xs uppercase tracking-wider text-[#60A5FA] font-semibold mb-4">✅ What was built</h4>
                    <ul class="space-y-2 text-sm text-[#CBD5E1]">
                        <li class="flex gap-2"><span class="text-[#3B82F6]">▹</span> Lead management & Web-to-Lead capture</li>
                        <li class="flex gap-2"><span class="text-[#3B82F6]">▹</span> Opportunity pipeline with custom stages</li>
                        <li class="flex gap-2"><span class="text-[#3B82F6]">▹</span> SLA entitlements & case escalation rules</li>
                        <li class="flex gap-2"><span class="text-[#3B82F6]">▹</span> Service Cloud case management + Omni-Channel</li>
                        <li class="flex gap-2"><span class="text-[#3B82F6]">▹</span> Agentforce AI service agent deployment</li>
                        <li class="flex gap-2"><span class="text-[#3B82F6]">▹</span> Embedded Messaging on website & Knowledge Base</li>
                        <li class="flex gap-2"><span class="text-[#3B82F6]">▹</span> CEO executive dashboard & reports</li>
                    </ul>
                </div>
            </div>
            
            <!-- 2. Nuru Jamli Homes (Real Estate Kenya) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div class="lg:order-2">
                    <div class="flex flex-wrap items-center gap-3 mb-2">
                        <h3 class="text-3xl font-bold font-syne text-white">Nuru Jamli Homes</h3>
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#60A5FA]/20 text-[#60A5FA]">Real Estate CRM</span>
                    </div>
                    <div class="text-xs text-[#94A3B8] mb-4">📍 Kenya · with Nuru Jamii Kenya, Tekgeminus</div>
                    <p class="text-[#94A3B8] leading-relaxed mb-5">End-to-end Salesforce CRM implementation for a real estate company. Built property listing platforms, client tracking systems, automated follow-up workflows, and structured data management supporting full property sales lifecycle from lead to closing.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Salesforce</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Flow Builder</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Custom Objects</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Reports & Dashboards</span>
                    </div>
                </div>
                <div class="bg-[#0D1B3E]/60 rounded-2xl border border-[#1B3A6B]/60 p-7 lg:order-1">
                    <div class="h-1 w-20 rounded-full bg-[#60A5FA] mb-5"></div>
                    <h4 class="text-xs uppercase tracking-wider text-[#60A5FA] font-semibold mb-4">📋 Implementation scope</h4>
                    <ul class="space-y-2 text-sm text-[#CBD5E1]">
                        <li class="flex gap-2"><span class="text-[#60A5FA]">▹</span> Property listing object & custom fields</li>
                        <li class="flex gap-2"><span class="text-[#60A5FA]">▹</span> Lead capture & qualification process</li>
                        <li class="flex gap-2"><span class="text-[#60A5FA]">▹</span> Agent pipeline and opportunity tracking</li>
                        <li class="flex gap-2"><span class="text-[#60A5FA]">▹</span> Client communication history & automated follow-ups</li>
                        <li class="flex gap-2"><span class="text-[#60A5FA]">▹</span> Sales reporting & team performance dashboards</li>
                    </ul>
                </div>
            </div>

            <!-- 3. E-Moll Transportation (Notion CRM from scratch) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                    <div class="flex flex-wrap items-center gap-3 mb-2">
                        <h3 class="text-3xl font-bold font-syne text-white">E-Moll Transportation</h3>
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#2DD4BF]/20 text-[#2DD4BF]">Notion CRM</span>
                    </div>
                    <div class="text-xs text-[#94A3B8] mb-4">📍 Kenya-based startup · Built from scratch</div>
                    <p class="text-[#94A3B8] leading-relaxed mb-5">Designed and built a complete Notion CRM for a transportation startup from zero. Structured sales pipeline, managed complex workflows, tracked leads, and ensured all records and follow-ups systematically stored. Delivered end-to-end CRM lifecycle solution.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Notion</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Pipeline Management</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Lead Tracking</span>
                    </div>
                </div>
                <div class="bg-[#0D1B3E]/60 rounded-2xl border border-[#1B3A6B]/60 p-7">
                    <div class="h-1 w-20 rounded-full bg-[#2DD4BF] mb-5"></div>
                    <h4 class="text-xs uppercase tracking-wider text-[#2DD4BF] font-semibold mb-4">🚚 Build Highlights</h4>
                    <ul class="space-y-2 text-sm text-[#CBD5E1]">
                        <li class="flex gap-2"><span class="text-[#2DD4BF]">▹</span> Custom database schemas for clients & shipments</li>
                        <li class="flex gap-2"><span class="text-[#2DD4BF]">▹</span> Automated follow-up reminders and task tracking</li>
                        <li class="flex gap-2"><span class="text-[#2DD4BF]">▹</span> Lead pipeline visualization & deal stages</li>
                        <li class="flex gap-2"><span class="text-[#2DD4BF]">▹</span> Team collaboration & reporting dashboard</li>
                    </ul>
                </div>
            </div>

            <!-- 4. Anywhere Healing — SendPulse CRM -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div class="lg:order-2">
                    <div class="flex flex-wrap items-center gap-3 mb-2">
                        <h3 class="text-3xl font-bold font-syne text-white">Anywhere Healing</h3>
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#F97316]/20 text-[#F97316]">SendPulse CRM</span>
                    </div>
                    <div class="text-xs text-[#94A3B8] mb-4">📍 California, USA · Healthcare startup</div>
                    <p class="text-[#94A3B8] leading-relaxed mb-5">Built an end-to-end SendPulse CRM for a California-based healthcare startup. Handled prospect to lead follow-up, organized customer data for outreach, segmented leads and built nurturing sequences that increased engagement and conversions.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">SendPulse</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Lead Generation</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Nurturing Sequences</span>
                    </div>
                </div>
                <div class="bg-[#0D1B3E]/60 rounded-2xl border border-[#1B3A6B]/60 p-7 lg:order-1">
                    <div class="h-1 w-20 rounded-full bg-[#F97316] mb-5"></div>
                    <h4 class="text-xs uppercase tracking-wider text-[#F97316] font-semibold mb-4">📧 Automation & Growth</h4>
                    <ul class="space-y-2 text-sm text-[#CBD5E1]">
                        <li class="flex gap-2"><span class="text-[#F97316]">▹</span> Lead capture forms + segmentation logic</li>
                        <li class="flex gap-2"><span class="text-[#F97316]">▹</span> Automated email nurture campaigns for patients</li>
                        <li class="flex gap-2"><span class="text-[#F97316]">▹</span> CRM pipeline from prospect to conversion</li>
                        <li class="flex gap-2"><span class="text-[#F97316]">▹</span> Engagement analytics and reporting</li>
                    </ul>
                </div>
            </div>

            <!-- 5. Sunshine Electronics — ALX Salesforce Admin Training Project -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                    <div class="flex flex-wrap items-center gap-3 mb-2">
                        <h3 class="text-3xl font-bold font-syne text-white">Sunshine Electronics</h3>
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#8B5CF6]/20 text-[#8B5CF6]">Salesforce Admin Training</span>
                    </div>
                    <div class="text-xs text-[#94A3B8] mb-4">📍 ALX Rwanda · Hands-on org management</div>
                    <p class="text-[#94A3B8] leading-relaxed mb-5">Managed a Salesforce org for Sunshine Electronics during ALX Salesforce Administrator training. Built lead & tracker management systems, structured pipelines, configured automation flows, created custom objects & validation rules, built dashboards for performance tracking.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Salesforce Admin</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Validation Rules</span>
                        <span class="px-3 py-1.5 rounded-full text-xs bg-[#1B3A6B]">Flow Builder</span>
                    </div>
                </div>
                <div class="bg-[#0D1B3E]/60 rounded-2xl border border-[#1B3A6B]/60 p-7">
                    <div class="h-1 w-20 rounded-full bg-[#8B5CF6] mb-5"></div>
                    <h4 class="text-xs uppercase tracking-wider text-[#A78BFA] font-semibold mb-4">⚙️ Admin Build</h4>
                    <ul class="space-y-2 text-sm text-[#CBD5E1]">
                        <li class="flex gap-2"><span class="text-[#A78BFA]">▹</span> Lead & opportunity management</li>
                        <li class="flex gap-2"><span class="text-[#A78BFA]">▹</span> Custom validation rules & page layouts</li>
                        <li class="flex gap-2"><span class="text-[#A78BFA]">▹</span> Record-triggered flows for automation</li>
                        <li class="flex gap-2"><span class="text-[#A78BFA]">▹</span> Executive dashboards and pipeline reports</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- ==================== CERTIFICATIONS SECTION (from content image) ==================== -->
    <div class="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 border-t border-[#1E2A45]">
        <div class="text-center md:text-left mb-10">
            <h2 class="text-3xl md:text-4xl font-bold font-syne inline-block border-b-2 border-[#3B82F6] pb-2">Certifications & Training</h2>
            <p class="text-[#94A3B8] mt-4 max-w-2xl">Industry-recognized credentials demonstrating expertise and continuous learning.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-[#3B82F6]">Salesforce Certified Administrator</span><div class="text-xs text-[#94A3B8] mt-1">Salesforce / Trailhead · 2024 · ID: 4225451</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-[#3B82F6]">Salesforce Certified Associate</span><div class="text-xs text-[#94A3B8] mt-1">Salesforce / Trailhead · 2023 · ID: 3747956</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-[#3B82F6]">Salesforce AI Associate</span><div class="text-xs text-[#94A3B8] mt-1">Salesforce / Trailhead · 2024 · ID: 5161034</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">ALX Salesforce Admin & Associate Training</span><div class="text-xs text-[#94A3B8]">ALX Rwanda · 2024</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">Launchpad Program — Salesforce Full Lifecycle</span><div class="text-xs text-[#94A3B8]">TechGenius & Awesome Trail · 2024</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">McKinsey Forward Program</span><div class="text-xs text-[#94A3B8]">McKinsey & Company · 2024</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">Virtual Assistant Certificate</span><div class="text-xs text-[#94A3B8]">ALX Africa · 2024</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">Gig at-a-Startup Programme</span><div class="text-xs text-[#94A3B8]">ALX Ventures · 2024</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">Sales Apprenticeship</span><div class="text-xs text-[#94A3B8]">BAG · 2024 & 2025</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">SendPulse Video Training</span><div class="text-xs text-[#94A3B8]">SendPulse Academy · 2024</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">Digital Marketing</span><div class="text-xs text-[#94A3B8]">Online Training · 2024</div></div>
            <div class="cert-item rounded-xl p-5 border border-[#2A3A60]"><span class="font-bold text-white">English C2 Proficient (EF SET 78/100)</span><div class="text-xs text-[#94A3B8]">EF SET · 2024</div></div>
        </div>
    </div>
    
    <!-- ==================== CONTACT / CTA (simple) ==================== -->
    <div id="contact-section" class="max-w-4xl mx-auto text-center py-16 px-5">
        <div class="bg-gradient-to-r from-[#0F172A] to-[#111827] rounded-3xl p-10 border border-[#1E2A4A]">
            <h3 class="text-2xl md:text-3xl font-bold font-syne">Ready to transform your CRM?</h3>
            <p class="text-[#94A3B8] mt-3 mb-6">Let's discuss how I can help your business scale with powerful CRM automation.</p>
            <a href="#" class="inline-flex items-center gap-2 px-7 py-3 bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl text-white font-semibold transition-all shadow-lg shadow-blue-500/20">Start a conversation →</a>
            <div class="mt-5 text-xs text-[#5B6A8A]">📍 Kigali, Rwanda | ✉️ hello@crmportfolio.com</div>
        </div>
    </div>
    <footer class="text-center text-[#5B6A8A] text-xs py-8 border-t border-[#1E2A45] max-w-7xl mx-auto">© 2025 CRM Implementation Specialist — Built with precision across Salesforce, Notion & SendPulse</footer>
</body>
</html>
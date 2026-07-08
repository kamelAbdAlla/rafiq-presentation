import { useState } from 'react';
import type { ReactNode } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';

/* UNIFIED LUCIDE ICONS IMPORT */
import { 
  Code2, Layers, Zap, Route, Boxes, Send, Palette, Heart, GitBranch, 
  Search, Users, PenTool, CheckCircle2, Target, Sparkles, TrendingUp, 
  GraduationCap, Award, Smartphone, Lock, Bell, Server, Filter, Database, 
  ShieldCheck, Repeat, Users2, TestTube2, Package, AlertTriangle, BookOpen, 
  Wifi, Building2, UserX, Rocket, Check, X, PlayCircle, Cpu, Wrench, 
  Brain, Calendar, ClipboardList, BookMarked, XCircle, FileImage,
  Monitor, BrainCircuit, ArrowRightLeft, ArrowRight 
} from 'lucide-react';

/* =========================================================================
   THE PREMIUM SLIDE TEMPLATE
   ========================================================================= */
const PremiumSlideTemplate = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen w-full bg-[#FAFAFA] flex flex-col overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-rafiq-primary-400/10 rounded-full blur-[120px] pointer-events-none" />
    <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 pt-32 pb-16 overflow-y-auto">
      {children}
    </main>
  </div>
);

/* =========================================================================
   1. Problem Overview
   ========================================================================= */
const ProblemOverviewPage = () => {
  const problems = [
    { title: "Course Planning Complexity", desc: "As academic requirements become more complex, students increasingly struggle with manual course planning, understanding academic regulations, and tracking GPA." },
    { title: "Inadequate Academic Advising", desc: "Traditional advising relies heavily on limited faculty availability, leading to rushed decisions, delayed graduation, and a high burden on human advisors." },
    { title: "Lack of Centralized Tracking", desc: "The absence of an integrated platform makes it difficult for students to monitor their academic performance and progression in real-time." },
    { title: "Manual Registration Conflicts", desc: "Manual scheduling often leads to time conflicts, invalid prerequisite selections, and inefficient academic loads for students." },
    { title: "Absence of Proactive Guidance", desc: "Students frequently fail to foresee academic risks, falling below required GPA levels without early warnings or smart intervention." },
    { title: "Fragmented Educational Ecosystem", desc: "Existing platforms focus only on course delivery (LMS) or basic registration (SIS) without providing unified, intelligent academic guidance." }
  ];

  return (
    <PremiumSlideTemplate>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Problem Overview</h2>
        <p className="text-lg text-slate-500 text-center mb-12 max-w-3xl mx-auto">Addressing the growing need for an intelligent and centralized academic management platform.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4"><AlertTriangle className="w-5 h-5" /></div>
              <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   2. Project Goals
   ========================================================================= */
const ProjectGoalsPage = () => {
  const goals = [
    "Develop a smart Academic Management System powered by data analytics and AI-driven recommendations.",
    "Provide an integrated platform to monitor academic performance and track GPA progression accurately.",
    "Enable seamless course enrollment while automatically validating prerequisites and scheduling conflicts.",
    "Introduce an intelligent chatbot (Rafiq) to serve as a 24/7 academic advising companion.",
    "Support early-warning and risk detection to alert students of potential academic standing issues.",
    "Provide a dedicated Smart Advisor Portal for human advisors to monitor and assist at-risk students.",
    "Ensure secure integration and data exchange with existing university systems (e.g., Ibn Al-Haitham).",
    "Enhance overall student learning outcomes and improve the institutional graduation rate.",
  ];

  return (
    <PremiumSlideTemplate>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Project Goals</h2>
        <p className="text-lg text-slate-500 text-center mb-12">The strategic objectives of the Rafiq Academic Guidance System.</p>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60">
          <ul className="space-y-4">
            {goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><Target className="w-4 h-4" /></div>
                <p className="text-slate-700 leading-relaxed pt-1">{goal}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   3. Business Model Canvas (BMC)
   ========================================================================= */
const BusinessModelCanvasPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Business Model Canvas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
        {/* Key Partners */}
        <div className="md:row-span-2 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2"><Building2 className="w-4 h-4 text-slate-500"/> Key Partners</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Mansoura University Registrar</li>
            <li>• Faculty Advisory Departments</li>
            <li>• Student Associations</li>
            <li>• AI & Cloud Service Providers</li>
            <li>• SIS Providers (Ibn Al-Haitham)</li>
          </ul>
        </div>

        {/* Key Activities */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2"><Zap className="w-4 h-4 text-slate-500"/> Key Activities</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• LLM & RAG Integration</li>
            <li>• Platform Engineering (Web/App)</li>
            <li>• Secure API Development</li>
            <li>• Academic Data Analytics</li>
          </ul>
        </div>

        {/* Value Propositions */}
        <div className="md:row-span-2 bg-rafiq-primary-50 p-5 rounded-2xl border border-rafiq-primary-100 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2"><Sparkles className="w-4 h-4 text-rafiq-primary-500"/> Value Propositions</h4>
          <p className="text-xs text-slate-700 mb-3"><span className="font-bold">For Students:</span> A 24/7 intelligent companion for automated GPA tracking, conflict-free scheduling, and personalized AI advising.</p>
          <p className="text-xs text-slate-700 mb-3"><span className="font-bold">For Academic Advisors:</span> A Smart Portal to monitor cohorts, automate repetitive queries, and identify at-risk students proactively.</p>
          <p className="text-xs text-slate-700"><span className="font-bold">For Administration:</span> Enhanced educational ecosystem, improved retention, and seamless LMS/SIS integration.</p>
        </div>

        {/* Customer Relationships */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2"><Heart className="w-4 h-4 text-slate-500"/> Cust. Relationships</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Automated 24/7 Chatbot Support</li>
            <li>• Dedicated Faculty Helpdesk</li>
            <li>• Continuous Student Feedback</li>
          </ul>
        </div>

        {/* Customer Segments */}
        <div className="md:row-span-2 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2"><Users className="w-4 h-4 text-slate-500"/> Cust. Segments</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Undergrad & Postgrad Students</li>
            <li>• Academic Advisors & Faculty</li>
            <li>• University Administration</li>
          </ul>
        </div>

        {/* Key Resources */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2"><Database className="w-4 h-4 text-slate-500"/> Key Resources</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Proprietary Recommendation AI</li>
            <li>• University Curriculum Data</li>
            <li>• Cloud Infrastructure</li>
            <li>• Specialized Dev Team</li>
          </ul>
        </div>

        {/* Channels */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2"><Smartphone className="w-4 h-4 text-slate-500"/> Channels</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Mobile Application (Flutter)</li>
            <li>• Web Portal (React)</li>
            <li>• Campus Workshops</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {/* Cost Structure */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm">Cost Structure</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Infrastructure: Cloud hosting, Vector Databases, API licensing (LLMs).</li>
            <li>• Personnel: SWE & AI Engineers, UI/UX Designers.</li>
            <li>• R&D: Algorithm training, data embedding, and system integration.</li>
            <li>• Operational: System maintenance, bug fixes, and security audits.</li>
          </ul>
        </div>
        {/* Revenue Streams */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-3 text-sm">Revenue Streams</h4>
          <p className="text-xs text-slate-800 font-semibold mb-2">B2B SaaS (Software-as-a-Service) Model:</p>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Primary Stream: Annual institutional licenses sold to universities.</li>
            <li>• Optional Streams: One-time setup & data integration fees, premium fees for advanced analytics.</li>
          </ul>
        </div>
      </div>
    </div>
  </PremiumSlideTemplate>
);

/* =========================================================================
   4. Previous Work (Competitors' Study)
   ========================================================================= */
const PreviousWorkPage = () => {
  const check = <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />;
  const cross = <XCircle className="w-5 h-5 text-red-400 mx-auto" />;

  return (
    <PremiumSlideTemplate>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Previous Work</h2>
        <p className="text-lg text-slate-500 text-center mb-12">Comparison between Traditional Systems, Learning Management Systems, and Rafiq.</p>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
          <table className="w-full text-sm text-center">
            <thead className="bg-[#0C3C7D] text-white">
              <tr>
                <th className="px-6 py-5 font-semibold text-left border-r border-white/10">Features</th>
                <th className="px-6 py-5 font-semibold border-r border-white/10">MYU</th>
                <th className="px-6 py-5 font-semibold border-r border-white/10">D2L</th>
                <th className="px-6 py-5 font-semibold border-r border-white/10">Canvas</th>
                <th className="px-6 py-5 font-bold text-blue-200">Rafiq</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-700 text-left border-r border-slate-100">Smart Course Registration</td>
                <td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 bg-rafiq-primary-50/30">{check}</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-700 text-left border-r border-slate-100">AI-Based Course Recommendations</td>
                <td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 bg-rafiq-primary-50/30">{check}</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-700 text-left border-r border-slate-100">Intelligent Academic Advising (Chatbot)</td>
                <td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 bg-rafiq-primary-50/30">{check}</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-700 text-left border-r border-slate-100">Academic Information Display</td>
                <td className="px-6 py-4 border-r border-slate-100">{check}</td><td className="px-6 py-4 border-r border-slate-100">{check}</td><td className="px-6 py-4 border-r border-slate-100">{check}</td><td className="px-6 py-4 bg-rafiq-primary-50/30">{check}</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-700 text-left border-r border-slate-100">Campus Navigation</td>
                <td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{check}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 bg-rafiq-primary-50/30">{cross}</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-700 text-left border-r border-slate-100">Early-Warning & Risk Prediction System</td>
                <td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 bg-rafiq-primary-50/30">{check}</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-700 text-left border-r border-slate-100">Notifications System</td>
                <td className="px-6 py-4 border-r border-slate-100">{cross}</td><td className="px-6 py-4 border-r border-slate-100">{check}</td><td className="px-6 py-4 border-r border-slate-100">{check}</td><td className="px-6 py-4 bg-rafiq-primary-50/30">{check}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   5. Running Project (Live Demo)
   ========================================================================= */
const RunningProjectPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-4xl mx-auto text-center flex flex-col justify-center min-h-[60vh]">
      <div className="inline-block p-6 bg-rafiq-primary-50 text-rafiq-primary-600 rounded-full mx-auto mb-8">
        <PlayCircle className="w-16 h-16" />
      </div>
      <h2 className="text-6xl font-bold text-slate-900 mb-6 tracking-tight">Running Project</h2>
      <p className="text-xl text-slate-600 mb-4 font-medium">Rafiq: A Smart Academic Guidance System for Enhancing Student Learning Outcomes.</p>
      <p className="text-slate-400">Live Demonstration (5 Minutes)</p>
    </div>
  </PremiumSlideTemplate>
);

/* =========================================================================
   6. System Design (Custom UML Render Engines)
   ========================================================================= */

const MultiText = ({ x, y, text, fontSize=12, fill="#0F172A", fontWeight="normal" }: any) => {
  const lines = text.split('\n');
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={fontSize} fontWeight={fontWeight} fill={fill}>
      {lines.map((l: string, i: number) => <tspan x={x} dy={i === 0 ? `-${(lines.length-1)*0.5}em` : "1.2em"} key={i}>{l}</tspan>)}
    </text>
  );
}

// 1. PERFECTLY ALIGNED ARCHITECTURE DIAGRAM (Academic Advisor -> Web Portal Fixed)
const CodeArchitectureDiagram = () => (
  <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/60 overflow-x-auto mb-16">
    <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">System Architecture</h3>
    <svg viewBox="0 0 1150 500" className="w-full h-auto min-w-[900px] font-sans">
      <defs>
        <marker id="arr-blue" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#64748B"/></marker>
        <marker id="arr-blue-rev" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto"><path d="M10,0 L0,5 L10,10 Z" fill="#64748B"/></marker>
      </defs>
      
      {/* COLUMN 1: ACTORS */}
      <g transform="translate(20, 0)">
        <text x="70" y="30" textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="bold" fill="#0F172A">Actors</text>
        {[{ y: 60, label: "Student" }, { y: 160, label: "Academic Advisor" }, { y: 260, label: "Instructor" }, { y: 360, label: "System Admin" }].map((actor, i) => (
          <g key={i}>
            <rect x="0" y={actor.y} width="140" height="50" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="70" y={actor.y+25} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="600" fill="#334155">{actor.label}</text>
          </g>
        ))}
      </g>
      
      {/* COLUMN 2: FRONTEND */}
      <g transform="translate(280, 0)">
        <text x="90" y="30" textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="bold" fill="#0F172A">Client Interface</text>
        
        {/* Mobile App */}
        <rect x="0" y="60" width="180" height="80" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
        <MultiText x={90} y={100} text="Mobile App\n(Flutter & Dart)" fontSize="13" fontWeight="bold" fill="#1D4ED8" />
        
        {/* Web Portal */}
        <rect x="0" y="200" width="180" height="80" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
        <MultiText x={90} y={240} text="Web Portal\n(React & Tailwind)" fontSize="13" fontWeight="bold" fill="#1D4ED8" />
      </g>
      
      {/* COLUMN 3: BACKEND */}
      <g transform="translate(560, 0)">
        <text x="130" y="30" textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="bold" fill="#0F172A">Backend Server</text>
        
        <rect x="0" y="60" width="260" height="260" rx="16" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
        <text x="130" y="90" textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="bold" fill="#047857">ASP.NET Core Web API</text>
        {[{ y: 120, label: "JWT Auth & Role Security" }, { y: 170, label: "Academic Progress Tracking" }, { y: 220, label: "Notification Hub" }, { y: 270, label: "CQRS & MediatR Pipeline" }].map((mod, i) => (
          <g key={i}>
            <rect x="20" y={mod.y} width="220" height="35" rx="6" fill="#D1FAE5" stroke="#34D399" strokeWidth="1" />
            <text x="130" y={mod.y+17.5} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="600" fill="#065F46">{mod.label}</text>
          </g>
        ))}
        
        <rect x="0" y="360" width="260" height="60" rx="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
        <MultiText x={130} y={390} text="University SIS\n(Ibn Al-Haitham)" fontSize="13" fontWeight="bold" fill="#B91C1C" />
      </g>
      
      {/* COLUMN 4: AI & DATABASES */}
      <g transform="translate(900, 0)">
        <text x="110" y="30" textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="bold" fill="#0F172A">Data & AI Engine</text>
        
        <rect x="0" y="60" width="220" height="150" rx="16" fill="#FAF5FF" stroke="#A855F7" strokeWidth="2" />
        <text x="110" y="85" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold" fill="#7E22CE">AI & Logic Engine</text>
        {[{ y: 105, label: "LangChain Orchestrator" }, { y: 140, label: "LLMs (Gemma 2, Llama 3)" }, { y: 175, label: "Google OR-Tools" }].map((mod, i) => (
          <g key={i}>
            <rect x="15" y={mod.y} width="190" height="28" rx="6" fill="#F3E8FF" stroke="#D8B4FE" strokeWidth="1" />
            <text x="110" y={mod.y+14} textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="600" fill="#6B21A8">{mod.label}</text>
          </g>
        ))}
        
        <rect x="0" y="250" width="220" height="150" rx="16" fill="#FFFBEB" stroke="#D946EF" strokeWidth="2" />
        <text x="110" y="275" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold" fill="#86198F">Persistence & Cache</text>
        {[{ y: 295, label: "SQL Server" }, { y: 330, label: "ChromaDB (Vector)" }, { y: 365, label: "Redis (Cache)" }].map((mod, i) => (
          <g key={i}>
            <rect x="15" y={mod.y} width="190" height="28" rx="6" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="1" />
            <text x="110" y={mod.y+14} textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="600" fill="#B45309">{mod.label}</text>
          </g>
        ))}
      </g>
      
      {/* SMOOTH CURVED CONNECTIONS */}
      {/* Student (160, 85) to Mobile App (280, 100) */}
      <path d="M 160 85 C 220 85, 220 100, 280 100" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      {/* Student (160, 85) to Web Portal (280, 240) */}
      <path d="M 160 85 C 220 85, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      
      {/* Academic Advisor (160, 185) to Web Portal (280, 240) */}
      <path d="M 160 185 C 220 185, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      
      {/* Instructor (160, 285) to Web Portal (280, 240) */}
      <path d="M 160 285 C 220 285, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      
      {/* Admin (160, 385) to Web Portal (280, 240) */}
      <path d="M 160 385 C 220 385, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      
      {/* Mobile App <-> ASP.NET */}
      <line x1="460" y1="100" x2="560" y2="100" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
      
      {/* Web Portal <-> ASP.NET */}
      <line x1="460" y1="240" x2="560" y2="240" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
      
      {/* ASP.NET <-> SIS */}
      <line x1="690" y1="320" x2="690" y2="360" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
      
      {/* ASP.NET <-> AI Engine */}
      <line x1="820" y1="135" x2="900" y2="135" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
      
      {/* ASP.NET <-> Persistence */}
      <path d="M 820 280 C 860 280, 860 325, 900 325" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
    </svg>
  </div>
);

// 2. PERFECTLY ORTHOGONAL CLASS DIAGRAM
const UMLClass = ({ title, data }: any) => {
  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/60 overflow-x-auto mb-16">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">{title}</h3>
      <svg viewBox="0 0 1600 1100" className="w-full h-auto min-w-[1200px] font-sans">
        <defs>
          <marker id="arr-class" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#000"/></marker>
          <marker id="arr-hollow" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto"><polygon points="0,0 12,6 0,12" fill="#fff" stroke="#000" strokeWidth="1.5"/></marker>
        </defs>
        
        {/* Draw the geometric paths connecting the boxes */}
        {data.links.map((l:any, i:number) => (
          <g key={`l${i}`}>
            <path d={l.path} fill="none" stroke="#000" strokeWidth="1.5" strokeDasharray={l.d ? "6,6" : "none"} markerEnd={l.type === 'inherit' ? "url(#arr-hollow)" : (l.type === 'assoc' ? "url(#arr-class)" : "none")} />
            {l.l1 && <text x={l.tx1} y={l.ty1} fontSize="12" dominantBaseline="middle" fill="#000" fontWeight="bold">{l.l1}</text>}
            {l.l2 && <text x={l.tx2} y={l.ty2} fontSize="12" dominantBaseline="middle" fill="#000" fontWeight="bold">{l.l2}</text>}
          </g>
        ))}
        
        {/* Draw the class boxes precisely on the grid */}
        {data.classes.map((c:any, i:number) => {
          const w = 150;
          const h = 30 + (c.a.length * 15) + 10 + (c.m.length * 15) + 10;
          return (
            <g key={`c${i}`} transform={`translate(${c.x - w/2}, ${c.y})`}>
              <rect x="0" y="0" width={w} height={h} fill="#fff" stroke="#000" strokeWidth="1.5" />
              <text x={w/2} y="15" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fill="#000">{c.n}</text>
              <line x1="0" y1="30" x2={w} y2="30" stroke="#000" strokeWidth="1.5" />
              {c.a.map((attr:string, j:number) => <text key={`a${j}`} x="8" y={45 + j*15} dominantBaseline="middle" fontSize="10" fill="#000">{attr}</text>)}
              <line x1="0" y1={30 + c.a.length*15 + 10} x2={w} y2={30 + c.a.length*15 + 10} stroke="#000" strokeWidth="1.5" />
              {c.m.map((meth:string, j:number) => <text key={`m${j}`} x="8" y={30 + c.a.length*15 + 25 + j*15} dominantBaseline="middle" fontSize="10" fill="#000">{meth}</text>)}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// 3. PERFECTLY ORTHOGONAL ACTIVITY DIAGRAM
const UMLActivityAuth = () => (
  <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/60 overflow-x-auto mb-16">
    <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Activity Diagram: User Authentication & Flow</h3>
    <svg viewBox="0 0 1200 1100" className="w-full h-auto min-w-[1000px] font-sans bg-[#ffffe0]">
      <defs><marker id="arr-red" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#ff0000"/></marker></defs>
      
      {/* Node Helper */}
      <circle cx="600" cy="40" r="14" fill="#000" />
      <path d="M 600 54 V 80" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="520" y="80" width="160" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={600} y={103} text="Authentication\nPhase" fontSize="12" />
      <path d="M 600 126 V 160" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <rect x="520" y="160" width="160" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={600} y={183} text="Enter Login\nCredentials" fontSize="12" />
      <path d="M 600 206 V 240" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <polygon points="600,240 640,265 600,290 560,265" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <text x="600" y="265" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold">Valid</text>
      
      {/* STRICT 90-DEGREE FEEDBACK LOOP FOR 'NO' */}
      <text x="655" y="255" dominantBaseline="middle" fontSize="12" fill="#000">no</text>
      <path d="M 640 265 H 720 V 103 H 680" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <text x="610" y="305" dominantBaseline="middle" fontSize="12" fill="#000">yes</text>
      <path d="M 600 290 V 330" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <rect x="530" y="330" width="140" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <text x="600" y="353" textAnchor="middle" dominantBaseline="middle" fontSize="13">Home Page</text>
      <path d="M 600 376 V 410" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      {/* Fork 1 */}
      <rect x="50" y="410" width="1100" height="8" fill="#ff0000" />
      
      {[
        { x: 150, l: "Smart assistants" }, { x: 330, l: "Academic calender" }, { x: 510, l: "Chatbot" },
        { x: 690, l: "Dashboard" }, { x: 870, l: "Course Mgt" }, { x: 1050, l: "Student Profile" }
      ].map((b, i) => (
        <g key={i}>
          <path d={`M ${b.x} 418 V 450`} fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
          <rect x={b.x-70} y="450" width="140" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
          <MultiText x={b.x} y={473} text={b.l.replace(' ', '\n')} fontSize="12" />
          <path d={`M ${b.x} 496 V 530`} fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
        </g>
      ))}

      {/* Col 1 */}
      <rect x="30" y="530" width="240" height="8" fill="#ff0000" />
      {[{x:70, l:"Path suggestions"},{x:150, l:"Improve study\nplan"},{x:230, l:"Learning\nresourses"}].map((b,i)=>(
        <g key={`c1${i}`}>
           <path d={`M ${b.x} 538 V 570`} fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
           <rect x={b.x-35} y="570" width="70" height="46" rx="15" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
           <MultiText x={b.x} y={593} text={b.l} fontSize="10" />
           <path d={`M ${b.x} 616 V 980`} fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
        </g>
      ))}

      {/* Col 2 */}
      <rect x="270" y="530" width="120" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={330} y={553} text="Reminder of\nimportant events" fontSize="11" />
      <path d="M 330 576 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      {/* Col 3 */}
      <rect x="450" y="530" width="120" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={510} y={553} text="Analyze question" fontSize="12" />
      <path d="M 510 576 V 600" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <polygon points="510,600 540,625 510,650 480,625" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <text x="510" y="625" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold">Valid</text>
      
      <text x="555" y="615" dominantBaseline="middle" fontSize="12" fill="#000">no</text>
      <path d="M 540 625 H 580" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="580" y="602" width="100" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={630} y={625} text="Only academic\nquestion" fontSize="10" />
      
      <text x="520" y="665" dominantBaseline="middle" fontSize="12" fill="#000">yes</text>
      <path d="M 510 650 V 680" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="450" y="680" width="120" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={510} y={703} text="Answer question" fontSize="12" />
      <path d="M 510 726 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      {/* Col 4 */}
      <rect x="630" y="530" width="120" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={690} y={553} text="Performance\ntracker" fontSize="12" />
      <path d="M 690 576 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      {/* Col 5 */}
      <rect x="740" y="580" width="90" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={785} y={603} text="View courses\ndetails" fontSize="11" />
      <path d="M 785 626 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <path d="M 870 530 V 555 H 910 V 580" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      <path d="M 870 530 V 555 H 785 V 580" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <rect x="860" y="580" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={603} text="Enroll in\ncourses" fontSize="11" />
      <path d="M 910 626 V 650" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="860" y="650" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={673} text="Recommend\ncourses" fontSize="11" />
      <path d="M 910 696 V 720" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="860" y="720" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={743} text="Generate smart\ntable" fontSize="11" />
      <path d="M 910 766 V 790" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <polygon points="910,790 940,815 910,840 880,815" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <text x="910" y="815" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold">suitable</text>
      
      {/* STRICT 90-DEGREE FEEDBACK LOOP FOR NO */}
      <text x="955" y="805" dominantBaseline="middle" fontSize="12" fill="#000">no</text>
      <path d="M 940 815 H 980 V 565 H 910 V 580" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <text x="920" y="855" dominantBaseline="middle" fontSize="12" fill="#000">yes</text>
      <path d="M 910 840 V 870" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <rect x="860" y="870" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={893} text="Save\nregistration" fontSize="11" />
      <path d="M 910 916 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      {/* C6 */}
      <rect x="990" y="530" width="190" height="8" fill="#ff0000" />
      {[{x:1015, l:"Completed\ncourses"},{x:1065, l:"com/rem\nhours"},{x:1115, l:"Student\nInfo"},{x:1165, l:"What if\ngpa"}].map((b,i)=>(
        <g key={`c6${i}`}>
           <path d={`M ${b.x} 538 V 570`} fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
           <rect x={b.x-22.5} y="570" width="45" height="46" rx="10" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
           <MultiText x={b.x} y={593} text={b.l} fontSize="9" />
           <path d={`M ${b.x} 616 V 980`} fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
        </g>
      ))}

      {/* Join & End */}
      <rect x="0" y="980" width="1200" height="8" fill="#ff0000" />
      <path d="M 600 988 V 1020" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <circle cx="600" cy="1040" r="14" fill="none" stroke="#000" strokeWidth="2" />
      <circle cx="600" cy="1040" r="8" fill="#000" />
    </svg>
  </div>
);

// 4. USE CASE DIAGRAM RENDERER
const UMLUseCase = ({ title, data, w=1000, h=950 }: any) => (
  <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/60 overflow-x-auto mb-16">
    <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">{title}</h3>
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto min-w-[800px] font-sans">
      <defs><marker id="arr-uc" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#000"/></marker></defs>
      
      {/* System Boundary */}
      {data.boxes?.map((b:any, i:number) => (
        <g key={`b${i}`}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" stroke="#000" strokeWidth="1.5" />
          <text x={b.x + b.w/2} y={b.y + 20} textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold" fill="#000">{b.l}</text>
        </g>
      ))}

      {/* Links snapped precisely */}
      {data.links?.map((l:any, i:number) => (
         <g key={`l${i}`}>
           <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#000" strokeWidth="1.5" strokeDasharray={l.d ? "6,6" : "none"} markerEnd={l.arr ? "url(#arr-uc)" : "none"} />
           {l.l && <text x={(l.x1+l.x2)/2} y={(l.y1+l.y2)/2 - 10} textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#000" transform={l.rot ? `rotate(${l.rot} ${(l.x1+l.x2)/2} ${(l.y1+l.y2)/2})` : ""}>{l.l}</text>}
         </g>
      ))}

      {/* Actors */}
      {data.actors?.map((a:any, i:number) => (
        <g key={`a${i}`} transform={`translate(${a.x}, ${a.y})`}>
          <circle cx="0" cy="-20" r="12" fill="#fff" stroke="#000" strokeWidth="2" />
          <line x1="0" y1="-8" x2="0" y2="15" stroke="#000" strokeWidth="2" />
          <line x1="-18" y1="2" x2="18" y2="2" stroke="#000" strokeWidth="2" />
          <line x1="0" y1="15" x2="-12" y2="40" stroke="#000" strokeWidth="2" />
          <line x1="0" y1="15" x2="12" y2="40" stroke="#000" strokeWidth="2" />
          <text x="0" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fill="#000">{a.l}</text>
        </g>
      ))}

      {/* Use Cases constrained to box width */}
      {data.cases?.map((c:any, i:number) => (
        <g key={`c${i}`} transform={`translate(${c.x}, ${c.y})`}>
          <ellipse cx="0" cy="0" rx={c.rx||80} ry={c.ry||30} fill="#fff" stroke="#000" strokeWidth="1.5" />
          <MultiText x={0} y={0} text={c.l} fontSize="12" fontWeight="500" />
        </g>
      ))}
    </svg>
  </div>
);

// 5. SEQUENCE DIAGRAM RENDERER
const UMLSequence = ({ title, data }: any) => {
  const w = 1000, h = 100 + data.msgs.length * 50;
  const colW = w / data.lifelines.length;
  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/60 overflow-x-auto mb-16">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">{title}</h3>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto min-w-[800px] font-sans">
        <defs><marker id="arr-seq" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#000"/></marker></defs>
        {data.lifelines.map((l: string, i: number) => {
          const cx = i * colW + colW/2;
          return (
            <g key={i}>
              {l.includes("User") || l.includes("Actor") ? (
                <g transform={`translate(${cx}, 30)`}>
                  <circle cx="0" cy="-15" r="7" fill="none" stroke="#000" strokeWidth="2" />
                  <line x1="0" y1="-8" x2="0" y2="10" stroke="#000" strokeWidth="2" />
                  <line x1="-12" y1="-2" x2="12" y2="-2" stroke="#000" strokeWidth="2" />
                  <line x1="0" y1="10" x2="-10" y2="25" stroke="#000" strokeWidth="2" />
                  <line x1="0" y1="10" x2="10" y2="25" stroke="#000" strokeWidth="2" />
                  <text x="0" y="45" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fill="#000">{l}</text>
                </g>
              ) : (
                <g transform={`translate(${cx}, 30)`}>
                  <rect x="-60" y="-10" width="120" height="40" fill="#fff" stroke="#000" strokeWidth="1.5" rx="6" />
                  <MultiText x={0} y={10} text={l} fontSize="12" fontWeight="bold" />
                </g>
              )}
              <line x1={cx} y1="80" x2={cx} y2={h-20} stroke="#000" strokeDasharray="6,6" strokeWidth="1.5" />
              <rect x={cx - 6} y="95" width="12" height={h-130} fill="#fff" stroke="#000" strokeWidth="1.5" />
            </g>
          );
        })}
        {data.msgs.map((m: any, i: number) => {
          const y = 120 + i * 50;
          const x1 = m.f * colW + colW/2 + (m.f < m.t ? 6 : -6);
          const x2 = m.t * colW + colW/2 + (m.f < m.t ? -6 : 6);
          if (m.self) return (
            <g key={i}>
              <path d={`M ${x1} ${y} h 40 v 20 h -40`} fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arr-seq)" />
              <text x={x1 + 45} y={y + 10} dominantBaseline="middle" fontSize="12" fill="#000">{m.l}</text>
            </g>
          );
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="#000" strokeWidth="1.5" strokeDasharray={m.d ? "6,6" : "none"} markerEnd="url(#arr-seq)" />
              <text x={(x1+x2)/2} y={y - 10} textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#000">{m.l}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// DATA FOR THE ENGINES (Meticulously calculated for exact intersections)
const dataClassDiagram = {
  classes: [
    { id: 'u', n: 'User', x: 800, y: 50, a: ['+ userId: String', '+ name: String', '+ email: String', '+ password: string', '+ role: String', 'status: Boolean'], m: ['+ login()', '+ logout()', '+ resetPassword()'] },
    { id: 'n', n: 'Notification', x: 1150, y: 100, a: ['+ notificationId: String', '+ message: String', '+ type: String', '+ sentDate: Date'], m: ['+ sendApp()'] },
    
    { id: 'st', n: 'Student', x: 300, y: 350, a: ['+ nationalId: String', '+ departement: String', '+ academicLevel: int', '+ term: int', '+ cumulativeGPA: douple', '+ academicStatus: String'], m: ['+ viewAcademicProfile()', '+ enrollCourse()', '+ dropCourse()', '+ simulateGPA()', '+ viewStudyPlan()', '+ bookAppointment()', '+ interactWithChatbot()', '+ viewRecommendations()'] },
    { id: 'ad', n: 'Admin', x: 600, y: 350, a: ['+ AdminType: String'], m: ['+ addStudent()', '+ editStudent()', '+ deleteStudent()', '+ addCourse()', '+ editCourse()', '+ deleteCourse()', '+ createAnnouncement()', '+ manageRoles()', '+ activeAccount()', '+ deactiveAccount()'] },
    { id: 'aa', n: 'AcademicAdvisor', x: 900, y: 350, a: ['+ department: String'], m: ['+ viewStudentProfile()', '+ reviewAcademicPlan()', '+ registerCourses()'] },
    { id: 'in', n: 'Instructor', x: 1200, y: 350, a: ['+ Specialization: String'], m: ['+ enterGrades()', '+ editGrades()', '+ viewClassList()', '+ createAnnouncement()'] },
    
    { id: 'en', n: 'Enrollment', x: 150, y: 650, w: 140, a: ['+ enrollmentId: String', '+ grade: String', '+ status: String'], m: ['+ calculateGrade()', '+ updateStatus()'] },
    { id: 'sp', n: 'StudyPlan', x: 330, y: 650, w: 140, a: ['+ PlanId: String'], m: ['+ generatePlan()', '+ checkGraduationEligibility()', '+ optimizePlan()'] },
    { id: 're', n: 'RecommendationEngine', x: 510, y: 650, w: 140, a: ['+ modelVersion: String'], m: ['+ recommendCourse()', '+ predictAcademicRisk()', '+ suggestCareerPath()'] },
    { id: 'cb', n: 'Chatbot', x: 690, y: 650, w: 140, a: ['+ knowledgeBase: String'], m: ['+ answerQuestion()', '+ explainAcademicRules()'] },
    { id: 'gs', n: 'GPAServices', x: 870, y: 650, w: 140, a: [], m: ['+ calculateTermGPA()', '+ calculateCumulativeGPA()', '+ simulateGPA()'] },
    { id: 'sg', n: 'ScheduleGenerator', x: 1050, y: 650, w: 140, a: [], m: ['+ generateSchedule()', '+ detectConflict()', '+ optimizeSchedule()'] },
    { id: 'ap', n: 'Appointment', x: 1230, y: 650, w: 140, a: ['+ appointmentId: String', '+ date: Date', '+ status: String'], m: ['+ book()', '+ cancel()', '+ sendReminder()'] },
    { id: 'an', n: 'Announcement', x: 1410, y: 650, w: 140, a: ['+ announcementId: string', '+ title: String', '+ content: String', 'dateCreated: Date'], m: ['+ publish()', '+ scheduleRelease()'] },

    { id: 'se', n: 'Section', x: 150, y: 850, w: 140, a: ['+ sectionId: String', '+ schedule: String', '+ capacity: int'], m: ['+ addStudent()', '+ removeStudent()', '+ isFull()'] },
    { id: 'co', n: 'Course', x: 330, y: 850, w: 140, a: ['+ courseId: String', '+ title: String', '+ description: String', '+ creditHours: int', '+ department: String', '+ category: String'], m: ['+ addPrerequisite()', '+ removePrerequisite()', '+ updateCourseDetails()', '+ checkEligibility()'] },
  ],
  links: [
    // Inheritance
    { path: 'M 300 350 V 300 H 800 V 230', type: 'inherit' }, { path: 'M 600 350 V 300 H 800 V 230', type: 'inherit' }, { path: 'M 900 350 V 300 H 800 V 230', type: 'inherit' }, { path: 'M 1200 350 V 300 H 800 V 230', type: 'inherit' },
    // User -> Notification
    { path: 'M 875 125 H 1075', type: 'assoc' },
    // Student -> Tools
    { path: 'M 300 580 V 610 H 150 V 650', type: 'assoc', l1: '1', l2: '*', tx1: 310, ty1: 595, tx2: 160, ty2: 635 }, 
    { path: 'M 300 580 V 610 H 330 V 650', type: 'assoc', l1: '1', l2: '1', tx1: 310, ty1: 595, tx2: 340, ty2: 635 },
    { path: 'M 300 580 V 610 H 510 V 650', d: true }, { path: 'M 300 580 V 610 H 690 V 650', d: true }, { path: 'M 300 580 V 610 H 870 V 650', d: true }, { path: 'M 300 580 V 610 H 1050 V 650', d: true }, { path: 'M 300 580 V 610 H 1230 V 650', d: true },
    // Admin, Instructor, Advisor -> Announcement
    { path: 'M 600 535 V 600 H 1410 V 650', type: 'assoc', l1: '1', l2: '*', tx1: 610, ty1: 550, tx2: 1420, ty2: 635 },
    { path: 'M 1200 490 V 600 H 1410 V 650', type: 'assoc', l1: '1', l2: '1', tx1: 1210, ty1: 505, tx2: 1390, ty2: 635 },
    { path: 'M 900 460 V 600 H 1410 V 650', type: 'assoc' },
    // Section -> Course
    { path: 'M 220 900 H 260', type: 'assoc', l1: '*', l2: '1', tx1: 230, ty1: 890, tx2: 250, ty2: 890 },
    // Enrollment -> Section
    { path: 'M 150 725 V 850', type: 'assoc', l1: '*', l2: '1', tx1: 160, ty1: 740, tx2: 160, ty2: 835 },
  ]
};

const dataUC1 = {
  actors: [{ l: 'Student', x: 80, y: 500 }, { l: 'Instructor', x: 920, y: 500 }],
  boxes: [{ l: 'System', x: 200, y: 10, w: 600, h: 960 }],
  cases: [
    { l: 'Logout', x: 420, y: 60, rx: 50 }, { l: 'Login', x: 580, y: 60, rx: 50 },
    { l: 'reset password', x: 420, y: 120, rx: 60 }, { l: 'forgot password', x: 580, y: 120, rx: 60 },
    { l: 'View Profile', x: 300, y: 220, rx: 65 }, { l: 'View grades', x: 550, y: 180, rx: 65 }, { l: 'view info', x: 550, y: 260, rx: 60 },
    { l: 'Enroll In Courses', x: 300, y: 340, rx: 75 }, { l: 'generate table', x: 550, y: 340, rx: 65 },
    { l: 'View Courses', x: 300, y: 440, rx: 65 }, { l: 'view course details', x: 550, y: 440, rx: 75 },
    { l: 'Edit/Add/Delete Complaint', x: 300, y: 540, rx: 90 }, { l: 'Attach file', x: 550, y: 540, rx: 60 },
    { l: 'Check Academic Calender', x: 300, y: 640, rx: 85 }, { l: 'recieve calender notification', x: 550, y: 640, rx: 95 },
    { l: 'Book an Appointment', x: 300, y: 740, rx: 80 }, { l: 'Interact with Chatbot', x: 300, y: 840, rx: 80 },
    { l: 'view assigned courses', x: 750, y: 250, rx: 80 }, { l: 'manage courses matrials', x: 750, y: 350, rx: 85 },
    { l: 'grade students', x: 750, y: 450, rx: 65 }, { l: 'view class list', x: 750, y: 550, rx: 65 },
    { l: 'upload assignments', x: 750, y: 650, rx: 75 }, { l: 'create announcement', x: 750, y: 750, rx: 80 }
  ],
  links: [
    // Include & Extend Arrows
    { x1: 365, y1: 210, x2: 485, y2: 185, d: true, arr: true, l: '<<include>>' },
    { x1: 365, y1: 230, x2: 490, y2: 255, d: true, arr: true, l: '<<include>>' },
    { x1: 485, y1: 340, x2: 375, y2: 340, d: true, arr: true, l: '<<extend>>' },
    { x1: 475, y1: 440, x2: 365, y2: 440, d: true, arr: true, l: '<<extend>>' },
    { x1: 490, y1: 540, x2: 390, y2: 540, d: true, arr: true, l: '<<extend>>' },
    { x1: 455, y1: 640, x2: 385, y2: 640, d: true, arr: true, l: '<<extend>>' },
    // Student Links
    { x1: 100, y1: 480, x2: 370, y2: 65 }, { x1: 100, y1: 480, x2: 530, y2: 65 }, { x1: 100, y1: 480, x2: 360, y2: 125 }, { x1: 100, y1: 480, x2: 520, y2: 125 },
    { x1: 100, y1: 500, x2: 235, y2: 220 }, { x1: 100, y1: 500, x2: 225, y2: 340 }, { x1: 100, y1: 500, x2: 235, y2: 440 }, { x1: 100, y1: 500, x2: 210, y2: 540 },
    { x1: 100, y1: 500, x2: 215, y2: 640 }, { x1: 100, y1: 500, x2: 220, y2: 740 }, { x1: 100, y1: 500, x2: 220, y2: 840 },
    // Instructor Links
    { x1: 900, y1: 480, x2: 470, y2: 65 }, { x1: 900, y1: 480, x2: 630, y2: 65 }, { x1: 900, y1: 480, x2: 480, y2: 125 }, { x1: 900, y1: 480, x2: 640, y2: 125 },
    { x1: 900, y1: 500, x2: 830, y2: 250 }, { x1: 900, y1: 500, x2: 835, y2: 350 }, { x1: 900, y1: 500, x2: 815, y2: 450 }, { x1: 900, y1: 500, x2: 815, y2: 550 },
    { x1: 900, y1: 500, x2: 825, y2: 650 }, { x1: 900, y1: 500, x2: 830, y2: 750 }
  ]
};

const dataUC2 = {
  actors: [{ l: 'Admin', x: 80, y: 500 }, { l: 'Academic Advisor', x: 920, y: 250 }, { l: 'Smart Agent', x: 920, y: 800 }],
  boxes: [{ l: 'System', x: 200, y: 10, w: 620, h: 960 }],
  cases: [
    { l: 'Add/Edit/Delete student', x: 320, y: 150, rx: 80 }, { l: 'view student profile', x: 320, y: 260, rx: 70 },
    { l: 'Activate/Deactivate Account', x: 320, y: 370, rx: 95 }, { l: 'Instructor Assignment', x: 320, y: 480, rx: 80 },
    { l: 'Create Announcement', x: 320, y: 590, rx: 80 }, { l: 'Targeted notifications', x: 580, y: 590, rx: 80 },
    { l: 'recieve appointment request', x: 320, y: 700, rx: 95 },
    
    { l: 'view student profile', x: 680, y: 120, rx: 70 }, { l: 'view assigned student', x: 680, y: 220, rx: 75 },
    { l: 'review study plan', x: 680, y: 320, rx: 70 }, { l: 'recieve advising request', x: 680, y: 420, rx: 80 },
    
    { l: 'track academiv status', x: 440, y: 50, rx: 75 }, { l: 'review graduation progress', x: 440, y: 150, rx: 90 },
    { l: 'sending advising notes', x: 440, y: 420, rx: 80 },
    
    { l: 'Generate course recommendation', x: 660, y: 650, rx: 110 }, { l: 'Learning recourses suggestions', x: 660, y: 750, rx: 100 },
    { l: 'Provide student assistant', x: 660, y: 850, rx: 85 }, { l: 'Generate smart schedule', x: 660, y: 950, rx: 85 }
  ],
  links: [
    // Include & Extend Arrows
    { x1: 400, y1: 590, x2: 500, y2: 590, d: true, arr: true, l: '<<include>>' },
    { x1: 515, y1: 65, x2: 615, y2: 105, d: true, arr: true, l: '<<extend>>' },
    { x1: 530, y1: 145, x2: 610, y2: 125, d: true, arr: true, l: '<<extend>>' },
    { x1: 520, y1: 420, x2: 600, y2: 420, d: true, arr: true, l: '<<extend>>' },
    // Admin Links
    { x1: 100, y1: 500, x2: 240, y2: 150 }, { x1: 100, y1: 500, x2: 250, y2: 260 }, { x1: 100, y1: 500, x2: 225, y2: 370 },
    { x1: 100, y1: 500, x2: 240, y2: 480 }, { x1: 100, y1: 500, x2: 240, y2: 590 }, { x1: 100, y1: 500, x2: 225, y2: 700 },
    // Advisor Links
    { x1: 900, y1: 250, x2: 750, y2: 120 }, { x1: 900, y1: 250, x2: 755, y2: 220 },
    { x1: 900, y1: 250, x2: 750, y2: 320 }, { x1: 900, y1: 250, x2: 760, y2: 420 },
    // Agent Links
    { x1: 900, y1: 800, x2: 770, y2: 650 }, { x1: 900, y1: 800, x2: 760, y2: 750 },
    { x1: 900, y1: 800, x2: 745, y2: 850 }, { x1: 900, y1: 800, x2: 745, y2: 950 }
  ]
};

const dataSeqChatbot = {
  lifelines: ["User", "UI", "Controller", "Nlp", "KB", "AI response"],
  msgs: [
    { f: 0, t: 1, l: "Type question" }, { f: 1, t: 2, l: "send user message" },
    { f: 2, t: 3, l: "Analyze intent" }, { f: 3, t: 2, l: "return intent", d: true },
    { f: 2, t: 4, l: "fetch regulation data" }, { f: 4, t: 2, l: "return related rules", d: true },
    { f: 2, t: 5, l: "generate structured respone" }, { f: 5, t: 2, l: "return formatted answer", d: true },
    { f: 2, t: 1, l: "send final response", d: true }, { f: 1, t: 0, l: "display answer", d: true }
  ]
};

const dataSeqAlerts = {
  lifelines: ["Actor", "Student Dashboard", "AlertService", "NotificationService", "EvenMonitor", "GradSystem"],
  msgs: [
    { f: 5, t: 4, l: "Student grad drops below threshold" }, { f: 4, t: 2, l: "Trigger Grade drop Alert" },
    { f: 2, t: 2, l: "generate drop alert", self: true }, { f: 2, t: 3, l: "send grade drop notification" },
    { f: 3, t: 1, l: "display grade drop alert", d: true }, { f: 1, t: 0, l: "Show Grade Alert", d: true }
  ]
};

const SystemDesignPage = () => {
  return (
    <PremiumSlideTemplate>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">System Design</h2>
        <p className="text-lg text-slate-500 text-center mb-12">System architecture and meticulously aligned UML diagrams detailing system interaction and structure.</p>
        
        <CodeArchitectureDiagram />
        <UMLClass title="Class Diagram" data={dataClassDiagram} />
        <UMLUseCase title="Global Use Case Diagram (Student & Instructor)" data={dataUC1} h={1000} />
        <UMLUseCase title="Global Use Case Diagram (Admin, Advisor, Agent)" data={dataUC2} h={1000} />
        <UMLActivityAuth />
        <UMLSequence title="Sequence Diagram (Chatbot)" data={dataSeqChatbot} />
        <UMLSequence title="Sequence Diagram (Alerts)" data={dataSeqAlerts} />
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   7. Used Technologies, Tools and Algorithms
   ========================================================================= */
const TechStackPage = () => {
  const categories = [
    { title: "System Analysis & Design", items: ["X-Mind", "Draw IO"] },
    { title: "UI/UX & Prototyping", items: ["Figma"] },
    { title: "Mobile Development", items: ["Flutter", "Dart", "Bloc (State Mgmt)", "Dio (API)", "Shared Preference"] },
    { title: "Artificial Intelligence", items: ["Model Provider: Open Router", "LLM Model: Google Gemma 2, Llama 3", "Orchestration: LangChain", "Vector DB: ChromaDB", "Scheduling Logic: Google OR-Tools"] },
    { title: "Back-End Architecture", items: ["SQL Server", "C#", "EF Core", "ASP.NET CORE", "Redis", "Visual Studio Community"] },
    { title: "Front-End Web", items: ["HTML / CSS / TypeScript", "Tailwind CSS", "React JS + Vite", "React Router + Data Router", "Zustand", "Axios"] },
  ];
  return (
    <PremiumSlideTemplate>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Technologies, Tools & Algorithms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-rafiq-primary-50 text-rafiq-primary-600 flex items-center justify-center shrink-0"><Cpu className="w-4 h-4"/></div>
                <h4 className="font-bold text-slate-900">{cat.title}</h4>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-rafiq-primary-400 mt-1">•</span> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   8. Time Plan
   ========================================================================= */
const TimePlanPage = () => {
  const plan = [
    { month: "October", tasks: "Problem Definition, Literature Review (Competitors' Study), Initial System Analysis." },
    { month: "November", tasks: "System Design formulation, UML Diagrams generation (Use Case, Sequence, Class, Activity)." },
    { month: "December", tasks: "UI/UX Prototyping (Figma), Database Schema Design, Technical Stack Setup." },
    { month: "January", tasks: "Backend (ASP.NET Core) API Development, Initial Mobile & Frontend Environment structuring." },
    { month: "February", tasks: "AI Algorithms Implementation (RAG Chatbot setup, Google OR-Tools Scheduling Logic)." },
    { month: "March", tasks: "Frontend Web (React/Zustand) and Mobile (Flutter/Bloc) components building." },
    { month: "April", tasks: "System Integration (Connecting APIs, AI Models, Web, and Mobile environments)." },
    { month: "May", tasks: "Quality Assurance, Bug Fixing, System Performance Audits (Lighthouse)." },
    { month: "June", tasks: "Final Presentation Preparation, Documentation finalization, Delivery of Running Project." },
  ];
  return (
    <PremiumSlideTemplate>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Time Plan</h2>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#0C3C7D] text-white">
              <tr>
                <th className="px-6 py-5 font-semibold border-r border-white/10 w-1/4">Month</th>
                <th className="px-6 py-5 font-semibold">Tasks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {plan.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-rafiq-primary-600 border-r border-slate-100 bg-slate-50/30">{row.month}</td>
                  <td className="px-6 py-4 text-slate-700 leading-relaxed">{row.tasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   9. Team Roles
   ========================================================================= */
const TeamRolesPage = () => {
  const teamRoles = [
    { member: "Fatma Mohamed Abu Elfadl", tasks: "Frontend Web Implementation & Semantic Layouts" },
    { member: "Habiba Mohamed Mamdouh", tasks: "Mobile App Implementation (Flutter & Provider)" },
    { member: "Mariam Mohamed Khalil", tasks: "System Analysis, Requirements Definition & Documentation" },
    { member: "Nour Ahmed Zewita", tasks: "Backend Implementation (ASP.NET Core & Auth)" },
    { member: "Nouran Mohamed Amin", tasks: "UI/UX Design, Wireframing & Prototyping (Figma)" },
    { member: "Shahd Makkawy Ibrahim", tasks: "Frontend Web Optimization & API Integration" },
    { member: "Ahmed Abd Alalim Tawfiq", tasks: "Mobile App State Management & HTTP Communication" },
    { member: "Kamel Mohamed Abdulla", tasks: "AI Integrations (RAG, Recommendation Engine) & Core Backend" },
    { member: "Moaz Mostafa Zehry", tasks: "Database Schema Management & Unit of Work Layer" },
    { member: "Mohamed Saber Ahmed", tasks: "Quality Assurance, Security Architecture & Testing" },
  ];
  return (
    <PremiumSlideTemplate>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Team Roles</h2>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#0C3C7D] text-white">
              <tr>
                <th className="px-6 py-5 font-semibold border-r border-white/10 w-1/3">Team Member</th>
                <th className="px-6 py-5 font-semibold">Tasks / Responsibilities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {teamRoles.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-semibold text-slate-800 border-r border-slate-100">{row.member}</td>
                  <td className="px-6 py-4 text-slate-600">{row.tasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   10. References
   ========================================================================= */
const ReferencesPage = () => {
  const references = [
    "I. Sommerville, Software Engineering, 10th ed. Boston, MA, USA: Pearson, 2016.",
    "S. Russell and P. Norvig, Artificial Intelligence: A Modern Approach, 4th ed. Hoboken, NJ, USA: Pearson, 2021.",
    "M. Fowler, Patterns of Enterprise Application Architecture. Boston, MA, USA: Addison-Wesley, 2002.",
    "LangChain Documentation. Available: https://python.langchain.com/.",
    "ChromaDB Documentation. Available: https://www.trychroma.com/.",
    "OpenRouter Documentation. Available: https://openrouter.ai/docs.",
    "Google Gemma Documentation. Available: https://ai.google.dev/gemma.",
    "ASP.NET Core Documentation. Available: https://learn.microsoft.com/aspnet/core.",
    "Flutter Documentation. Available: https://docs.flutter.dev/.",
    "Microsoft Entity Framework Core Documentation. Available: https://learn.microsoft.com/ef/core."
  ];
  return (
    <PremiumSlideTemplate>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">References</h2>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60">
          <ul className="space-y-4 text-sm text-slate-700 leading-relaxed">
            {references.map((ref, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-rafiq-primary-500 font-bold mt-0.5">•</span><span>{ref}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   THE MASTER APP CONTROLLER
   ========================================================================= */
export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  if (currentPage === 'landing') {
    return (
      <main className="min-h-screen w-full bg-white">
        <HeroSection onStartPresentation={() => setCurrentPage('problem')} />
      </main>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 font-sans">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onRevert={() => setCurrentPage('landing')} 
      />
      {currentPage === 'problem' && <ProblemOverviewPage />}
      {currentPage === 'goals' && <ProjectGoalsPage />}
      {currentPage === 'bmc' && <BusinessModelCanvasPage />}
      {currentPage === 'previous-work' && <PreviousWorkPage />}
      {currentPage === 'running-project' && <RunningProjectPage />}
      {currentPage === 'system-design' && <SystemDesignPage />}
      {currentPage === 'tech-stack' && <TechStackPage />}
      {currentPage === 'time-plan' && <TimePlanPage />}
      {currentPage === 'team-roles' && <TeamRolesPage />}
      {currentPage === 'references' && <ReferencesPage />}
    </div>
  );
}
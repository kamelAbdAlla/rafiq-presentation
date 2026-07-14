import { useState, useEffect } from 'react';
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
  Monitor, BrainCircuit, ArrowRightLeft, ArrowRight, Clock, Maximize, Minimize
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
   1. Problem Overview (Bar Chart)
   ========================================================================= */
const ProblemOverviewPage = () => {
  const data = [
    { label: "Regulation Confusion", value: 85 },
    { label: "Prerequisite Confusion", value: 25 },
    { label: "Lack of Advising", value: 50 },
    { label: "Need For Smart System", value: 85 }
  ];

  return (
    <PremiumSlideTemplate>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Problem Overview</h2>
        <p className="text-lg text-slate-500 text-center mb-12">Statistical insights highlighting the growing need for an intelligent academic management platform.</p>
        
        <div className="bg-white p-8 pt-12 rounded-3xl shadow-sm border border-slate-200/60 w-full overflow-x-auto">
          <svg viewBox="0 0 1000 600" className="w-full h-auto font-sans">
            {/* Grid lines and Y-axis labels */}
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((val, i) => {
              const y = 500 - (val * 5); // 1 unit = 5px height
              return (
                <g key={i}>
                  <line x1="60" y1={y} x2="960" y2={y} stroke={val === 0 ? "#94A3B8" : "#E2E8F0"} strokeWidth={val === 0 ? "2" : "1"} />
                  <text x="45" y={y + 5} textAnchor="end" fontSize="15" fill="#64748B">{val}</text>
                </g>
              );
            })}

            {/* Bars */}
            {data.map((bar, i) => {
              const barWidth = 170;
              const spacing = (900 - (4 * barWidth)) / 5; // dynamically space out the 4 bars
              const startX = 60;
              const x = startX + spacing + (i * (barWidth + spacing));
              const height = bar.value * 5;
              const y = 500 - height;
              
              return (
                <g key={i}>
                  {/* Bar shape with slight rounded top corners */}
                  <path 
                    d={`M ${x} 500 V ${y + 8} Q ${x} ${y} ${x + 8} ${y} H ${x + barWidth - 8} Q ${x + barWidth} ${y} ${x + barWidth} ${y + 8} V 500 Z`} 
                    fill="#0B2A4A" 
                  />
                  
                  {/* Value Text */}
                  <text x={x + barWidth / 2} y={y + 45} textAnchor="middle" fontSize="34" fontWeight="bold" fill="#FFFFFF">{bar.value}</text>
                  
                  {/* X-Axis Label */}
                  <text x={x + barWidth / 2} y="535" textAnchor="middle" fontSize="14" fontWeight="500" fill="#334155">{bar.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   2. Project Goals (Solutions)
   ========================================================================= */
const ProjectGoalsPage = () => {
  const goals = [
    <>Develop a <strong>Smart Academic Management System</strong> powered by data analytics and <strong>AI-driven recommendations</strong>.</>,
    <>Provide an integrated platform to <strong>monitor academic performance</strong> and <strong>track GPA progression</strong> accurately.</>,
    <>Enable <strong>seamless course enrollment</strong> while automatically <strong>validating prerequisites</strong> and <strong>scheduling conflicts</strong>.</>,
    <>Introduce an <strong>intelligent chatbot (Rafiq)</strong> to serve as a <strong>24/7 academic advising companion</strong>.</>,
    <>Support <strong>early-warning and risk detection</strong> to alert students of potential academic standing issues.</>,
    <>Provide a dedicated <strong>Smart Advisor Portal</strong> for human advisors to monitor and <strong>assist at-risk students</strong>.</>,
    <>Ensure <strong>secure integration</strong> and data exchange with existing <strong>university systems (e.g., Ibn Al-Haitham)</strong>.</>,
    <>Enhance overall <strong>student learning outcomes</strong> and improve the <strong>institutional graduation rate</strong>.</>,
  ];

  return (
    <PremiumSlideTemplate>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Solutions</h2>
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
   4. Related Work (Competitors' Study)
   ========================================================================= */
const PreviousWorkPage = () => {
  const check = <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />;
  const cross = <XCircle className="w-5 h-5 text-red-400 mx-auto" />;

  return (
    <PremiumSlideTemplate>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Related Work</h2>
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
   UNIVERSAL MULTI-TEXT COMPONENT
   ========================================================================= */
const MultiText = ({ x, y, text, fontSize=12, fill="#0F172A", fontWeight="normal" }: any) => {
  const lines = typeof text === 'string' ? text.split(/\\n|\n/) : [];
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={fontSize} fontWeight={fontWeight} fill={fill}>
      {lines.map((l: string, i: number) => (
        <tspan x={x} dy={i === 0 ? `-${(lines.length - 1) * 0.5}em` : "1.2em"} key={i}>{l}</tspan>
      ))}
    </text>
  );
};

/* =========================================================================
   5. Chatbot Page (Detailed Chatbot Architecture & Flow)
   ========================================================================= */
const ChatbotPage = () => {
  const FlowNode = ({x, y, text, w=120, h=46, fontSize=11}:any) => (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={w} height={h} rx="6" fill="#ffffff" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#shadow-sm)" />
      <MultiText x={w/2} y={h/2} text={text} fontSize={fontSize} fill="#334155" fontWeight="bold" />
    </g>
  );

  return (
    <PremiumSlideTemplate>
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section 1: Intro */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">AI Chatbot (Rafiq)</h2>
            <p className="text-xl text-slate-500 font-medium">RAG-Based Academic Regulations Assistant</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><Target className="w-5 h-5"/></div>
                <h3 className="text-2xl font-bold text-slate-800">Objective</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"/>
                  <span className="text-slate-600">Answer students' questions about AI program regulations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"/>
                  <span className="text-slate-600">Reduce hallucinations using Retrieval-Augmented Generation (RAG).</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><Sparkles className="w-5 h-5"/></div>
                <h3 className="text-2xl font-bold text-slate-800">Key Features</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"/>
                  <span className="text-slate-600">Official regulations as the knowledge source.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"/>
                  <span className="text-slate-600">Supports Egyptian Arabic.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"/>
                  <span className="text-slate-600">Article-based answers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"/>
                  <span className="text-slate-600">Multi-turn conversations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Architecture & Tools */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Chatbot System Architecture</h3>
          <div className="flex flex-col xl:flex-row gap-8 items-stretch justify-center">
            
            <div className="flex-1 max-w-[1000px] flex items-center justify-center bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 overflow-x-auto">
              <svg viewBox="0 0 1300 320" className="w-full h-auto font-sans">
                <defs>
                  <filter id="shadow-sm" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.05" floodColor="#000000" />
                  </filter>
                  <marker id="arrow-chatbot" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="#475569" />
                  </marker>
                </defs>

                {/* Offline Phase Box */}
                <rect x="20" y="190" width="540" height="120" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="2" rx="12" />
                <text x="40" y="215" fontSize="13" fill="#0369A1" fontWeight="bold">Offline Indexing Phase</text>
                
                {/* Online Phase Box */}
                <rect x="250" y="10" width="1040" height="160" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="2" rx="12" />
                <text x="270" y="30" fontSize="13" fill="#B45309" fontWeight="bold">Online Query Phase</text>

                {/* Offline Connectors */}
                <line x1="150" y1="263" x2="180" y2="263" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                <line x1="300" y1="263" x2="330" y2="263" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                <line x1="450" y1="263" x2="480" y2="263" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />

                {/* Offline Nodes */}
                <FlowNode x={30} y={240} text="AI Regulations JSON" fontSize={10} />
                <FlowNode x={180} y={240} text="LangChain Documents" fontSize={10} />
                <FlowNode x={330} y={240} text="BAAI/bge-m3\nEmbeddings" fontSize={10} />
                
                {/* Chroma DB Custom Node */}
                <g transform="translate(480, 233)">
                  <path d="M 0 15 C 0 5, 70 5, 70 15 V 45 C 70 55, 0 55, 0 45 Z" fill="#ffffff" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#shadow-sm)" />
                  <ellipse cx="35" cy="15" rx="35" ry="10" fill="#ffffff" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="35" y="35" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="bold" fill="#334155">ChromaDB</text>
                </g>

                {/* Online Connectors */}
                <line x1="400" y1="58" x2="430" y2="58" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                <line x1="550" y1="58" x2="580" y2="58" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                <line x1="700" y1="58" x2="730" y2="58" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                <line x1="850" y1="58" x2="880" y2="58" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                
                {/* Only ONE straight connector to Gemma */}
                <line x1="1000" y1="58" x2="1030" y2="58" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                
                {/* API Failure Branch (Gemma -> Groq) */}
                <line x1="1090" y1="81" x2="1090" y2="115" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                <rect x="1060" y="89" width="60" height="18" fill="#F1F5F9" rx="4" />
                <text x="1090" y="98" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#EF4444" fontWeight="bold">API Failure</text>

                {/* Branching from Gemma/Groq to Final AI Response */}
                <path d="M 1150 58 C 1170 58, 1170 98, 1190 98" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />
                <path d="M 1150 138 C 1170 138, 1170 98, 1190 98" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow-chatbot)" />

                {/* Cross-phase Connector (ChromaDB to Similarity Search) */}
                <path d="M 515 233 C 515 150, 640 150, 640 81" fill="none" stroke="#0369A1" strokeWidth="2" markerEnd="url(#arrow-chatbot)" strokeDasharray="4,4" />

                {/* Online Nodes */}
                <FlowNode x={280} y={35} text="Student Question" fontSize={10} />
                <FlowNode x={430} y={35} text="Query Embedding" fontSize={10} />
                <FlowNode x={580} y={35} text="Top-3 Similarity\nSearch" fontSize={10} />
                <FlowNode x={730} y={35} text="Retrieved Articles" fontSize={10} />
                <FlowNode x={880} y={35} text="Prompt + Context\n+ History" fontSize={10} />
                
                <FlowNode x={1030} y={35} text="Gemma (OpenRouter)" fontSize={10} />
                <FlowNode x={1030} y={115} text="Groq (Fallback)" fontSize={10} />
                
                {/* Final Response Bubble */}
                <g transform="translate(1190, 75)">
                  <rect width="90" height="46" rx="23" fill="#ffffff" stroke="#10B981" strokeWidth="2" filter="url(#shadow-sm)" />
                  <MultiText x={45} y={23} text="AI Response" fontSize={11} fill="#047857" fontWeight="bold" />
                </g>
              </svg>
            </div>

            <div className="w-full xl:w-72 shrink-0 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 self-center">
              <h4 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Tech Stack</h4>
              <div className="flex flex-col gap-3">
                {['LangChain', 'BAAI/bge-m3', 'ChromaDB', 'Gemma', 'OpenRouter', 'Groq'].map((tool, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600">
                      <Layers className="w-4 h-4"/>
                    </div>
                    <span className="font-semibold text-sm text-slate-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Why This Architecture */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Why This Architecture?</h3>
          <div className="grid md:grid-cols-5 gap-8">
            
            <div className="md:col-span-3 bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
              <table className="w-full text-sm text-center">
                <thead className="bg-[#0C3C7D] text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-right border-r border-white/10 w-1/2">Challenge</th>
                    <th className="px-6 py-4 font-semibold text-left">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-base">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-500 text-right border-r border-slate-100">Hallucination</td>
                    <td className="px-6 py-4 font-bold text-slate-800 text-left">RAG</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-500 text-right border-r border-slate-100">Arabic & English</td>
                    <td className="px-6 py-4 font-bold text-slate-800 text-left">BAAI/bge-m3</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-500 text-right border-r border-slate-100">Fast Search</td>
                    <td className="px-6 py-4 font-bold text-slate-800 text-left">ChromaDB</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-500 text-right border-r border-slate-100">API Failure</td>
                    <td className="px-6 py-4 font-bold text-slate-800 text-left">OpenRouter + Groq</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-500 text-right border-r border-slate-100">Follow-up Questions</td>
                    <td className="px-6 py-4 font-bold text-slate-800 text-left">Conversation Memory</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="md:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200/60 p-8 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-slate-800 mb-6 text-center">Advantages</h4>
              <ul className="space-y-4 max-w-sm mx-auto w-full">
                {['Accurate Responses', 'Grounded on Official Regulations', 'Article Citation', 'Fast Retrieval', 'Reliable System'].map((adv, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-slate-700 font-medium">{adv}</span>
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   6. Smart Timetable Generator Page
   ========================================================================= */
const SmartTimetablePage = () => {
  return (
    <PremiumSlideTemplate>
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header & CSP Intro */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Smart Timetable Generator</h2>
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl inline-block max-w-4xl mx-auto shadow-sm">
            <p className="text-lg text-blue-900 leading-relaxed">
              Modeling schedule generation as a <strong>Constraint Satisfaction Problem (CSP)</strong>. Using Google OR-Tools, the engine efficiently searches through all possible combinations to find the <strong>optimal timetable</strong> while satisfying all academic rules.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column: Constraints */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-rafiq-primary-500" />
              Key Constraints Applied
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <Target className="w-4 h-4 text-slate-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Single Section</h4>
                <p className="text-sm text-slate-600">Selecting <strong>exactly one section</strong> for each enrolled course.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <Code2 className="w-4 h-4 text-slate-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Conflict Prevention</h4>
                <p className="text-sm text-slate-600">Preventing <strong>any time conflicts</strong> between lectures and sections.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <Users2 className="w-4 h-4 text-slate-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Capacity Check</h4>
                <p className="text-sm text-slate-600">Ignoring <strong>full sections</strong> that have no available seats.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4 text-slate-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Buffer Time</h4>
                <p className="text-sm text-slate-600">Supporting a preferred <strong>buffer time</strong> between consecutive classes.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Modes & Delivery */}
          <div className="space-y-6 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-500" />
              Optimization Modes
            </h3>

            <div className="flex-1 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                  <Maximize className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Balance Mode</h4>
                  <p className="text-slate-600 text-sm mt-1">Distributes the academic workload more <strong>evenly across the week</strong>, avoiding overwhelmingly heavy days.</p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-1">
                  <Minimize className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Compact Mode</h4>
                  <p className="text-slate-600 text-sm mt-1">Groups classes together to <strong>minimize the number of study days</strong> on campus.</p>
                </div>
              </div>

            </div>

            {/* Delivery Banner */}
            <div className="bg-slate-900 p-5 rounded-2xl flex items-center gap-4 text-white shadow-lg">
              <Server className="w-8 h-8 text-emerald-400 shrink-0" />
              <p className="text-sm font-medium leading-relaxed text-slate-300">
                The optimal schedule is generated and returned as structured <strong className="text-white">JSON</strong> through a <strong className="text-emerald-400">FastAPI</strong> endpoint for seamless mobile integration.
              </p>
            </div>

          </div>

        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   7. Recommendation System Page 
   ========================================================================= */
const RecommendationSystemPage = () => {
  return (
    <PremiumSlideTemplate>
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">Wanees Engine</h2>
          <p className="text-xl text-slate-500 font-medium">Recommendation System Architecture</p>
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-start">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4"><AlertTriangle className="w-5 h-5" /></div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">The Problem</h3>
            <p className="text-slate-600 leading-relaxed">
              Students struggle to select elective courses that align with their demonstrated strengths and academic progression.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-start">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4"><Sparkles className="w-5 h-5" /></div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">The Solution</h3>
            <p className="text-slate-600 leading-relaxed">
              A "Hybrid Decision Engine" providing personalized, constraint-guided course recommendations — hybrid similarity plus hard academic rules.
            </p>
          </div>
        </div>

        {/* Core Stack */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Core Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/60 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <Brain className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Scikit-Learn</h4>
              <p className="text-xs text-slate-500">StandardScaler + NearestNeighbors (Cosine)</p>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/60 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">FastAPI</h4>
              <p className="text-xs text-slate-500">Async endpoints, TTLCache, /retrain hook</p>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/60 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Database className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Pandas / NumPy</h4>
              <p className="text-xs text-slate-500">Track feature engineering and statistical preprocessing</p>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/60 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Package className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">joblib</h4>
              <p className="text-xs text-slate-500">Model artifact serialization (.pkl)</p>
            </div>

          </div>
        </div>

        {/* Hybrid Architecture Weights */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Hybrid Architecture</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex-1 bg-white p-8 rounded-3xl border-t-4 border-t-blue-500 shadow-sm flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-blue-500 mb-2">45%</span>
              <span className="text-sm font-bold text-slate-600 tracking-wider">CONTENT SIMILARITY</span>
            </div>
            <div className="flex-1 bg-white p-8 rounded-3xl border-t-4 border-t-indigo-500 shadow-sm flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-indigo-500 mb-2">30%</span>
              <span className="text-sm font-bold text-slate-600 tracking-wider">COLLABORATIVE FILTERING</span>
            </div>
            <div className="flex-1 bg-white p-8 rounded-3xl border-t-4 border-t-teal-500 shadow-sm flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-teal-500 mb-2">25%</span>
              <span className="text-sm font-bold text-slate-600 tracking-wider">STUDENT GPA FACTOR</span>
            </div>
          </div>
        </div>

        {/* Layered Inference Pipeline & Weights */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
             <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Layered Inference Pipeline</h3>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-800 text-white font-bold rounded-xl flex items-center justify-center">01</div>
            <h4 className="font-bold text-slate-900 text-lg mb-3 mt-2">Track Prediction</h4>
            <p className="text-sm text-slate-600">Softmax (T=2.0) probabilities across 6 tracks, with Sigmoid-calibrated confidence capped at 96.5% to avoid overconfidence.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-800 text-white font-bold rounded-xl flex items-center justify-center">02</div>
            <h4 className="font-bold text-slate-900 text-lg mb-3 mt-2">Neighborhood Matching</h4>
            <p className="text-sm text-slate-600">K-Nearest Neighbors (K ≤ 6, adaptive to cohort size) with Cosine metric on scaled track vectors.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-800 text-white font-bold rounded-xl flex items-center justify-center">03</div>
            <h4 className="font-bold text-slate-900 text-lg mb-3 mt-2">Hybrid Scoring</h4>
            <p className="text-sm text-slate-600">Weighted fusion of content alignment, collaborative insight, and academic performance.</p>
          </div>
          
          <div className="lg:col-span-3 flex flex-wrap justify-center gap-4 mt-2">
            <div className="bg-green-50 px-6 py-3 rounded-full border border-green-200 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-slate-700">IN-TRACK WEIGHT ADJUSTMENT</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">×1.3</span>
            </div>
            <div className="bg-red-50 px-6 py-3 rounded-full border border-red-200 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-red-600 transform scale-y-[-1]" />
              <span className="text-sm font-bold text-slate-700">OFF-TRACK WEIGHT ADJUSTMENT</span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">×0.7</span>
            </div>
          </div>
        </div>

        {/* Processing Pipeline */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
             <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Processing Pipeline</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xl text-slate-400 mb-4">01</div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide">Data Ingestion</h4>
            <p className="text-sm text-slate-600">Asynchronous fetching of student grades and catalog data from University APIs using FastAPI.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xl text-slate-400 mb-4">02</div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide">Vectorization</h4>
            <p className="text-sm text-slate-600">Real-time scaling of student performance metrics using the pre-trained StandardScaler for feature alignment.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xl text-slate-400 mb-4">03</div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wide">Confidence Calibration</h4>
            <p className="text-sm text-slate-600">Sigmoid layer converts the confidence gap between top tracks into a calibrated, capped confidence score.</p>
          </div>
        </div>

        {/* Track-Closeness Diversity Selection */}
        <div className="bg-[#0B2A4A] p-8 rounded-3xl shadow-lg flex items-center gap-6 text-white">
          <div className="bg-white/10 p-4 rounded-2xl shrink-0">
            <Route className="w-10 h-10 text-blue-200" />
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2 text-white">TRACK-CLOSENESS DIVERSITY SELECTION</h4>
            <p className="text-blue-100/80 leading-relaxed text-sm">
              Traverses a per-track priority list (RELATED_TRACKS) outward from the dominant track, selecting the highest-ranked eligible course — academic closeness now outranks raw score for picks #2 and #3.
            </p>
          </div>
        </div>

        {/* Evaluation & Dataset Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">EVALUATION & RELIABILITY</p>
                <h4 className="font-bold text-slate-900">MAX CALIBRATED CONFIDENCE</h4>
              </div>
              <span className="text-4xl font-bold text-emerald-500">96.5%</span>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">EVALUATION & RELIABILITY</p>
                <h4 className="font-bold text-slate-900">TRAIN / INFERENCE FEATURE MATCH</h4>
              </div>
              <span className="text-4xl font-bold text-emerald-500">100%</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2"><Database className="w-4 h-4 text-slate-400"/> DATASET OVERVIEW</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Track vectors are built from student profiles ingested via the live University API — the current model artifact is fit on 1,000 student records across 6 academic tracks and diverse course categories.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2"><TestTube2 className="w-4 h-4 text-slate-400"/> EVALUATION APPROACH</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wanees is a ranking engine, not a classifier — evaluated on latency, calibration, and train/inference consistency rather than accuracy or recall.
              </p>
            </div>
          </div>
        </div>

        {/* Latency Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">RESPONSE LATENCY BY SCENARIO (MS)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 border-b border-emerald-100 pb-3">
                <Check className="w-6 h-6 text-emerald-600" />
                <h4 className="font-bold text-emerald-900 text-lg">Cache Hit</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Served directly from TTL Cache
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 border-b border-amber-100 pb-3">
                <X className="w-6 h-6 text-amber-600" />
                <h4 className="font-bold text-amber-900 text-lg">Cache Miss</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-amber-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Fetch student data
                </li>
                <li className="flex items-center gap-2 text-sm text-amber-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Hybrid recommendation
                </li>
                <li className="flex items-center gap-2 text-sm text-amber-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Store in TTL Cache
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   8. Backend Page (Clean Architecture Onion Diagram)
   ========================================================================= */
const BackendPage = () => {
  const OnionCard = ({ y, color, title, l1, l2, l3 }: any) => (
    <g transform={`translate(640, ${y})`}>
      <rect x="0" y="0" width="280" height={l3 ? 85 : 70} rx="8" fill="#FFFFFF" filter="url(#card-shadow)" />
      <rect x="0" y="0" width="8" height={l3 ? 85 : 70} rx="4" fill={color} />
      <rect x="4" y="0" width="4" height={l3 ? 85 : 70} fill={color} /> {/* Sharp inner corner */}
      <text x="22" y="26" fontFamily="Georgia, serif" fontSize="20" fontWeight="bold" fill="#2C3338">{title}</text>
      <text x="22" y="46" fontFamily="sans-serif" fontSize="12" fill="#6B7280">{l1}</text>
      <text x="22" y="62" fontFamily="sans-serif" fontSize="12" fill="#6B7280">{l2}</text>
      {l3 && <text x="22" y="78" fontFamily="sans-serif" fontSize="12" fill="#6B7280">{l3}</text>}
    </g>
  );

  return (
    <PremiumSlideTemplate>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center">Backend Architecture</h2>
        <p className="text-lg text-slate-500 text-center mb-10 max-w-3xl mx-auto">
          Built on .NET 8 using standard Clean Architecture principles ensuring separation of concerns, scalability, and independent testing.
        </p>
        
        <div className="w-full bg-[#F4F1EA] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/60 p-4">
          <svg viewBox="0 0 1000 800" className="w-full h-auto font-sans">
            <defs>
              <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.06" floodColor="#000000" />
              </filter>
              <marker id="black-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 Z" fill="#2C3338" />
              </marker>
              {/* Radial Gradients to match the rich 3D onion effect */}
              <radialGradient id="gradRed" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#DE646F"/>
                <stop offset="100%" stopColor="#C64A53"/>
              </radialGradient>
              <radialGradient id="gradOrange" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#EAB058"/>
                <stop offset="100%" stopColor="#D48E33"/>
              </radialGradient>
              <radialGradient id="gradYellow" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#E6CA5B"/>
                <stop offset="100%" stopColor="#CFAB36"/>
              </radialGradient>
              <radialGradient id="gradBlue" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#75AFFF"/>
                <stop offset="100%" stopColor="#4A88D9"/>
              </radialGradient>
              <radialGradient id="gradGreen" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#A2D679"/>
                <stop offset="100%" stopColor="#74B445"/>
              </radialGradient>
              <radialGradient id="gradCore" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#96353B"/>
                <stop offset="100%" stopColor="#6C1E21"/>
              </radialGradient>
            </defs>

            {/* Background & Header */}
            <rect width="100%" height="100%" fill="#F4F1EA" rx="16" />
            <text x="40" y="65" fontFamily="Georgia, serif" fontSize="34" fontWeight="bold" fill="#2C3439">Rafeek — clean architecture</text>
            <text x="40" y="90" fontFamily="sans-serif" fontSize="13" fill="#888C90">.NET 8 academic management system · onion layers, dependencies flow inward</text>
            <line x1="40" y1="110" x2="960" y2="110" stroke="#E2DCD0" strokeWidth="1.5" />

            {/* Circles (Center: 350, 420) */}
            <circle cx="350" cy="420" r="280" fill="url(#gradRed)" stroke="#B9454E" strokeWidth="1" />
            <circle cx="350" cy="420" r="220" fill="url(#gradOrange)" stroke="#C3812E" strokeWidth="1" />
            <circle cx="350" cy="420" r="160" fill="url(#gradYellow)" stroke="#BC9B2E" strokeWidth="1" />
            <circle cx="350" cy="420" r="100" fill="url(#gradBlue)" stroke="#3E7BCA" strokeWidth="1" />
            <circle cx="350" cy="420" r="45" fill="url(#gradGreen)" stroke="#67A53A" strokeWidth="1" />
            <circle cx="350" cy="420" r="14" fill="url(#gradCore)" />

            {/* Glossy Reflection Sweeps (White Overlays) */}
            <path d="M 120 280 C 180 160, 290 140, 450 180" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" opacity="0.15" />
            <path d="M 140 300 C 190 180, 280 160, 420 200" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
            <path d="M 160 320 C 200 200, 270 180, 390 220" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

            {/* Colored Connector Lines (Straight) */}
            <line x1="330" y1="141" x2="640" y2="155" stroke="#D75A65" strokeWidth="1.5" />
            <line x1="330" y1="201" x2="640" y2="275" stroke="#DF9E46" strokeWidth="1.5" />
            <line x1="330" y1="261" x2="640" y2="385" stroke="#D5B345" strokeWidth="1.5" />
            <line x1="330" y1="322" x2="640" y2="497" stroke="#5390E5" strokeWidth="1.5" />
            <line x1="330" y1="380" x2="640" y2="615" stroke="#84C15A" strokeWidth="1.5" />



            {/* Information Cards (Legend/Details) */}
            <OnionCard y={120} color="#D75A65" title="Rafeek.API" l1="Controllers, middleware" l2="JWT auth, routing" />
            <OnionCard y={240} color="#DF9E46" title="Rafeek.Infrastructure" l1="Repositories, Identity" l2="Email, AI client, validators" />
            <OnionCard y={350} color="#D5B345" title="Rafeek.Persistence" l1="DbContexts, migrations" l2="Seeder (Bogus, idempotent)" />
            <OnionCard y={455} color="#5390E5" title="Rafeek.Application" l1="CQRS/MediatR, DTOs" l2="Validators, AutoMapper" l3="Localization (ar/en)" />
            <OnionCard y={580} color="#84C15A" title="Rafeek.Domain" l1="Entities, enums" l2="BaseEntity, repo interfaces" />

            {/* Footer Elements */}
            <line x1="40" y1="740" x2="960" y2="740" stroke="#E2DCD0" strokeWidth="1.5" />
            
            <g transform="translate(40, 765)" fontFamily="sans-serif" fontSize="12" fill="#6B7280">
              <circle cx="10" cy="-4" r="7" fill="#D75A65" />
              <text x="25" y="0">API — outermost</text>
              
              <circle cx="150" cy="-4" r="7" fill="#DF9E46" />
              <text x="165" y="0">Infrastructure</text>
              
              <circle cx="280" cy="-4" r="7" fill="#D5B345" />
              <text x="295" y="0">Persistence</text>
              
              <circle cx="390" cy="-4" r="7" fill="#5390E5" />
              <text x="405" y="0">Application</text>
              
              <circle cx="510" cy="-4" r="7" fill="#84C15A" />
              <text x="525" y="0">Domain — innermost</text>
            </g>

            <text x="40" y="790" fontFamily="Georgia, serif" fontStyle="italic" fontSize="13" fill="#888C90">
              Dependencies flow inward, ring by ring, toward Domain at the center.
            </text>
          </svg>
        </div>
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   9. Frontend & Dashboard UI Page
   ========================================================================= */
const FrontendPage = () => {
  // Chart Data for Framework Popularity (Updated to exactly match the provided image)
  const frameworks = [
    { name: 'Node.js', value: 40.8 },
    { name: 'React', value: 39.5, highlight: true },
    { name: 'jQuery', value: 21.4 },
    { name: 'Next.js', value: 17.9 },
    { name: 'Express', value: 17.8 },
    { name: 'Angular', value: 17.1 },
    { name: 'ASP.NET CORE', value: 16.9 },
    { name: 'Vue.js', value: 15.4 },
    { name: 'ASP.NET', value: 12.9 },
    { name: 'Flask', value: 12.9 },
    { name: 'Spring Boot', value: 12.7 },
    { name: 'Django', value: 12.0 },
    { name: 'WordPress', value: 11.8 },
  ];

  // Circular Gauge Component for Lighthouse
  const CircularGauge = ({ score, label, colorClass }: any) => {
    const radius = 32;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;
    const isGreen = score >= 90;
    const color = isGreen ? '#0CCE6B' : '#FFA400';

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="40" cy="40" r={radius} stroke="#F1F5F9" strokeWidth="6" fill="none" />
            <circle 
              cx="40" cy="40" r={radius} 
              stroke={color} 
              strokeWidth="6" 
              fill="none" 
              strokeDasharray={circumference} 
              strokeDashoffset={strokeDashoffset} 
              strokeLinecap="round" 
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className={`absolute inset-0 flex items-center justify-center font-bold text-xl ${isGreen ? 'text-emerald-500' : 'text-amber-500'}`}>
            {score}
          </div>
        </div>
        <span className="text-xs text-slate-600 mt-2 font-medium">{label}</span>
      </div>
    );
  };

  return (
    <PremiumSlideTemplate>
      <div className="max-w-7xl mx-auto space-y-20">
        
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">Frontend Architecture & UI</h2>
          <p className="text-xl text-slate-500 font-medium">Cross-platform integration, responsive dashboards, and modern web frameworks.</p>
        </div>

        {/* Section 1: Tech Stack Logos & Framework Popularity */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3">
              <Layers className="w-6 h-6 text-indigo-500" />
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Tech Badges to simulate logos */}
              <span className="px-5 py-2.5 bg-orange-100 text-orange-700 font-bold rounded-xl border border-orange-200 shadow-sm text-sm">HTML5</span>
              <span className="px-5 py-2.5 bg-blue-100 text-blue-700 font-bold rounded-xl border border-blue-200 shadow-sm text-sm">CSS3</span>
              <span className="px-5 py-2.5 bg-teal-100 text-teal-700 font-bold rounded-xl border border-teal-200 shadow-sm text-sm">Tailwind CSS</span>
              <span className="px-5 py-2.5 bg-blue-50 text-blue-800 font-bold rounded-xl border border-blue-300 shadow-sm text-sm">TypeScript</span>
              <span className="px-5 py-2.5 bg-cyan-100 text-cyan-700 font-bold rounded-xl border border-cyan-200 shadow-sm text-sm">React</span>
              <span className="px-5 py-2.5 bg-purple-100 text-purple-700 font-bold rounded-xl border border-purple-200 shadow-sm text-sm">Vite</span>
              <span className="px-5 py-2.5 bg-red-50 text-red-700 font-bold rounded-xl border border-red-200 shadow-sm text-sm">React Router</span>
              <span className="px-5 py-2.5 bg-amber-100 text-amber-800 font-bold rounded-xl border border-amber-300 shadow-sm text-sm">🐻 Zustand</span>
              <span className="px-5 py-2.5 bg-indigo-50 text-indigo-700 font-bold rounded-xl border border-indigo-200 shadow-sm text-sm">Axios</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 flex flex-col justify-center relative overflow-hidden">
            {/* Background pattern matching the slide */}
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <svg width="200" height="200" viewBox="0 0 100 100"><path d="M50 0 A50 50 0 1 1 50 100 A50 50 0 1 1 50 0" stroke="#000" strokeWidth="2" fill="none"/></svg>
            </div>
            
            <h3 className="text-sm font-bold text-slate-800 mb-6 text-center">Most used web frameworks among developers worldwide, as of 2024</h3>
            <div className="space-y-1.5 z-10 relative">
              {frameworks.map((f, i) => (
                <div key={i} className="flex items-center text-xs">
                  <span className={`w-32 text-right pr-3 ${f.highlight ? 'font-bold text-blue-600' : 'text-slate-600'}`}>{f.name}</span>
                  <div className="flex-1 bg-slate-100 h-5 rounded-r-md overflow-hidden flex items-center relative">
                    <div 
                      className={`h-full flex items-center justify-end pr-2 text-white text-[10px] font-bold ${f.highlight ? 'bg-blue-600' : 'bg-blue-400'}`} 
                      style={{width: `${f.value * 2.2}%`}} // scaled up for visual balance
                    >
                      {f.value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Section 2: Lighthouse Benchmarks */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60">
          <div className="flex items-center justify-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <Search className="w-5 h-5 text-emerald-500" />
            <h3 className="text-2xl font-bold text-slate-800">Diagnose performance issues</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
            <CircularGauge score={98} label="Performance" />
            <CircularGauge score={76} label="Accessibility" />
            <CircularGauge score={96} label="Best Practices" />
            <CircularGauge score={92} label="SEO" />
          </div>

          <div className="mt-12 text-center max-w-md mx-auto">
            <div className="relative inline-block">
              <svg width="140" height="140" viewBox="0 0 80 80" className="transform -rotate-90">
                <circle cx="40" cy="40" r="34" stroke="#F1F5F9" strokeWidth="6" fill="none" />
                <circle cx="40" cy="40" r="34" stroke="#0CCE6B" strokeWidth="6" fill="none" strokeDasharray={213} strokeDashoffset={213 - (98/100)*213} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-emerald-500">98</div>
            </div>
            <h4 className="text-xl font-bold text-slate-800 mt-2">Performance</h4>
            <p className="text-xs text-slate-400 mt-2">Values are estimated and may vary. The performance score is calculated directly from these metrics.</p>
          </div>
        </div>

        {/* Section 3: UI Dashboards */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Responsive User Interface</h3>
          <div className="grid md:grid-cols-4 gap-8 items-center">
            
            {/* Desktop View */}
            <div className="md:col-span-3 rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
              <div className="w-full bg-slate-100 rounded-t-xl h-8 flex items-center px-4 gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <img src="photo_2026-07-14_22-11-18.jpg" alt="Desktop Dashboard UI" className="w-full h-auto rounded-b-xl border border-slate-100" />
            </div>

            {/* Mobile View */}
            <div className="md:col-span-1 mx-auto max-w-[280px]">
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-slate-800 shadow-2xl relative bg-white">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-32 mx-auto z-10"></div> {/* Notch */}
                <img src="photo_2026-07-14_22-11-20.jpg" alt="Mobile Dashboard UI" className="w-full h-auto object-cover" />
              </div>
            </div>

          </div>
        </div>

        {/* Section 4: Hydration Error Handling */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Hydration State Management</h3>
          <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
            {/* Browser Header Mockup */}
            <div className="w-full bg-slate-100 rounded-t-xl h-8 flex items-center px-4 gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="flex-1 ml-4 bg-white/50 h-4 rounded-full"></div>
            </div>
            {/* 
               Hydration Image (Replace the src with your actual hydration image name if different) 
               The user was instructed to name the image 'hydration.jpg' in the project folder.
            */}
            <img src="hydration.jpg" alt="Hydration State Mismatch Error Handling" className="w-full h-auto rounded-b-xl border border-slate-100" />
          </div>
        </div>

      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   10. Running Project (Live Demo)
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
   11. System Design (Custom UML Render Engines)
   ========================================================================= */

// 1. PERFECTLY ALIGNED ARCHITECTURE DIAGRAM
const CodeArchitectureDiagram = () => (
  <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/60 overflow-x-auto mb-16">
    <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">System Architecture</h3>
    <svg viewBox="0 0 1150 500" className="w-full h-auto font-sans">
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
      <path d="M 160 85 C 220 85, 220 100, 280 100" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      <path d="M 160 85 C 220 85, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      <path d="M 160 185 C 220 185, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      <path d="M 160 285 C 220 285, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      <path d="M 160 385 C 220 385, 220 240, 280 240" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" />
      
      <line x1="460" y1="100" x2="560" y2="100" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
      <line x1="460" y1="240" x2="560" y2="240" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
      
      <line x1="820" y1="135" x2="900" y2="135" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
      <path d="M 820 280 C 860 280, 860 325, 900 325" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-blue)" markerStart="url(#arr-blue-rev)" />
    </svg>
  </div>
);

// 2. PERFECTLY ORTHOGONAL CLASS DIAGRAM
const UMLClass = ({ title, data }: any) => {
  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/60 overflow-x-auto mb-16">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">{title}</h3>
      <svg viewBox="0 0 1600 1100" className="w-full h-auto font-sans">
        <defs>
          <marker id="arr-class" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#000"/></marker>
          <marker id="arr-hollow" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto"><polygon points="0,0 12,6 0,12" fill="#fff" stroke="#000" strokeWidth="1.5"/></marker>
        </defs>
        
        {data.links.map((l:any, i:number) => (
          <g key={`l${i}`}>
            <path d={l.path} fill="none" stroke="#000" strokeWidth="1.5" strokeDasharray={l.d ? "6,6" : "none"} markerEnd={l.type === 'inherit' ? "url(#arr-hollow)" : (l.type === 'assoc' ? "url(#arr-class)" : "none")} />
            {l.l1 && <text x={l.tx1} y={l.ty1} fontSize="12" dominantBaseline="middle" fill="#000" fontWeight="bold">{l.l1}</text>}
            {l.l2 && <text x={l.tx2} y={l.ty2} fontSize="12" dominantBaseline="middle" fill="#000" fontWeight="bold">{l.l2}</text>}
          </g>
        ))}
        
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
    <svg viewBox="0 0 1200 1100" className="w-full h-auto font-sans bg-[#ffffe0]">
      <defs><marker id="arr-red" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#ff0000"/></marker></defs>
      
      {/* Node Helper */}
      <circle cx="600" cy="40" r="14" fill="#000" />
      <path d="M 600 54 V 80" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="520" y="80" width="160" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={600} y={103} text={"Authentication\nPhase"} fontSize="12" />
      <path d="M 600 126 V 160" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <rect x="520" y="160" width="160" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={600} y={183} text={"Enter Login\nCredentials"} fontSize="12" />
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
      <MultiText x={330} y={553} text={"Reminder of\nimportant events"} fontSize="11" />
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
      <MultiText x={630} y={625} text={"Only academic\nquestion"} fontSize="10" />
      
      <text x="520" y="665" dominantBaseline="middle" fontSize="12" fill="#000">yes</text>
      <path d="M 510 650 V 680" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="450" y="680" width="120" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={510} y={703} text="Answer question" fontSize="12" />
      <path d="M 510 726 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      {/* Col 4 */}
      <rect x="630" y="530" width="120" height="46" rx="23" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={690} y={553} text={"Performance\ntracker"} fontSize="12" />
      <path d="M 690 576 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      {/* Col 5 */}
      <rect x="740" y="580" width="90" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={785} y={603} text={"View courses\ndetails"} fontSize="11" />
      <path d="M 785 626 V 980" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <path d="M 870 530 V 555 H 910 V 580" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      <path d="M 870 530 V 555 H 785 V 580" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <rect x="860" y="580" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={603} text={"Enroll in\ncourses"} fontSize="11" />
      <path d="M 910 626 V 650" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="860" y="650" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={673} text={"Recommend\ncourses"} fontSize="11" />
      <path d="M 910 696 V 720" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <rect x="860" y="720" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={743} text={"Generate smart\ntable"} fontSize="11" />
      <path d="M 910 766 V 790" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <polygon points="910,790 940,815 910,840 880,815" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <text x="910" y="815" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold">suitable</text>
      
      {/* STRICT 90-DEGREE FEEDBACK LOOP FOR NO */}
      <text x="955" y="805" dominantBaseline="middle" fontSize="12" fill="#000">no</text>
      <path d="M 940 815 H 980 V 565 H 910 V 580" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />
      
      <text x="920" y="855" dominantBaseline="middle" fontSize="12" fill="#000">yes</text>
      <path d="M 910 840 V 870" fill="none" stroke="#ff0000" strokeWidth="2" markerEnd="url(#arr-red)" />

      <rect x="860" y="870" width="100" height="46" rx="20" fill="#ffff99" stroke="#ff0000" strokeWidth="2" />
      <MultiText x={910} y={893} text={"Save\nregistration"} fontSize="11" />
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
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto font-sans">
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
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto font-sans">
        <defs><marker id="arr-seq" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#000"/></marker></defs>
        {data.lifelines.map((l: string, i: number) => {
          const cx = i * colW + colW/2;
          return (
            <g key={i}>
              {l.includes("User") || l.includes("Actor") || l.includes("Student") ? (
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

const dataSeqSmartSchedule = {
  lifelines: ["Student", "UI", "AI Engine", "Database"],
  msgs: [
    { f: 0, t: 1, l: "Request Smart Schedule" },
    { f: 1, t: 3, l: "Fetch selected course details" },
    { f: 3, t: 1, l: "Return course data", d: true },
    { f: 1, t: 2, l: "Send Courses data for scheduling" },
    { f: 2, t: 2, l: "Conflict-free schedule", self: true },
    { f: 2, t: 1, l: "Return optimized schedule", d: true },
    { f: 1, t: 1, l: "Format Schedule", self: true },
    { f: 1, t: 0, l: "Display schedule", d: true }
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
        <UMLSequence title="Sequence Diagram (Smart Schedule)" data={dataSeqSmartSchedule} />
      </div>
    </PremiumSlideTemplate>
  );
};

/* =========================================================================
   12. Used Technologies, Tools and Algorithms
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
   13. Time Plan
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
   14. Team Roles
   ========================================================================= */
const TeamRolesPage = () => {
  const teamRoles = [
    { member: "Kamel Mohamed Abdulla", tasks: "Artificial Intelligence (AI)" },
    { member: "Shahd Makkawy Ibrahim", tasks: "Artificial Intelligence (AI)" },
    { member: "Nouran Mohamed Amin", tasks: "Artificial Intelligence (AI)" },
    { member: "Moaz Mostafa Zehry", tasks: "Backend Development" },
    { member: "Mohamed Saber Ahmed", tasks: "Backend Development" },
    { member: "Ahmed Abd Alalim Tawfiq", tasks: "Frontend Web Development" },
    { member: "Fatma Mohamed Abu Elfadl", tasks: "Business Analyst" },
    { member: "Nour Ahmed Zewita", tasks: "Mobile App Development (Flutter)" },
    { member: "Mariam Mohamed Khalil", tasks: "Mobile App Development (Flutter)" },
    { member: "Habiba Mohamed Mamdouh", tasks: "UI/UX Design" },
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
   15. References
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

  // KEYBOARD NAVIGATION STATE (PRESENTATION MODE)
  const slideOrder = [
    'landing',
    'problem',
    'goals',
    'previous-work',
    'tech-stack',
    'chatbot',
    'smart-timetable',
    'recommendation-system',
    'backend',
    'frontend',
    'system-design',
    'bmc',
    'running-project',
    'time-plan',
    'team-roles',
    'references'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent changing slides if typing in an input (just a safeguard)
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const currentIndex = slideOrder.indexOf(currentPage);

      if (e.key === 'ArrowRight') {
        if (currentIndex < slideOrder.length - 1) {
          setCurrentPage(slideOrder[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentPage(slideOrder[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

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
      {currentPage === 'chatbot' && <ChatbotPage />}
      {currentPage === 'smart-timetable' && <SmartTimetablePage />}
      {currentPage === 'recommendation-system' && <RecommendationSystemPage />}
      {currentPage === 'backend' && <BackendPage />}
      {currentPage === 'frontend' && <FrontendPage />}
      {currentPage === 'running-project' && <RunningProjectPage />}
      {currentPage === 'system-design' && <SystemDesignPage />}
      {currentPage === 'tech-stack' && <TechStackPage />}
      {currentPage === 'time-plan' && <TimePlanPage />}
      {currentPage === 'team-roles' && <TeamRolesPage />}
      {currentPage === 'references' && <ReferencesPage />}
    </div>
  );
}
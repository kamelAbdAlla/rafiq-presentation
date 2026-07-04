import { useState } from 'react';
import type { ReactNode } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import { Code2, Layers, Zap, Route, Boxes, Send, Palette, Heart, GitBranch } from 'lucide-react';
import {
  Search,
  Users,
  PenTool,
  CheckCircle2,
} from "lucide-react";
import {Target, Sparkles, TrendingUp, GraduationCap, Award } from 'lucide-react';

/* =========================================================================
   THE PREMIUM SLIDE TEMPLATE
   Wrap any new page you build in this component. It automatically adds:
   - The Dot Grid Background
   - The Glowing Orb
   - The Menu Placeholder (pt-32) so the menu never overlaps your text!
   ========================================================================= */
const PremiumSlideTemplate = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen w-full bg-[#FAFAFA] flex flex-col overflow-hidden">
    
    {/* Premium Backgrounds (Matches the Hero Section) */}
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-rafiq-primary-400/10 rounded-full blur-[120px] pointer-events-none" />

    {/* THE MENU PLACEHOLDER: 
      'pt-32' adds physical empty space at the top of the page exactly the size of your menu 
    */}
    <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 pt-32 pb-16 overflow-y-auto">
      {children}
    </main>
  </div>
);

/* =========================================================================
   YOUR SEPARATED SLIDE PAGES
   Here is where you will add your actual content for each section!
   ========================================================================= */

   /* ===================== SYSTEM ARCHITECTURE DIAGRAM ===================== */
const ArchitectureDiagram = () => (
  <svg viewBox="0 0 800 320" className="w-full h-auto">
    {/* Actors */}
    <rect x="20" y="20" width="160" height="90" rx="12" fill="#F0F6FF" stroke="#1564BF" strokeWidth="1.5"/>
    <text x="100" y="45" textAnchor="middle" fontSize="13" fontWeight="600" fill="#082956">Actors</text>
    <text x="100" y="68" textAnchor="middle" fontSize="11" fill="#40414A">Student · Admin</text>
    <text x="100" y="84" textAnchor="middle" fontSize="11" fill="#40414A">Instructor · Advisor</text>

    {/* Channels */}
    <rect x="20" y="200" width="160" height="70" rx="12" fill="#F0F6FF" stroke="#1564BF" strokeWidth="1.5"/>
    <text x="100" y="228" textAnchor="middle" fontSize="13" fontWeight="600" fill="#082956">Channels</text>
    <text x="100" y="250" textAnchor="middle" fontSize="11" fill="#40414A">Web Portal · Mobile App</text>

    {/* GUI */}
    <rect x="290" y="110" width="140" height="70" rx="12" fill="#1564BF"/>
    <text x="360" y="150" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">GUI</text>

    {/* Backend DB */}
    <rect x="290" y="230" width="140" height="70" rx="12" fill="#0C3C7D"/>
    <text x="360" y="260" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Backend</text>
    <text x="360" y="278" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Database</text>

    {/* AI Agent */}
    <rect x="560" y="170" width="140" height="70" rx="12" fill="#3A82F6"/>
    <text x="630" y="200" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">AI Agent</text>
    <text x="630" y="218" textAnchor="middle" fontSize="10" fill="#F0F6FF">Recs · Chatbot</text>

    {/* Notification Service */}
    <rect x="560" y="20" width="140" height="60" rx="12" fill="#BAD6FE"/>
    <text x="630" y="45" textAnchor="middle" fontSize="11" fontWeight="600" fill="#082956">Notification</text>
    <text x="630" y="61" textAnchor="middle" fontSize="11" fontWeight="600" fill="#082956">Service</text>

    {/* External Services */}
    <rect x="560" y="260" width="140" height="45" rx="12" fill="#DCDDE2"/>
    <text x="630" y="287" textAnchor="middle" fontSize="11" fontWeight="600" fill="#40414A">Email / External</text>

    {/* Arrows */}
    <line x1="180" y1="65" x2="290" y2="130" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    <line x1="180" y1="235" x2="290" y2="180" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    <line x1="430" y1="150" x2="560" y2="195" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    <line x1="430" y1="245" x2="560" y2="215" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    <line x1="360" y1="180" x2="360" y2="230" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    <line x1="630" y1="170" x2="630" y2="80" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    <line x1="630" y1="240" x2="630" y2="260" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow)"/>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#8F91A0"/>
      </marker>
    </defs>
  </svg>
);

/* ===================== USE CASE DIAGRAM ===================== */
const UseCaseDiagram = () => (
  <svg viewBox="0 0 600 320" className="w-full h-auto">
    {/* Actor: Student */}
    <g transform="translate(30,140)">
      <circle cx="20" cy="10" r="12" fill="none" stroke="#0C3C7D" strokeWidth="2"/>
      <line x1="20" y1="22" x2="20" y2="55" stroke="#0C3C7D" strokeWidth="2"/>
      <line x1="0" y1="35" x2="40" y2="35" stroke="#0C3C7D" strokeWidth="2"/>
      <line x1="20" y1="55" x2="5" y2="80" stroke="#0C3C7D" strokeWidth="2"/>
      <line x1="20" y1="55" x2="35" y2="80" stroke="#0C3C7D" strokeWidth="2"/>
      <text x="20" y="98" textAnchor="middle" fontSize="11" fill="#40414A">Student</text>
    </g>

    {/* Use case ovals */}
    {[
      { cx: 220, cy: 40, label: "Login" },
      { cx: 220, cy: 110, label: "Enroll in Courses" },
      { cx: 220, cy: 180, label: "View Grades" },
      { cx: 220, cy: 250, label: "Interact with Chatbot" },
      { cx: 460, cy: 75, label: "Generate Schedule" },
      { cx: 460, cy: 215, label: "Course Recommendations" },
    ].map((u, i) => (
      <g key={i}>
        <ellipse cx={u.cx} cy={u.cy} rx="95" ry="28" fill="#F0F6FF" stroke="#1564BF" strokeWidth="1.5"/>
        <text x={u.cx} y={u.cy + 4} textAnchor="middle" fontSize="11" fill="#082956">{u.label}</text>
      </g>
    ))}

    {/* Connections from actor */}
    <line x1="60" y1="155" x2="125" y2="40" stroke="#8F91A0" strokeWidth="1.2"/>
    <line x1="60" y1="165" x2="125" y2="110" stroke="#8F91A0" strokeWidth="1.2"/>
    <line x1="60" y1="175" x2="125" y2="180" stroke="#8F91A0" strokeWidth="1.2"/>
    <line x1="60" y1="185" x2="125" y2="250" stroke="#8F91A0" strokeWidth="1.2"/>

    {/* Include relationships */}
    <line x1="315" y1="110" x2="365" y2="80" stroke="#8F91A0" strokeWidth="1" strokeDasharray="4,3"/>
    <text x="330" y="90" fontSize="9" fill="#8F91A0">include</text>
    <line x1="315" y1="180" x2="365" y2="210" stroke="#8F91A0" strokeWidth="1" strokeDasharray="4,3"/>
    <text x="330" y="200" fontSize="9" fill="#8F91A0">extend</text>
  </svg>
);

/* ===================== SEQUENCE DIAGRAM ===================== */
const SequenceDiagram = () => (
  <svg viewBox="0 0 640 320" className="w-full h-auto">
    {/* Lifeline headers */}
    {[
      { x: 60, label: "Student" },
      { x: 220, label: "UI" },
      { x: 400, label: "Registration\nService" },
      { x: 570, label: "AI Scheduler" },
    ].map((l, i) => (
      <g key={i}>
        <rect x={l.x - 55} y="10" width="110" height="40" rx="8" fill="#1564BF"/>
        {l.label.split('\n').map((line, j) => (
          <text key={j} x={l.x} y={26 + j * 14} textAnchor="middle" fontSize="10" fontWeight="600" fill="white">{line}</text>
        ))}
        <line x1={l.x} y1="50" x2={l.x} y2="300" stroke="#C5C6CE" strokeWidth="1.5" strokeDasharray="4,3"/>
      </g>
    ))}

    {/* Messages */}
    <line x1="60" y1="80" x2="220" y2="80" stroke="#40414A" strokeWidth="1.3" markerEnd="url(#arrow2)"/>
    <text x="140" y="74" textAnchor="middle" fontSize="9.5" fill="#40414A">Open Registration Page</text>

    <line x1="220" y1="115" x2="400" y2="115" stroke="#40414A" strokeWidth="1.3" markerEnd="url(#arrow2)"/>
    <text x="310" y="109" textAnchor="middle" fontSize="9.5" fill="#40414A">Request Courses</text>

    <line x1="400" y1="150" x2="220" y2="150" stroke="#40414A" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#arrow2)"/>
    <text x="310" y="144" textAnchor="middle" fontSize="9.5" fill="#40414A">Display Available Courses</text>

    <line x1="220" y1="185" x2="400" y2="185" stroke="#40414A" strokeWidth="1.3" markerEnd="url(#arrow2)"/>
    <text x="310" y="179" textAnchor="middle" fontSize="9.5" fill="#40414A">Submit Course Selection</text>

    <line x1="400" y1="215" x2="570" y2="215" stroke="#40414A" strokeWidth="1.3" markerEnd="url(#arrow2)"/>
    <text x="485" y="209" textAnchor="middle" fontSize="9.5" fill="#40414A">Request Schedule Generation</text>

    <line x1="570" y1="250" x2="220" y2="250" stroke="#40414A" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#arrow2)"/>
    <text x="395" y="244" textAnchor="middle" fontSize="9.5" fill="#40414A">Return Conflict-Free Schedule</text>

    <line x1="220" y1="280" x2="60" y2="280" stroke="#40414A" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#arrow2)"/>
    <text x="140" y="274" textAnchor="middle" fontSize="9.5" fill="#40414A">Show Schedule</text>

    <defs>
      <marker id="arrow2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#40414A"/>
      </marker>
    </defs>
  </svg>
);

/* ===================== ACTIVITY DIAGRAM ===================== */
const ActivityDiagram = () => (
  <svg viewBox="0 0 320 460" className="w-full h-auto">
    <circle cx="160" cy="20" r="10" fill="#0C3C7D"/>
    <line x1="160" y1="30" x2="160" y2="55" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow3)"/>

    <rect x="70" y="55" width="180" height="40" rx="20" fill="#F0F6FF" stroke="#1564BF" strokeWidth="1.5"/>
    <text x="160" y="80" textAnchor="middle" fontSize="11" fill="#082956">Open Registration Page</text>
    <line x1="160" y1="95" x2="160" y2="120" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow3)"/>

    <rect x="70" y="120" width="180" height="40" rx="20" fill="#F0F6FF" stroke="#1564BF" strokeWidth="1.5"/>
    <text x="160" y="145" textAnchor="middle" fontSize="11" fill="#082956">Select Courses</text>
    <line x1="160" y1="160" x2="160" y2="185" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow3)"/>

    <rect x="70" y="185" width="180" height="40" rx="20" fill="#F0F6FF" stroke="#1564BF" strokeWidth="1.5"/>
    <text x="160" y="210" textAnchor="middle" fontSize="11" fill="#082956">Generate Smart Table</text>
    <line x1="160" y1="225" x2="160" y2="255" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow3)"/>

    {/* Decision diamond */}
    <polygon points="160,255 220,290 160,325 100,290" fill="white" stroke="#1564BF" strokeWidth="1.5"/>
    <text x="160" y="294" textAnchor="middle" fontSize="10" fill="#082956">Table Suitable?</text>

    {/* Yes path */}
    <line x1="160" y1="325" x2="160" y2="355" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow3)"/>
    <text x="172" y="342" fontSize="10" fill="#40414A">yes</text>
    <rect x="70" y="355" width="180" height="40" rx="20" fill="#F0F6FF" stroke="#1564BF" strokeWidth="1.5"/>
    <text x="160" y="380" textAnchor="middle" fontSize="11" fill="#082956">Save Registration</text>
    <line x1="160" y1="395" x2="160" y2="420" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow3)"/>

    {/* No path (loop back) */}
    <line x1="220" y1="290" x2="270" y2="290" stroke="#8F91A0" strokeWidth="1.5"/>
    <text x="230" y="283" fontSize="10" fill="#40414A">no</text>
    <line x1="270" y1="290" x2="270" y2="140" stroke="#8F91A0" strokeWidth="1.5"/>
    <line x1="270" y1="140" x2="250" y2="140" stroke="#8F91A0" strokeWidth="1.5" markerEnd="url(#arrow3)"/>

    <circle cx="160" cy="432" r="10" fill="none" stroke="#0C3C7D" strokeWidth="2"/>
    <circle cx="160" cy="432" r="5" fill="#0C3C7D"/>

    <defs>
      <marker id="arrow3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#8F91A0"/>
      </marker>
    </defs>
  </svg>
);

/* ===================== CLASS DIAGRAM ===================== */
const ClassDiagram = () => {
  const ClassBox = ({ x, y, w, title, attrs, methods, fill = "#F0F6FF", titleFill = "#1564BF" }: any) => (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height={attrs.length * 14 + methods.length * 14 + 34} fill={fill} stroke="#1564BF" strokeWidth="1.2"/>
      <rect width={w} height="24" fill={titleFill}/>
      <text x={w / 2} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">{title}</text>
      <line x1="0" y1={24 + attrs.length * 14 + 6} x2={w} y2={24 + attrs.length * 14 + 6} stroke="#1564BF" strokeWidth="1"/>
      {attrs.map((a: string, i: number) => (
        <text key={i} x="8" y={24 + 14 * (i + 1)} fontSize="9" fill="#40414A">{a}</text>
      ))}
      {methods.map((m: string, i: number) => (
        <text key={i} x="8" y={24 + attrs.length * 14 + 14 * (i + 1) + 6} fontSize="9" fill="#40414A">{m}</text>
      ))}
    </g>
  );

  return (
    <svg viewBox="0 0 760 380" className="w-full h-auto">
      <ClassBox x={300} y={10} w={160} title="User" attrs={["userId: String", "name: String", "role: String"]} methods={["login()", "logout()"]} titleFill="#0C3C7D" />

      <ClassBox x={20} y={130} w={150} title="Student" attrs={["gpa: Double", "level: int"]} methods={["enrollCourse()", "viewGPA()"]} />
      <ClassBox x={210} y={130} w={140} title="Admin" attrs={["adminType: String"]} methods={["addStudent()", "addCourse()"]} />
      <ClassBox x={390} y={130} w={150} title="Instructor" attrs={["specialization: String"]} methods={["enterGrades()", "viewClassList()"]} />
      <ClassBox x={580} y={130} w={160} title="AcademicAdvisor" attrs={["department: String"]} methods={["reviewPlan()", "registerCourses()"]} />

      <ClassBox x={20} y={270} w={150} title="ScheduleGenerator" attrs={[]} methods={["generateSchedule()", "detectConflict()"]} fill="#FFFFFF" titleFill="#3A82F6" />
      <ClassBox x={210} y={270} w={150} title="RecommendationEngine" attrs={[]} methods={["recommendCourse()"]} fill="#FFFFFF" titleFill="#3A82F6" />
      <ClassBox x={400} y={270} w={140} title="Chatbot" attrs={[]} methods={["answerQuestion()"]} fill="#FFFFFF" titleFill="#3A82F6" />
      <ClassBox x={580} y={270} w={150} title="Course" attrs={["credits: int"]} methods={["checkEligibility()"]} />

      {/* Inheritance lines (triangle arrows) from User */}
      {[95, 280, 460, 660].map((x, i) => (
        <line key={i} x1={x} y1={34} x2={x} y2={130} stroke="#0C3C7D" strokeWidth="1.3"/>
      ))}

      {/* Student to helper classes */}
      <line x1="95" y1="200" x2="95" y2="270" stroke="#8F91A0" strokeWidth="1.2"/>
      <line x1="95" y1="235" x2="285" y2="270" stroke="#8F91A0" strokeWidth="1.2"/>
      <line x1="95" y1="235" x2="470" y2="270" stroke="#8F91A0" strokeWidth="1.2"/>
      <line x1="95" y1="235" x2="655" y2="270" stroke="#8F91A0" strokeWidth="1.2"/>
    </svg>
  );
};
const BusinessPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">
        Business & Strategy
      </h2>
      <p className="text-lg text-slate-500 text-center mb-16 max-w-2xl mx-auto">
        How Rafiq positions itself, how it's structured, and how it works
        under the hood.
      </p>

      {/* SWOT ANALYSIS */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">SWOT Analysis</h3>
      <div className="grid md:grid-cols-2 gap-5 mb-16">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rafiq-primary-500" />
            <h4 className="font-semibold text-slate-900">Strengths</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Adaptive guidance tailored to individual student needs</li>
            <li>• Reduces dependency on traditional academic advisors</li>
            <li>• Minimizes mistakes like poor course selection</li>
            <li>• User-friendly, easy-to-use interface</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
            <h4 className="font-semibold text-slate-900">Weaknesses</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Effectiveness relies heavily on accurate academic data</li>
            <li>• Requires continuous maintenance as curricula/policies change</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rafiq-primary-400" />
            <h4 className="font-semibold text-slate-900">Opportunities</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Growing student numbers increase demand for smart advising</li>
            <li>• Potential integration with university SIS platforms</li>
            <li>• Expansion into career and internship guidance</li>
            <li>• Aligns with higher-education digitalization strategies</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <h4 className="font-semibold text-slate-900">Threats</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Data privacy risks from handling sensitive student data</li>
            <li>• Sudden academic policy changes may affect system accuracy</li>
          </ul>
        </div>
      </div>

      {/* BUSINESS MODEL CANVAS — FULL 9-BLOCK LAYOUT */}
<h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Business Model Canvas</h3>

<div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
  {/* Key Partners */}
  <div className="md:row-span-2 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Partners</h4>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• University Registrar's Office</li>
      <li>• Pilot Advisory Departments</li>
      <li>• Student Associations / Government</li>
      <li>• Cloud Service Providers</li>
      <li>• Payment Gateways (future)</li>
    </ul>
  </div>

  {/* Key Activities */}
  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Activities</h4>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• AI model development (recommendation engine, chatbot)</li>
      <li>• Platform engineering (web/mobile)</li>
      <li>• Secure API integration with university SIS</li>
      <li>• Data analytics for advisors/admin</li>
    </ul>
  </div>

  {/* Value Propositions */}
  <div className="md:row-span-2 bg-rafiq-primary-50 p-4 rounded-2xl border border-rafiq-primary-100 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Value Propositions</h4>
    <p className="text-xs text-slate-600 mb-2">
      <span className="font-medium text-slate-800">Students:</span> a 24/7 companion with GPA
      tracking, what-if scenarios, and instant course recommendations.
    </p>
    <p className="text-xs text-slate-600 mb-2">
      <span className="font-medium text-slate-800">Advisors:</span> a dashboard to monitor
      progress and identify at-risk students early.
    </p>
    <p className="text-xs text-slate-600">
      <span className="font-medium text-slate-800">Administration:</span> higher retention
      through proactive alerts and reduced admin overhead.
    </p>
  </div>

  {/* Customer Relationships */}
  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Customer Relationships</h4>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• Automated & proactive support (students)</li>
      <li>• Dedicated helpdesk (advisors/admin)</li>
      <li>• Community feedback & student forums</li>
    </ul>
  </div>

  {/* Customer Segments */}
  <div className="md:row-span-2 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Customer Segments</h4>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• University Students</li>
      <li>• Academic Advisors & Faculty</li>
      <li>• University Administration</li>
    </ul>
  </div>

  {/* Key Resources */}
  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Resources</h4>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• Proprietary AI models</li>
      <li>• University data agreement</li>
      <li>• Technical infrastructure</li>
      <li>• Specialized team</li>
    </ul>
  </div>

  {/* Channels */}
  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Channels</h4>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• Mobile app (Android, iOS)</li>
      <li>• Official university websites</li>
      <li>• Workshops & demos on campus</li>
    </ul>
  </div>
</div>

{/* Cost Structure + Revenue Streams (full width bottom row) */}
<div className="grid md:grid-cols-2 gap-3 mb-16">
  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Cost Structure</h4>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• Technology infrastructure: cloud hosting, database, API costs</li>
      <li>• Personnel: backend, frontend, AI/ML engineers, UI/UX designer</li>
      <li>• R&D: chatbot/recommendation engine training & data labeling</li>
      <li>• Sales & marketing: workshops and demos</li>
      <li>• Support & maintenance: helpdesk, updates, bug fixes</li>
    </ul>
  </div>
  <div className="bg-rafiq-primary-50 p-4 rounded-2xl border border-rafiq-primary-100 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Revenue Streams</h4>
    <p className="text-xs text-slate-600 mb-2 font-medium text-slate-800">B2B SaaS Model</p>
    <ul className="space-y-1.5 text-xs text-slate-600">
      <li>• Primary: annual institutional licenses sold to universities or large faculties</li>
      <li>• Optional: one-time setup & data-integration fees</li>
      <li>• Optional: premium fees for advanced analytics modules</li>
    </ul>
  </div>
</div>

      {/* SYSTEM ARCHITECTURE */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">System Architecture</h3>
      <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-6">
        Students, Admins, Instructors, and Advisors access Rafiq through the Web Portal or Mobile App. Every request flows through the GUI into a shared backend database, which feeds the AI Agent for recommendations and chatbot support.
      </p>
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/60 mb-16">
        <ArchitectureDiagram />
      </div>

        <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
        Use Case Diagrams
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-6">
        Students enroll in courses, generate conflict-free schedules, check
        prerequisites, and chat with the AI advisor. Admins manage students,
        courses, and announcements across the platform.
      </p>
      <div className="grid md:grid-cols-2 gap-5 mb-16">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center overflow-hidden min-h-[180px]">
          <img
            src="/usecase-student.png"
            alt="Student Use Case Diagram"
            className="w-full h-auto rounded-xl mb-2"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span className="text-xs text-slate-400">Student Portal</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center overflow-hidden min-h-[180px]">
          <img
            src="/usecase-admin.png"
            alt="Admin Use Case Diagram"
            className="w-full h-auto rounded-xl mb-2"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span className="text-xs text-slate-400">Admin Portal</span>
        </div>
      </div>

      {/* ===================== SEQUENCE & ACTIVITY DIAGRAMS ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
        Sequence & Activity Diagrams
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-6">
        Example: course enrollment. The UI requests available courses, the
        student selects them, and the AI Scheduler instantly generates a
        conflict-free timetable — regenerating on request if it isn't suitable.
      </p>
      <div className="grid md:grid-cols-2 gap-5 mb-16">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center overflow-hidden min-h-[180px]">
          <img
            src="/sequence-enrollment.png"
            alt="Enrollment Sequence Diagram"
            className="w-full h-auto rounded-xl mb-2"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span className="text-xs text-slate-400">Enroll in Courses — Sequence Diagram</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center overflow-hidden min-h-[180px]">
          <img
            src="/activity-enrollment.png"
            alt="Enrollment Activity Diagram"
            className="w-full h-auto rounded-xl mb-2"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span className="text-xs text-slate-400">Enroll in Courses — Activity Diagram</span>
        </div>
      </div>

      {/* ===================== CLASS DIAGRAM ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
        Class Diagram
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-6">
        A central User class is extended by Student, Admin, Instructor, and
        Academic Advisor. Students link to Enrollment, StudyPlan, GPAServices,
        ScheduleGenerator, and the AI-powered RecommendationEngine and Chatbot.
      </p>
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200/60 flex items-center justify-center overflow-hidden min-h-[200px]">
        <img
          src="/class-diagram.png"
          alt="Class Diagram"
          className="w-full h-auto rounded-xl"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>
    </div>
  </PremiumSlideTemplate>
);

/* =========================================================================
   ADD THESE ICONS to your existing lucide-react import line at the top of
   App.tsx (alongside Code2, Layers, Zap, Route, Boxes, Send, Palette, Heart,
   GitBranch). Do NOT create a second import line for lucide-react.
   ========================================================================= */
// Search, Users, PenTool, CheckCircle2, ShieldCheck as TrustIcon, Sparkles, TrendingUp, MinusCircle, MessageCircleQuestion, CalendarClock, LayoutDashboard, Accessibility, ListChecks, SlidersHorizontal

/* ===================== DESIGN PROCESS DATA ===================== */
const designProcessSteps = [
  { icon: <Search className="w-6 h-6" />, name: "User Research", desc: "Uncovering real advising pain points before designing anything." },
  { icon: <Users className="w-6 h-6" />, name: "User Personas", desc: "Grounding decisions in the actual students and advisors who'll use Rafiq." },
  { icon: <PenTool className="w-6 h-6" />, name: "Wireframing", desc: "Structuring flows and layout before committing to visuals." },
  { icon: <Palette className="w-6 h-6" />, name: "Visual Design", desc: "Applying color, type, and hierarchy for a trustworthy interface." },
  { icon: <Layers className="w-6 h-6" />, name: "Prototyping", desc: "Turning static screens into a clickable, testable experience." },
  { icon: <CheckCircle2 className="w-6 h-6" />, name: "Usability Testing", desc: "Validating the design with real students and advisors." },
];

/* ===================== DESIGN PROCESS TIMELINE ===================== */
const DesignProcessTimeline = () => (
  <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/60">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
      <div className="hidden lg:block absolute top-[3.75rem] left-[8%] right-[8%] h-px bg-slate-200" />
      {designProcessSteps.map((s, i) => (
        <div key={i} className="flex flex-col items-center text-center relative">
          <span className="text-[10px] font-mono tracking-wider text-rafiq-primary-500 mb-3">
            0{i + 1}
          </span>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 relative z-10 bg-rafiq-primary-50 border border-rafiq-primary-100 text-rafiq-primary-500">
            {s.icon}
          </div>
          <h4 className="text-slate-900 font-semibold text-sm mb-1">{s.name}</h4>
          <p className="text-slate-500 text-[11px] leading-snug px-1">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ===================== RESEARCH FINDINGS & DECISIONS DATA ===================== */
const researchFindings = [
  "Students often struggle with choosing the right courses.",
  "Graduation requirements can be difficult to understand.",
  "Booking appointments with advisors is time-consuming.",
  "Advisors spend significant time answering repetitive questions.",
];

const designDecisions = [
  "Simplify navigation.",
  "Display academic progress clearly.",
  "Provide AI-powered course recommendations.",
  "Allow students to book appointments directly from the system.",
];

/* ===================== COLOR PALETTE DATA ===================== */
const colorPalette = [
  {
    name: "Blue",
    hex: "#1564BF",
    swatch: "bg-rafiq-primary-500",
    meaning: "Represents trust, professionalism, and education.",
    usage: "Used for navigation bars, primary buttons, and important actions.",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    swatch: "bg-white border border-slate-300",
    meaning: "Creates a clean and organized interface.",
    usage: "Improves readability and reduces visual clutter.",
  },
  {
    name: "Green",
    hex: "#22C55E",
    swatch: "bg-green-500",
    meaning: "Represents success and progress.",
    usage: "Highlights AI recommendations, confirmations, and completed actions.",
  },
  {
    name: "Gray",
    hex: "#8F91A0",
    swatch: "bg-slate-400",
    meaning: "Used for secondary information and inactive elements.",
    usage: "Maintains balance and supports visual hierarchy.",
  },
];

const designPrinciples = [
  "Strong contrast for readability.",
  "Consistent colors across all screens.",
  "Clear visual hierarchy to guide user attention.",
  "Accessible color combinations for all users.",
];

const improvementsAfterTesting = [
  "Simplified navigation.",
  "Improved dashboard organization.",
  "Enhanced accessibility.",
  "Reduced the number of steps needed to complete tasks.",
  "Refined AI recommendation cards based on user feedback.",
];

/* ===================== SIMPLE LIST CARD ===================== */
const ListCard = ({
  title,
  items,
  accent = "bg-rafiq-primary-500",
  tone = "white",
}: {
  title: string;
  items: string[];
  accent?: string;
  tone?: "white" | "tint";
}) => (
  <div
    className={`p-6 rounded-2xl border shadow-sm ${
      tone === "tint"
        ? "bg-rafiq-primary-50 border-rafiq-primary-100"
        : "bg-white border-slate-200/60"
    }`}
  >
    <div className="flex items-center gap-2 mb-4">
      <span className={`h-2.5 w-2.5 rounded-full ${accent}`} />
      <h4 className="font-semibold text-slate-900">{title}</h4>
    </div>
    <ul className="space-y-2.5 text-sm text-slate-600">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-rafiq-primary-400 mt-0.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ===================== UI / UX PAGE ===================== */
const UiUxPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">
        UI / UX Design
      </h2>
      <p className="text-lg text-slate-500 text-center mb-16 max-w-3xl mx-auto">
        A user-centered design approach grounded in the real needs of students
        and academic advisors — simplifying registration, clarifying
        requirements, and improving the overall experience.
      </p>

      {/* ===================== DESIGN PROCESS ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
        Design Process
      </h3>
      <div className="mb-8">
        <DesignProcessTimeline />
      </div>

      {/* KEY OBJECTIVE CALLOUT */}
      <div className="bg-rafiq-primary-50 p-6 rounded-2xl border border-rafiq-primary-100 shadow-sm max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-semibold tracking-wide text-rafiq-primary-600 uppercase">
          Key Objective
        </span>
        <p className="text-sm text-slate-700 leading-relaxed mt-2">
          Create an interface that is intuitive, accessible, and efficient —
          helping students make informed academic decisions with minimal
          effort.
        </p>
      </div>

      {/* ===================== RESEARCH & UX ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-2 text-center">
        Research & User Experience
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-6">
        Research was conducted to identify the challenges users face during
        academic advising, which directly shaped the interface decisions
        below.
      </p>
      <div className="grid md:grid-cols-2 gap-5 mb-16">
        <ListCard title="Key Findings" items={researchFindings} accent="bg-slate-400" />
        <ListCard
          title="Design Decisions"
          items={designDecisions}
          accent="bg-rafiq-primary-500"
          tone="tint"
        />
      </div>

      {/* ===================== COLOR THEORY & VISUAL DESIGN ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-2 text-center">
        Color Theory & Visual Design
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-6">
        Color choices were based on UI/UX design principles to create an
        interface that is visually appealing, trustworthy, and easy to use.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {colorPalette.map((c, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex gap-4"
          >
            <div className={`w-12 h-12 rounded-xl shrink-0 ${c.swatch}`} />
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <h4 className="font-semibold text-slate-900 text-sm">{c.name}</h4>
                <span className="text-[11px] font-mono text-slate-400">{c.hex}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{c.meaning}</p>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">{c.usage}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm mb-16">
        <h4 className="font-semibold text-slate-900 mb-3 text-sm text-center">
          Design Principles Applied
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl mx-auto">
          {designPrinciples.map((p, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-rafiq-primary-500 mt-0.5 shrink-0" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== FINAL INTERFACE & USABILITY ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
        Final Interface & Usability
      </h3>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-semibold text-slate-900 mb-2 text-sm">Interface Design</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The final interface focuses on simplicity and consistency,
            built from reusable UI components such as cards, buttons,
            navigation bars, and progress indicators.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <h4 className="font-semibold text-slate-900 mb-2 text-sm">Usability Testing</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            The prototype was tested with students and academic advisors to
            evaluate ease of use, navigation, and overall satisfaction.
          </p>
        </div>
      </div>
      <ListCard
        title="Improvements After Testing"
        items={improvementsAfterTesting}
        accent="bg-green-500"
        tone="tint"
      />
    </div>
  </PremiumSlideTemplate>
);

/* ===================== PLACEHOLDER PAGE (was missing — this is what caused the blank screen) ===================== */
const PlaceholderPage = ({ title }: { title: string }) => (
  <PremiumSlideTemplate>
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">{title}</h2>
      <p className="text-lg text-slate-600 leading-relaxed mb-10">
        This section is coming soon.
      </p>
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 h-64 flex items-center justify-center text-slate-400">
        Content in progress
      </div>
    </div>
  </PremiumSlideTemplate>
);


/* ===================== SCORE RING (Lighthouse) ===================== */
const ScoreRing = ({ score, label, color }: { score: number; label: string; color: string }) => {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="#EEEEF0" strokeWidth="9" />
        <circle
          cx="60" cy="60" r={radius} fill="none" stroke={color} strokeWidth="9"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 60 60)"
        />
        <text x="60" y="68" textAnchor="middle" fontSize="26" fontWeight="700" fill="#09090B">{score}</text>
      </svg>
      <span className="text-sm font-medium text-slate-600">{label}</span>
    </div>
  );
};

/* ===================== CLIENT-SERVER FLOW DIAGRAM (v3 — CSS relative/absolute) ===================== */
/* Coordinate space: a 740 x 300 canvas. Boxes and labels are plain HTML,
   positioned with % (derived from that canvas) so everything scales together.
   The SVG only draws the connector lines/arrowheads — no text lives in the
   SVG, so nothing can visually collide with a line's own geometry. */

const CANVAS_W = 740;
const CANVAS_H = 300;
const pct = (v: number, total: number) => `${(v / total) * 100}%`;

const FlowBox = ({
  x, y, w, h, fill, textColor = "white", lines,
}: {
  x: number; y: number; w: number; h: number; fill: string; textColor?: string; lines: string[];
}) => (
  <div
    className="absolute rounded-xl flex flex-col items-center justify-center text-center shadow-sm"
    style={{
      left: pct(x, CANVAS_W), top: pct(y, CANVAS_H),
      width: pct(w, CANVAS_W), height: pct(h, CANVAS_H),
      backgroundColor: fill,
    }}
  >
    {lines.map((line, i) => (
      <span
        key={i}
        className={i === 0 ? "font-semibold text-sm" : "text-xs opacity-90"}
        style={{ color: textColor }}
      >
        {line}
      </span>
    ))}
  </div>
);

const FlowLabel = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <div
    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 bg-[#FAFAFA] text-slate-600 text-[11px] px-2 py-0.5 rounded whitespace-nowrap"
    style={{ left: pct(x, CANVAS_W), top: pct(y, CANVAS_H) }}
  >
    {text}
  </div>
);

const ClientServerDiagram = () => (
  <div className="relative w-full max-w-3xl mx-auto" style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}>
    {/* Connector lines only — no text here */}
    <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="absolute inset-0 w-full h-full">
      <line x1="180" y1="115" x2="300" y2="35" stroke="#8F91A0" strokeWidth="1.3" markerEnd="url(#a1)" />
      <line x1="300" y1="60" x2="180" y2="150" stroke="#8F91A0" strokeWidth="1.3" markerEnd="url(#a1)" />
      <line x1="180" y1="185" x2="300" y2="225" stroke="#8F91A0" strokeWidth="1.3" markerEnd="url(#a1)" />
      <line x1="460" y1="215" x2="560" y2="215" stroke="#8F91A0" strokeWidth="1.3" markerEnd="url(#a1)" />
      <line x1="560" y1="240" x2="460" y2="240" stroke="#8F91A0" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#a1)" />
      <defs>
        <marker id="a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#8F91A0" />
        </marker>
      </defs>
    </svg>

    {/* Boxes */}
    <FlowBox x={20} y={80} w={160} h={140} fill="#EAF4FF" textColor="#082956" lines={["Client", "(Browser)"]} />
    <FlowBox x={300} y={15} w={160} h={80} fill="#1564BF" lines={["Server", "(Front-end)"]} />
    <FlowBox x={300} y={190} w={160} h={80} fill="#0C3C7D" lines={["Server", "(Back-end)"]} />
    <FlowBox x={560} y={190} w={160} h={80} fill="#3A82F6" lines={["Database"]} />

    {/* Labels — positioned at each line's midpoint, background covers the line beneath it */}
    <FlowLabel x={240} y={62} text="1. request" />
    <FlowLabel x={240} y={118} text="2. send HTML/CSS/JS" />
    <FlowLabel x={240} y={218} text="3. API call" />
    <FlowLabel x={510} y={205} text="query" />
    <FlowLabel x={510} y={252} text="data" />
  </div>
);

/* ===================== NAVIGATION FLOW DIAGRAM ===================== */
/* Fixed: each top box owns a distinct, non-overlapping column of children. */
const NavFlowDiagram = () => {
  const rootCenter = 450;

  const renderTwoAcross = (children: string[], centerX: number) => {
    const boxW = 85;
    const boxH = 32;
    const gapX = 10;
    const gapY = 8;
    const rowWidth = boxW * 2 + gapX;
    const startX = centerX - rowWidth / 2;

    return children.map((label, i) => {
      const row = Math.floor(i / 2);
      const colInRow = i % 2;
      const x = startX + colInRow * (boxW + gapX);
      const y = 150 + row * (boxH + gapY);
      return (
        <g key={label}>
          <rect x={x} y={y} width={boxW} height={boxH} rx="6" fill="#EAF4FF" stroke="#1564BF" strokeWidth="1"/>
          <text x={x + boxW / 2} y={y + 20} textAnchor="middle" fontSize="9.5" fill="#082956">{label}</text>
        </g>
      );
    });
  };

  const renderSingleRow = (children: string[], centerX: number) => {
    const boxW = 100;
    const boxH = 32;
    const gapX = 10;
    const rowWidth = children.length * boxW + (children.length - 1) * gapX;
    const startX = centerX - rowWidth / 2;

    return children.map((label, i) => {
      const x = startX + i * (boxW + gapX);
      const y = 150;
      return (
        <g key={label}>
          <rect x={x} y={y} width={boxW} height={boxH} rx="6" fill="#EAF4FF" stroke="#1564BF" strokeWidth="1"/>
          <text x={x + boxW / 2} y={y + 20} textAnchor="middle" fontSize="9.5" fill="#082956">{label}</text>
        </g>
      );
    });
  };

  return (
    <svg viewBox="0 0 900 260" className="w-full max-w-6xl h-auto mx-auto">
      <rect x={rootCenter - 50} y="10" width="100" height="36" rx="8" fill="#09090B" />
      <text x={rootCenter} y="33" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Rafiq</text>

      {/* Column 1: System Config */}
      <line x1={rootCenter} y1="46" x2="110" y2="80" stroke="#C5C6CE" strokeWidth="1.3" />
      <rect x="25" y="80" width="170" height="36" rx="8" fill="#3A82F6" />
      <text x="110" y="103" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">System Config</text>
      {renderSingleRow(["Notifications", "Settings"], 110)}

      {/* Column 2: Academic Tools */}
      <line x1={rootCenter} y1="46" x2="340" y2="80" stroke="#C5C6CE" strokeWidth="1.3" />
      <rect x="255" y="80" width="170" height="36" rx="8" fill="#1564BF" />
      <text x="340" y="103" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">Academic Tools</text>
      {renderTwoAcross(["Exam Results", "Schedules", "Study Plan", "Support"], 340)}

      {/* Column 3: Major-Specific */}
      <line x1={rootCenter} y1="46" x2="570" y2="80" stroke="#C5C6CE" strokeWidth="1.3" />
      <rect x="485" y="80" width="170" height="36" rx="8" fill="#1564BF" />
      <text x="570" y="103" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">Major-Specific</text>
      {renderTwoAcross(["Home", "Courses", "Profile", "Applications"], 570)}

      {/* Column 4: Public Gateway */}
      <line x1={rootCenter} y1="46" x2="790" y2="80" stroke="#C5C6CE" strokeWidth="1.3" />
      <rect x="705" y="80" width="170" height="36" rx="8" fill="#0C3C7D" />
      <text x="790" y="103" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">Public Gateway</text>
      {renderSingleRow(["Login / Reset"], 790)}
    </svg>
  );
};

/* ===================== ROLE OWNERSHIP DIAGRAM (fixed alignment) ===================== */
const RoleOwnershipDiagram = () => {
  const categories = [
    { x: 40, fill: "#3A82F6", label: "Academic & Teaching Staff", items: ["Students", "Study Plans", "Exam Sched."] },
    { x: 280, fill: "#1564BF", label: "Global Pages (All Roles)", items: ["Home", "Courses", "Support"] },
    { x: 520, fill: "#0C3C7D", label: "Administration & Student Affairs", items: ["User Mgmt", "Security", "Reports"] },
  ];
  const catWidth = 220;
  const itemWidth = 68;
  const itemGap = 8;

  return (
    <svg viewBox="0 0 780 210" className="w-full max-w-6xl h-auto mx-auto">
      {/* Root */}
      <rect x="340" y="10" width="100" height="36" rx="8" fill="#09090B" />
      <text x="390" y="33" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Rafiq</text>

      {categories.map((cat, ci) => {
        const centerX = cat.x + catWidth / 2;
        return (
          <g key={ci}>
            {/* Line from root to category */}
            <line x1="390" y1="46" x2={centerX} y2="80" stroke="#C5C6CE" strokeWidth="1.3" />

            {/* Category box */}
            <rect x={cat.x} y="80" width={catWidth} height="36" rx="8" fill={cat.fill} />
            <text x={centerX} y="103" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="white">
              {cat.label}
            </text>

            {/* Child boxes, centered exactly under the category */}
            {cat.items.map((item, ii) => {
              const x = cat.x + ii * (itemWidth + itemGap);
              return (
                <g key={ii}>
                  <rect x={x} y="150" width={itemWidth} height="30" rx="6" fill="#EAF4FF" stroke="#1564BF" strokeWidth="1" />
                  <text x={x + itemWidth / 2} y="169" textAnchor="middle" fontSize="9" fill="#082956">
                    {item}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};

const techStack = [
  { icon: <Code2 className="w-7 h-7" />, name: "HTML5 & CSS3" },
  { icon: <Palette className="w-7 h-7" />, name: "Tailwind CSS" },
  { icon: <Boxes className="w-7 h-7" />, name: "TypeScript" },
  { icon: <Layers className="w-7 h-7" />, name: "React" },
  { icon: <Zap className="w-7 h-7" />, name: "Vite" },
  { icon: <Route className="w-7 h-7" />, name: "React Router" },
  { icon: <GitBranch className="w-7 h-7" />, name: "Zustand" },
  { icon: <Send className="w-7 h-7" />, name: "Axios" },
  { icon: <Heart className="w-7 h-7" />, name: "Nizam (UI Kit)" },
];

/* Reusable code-line renderer — every token gets an explicit inline color,
   so nothing falls back to an invisible inherited color */
const CodeLine = ({ parts }: { parts: { text: string; color?: string }[] }) => (
  <div style={{ whiteSpace: "pre" }}>
    {parts.map((p, i) => (
      <span key={i} style={{ color: p.color || "#E2E8F0" }}>{p.text}</span>
    ))}
  </div>
);

const FrontendPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">
        Frontend Web Platform
      </h2>
      <p className="text-lg text-slate-500 text-center mb-20 max-w-4xl mx-auto">
        The architecture, stack, roadmap, and engineering decisions behind
        Rafiq's web experience.
      </p>

      {/* ===================== FRAMEWORK PARADIGM ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-4 text-center">
        Framework Paradigm: What is Front-End Architecture?
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-4xl mx-auto mb-6">
        The browser (client) requests pages from the front-end server, which
        renders HTML/CSS/JS. Any data-driven action calls the back-end server,
        which queries the database and returns results — keeping presentation
        and data concerns cleanly separated.
      </p>
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/60 flex justify-center">
        <ClientServerDiagram />
      </div>

      {/* ===================== TECH STACK ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center mt-20">
        Tech Stack & Frontend Architecture
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {techStack.map((t, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <div className="text-rafiq-primary-500">{t.icon}</div>
            <span className="text-[11px] font-medium text-slate-600 text-center">{t.name}</span>
          </div>
        ))}
      </div>

      {/* Why React */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-20">
        <h4 className="font-semibold text-slate-900 mb-4 text-center">Why React?</h4>
        <div className="space-y-2.5 max-w-lg mx-auto">
          {[
            { name: "Node.js", pct: 40.8 },
            { name: "React", pct: 39.5 },
            { name: "jQuery", pct: 21.4 },
            { name: "Next.js", pct: 17.9 },
            { name: "Vue.js", pct: 15.4 },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-16 text-xs text-slate-600 shrink-0">{f.name}</span>
              <div className="flex-1 h-5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rafiq-primary-500 rounded-full"
                  style={{ width: `${f.pct}%` }}
                />
              </div>
              <span className="w-10 text-xs text-slate-500 text-right">{f.pct}%</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 text-center mt-4">
          Most used web frameworks among developers worldwide, 2024
        </p>
      </div>

      {/* ===================== ROADMAP & PLANNING ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Frontend Roadmap, Planning & Preparation
      </h3>

      <h4 className="font-semibold text-slate-800 mb-3">A. Project Roadmap</h4>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Started Now", color: "bg-blue-100 text-blue-700" },
            { label: "Still Working On It", color: "bg-amber-100 text-amber-700" },
            { label: "Not Started", color: "bg-slate-100 text-slate-600" },
            { label: "Completed", color: "bg-green-100 text-green-700" },
            { label: "Not Completed", color: "bg-red-100 text-red-700" },
            { label: "Pinned", color: "bg-pink-100 text-pink-700" },
            { label: "Blocked", color: "bg-slate-200 text-slate-700" },
          ].map((s, i) => (
            <div key={i} className={`px-3 py-2 rounded-lg text-xs font-medium text-center ${s.color}`}>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <h4 className="font-semibold text-slate-800 mb-3">B. Folder Structure</h4>
      <div className="bg-[#09090B] p-6 rounded-2xl shadow-md mb-10 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed" style={{ color: "#E2E8F0" }}>
{`src/
├─ api/
├─ assets/
├─ components/
├─ features/
├─ index.css
├─ layouts/
├─ main.tsx
├─ pages/
├─ router/
├─ store/
└─ utils/`}
        </pre>
      </div>

      <h4 className="font-semibold text-slate-800 mb-3">C. Page Path Navigation Flow</h4>
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/60 mb-10 flex justify-center">
        <NavFlowDiagram />
      </div>

      <h4 className="font-semibold text-slate-800 mb-3">D. Role-Based Page Ownership</h4>
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200/60 mb-20 flex justify-center">
        <RoleOwnershipDiagram />
      </div>

      {/* ===================== TECHNICAL CHALLENGES ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Technical Challenges & Engineering Solutions
      </h3>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-6">
        <h4 className="font-semibold text-slate-900 mb-2">
          Challenge 1: Tight Coupling of Filter Controls on Data Tables
        </h4>
        <p className="text-sm text-slate-600 mb-4">
          Filter logic was originally embedded directly inside table components,
          making tables hard to reuse across pages with different filtering needs.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <span className="text-xs font-semibold text-red-500">Before</span>
            <p className="text-xs text-slate-500 mt-1">
              Filters hardcoded inside each table — duplicated logic, no reuse.
            </p>
          </div>
          <div className="bg-rafiq-primary-50 rounded-xl p-4 border border-rafiq-primary-100">
            <span className="text-xs font-semibold text-rafiq-primary-600">After</span>
            <p className="text-xs text-slate-600 mt-1">
              Extracted into a standalone Filter component that emits query
              params — any table can plug in independently.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-20">
        <h4 className="font-semibold text-slate-900 mb-2">
          Challenge 2: Loss of Transient UI State & Repetitive Network Hydration
        </h4>
        <p className="text-sm text-slate-600 mb-4">
          Navigating away and back to a page re-fetched data and reset UI
          state every time. Solved with React Query's cache + mutation
          invalidation pattern:
        </p>

        {/* Snippet 1 */}
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto mb-3 font-mono text-sm">
          <CodeLine parts={[{ text: "// *setting", color: "#6B7280" }]} />
          <CodeLine parts={[
            { text: "useSetting", color: "#60A5FA" },
            { text: "() {" },
          ]} />
          <CodeLine parts={[
            { text: "  " },
            { text: "return", color: "#C084FC" },
            { text: " " },
            { text: "useQuery", color: "#60A5FA" },
            { text: "({" },
          ]} />
          <CodeLine parts={[
            { text: "    queryKey: [" },
            { text: "'setting'", color: "#4ADE80" },
            { text: ", useUserInfoStore.getState().data.token]," },
          ]} />
          <CodeLine parts={[
            { text: "    queryFn: () => SYSTEM_API.Setting()," },
          ]} />
          <CodeLine parts={[{ text: "    retry: 2" }]} />
          <CodeLine parts={[{ text: "  })" }]} />
          <CodeLine parts={[{ text: "}," }]} />
        </div>

        {/* Snippet 2 */}
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto font-mono text-sm">
          <CodeLine parts={[
            { text: "useUpdateSetting", color: "#60A5FA" },
            { text: "() {" },
          ]} />
          <CodeLine parts={[
            { text: "  " },
            { text: "const", color: "#C084FC" },
            { text: " queryClient = " },
            { text: "useQueryClient", color: "#60A5FA" },
            { text: "()" },
          ]} />
          <CodeLine parts={[
            { text: "  " },
            { text: "return", color: "#C084FC" },
            { text: " " },
            { text: "useMutation", color: "#60A5FA" },
            { text: "({" },
          ]} />
          <CodeLine parts={[
            { text: "    mutationFn: (newSettings) => SYSTEM_API.UpdateSetting(newSettings)," },
          ]} />
          <CodeLine parts={[{ text: "    onSuccess: () => {" }]} />
          <CodeLine parts={[{ text: "      queryClient.invalidateQueries({" }]} />
          <CodeLine parts={[
            { text: "        queryKey: [" },
            { text: "'setting'", color: "#4ADE80" },
            { text: ", useUserInfoStore.getState().data.token]" },
          ]} />
          <CodeLine parts={[{ text: "      })" }]} />
          <CodeLine parts={[{ text: "    }" }]} />
          <CodeLine parts={[{ text: "  })" }]} />
          <CodeLine parts={[{ text: "}," }]} />
        </div>
      </div>

      {/* ===================== LIGHTHOUSE BENCHMARKS ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-4 text-center">
        Hydration States & Lighthouse Benchmarks
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-4xl mx-auto mb-8">
        After resolving hydration and caching issues, the platform scores
        consistently high across all Lighthouse categories on desktop.
      </p>
      <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200 flex flex-wrap justify-center gap-8">
        <ScoreRing score={98} label="Performance" color="#22C55E" />
        <ScoreRing score={76} label="Accessibility" color="#F59E0B" />
        <ScoreRing score={96} label="Best Practices" color="#22C55E" />
        <ScoreRing score={92} label="SEO" color="#22C55E" />
      </div>
    </div>
  </PremiumSlideTemplate>
);

import { Smartphone, Lock, Bell } from 'lucide-react';

/* ===================== FLUTTER TECH STACK DATA ===================== */
const flutterStack = [
  {
    icon: <Smartphone className="w-7 h-7" />,
    name: "Flutter",
    desc: "Cross-platform mobile development (Android & iOS) with a single codebase.",
  },
  {
    icon: <Boxes className="w-7 h-7" />,
    name: "Dart",
    desc: "Programming language used to build structured, object-oriented, maintainable code.",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    name: "Provider",
    desc: "State management to separate business logic from UI and keep clean architecture.",
  },
  {
    icon: <Send className="w-7 h-7" />,
    name: "Dio",
    desc: "RESTful API integration and efficient HTTP request handling.",
  },
  {
    icon: <Lock className="w-7 h-7" />,
    name: "Flutter Secure Storage",
    desc: "Securely stores authentication tokens and user session data.",
  },
  {
    icon: <Bell className="w-7 h-7" />,
    name: "Firebase Cloud Messaging",
    desc: "Sends push notifications for appointment updates and system alerts.",
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    name: "Git & GitHub",
    desc: "Version control, collaboration, and tracking project changes.",
  },
];

const FlutterPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">
        Mobile Application — Flutter Stack
      </h2>
      <p className="text-lg text-slate-500 text-center mb-16 max-w-4xl mx-auto">
        As a Flutter developer on the Academic Advisor System project, the
        mobile application was built using modern cross-platform technologies
        to ensure high performance, scalability, and maintainability.
      </p>

      {/* ===================== TECH STACK ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Technologies Used
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {flutterStack.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex flex-col gap-3 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="text-rafiq-primary-500 shrink-0">{t.icon}</div>
              <h4 className="font-semibold text-slate-900">{t.name}</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* ===================== CLOSING STATEMENT ===================== */}
      <div className="bg-rafiq-primary-50 p-6 rounded-2xl border border-rafiq-primary-100 shadow-sm max-w-3xl mx-auto text-center">
        <p className="text-sm text-slate-700 leading-relaxed">
          These technologies ensured that the Academic Advisor mobile
          application is scalable, secure, and efficient — while providing a
          smooth, reliable user experience.
        </p>
      </div>
    </div>
  </PremiumSlideTemplate>
);

import { Server, Filter, Database, ShieldCheck, Repeat, Users2, TestTube2, Package } from 'lucide-react';
/* Add these to your existing lucide-react import line at the top of App.tsx
   (alongside Code2, Boxes, etc.) — do NOT create a second import line. */

/* ===================== WHY CLEAN ARCHITECTURE ===================== */
const whyCleanArchitecture = [
  {
    icon: <TestTube2 className="w-6 h-6" />,
    title: "Highly Testable",
    desc: "Core logic can be tested in complete isolation.",
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Future Adaptability",
    desc: "Frameworks, UIs, and databases can be swapped without rewriting business rules.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Easier to Maintain",
    desc: "Changes in one layer do not cause ripple effects across the entire system.",
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Scalable for Teams",
    desc: "Multiple developers can work on different layers simultaneously without conflict.",
  },
];

/* ===================== CLEAN ARCHITECTURE ONION DIAGRAM ===================== */
const CleanArchitectureDiagram = () => {
  const rings = [
    { r: 230, fill: "#0C3C7D", label: "PRESENTATION LAYER", sub: "Rafeek.API" },
    { r: 180, fill: "#164E8C", label: "INFRASTRUCTURE & PERSISTENCE", sub: "Rafeek.Infrastructure · Rafeek.Persistence" },
    { r: 130, fill: "#1F60A0", label: "APPLICATION LAYER", sub: "Rafeek.Application (CQRS / MediatR)" },
    { r: 80, fill: "#3A82F6", label: "DOMAIN", sub: "Entities · Enums · Repository Interfaces" },
  ];
  const cx = 380, cy = 280;

  return (
    <svg viewBox="0 0 900 560" className="w-full max-w-4xl h-auto mx-auto">
     {rings.map((ring, i) => {
  const offset =
    i === 0 ? -185 :
    i === 1 ? -140 :
    i === 2 ? -95 :
    0;

  return (
    <g key={i}>
      <text
        x={cx}
        y={cy + offset}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={i === 3 ? "15" : "14"}
        fontWeight="700"
        fill="#FFFFFF"
        letterSpacing="0.8"
      >
        {ring.label}
      </text>

      <text
        x={cx}
        y={cy + offset + 18}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
        fontStyle="italic"
        fill="#D6E4F5"
      >
        {ring.sub}
      </text>
    </g>
  );
})}

      {/* Callouts */}
      <line x1={cx + 160} y1={cy - 165} x2="700" y2="110" stroke="#8FB4DE" strokeWidth="1" />
      <rect x="700" y="80" width="180" height="60" rx="6" fill="none" stroke="#8FB4DE" strokeWidth="1" />
      <text x="710" y="98" fontSize="9" fill="#1F2937">Controllers, Routes,</text>
      <text x="710" y="112" fontSize="9" fill="#1F2937">Filters, Program.cs,</text>
      <text x="710" y="126" fontSize="9" fill="#1F2937">Swagger, Options</text>

      <line x1={cx + 120} y1={cy - 100} x2="700" y2="220" stroke="#8FB4DE" strokeWidth="1" />
      <rect x="700" y="190" width="190" height="70" rx="6" fill="none" stroke="#8FB4DE" strokeWidth="1" />
      <text x="710" y="208" fontSize="9" fill="#1F2937">Repository implementations,</text>
      <text x="710" y="222" fontSize="9" fill="#1F2937">Identity, AI services,</text>
      <text x="710" y="236" fontSize="9" fill="#1F2937">Notifications, OAuth,</text>
      <text x="710" y="250" fontSize="9" fill="#1F2937">EF Core DbContext, Seed</text>

      <line x1={cx - 70} y1={cy - 55} x2="60" y2="330" stroke="#8FB4DE" strokeWidth="1" />
      <rect x="20" y="300" width="220" height="60" rx="6" fill="none" stroke="#8FB4DE" strokeWidth="1" />
      <text x="30" y="318" fontSize="9" fill="#1F2937">Handlers (Commands & Queries),</text>
      <text x="30" y="332" fontSize="9" fill="#1F2937">DTOs, AutoMapper Mappings,</text>
      <text x="30" y="346" fontSize="9" fill="#1F2937">Validators, Pipeline Behaviours</text>

      <line x1={cx - 30} y1={cy + 10} x2="60" y2="440" stroke="#8FB4DE" strokeWidth="1" />
      <rect x="20" y="410" width="240" height="60" rx="6" fill="none" stroke="#8FB4DE" strokeWidth="1" />
      <text x="30" y="428" fontSize="9" fill="#1F2937">Entities, Enums, Domain Models,</text>
      <text x="30" y="442" fontSize="9" fill="#1F2937">Repository Interfaces</text>
      <text x="30" y="456" fontSize="8.5" fill="#64748B">(no external dependencies — pure core)</text>

      {/* Dependency rule */}
      <line x1={cx} y1="530" x2={cx} y2="512" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#depArrow)" />
      <text x={cx} y="550" textAnchor="middle" fontSize="11" fontWeight="600" fill="#B45309">
        Dependency Rule: outer layers depend on inner layers — never the reverse
      </text>
      <defs>
        <marker id="depArrow" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
          <path d="M0,8 L4,0 L8,8 Z" fill="#F59E0B" />
        </marker>
      </defs>
    </svg>
  );
};

/* ===================== FIVE LAYERS DATA ===================== */
const layers = [
  {
    number: "1",
    name: "Presentation Layer",
    project: "Rafeek.API",
    items: [
      ["Controllers/Version1, /External", "Versioned REST endpoints; external-facing endpoints"],
      ["Routes", "Endpoint route constants / grouping"],
      ["Filters", "Action & exception filters (cross-cutting request handling)"],
      ["Options", "Strongly-typed configuration binding"],
      ["Services", "API-level helper services"],
      ["Program.cs", "App bootstrap, DI wiring, middleware pipeline"],
      ["wwwroot/swagger, appsettings.*.json", "Static assets & environment configuration"],
    ],
    goal: "Expose the system to the outside world over HTTP. Receives requests, delegates to the Application layer via MediatR, returns responses. Contains no business logic.",
  },
  {
    number: "2",
    name: "Application Layer",
    project: "Rafeek.Application",
    items: [
      ["Handlers/<Feature>Handlers", "One folder per feature (Student, Course, GPA, Auth, AI, ...) each with Commands, Query, DTOs, Mappings"],
      ["Common/Behaviours", "MediatR pipeline behaviours (validation, logging, etc.)"],
      ["Common/Exceptions, /Models, /Extensions, /Options", "Shared application-level building blocks"],
      ["Common/Interfaces", "Abstractions Infrastructure/Persistence must implement"],
      ["Mappings", "AutoMapper profiles"],
      ["Localization", "Multi-language resource strings"],
      ["HealthCheck", "Application health-check logic"],
    ],
    goal: "Orchestrate use cases with CQRS (Commands & Queries via MediatR). Holds business workflow logic while depending only on Domain — kept independent of frameworks/DB/UI.",
  },
  {
    number: "3",
    name: "Domain Layer",
    project: "Rafeek.Domain",
    items: [
      ["Entities", "Core business entities (Student, Course, Staff, Department, ...)"],
      ["Enums", "Domain enumerations"],
      ["Models", "Domain value objects / plain models"],
      ["Repositories/Interfaces", "Repository contracts (no implementation)"],
      ["Common/Interfaces", "Cross-entity domain abstractions (e.g. IAuditable)"],
    ],
    goal: "The pure, framework-free core of the system — business rules and entities that everything else depends on. Has zero outward dependencies (the center of the architecture).",
  },
  {
    number: "4",
    name: "Infrastructure Layer",
    project: "Rafeek.Infrastructure",
    items: [
      ["Repositories/Implementations", "Concrete implementations of Domain repository interfaces"],
      ["Identity", "ASP.NET Core Identity integration (users, roles, auth)"],
      ["AI/Prompts", "AI service integration & prompt templates"],
      ["Notifications/Emails, /Sms", "Email & SMS delivery providers"],
      ["OAuth", "External OAuth provider integration"],
      ["DataProtection", "Data protection / encryption services"],
      ["Services, Extensions", "Misc external-service integrations & helper extensions"],
    ],
    goal: "Implement the technical/external concerns (identity, notifications, AI, OAuth) that the Application layer defines interfaces for, without leaking details upward.",
  },
  {
    number: "5",
    name: "Persistence Layer",
    project: "Rafeek.Persistence",
    items: [
      ["RafeekDbContext / RafeekIdentityDbContext", "EF Core database contexts (domain data + identity)"],
      ["Configurations/RafeekConfiguration, /IdentityConfiguration", "Fluent-API entity configurations"],
      ["Migrations/Rafeek, /Identity", "EF Core migration history"],
      ["Seed", "Database seed data"],
    ],
    goal: "Handle all database access and schema concerns via Entity Framework Core, translating Domain entities to/from relational storage.",
  },
];

const LayerCard = ({ layer }: { layer: typeof layers[number] }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col">
    <div className="flex items-center justify-between px-5 py-3 bg-[#0C3C7D]">
      <h4 className="text-sm font-bold text-white">
        {layer.number}. {layer.name.toUpperCase()}
      </h4>
      <span className="text-xs italic text-blue-200">{layer.project}</span>
    </div>
    <div className="p-5 flex-1">
      <div className="space-y-2 mb-4">
        {layer.items.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 text-xs border-b border-slate-100 pb-2 last:border-none">
            <span className="font-semibold text-slate-800">{item[0]}</span>
            <span className="text-slate-500">{item[1]}</span>
          </div>
        ))}
      </div>
      <div className="bg-rafiq-primary-50 border border-rafiq-primary-100 rounded-xl p-3">
        <p className="text-xs italic text-slate-600 leading-relaxed">{layer.goal}</p>
      </div>
    </div>
  </div>
);

/* ===================== TECH STACK TIMELINE ===================== */
const techTimeline = [
  { icon: <Server className="w-6 h-6" />, step: "01 · Entry Point", name: "ASP.NET Core API", desc: "Handles incoming HTTP requests and routes them to controllers.", badge: ".NET 8 · Web API", color: "#3A82F6" },
  { icon: <Code2 className="w-6 h-6" />, step: "02 · Language", name: "C#", desc: "Strongly-typed language powering controllers, services & models.", badge: "C# 12", color: "#1564BF" },
  { icon: <Filter className="w-6 h-6" />, step: "03 · Querying", name: "LINQ", desc: "Filters, joins & projects in-memory or IQueryable data with C# syntax.", badge: "Language-Integrated Query", color: "#7C3AED" },
  { icon: <Boxes className="w-6 h-6" />, step: "04 · ORM", name: "EF Core", desc: "Translates C# LINQ queries into SQL and maps rows back to objects.", badge: "Entity Framework Core 8", color: "#DB2777" },
  { icon: <Database className="w-6 h-6" />, step: "05 · Storage", name: "SQL Server", desc: "Persists application data in a relational, transactional database.", badge: "T-SQL · Relational", color: "#DC2626" },
];

const TechTimeline = () => (
  <div className="bg-[#09090B] rounded-3xl p-8 shadow-lg">
    <div className="grid grid-cols-5 gap-2 relative">
      <div className="absolute top-8 left-[10%] right-[10%] h-px bg-slate-700" />
      {techTimeline.map((t, i) => (
        <div key={i} className="flex flex-col items-center text-center relative">
          <span className="text-[10px] font-mono tracking-wider mb-3" style={{ color: t.color }}>
            {t.step}
          </span>
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-3 relative z-10 border"
            style={{ backgroundColor: `${t.color}22`, borderColor: `${t.color}55`, color: t.color }}
          >
            {t.icon}
          </div>
          <h4 className="text-white font-bold text-sm mb-1">{t.name}</h4>
          <p className="text-slate-400 text-[10px] leading-snug mb-2 px-1">{t.desc}</p>
          <span
            className="text-[9px] px-2 py-1 rounded-full border"
            style={{ borderColor: `${t.color}55`, color: t.color }}
          >
            {t.badge}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ===================== KEY TOOLS & PACKAGES ===================== */
const keyTools = [
  "MediatR", "FluentValidation", "AutoMapper", "Entity Framework Core",
  "ASP.NET Core Identity", "JWT Bearer Auth", "Swagger / OpenAPI",
  "IStringLocalizer", "Serilog", "IP Rate Limiting",
];

const KeyToolsGrid = () => (
  <div className="flex flex-wrap justify-center gap-3">
    {keyTools.map((tool, i) => (
      <span
        key={i}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-700"
      >
        <Package className="w-4 h-4 text-rafiq-primary-500" />
        {tool}
      </span>
    ))}
  </div>
);

/* ===================== HTTP REQUEST LIFECYCLE (safe HTML version) ===================== */
const lifecycleSteps = [
  { label: "Client", sub: "Sends HTTP request", cat: "entry" },
  { label: "Server", sub: "Accepts connection", cat: "entry" },
  { label: "Rate Limiting → Security Headers → CORS → Static Files → Routing", sub: "Gateway & middleware pipeline", cat: "gateway" },
  { label: "Authentication", sub: "Verifies identity — checks JWT expiry, refreshes via JWT service if needed", cat: "auth" },
  { label: "Role Filter", sub: "Checks permissions", cat: "auth" },
  { label: "Map to Controller", sub: "Routes to Query, Command, or File Uploader action", cat: "dispatch" },
  { label: "Validator", sub: "Validates payload — invalid requests throw an exception and short-circuit here", cat: "decision" },
  { label: "Handler", sub: "Executes the use case via MediatR", cat: "business" },
  { label: "Unit of Work → Repositories → DB", sub: "Persists / retrieves data, logged by DB interceptor", cat: "business" },
  { label: "Map to DTO", sub: "Formats the response, hiding internal DB structures", cat: "business" },
  { label: "Return API Response", sub: "Sends the final HTTP status + payload to the client", cat: "final" },
];

const categoryStyles: Record<string, string> = {
  entry: "bg-slate-100 border-slate-300 text-slate-800",
  gateway: "bg-green-50 border-green-300 text-green-800",
  auth: "bg-purple-50 border-purple-300 text-purple-800",
  dispatch: "bg-blue-50 border-blue-300 text-blue-800",
  decision: "bg-amber-50 border-amber-300 text-amber-800",
  business: "bg-emerald-50 border-emerald-300 text-emerald-800",
  final: "bg-slate-100 border-slate-300 text-slate-800",
};

const HttpLifecycleFlow = () => (
  <div className="max-w-2xl mx-auto">
    {lifecycleSteps.map((step, i) => (
      <div key={i}>
        <div className={`rounded-xl border px-5 py-3 text-center ${categoryStyles[step.cat]}`}>
          <p className="font-semibold text-sm">{step.label}</p>
          <p className="text-xs opacity-80 mt-0.5">{step.sub}</p>
        </div>
        {i < lifecycleSteps.length - 1 && (
          <div className="flex justify-center py-1">
            <span className="text-slate-400 text-lg">↓</span>
          </div>
        )}
      </div>
    ))}
  </div>
);

/* ===================== BACKEND PAGE ===================== */
const BackendPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">
        Backend Architecture
      </h2>
      <p className="text-lg text-slate-500 text-center mb-10 max-w-4xl mx-auto">
        Project Architecture · HTTP Request Lifecycle · Key Tools & Packages
      </p>

      {/* ===================== WHY CLEAN ARCHITECTURE ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Why Clean Architecture?
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        {whyCleanArchitecture.map((w, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md">
            <div className="text-rafiq-primary-500 mb-3">{w.icon}</div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">{w.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>

      {/* ===================== ONION DIAGRAM ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Clean Architecture — .NET Solution Structure
      </h3>
      <div className="bg-[#0A0E1A] p-8 rounded-3xl shadow-lg mb-20 flex justify-center">
  <img
    src="public\clean-architecture.jpeg"
    alt="Clean Architecture Diagram"
    className="w-full max-w-5xl h-auto object-contain"
  />
</div>

      {/* ===================== THE FIVE LAYERS ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        The Five Layers
      </h3>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <LayerCard layer={layers[0]} />
        <LayerCard layer={layers[1]} />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <LayerCard layer={layers[2]} />
        <LayerCard layer={layers[3]} />
      </div>
      <div className="mb-20">
        <LayerCard layer={layers[4]} />
      </div>

      {/* ===================== TECH STACK TIMELINE ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Core Backend Technologies
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-3xl mx-auto mb-8">
        How a request moves through the stack — from <strong>ASP.NET Core</strong> down to <strong>SQL Server</strong>.
      </p>
      <div className="bg-[#0A0E1A] p-8 rounded-3xl shadow-lg mb-20 flex justify-center">
  <div className="bg-[#09090B] p-8 rounded-3xl shadow-lg mb-20 flex justify-center">
  <img
    src="public\backend-technologies.jpeg"
    alt="Core Backend Technologies"
    className="w-full max-w-6xl h-auto object-contain"
  />
</div>
</div>

      {/* ===================== KEY TOOLS & PACKAGES ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Key Tools & Packages
      </h3>
      <div className="mb-20">
        <KeyToolsGrid />
      </div>

      {/* ===================== REQUEST WALKTHROUGH ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
        Anatomy of a Request: Get Student Study Plan
      </h3>

      {/* Step 1: Presentation */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-6">
        <h4 className="font-semibold text-slate-900 mb-2">1. Presentation Layer</h4>
        <p className="text-sm text-slate-600 mb-4">
          The server receives the HTTP request and filters it through middleware first: Security Headers
          (prevents XSS & clickjacking), IP Rate Limiting (blocks DoS / API abuse), CORS (verifies trusted
          origins), and Authentication & Authorization (validates the JWT and applies role filters). Once
          secured, the controller binds the incoming JSON into a structured request object.
        </p>
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto font-mono text-sm">
          <CodeLine parts={[
            { text: "public", color: "#C084FC" }, { text: " class " },
            { text: "GetStudyPlanByStudentQueryPaginated", color: "#60A5FA" },
            { text: " : IRequest<PaginatedResult<StudyPlanDto>>" },
          ]} />
          <CodeLine parts={[{ text: "{" }]} />
          <CodeLine parts={[
            { text: "    public", color: "#C084FC" }, { text: " int PageNumber { get; set; } = 1;" },
          ]} />
          <CodeLine parts={[
            { text: "    public", color: "#C084FC" }, { text: " int PageSize { get; set; } = 20;" },
          ]} />
          <CodeLine parts={[
            { text: "    public", color: "#C084FC" }, { text: " Guid StudentId { get; set; }" },
          ]} />
          <CodeLine parts={[{ text: "}" }]} />
        </div>
      </div>

      {/* Step 2: Application */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-6">
        <h4 className="font-semibold text-slate-900 mb-2">2. Application Layer</h4>
        <p className="text-sm text-slate-600 mb-4">
          The request passes through a validation pipeline first — checking that a Student ID is provided
          and exists. If validation fails, the process short-circuits and returns an error immediately. If it
          passes, MediatR routes it to the Handler, which coordinates the business workflow.
        </p>
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto mb-4 font-mono text-sm">
          <CodeLine parts={[{ text: "// Validator", color: "#6B7280" }]} />
          <CodeLine parts={[
            { text: "RuleFor", color: "#60A5FA" }, { text: "(x => x.StudentId)" },
          ]} />
          <CodeLine parts={[
            { text: "    .NotEmpty().WithMessage(_localizer[LocalizationKeys.Student.StudentIdRequired.Value])" },
          ]} />
          <CodeLine parts={[
            { text: "    .MustAsync(StudentExists).WithMessage(_localizer[LocalizationKeys.Student.StudentsNotFound.Value]);" },
          ]} />
        </div>
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto font-mono text-sm">
          <CodeLine parts={[{ text: "// Handler", color: "#6B7280" }]} />
          <CodeLine parts={[
            { text: "var plans = " }, { text: "await", color: "#C084FC" }, { text: " _ctx.StudyPlanRepository.GetAll()" },
          ]} />
          <CodeLine parts={[{ text: "    .AsNoTracking()" }]} />
          <CodeLine parts={[{ text: "    .Where(x => x.StudentId == request.StudentId)" }]} />
          <CodeLine parts={[{ text: "    .OrderByDescending(x => x.CreatedAt)" }]} />
          <CodeLine parts={[{ text: "    .ProjectTo<StudyPlanDto>(_mapper.ConfigurationProvider)" }]} />
          <CodeLine parts={[{ text: "    .PaginatedListAsync(request.PageNumber, request.PageSize);" }]} />
        </div>
      </div>

      {/* Step 3: Infrastructure & Persistence */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-6">
        <h4 className="font-semibold text-slate-900 mb-2">3. Data Access & Persistence</h4>
        <p className="text-sm text-slate-600 mb-4">
          The Application layer calls a repository interface (<code className="text-xs bg-slate-100 px-1 rounded">IStudyPlanRepository</code>)
          defined in Domain. Infrastructure implements this interface, translating the request into EF Core /
          SQL queries against the database.
        </p>
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto mb-4 font-mono text-sm">
          <CodeLine parts={[{ text: "// Domain — contract only", color: "#6B7280" }]} />
          <CodeLine parts={[
            { text: "public", color: "#C084FC" }, { text: " interface " },
            { text: "IStudyPlanRepository", color: "#60A5FA" },
            { text: " : IGenericRepository<StudyPlan, Guid> { }" },
          ]} />
        </div>
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto font-mono text-sm">
          <CodeLine parts={[{ text: "// Infrastructure — implementation", color: "#6B7280" }]} />
          <CodeLine parts={[
            { text: "public", color: "#C084FC" }, { text: " class " },
            { text: "StudyPlanRepository", color: "#60A5FA" },
            { text: " : BaseEntityRepository<StudyPlan, Guid>, IStudyPlanRepository" },
          ]} />
          <CodeLine parts={[{ text: "{" }]} />
          <CodeLine parts={[
            { text: "    public StudyPlanRepository(IRafeekDbContext dbContext) : base(dbContext) { }" },
          ]} />
          <CodeLine parts={[{ text: "}" }]} />
        </div>
      </div>

      {/* Step 4: Standardized Response */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-6">
        <h4 className="font-semibold text-slate-900 mb-2">4. Standardized Response (Result Pattern)</h4>
        <p className="text-sm text-slate-600 mb-4">
          Retrieved data is mapped to a DTO to hide internal database structures, then wrapped in a generic
          <code className="text-xs bg-slate-100 px-1 rounded mx-1">ApiResponse&lt;TData&gt;</code>
          object to standardize how successes and errors are formatted across every endpoint.
        </p>
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto font-mono text-sm">
          <CodeLine parts={[
            { text: "public", color: "#C084FC" }, { text: " record " },
            { text: "ApiResponse", color: "#60A5FA" }, { text: "<TData>" },
          ]} />
          <CodeLine parts={[{ text: "{" }]} />
          <CodeLine parts={[{ text: "    public bool Success { get; set; }" }]} />
          <CodeLine parts={[{ text: "    public IDictionary<string, string[]> Errors { get; set; } = new();" }]} />
          <CodeLine parts={[{ text: "    public TData? Data { get; set; }" }]} />
          <CodeLine parts={[{ text: "    public string? Message { get; set; }" }]} />
          <CodeLine parts={[{ text: "    public int StatusCode { get; set; }" }]} />
          <CodeLine parts={[{ text: "" }]} />
          <CodeLine parts={[
            { text: "    public", color: "#C084FC" },
            { text: " static ApiResponse<TData> Ok(TData? data, string? message = null, int statusCode = 200) => ..." },
          ]} />
          <CodeLine parts={[
            { text: "    public", color: "#C084FC" },
            { text: " static ApiResponse<TData> Error(string? message = null, int statusCode = 400) => ..." },
          ]} />
          <CodeLine parts={[{ text: "}" }]} />
        </div>
      </div>

      {/* Step 5: Sending the response */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md mb-20">
        <h4 className="font-semibold text-slate-900 mb-2">5. Sending the HTTP Response</h4>
        <p className="text-sm text-slate-600 mb-4">
          The controller inspects the result. If successful, it translates it into a <strong>200 OK</strong>{" "}
          containing the study plan data. If a validation or business rule failed, it returns a{" "}
          <strong>400</strong> or <strong>404</strong> instead.
        </p>
        <div className="bg-[#09090B] p-6 rounded-xl overflow-x-auto font-mono text-sm">
          <CodeLine parts={[{ text: "[HttpGet]" }]} />
          <CodeLine parts={[{ text: "[RoleAuthorize(nameof(UserType.Student))]" }]} />
          <CodeLine parts={[{ text: "[Route(ApiRoutes.StudyPlan.GetByStudent)]" }]} />
          <CodeLine parts={[{ text: "[ProducesResponseType(StatusCodes.Status200OK)]" }]} />
          <CodeLine parts={[{ text: "[ProducesResponseType(StatusCodes.Status400BadRequest)]" }]} />
          <CodeLine parts={[
            { text: "public", color: "#C084FC" }, { text: " async Task<IActionResult> GetStudyPlansByStudent(Guid studentId)" },
          ]} />
          <CodeLine parts={[{ text: "{" }]} />
          <CodeLine parts={[
            { text: "    var result = " }, { text: "await", color: "#C084FC" },
            { text: " _mediator.Send(new GetStudyPlanByStudentQueryPaginated { StudentId = studentId });" },
          ]} />
          <CodeLine parts={[{ text: "    return Ok(result);" }]} />
          <CodeLine parts={[{ text: "}" }]} />
        </div>
      </div>

      {/* ===================== HTTP REQUEST LIFECYCLE ===================== */}
      <h3 className="text-3xl font-semibold text-slate-800 mb-4 text-center">
        HTTP Request Lifecycle
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-3xl mx-auto mb-8">
        End-to-end path of a request — from the client, through middleware and security, into the
        Application layer, down to the database, and back out as a formatted response.
      </p>
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 mb-6">
        <HttpLifecycleFlow />
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 mb-4">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-200 border border-slate-300" /> Entry / exit</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-50 border border-green-300" /> Gateway & middleware</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-purple-50 border border-purple-300" /> Auth & security</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-blue-50 border border-blue-300" /> Controller dispatch</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-50 border border-amber-300" /> Decision point</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-50 border border-emerald-300" /> Business logic</span>
      </div>
    </div>
  </PremiumSlideTemplate>
);

/* =========================================================================
   ADD THESE ICONS to your existing lucide-react import line at the top of
   App.tsx (alongside Code2, Layers, Zap, ... Search, Users, PenTool,
   CheckCircle2). Do NOT create a second import line for lucide-react.
   ========================================================================= */
// GraduationCap, Award, Sparkles, Target, TrendingUp

/* ===================== CONCLUSION HIGHLIGHTS DATA ===================== */
const conclusionHighlights = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "A Real Problem, Clearly Defined",
    desc: "85% of surveyed students reported confusion around regulations and a clear need for a smart system — the exact gap Rafiq was built to close.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Intelligence, Not Just Information",
    desc: "Unlike MYU, D2L, or Canvas, Rafiq doesn't just display data — it validates prerequisites, predicts risk, and recommends the next right step.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Built for the Whole Journey",
    desc: "From first login to graduation eligibility, every actor — student, advisor, instructor, and admin — has a dedicated, purpose-built experience.",
  },
];

/* ===================== TEAM DATA ===================== */
const teamMembers = [
  "Fatma Mohamed Abu Elfadl",
  "Shahd Mekkawy Ibrahim",
  "Habiba Mohamed Mamdouh",
  "Ahmed Abdelaleem Tawfiq",
  "Mariam Mohamed Khalil",
  "Kamel Mohamed Kamel",
  "Nour Ahmed Elsayed",
  "Moaz Mostafa Ibrahim",
  "Nouran Mohamed Amin",
  "Mohamed Saber Ahmed",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

/* Deterministic color from name so avatars stay stable across renders */
const avatarPalette = ["#1564BF", "#0C3C7D", "#3A82F6", "#164E8C", "#2563EB"];
const colorForName = (name: string) => {
  const sum = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return avatarPalette[sum % avatarPalette.length];
};

/* ===================== TEAM MEMBER CARD ===================== */
const TeamMemberCard = ({ name }: { name: string }) => (
  <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
      style={{ backgroundColor: colorForName(name) }}
    >
      {getInitials(name)}
    </div>
    <span className="text-xs font-medium text-slate-700 leading-snug">{name}</span>
  </div>
);

/* ===================== MENTOR CARD ===================== */
const MentorCard = ({
  name,
  role,
  icon,
}: {
  name: string;
  role: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
    <div className="w-14 h-14 rounded-2xl bg-rafiq-primary-50 border border-rafiq-primary-100 text-rafiq-primary-500 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold tracking-wide text-rafiq-primary-600 uppercase mb-1">
        {role}
      </p>
      <h4 className="font-semibold text-slate-900">{name}</h4>
    </div>
  </div>
);

/* ===================== CONCLUSION & TEAM PAGE ===================== */
const ConclusionPage = () => (
  <PremiumSlideTemplate>
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">
        Conclusion & Team
      </h2>
      <p className="text-lg text-slate-500 text-center mb-16 max-w-3xl mx-auto">
        Rafiq turns academic advising from a once-a-semester bottleneck into a
        24/7 companion — helping students graduate on time, with less
        confusion and more confidence.
      </p>

      {/* ===================== CONCLUSION SUMMARY ===================== */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm mb-8">
        <p className="text-sm text-slate-600 leading-relaxed">
          Traditional university systems and even modern LMS platforms like
          D2L and Canvas were never designed to guide students — only to
          record and deliver. Rafiq closes that gap. By combining a unified
          academic profile, conflict-free smart scheduling, AI-driven course
          recommendations, and a 24/7 advising chatbot, it replaces guesswork
          with clarity at every stage of the academic journey. The result is a
          platform that doesn't just show students where they stand — it
          actively helps them get where they're going, while giving advisors
          and administrators the tools to support students before problems
          become setbacks.
        </p>
      </div>

      {/* Highlight cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {conclusionHighlights.map((h, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="text-rafiq-primary-500 mb-3">{h.icon}</div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">{h.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>

      {/* ===================== SUPERVISION ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
        With Thanks To
      </h3>
      <div className="grid md:grid-cols-2 gap-5 mb-16 max-w-3xl mx-auto">
        <MentorCard
          name="Assoc. Prof. Rasha Sakr"
          role="Supervisor"
          icon={<GraduationCap className="w-6 h-6" />}
        />
        <MentorCard
          name="Eng. Mahmoud Abbas"
          role="Teaching Assistant"
          icon={<Award className="w-6 h-6" />}
        />
      </div>

      {/* ===================== TEAM ===================== */}
      <h3 className="text-2xl font-semibold text-slate-800 mb-2 text-center">
        The Team Behind Rafiq
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-8">
        A graduation project by the SWE & AI Department, Faculty of Computers
        and Information Sciences, Mansoura University.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
        {teamMembers.map((name, i) => (
          <TeamMemberCard key={i} name={name} />
        ))}
      </div>

      {/* ===================== CLOSING STATEMENT ===================== */}
      <div className="bg-rafiq-primary-50 p-6 rounded-2xl border border-rafiq-primary-100 shadow-sm max-w-3xl mx-auto text-center">
        <p className="text-sm text-slate-700 leading-relaxed">
          Thank you for following Rafiq's journey — from a survey of
          frustrated students to a working, intelligent academic companion.
          We're ready for your questions.
        </p>
      </div>
    </div>
  </PremiumSlideTemplate>
);


/* =========================================================================
   THE MASTER APP CONTROLLER
   This decides whether to show the Landing Mode OR the Presentation Mode
   ========================================================================= */
export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  // SCENARIO 1: LANDING MODE
  // Only the Hero is visible. No menu. No mode pages.
  if (currentPage === 'landing') {
    return (
      <main className="min-h-screen w-full bg-white">
        <HeroSection onStartPresentation={() => setCurrentPage('business')} />
      </main>
    );
  }

  // SCENARIO 2: PRESENTATION MODE
  // The Hero is completely gone. The Menu appears, and the slides begin.
  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 font-sans">
      
      {/* The Floating Navigation Controller */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onRevert={() => setCurrentPage('landing')} 
      />
      
      {/* The Slide Router */}
      {currentPage === 'business' && <BusinessPage />}
      {currentPage === 'ui-ux' && <UiUxPage />}
      {currentPage === 'frontend' && <FrontendPage />}
      {currentPage === 'flutter' && <FlutterPage />}
      {currentPage === 'backend' && <BackendPage />}
      {currentPage === 'ai' && <PlaceholderPage title="AI Intelligence" />}
      {currentPage === 'conclusion' && <ConclusionPage />}
      
    </div>
  );
}
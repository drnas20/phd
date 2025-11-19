
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Smartphone, Globe, ArrowRight, CheckCircle, TrendingUp, Monitor, Wifi } from 'lucide-react';

// --- DEMOGRAPHICS CHART ---
export const SurfaceCodeDiagram: React.FC = () => {
  // Representing Demographics (Figures 5, 11, 12 in PDF)
  const [activeTab, setActiveTab] = useState<'gender' | 'device' | 'internet'>('gender');
  
  const renderGender = () => (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full animate-fade-in">
        <div className="relative w-56 h-56">
            <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1a1a1a" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="50.24" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#C5A059" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="201" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-serif font-bold text-stone-800">395</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">Respondents</span>
            </div>
        </div>
        <div className="space-y-4 min-w-[200px]">
            <div className="flex items-center justify-between p-3 bg-stone-50 rounded border border-stone-100">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-stone-900 rounded-full"></div><span className="text-sm font-medium">Male</span></div>
                <span className="text-sm font-bold">80.3%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-stone-50 rounded border border-stone-100">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-nobel-gold rounded-full"></div><span className="text-sm font-medium">Female</span></div>
                <span className="text-sm font-bold">19.7%</span>
            </div>
        </div>
    </div>
  );

  const renderDevice = () => (
    <div className="flex flex-col items-center justify-center w-full animate-fade-in pt-4">
        <div className="flex gap-8 items-end mb-6">
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 bg-nobel-gold rounded-t-sm relative group" style={{ height: '187px' }}>
                     <div className="absolute -top-8 w-full text-center font-bold text-stone-800">94%</div>
                     <Smartphone className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white opacity-50" />
                </div>
                <span className="text-xs font-bold text-stone-600">Mobile</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 bg-stone-300 rounded-t-sm relative" style={{ height: '12px' }}>
                     <div className="absolute -top-8 w-full text-center font-bold text-stone-500">6%</div>
                     <Monitor className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-stone-300 opacity-50 scale-50" />
                </div>
                <span className="text-xs font-bold text-stone-400">Other</span>
            </div>
        </div>
        <p className="text-xs text-stone-500 max-w-xs text-center">
            93.7% of Yemeni users access the internet via mobile devices, driving a mobile-first market.
        </p>
    </div>
  );

  const renderInternet = () => (
    <div className="flex flex-col w-full gap-4 animate-fade-in">
         <div className="space-y-3">
            <div className="w-full">
                <div className="flex justify-between text-sm mb-1"><span className="font-medium text-stone-700">Home ADSL</span> <span className="font-bold">40.0%</span></div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden"><div className="h-full bg-stone-800 w-[40%]"></div></div>
            </div>
            <div className="w-full">
                <div className="flex justify-between text-sm mb-1"><span className="font-medium text-stone-700">Mobile Network (3G/4G)</span> <span className="font-bold">37.7%</span></div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden"><div className="h-full bg-nobel-gold w-[37.7%]"></div></div>
            </div>
            <div className="w-full">
                <div className="flex justify-between text-sm mb-1"><span className="font-medium text-stone-700">Internet Networks</span> <span className="font-bold">17.0%</span></div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden"><div className="h-full bg-stone-400 w-[17%]"></div></div>
            </div>
         </div>
         <p className="text-xs text-stone-400 mt-2 italic">
            Internet infrastructure challenges (Median 9 Mbps mobile speed) heavily influence usage patterns.
         </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8 h-[420px]">
      <div className="flex justify-between items-center w-full mb-6">
          <h3 className="font-serif text-xl text-stone-800">Demographics</h3>
          <div className="flex bg-stone-100 rounded-lg p-1 gap-1">
              <button onClick={() => setActiveTab('gender')} className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'gender' ? 'bg-white shadow text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>Gender</button>
              <button onClick={() => setActiveTab('device')} className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'device' ? 'bg-white shadow text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>Device</button>
              <button onClick={() => setActiveTab('internet')} className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'internet' ? 'bg-white shadow text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>Internet</button>
          </div>
      </div>
      
      <div className="w-full flex-1 flex items-center justify-center">
          {activeTab === 'gender' && renderGender()}
          {activeTab === 'device' && renderDevice()}
          {activeTab === 'internet' && renderInternet()}
      </div>
    </div>
  );
};

// --- CONCEPTUAL FRAMEWORK DIAGRAM ---
export const TransformerDecoderDiagram: React.FC = () => {
  // Interactive Flowchart for the Conceptual Framework (Figure 4)
  // Including Beta coefficients from Table 54 (Page 145) and Table 55 (Page 146)
  
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
      { id: 'SME', label: 'Social Media Engagement', x: 10, y: 50, color: 'bg-stone-800 text-white', type: 'Independent' },
      { id: 'SC', label: 'Social Cognition', x: 35, y: 20, color: 'bg-white border-stone-800', type: 'Mediator' },
      { id: 'AW', label: 'Awareness', x: 35, y: 80, color: 'bg-white border-stone-800', type: 'Mediator' },
      { id: 'US', label: 'Usability', x: 60, y: 30, color: 'bg-white border-stone-800', type: 'Mediator' },
      { id: 'OBP', label: 'Business Perception', x: 60, y: 70, color: 'bg-white border-stone-800', type: 'Mediator' },
      { id: 'PV', label: 'Price Value', x: 85, y: 50, color: 'bg-nobel-gold text-white border-nobel-gold', type: 'Determinant' },
      { id: 'AI', label: 'Adoption Intention', x: 110, y: 50, color: 'bg-stone-900 text-white', type: 'Outcome' },
  ];

  // Standardized Regression Weights (Table 55, Page 172)
  const connections = [
     { from: 'SME', to: 'SC', label: 'β=0.29', strong: false },  // Table 55
     { from: 'SC', to: 'AW', label: 'β=0.67', strong: true },    // Table 55
     { from: 'AW', to: 'OBP', label: 'β=0.72', strong: true },   // Table 55
     { from: 'AW', to: 'US', label: 'β=1.03', strong: true },    // Table 55 (Standardized > 1 possible in SEM)
     { from: 'US', to: 'PV', label: 'β=0.31', strong: false },   // Table 55
     { from: 'OBP', to: 'PV', label: 'β=0.59', strong: true },   // Table 55
     { from: 'PV', to: 'AI', label: 'β=0.75', strong: true },    // Table 55
  ];

  return (
    <div className="flex flex-col items-center p-4 md:p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8 w-full overflow-x-auto">
      <h3 className="font-serif text-xl mb-2 text-stone-900">Conceptual Framework (SEM)</h3>
      <p className="text-sm text-stone-600 mb-8 text-center max-w-md">
        Path diagram with Standardized Regression Weights (β). Note the strong path from Awareness to Usability and Perception.
      </p>

      <div className="relative w-[800px] h-[400px] bg-white rounded-lg shadow-inner border border-stone-200 p-4">
        
        {/* Render Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#a8a29e" />
                </marker>
            </defs>
            {connections.map((conn, i) => {
                const start = nodes.find(n => n.id === conn.from);
                const end = nodes.find(n => n.id === conn.to);
                if (!start || !end) return null;
                
                const x1 = start.x * 7; 
                const y1 = start.y * 3.5 + 20;
                const x2 = end.x * 7;
                const y2 = end.y * 3.5 + 20;

                return (
                    <g key={i}>
                        <line 
                            x1={x1 + 50} y1={y1} 
                            x2={x2 - 50} y2={y2} 
                            stroke={conn.strong ? "#C5A059" : "#a8a29e"}
                            strokeWidth={conn.strong ? "3" : "1.5"} 
                            markerEnd="url(#arrowhead)" 
                            strokeDasharray={conn.strong ? "0" : "5,5"}
                        />
                        <rect x={(x1+x2)/2 - 20} y={(y1+y2)/2 - 18} width="40" height="16" fill="white" rx="4" />
                        <text x={(x1+x2)/2} y={(y1+y2)/2 - 6} fill={conn.strong ? "#1a1a1a" : "#78716c"} fontSize="11" fontWeight="bold" textAnchor="middle">{conn.label}</text>
                    </g>
                );
            })}
        </svg>

        {/* Render Nodes */}
        {nodes.map((node) => (
            <motion.div
                key={node.id}
                className={`absolute w-32 h-16 flex flex-col items-center justify-center text-center text-xs font-bold rounded shadow-md border-2 z-10 cursor-pointer transition-all duration-300 ${node.color} ${hoveredNode === node.id ? 'scale-110 ring-4 ring-nobel-gold/20' : ''}`}
                style={{ 
                    left: `${node.x * 7}px`, 
                    top: `${node.y * 3.5}px`,
                    transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
            >
                <span>{node.label}</span>
            </motion.div>
        ))}
      </div>
      
      <div className="mt-4 flex gap-6 text-xs text-stone-500">
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-stone-800"></div> Independent</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-white border border-stone-800"></div> Mediator</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-nobel-gold"></div> Key Determinant</span>
          <span className="flex items-center gap-2"><div className="w-8 h-0.5 bg-nobel-gold"></div> Strong Path (β > 0.5)</span>
      </div>
    </div>
  );
};

// --- FINDINGS / HYPOTHESES ---
export const PerformanceMetricDiagram: React.FC = () => {
    
    // Data from Table 60 (Page 182) and Table 61 (Page 183)
    const hypotheses = [
        { id: 'H1', text: 'Social Media -> Social Cognition', beta: '0.290', p: '<0.05', result: 'Supported' },
        { id: 'H2', text: 'Social Cognition -> Awareness', beta: '0.667', p: '<0.01', result: 'Supported' },
        { id: 'H3', text: 'Awareness -> Business Perception', beta: '0.721', p: '<0.01', result: 'Supported' },
        { id: 'H4', text: 'Awareness -> Usability', beta: '1.028', p: '<0.01', result: 'Supported' },
        { id: 'H5', text: 'Usability -> Price Value', beta: '0.593', p: '<0.01', result: 'Supported' },
        { id: 'H6', text: 'Business Perception -> Price Value', beta: '0.311', p: '<0.05', result: 'Supported' },
        { id: 'H7', text: 'Price Value -> Adoption Intention', beta: '0.746', p: '<0.01', result: 'Strongly Supported' },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-8 items-start p-8 bg-stone-900 text-stone-100 rounded-xl my-8 border border-stone-800 shadow-lg">
            <div className="flex-1">
                <h3 className="font-serif text-xl mb-2 text-nobel-gold">Hypothesis Testing Results</h3>
                <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                    All seven proposed hypotheses were supported by the data. The model explains a significant variance in Adoption Intention, with <strong>Price Value</strong> acting as the primary direct driver, heavily influenced by Business Perception and Usability.
                </p>
                <div className="space-y-3">
                    {hypotheses.map((h, i) => (
                        <motion.div 
                            key={h.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between p-3 bg-stone-800/50 rounded border border-stone-700/50 hover:bg-stone-800 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-nobel-gold bg-nobel-gold/10 px-2 py-1 rounded min-w-[30px] text-center">{h.id}</span>
                                <span className="text-sm text-stone-300">{h.text}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right hidden sm:block">
                                    <div className="text-xs text-stone-400">β = {h.beta}</div>
                                </div>
                                <CheckCircle size={16} className="text-green-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="w-full md:w-72 flex flex-col justify-center items-center bg-stone-800/30 rounded-xl p-6 border border-stone-700 h-full">
                <TrendingUp size={48} className="text-nobel-gold mb-4" />
                <h4 className="font-serif text-lg text-center mb-2">Primary Adoption Driver</h4>
                <div className="text-3xl font-bold text-white mb-1">Price Value</div>
                <div className="text-sm text-nobel-gold mb-4">β = 0.746 (p &lt; 0.001)</div>
                <p className="text-xs text-center text-stone-400 leading-relaxed">
                    Yemeni consumers are highly price-sensitive. The perception that online shopping offers better value for money is the strongest predictor of their intention to adopt it.
                </p>
            </div>
        </div>
    )
}

import React from 'react';

const Animation = () => {
  // Icons that better match the reference image
  const IconChart = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const IconPie = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v10l8-4" />
    </svg>
  );

  const IconTriangle = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l9 18H3l9-18z" />
    </svg>
  );

  const IconPlay = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  const IconInfinity = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.5 12c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5c-1.5 0-2.8-.7-3.7-1.8L8.5 12l1.8-1.8c.9-1.1 2.2-1.8 3.7-1.8" />
    </svg>
  );

  const IconSquares = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" strokeWidth={1.5} />
      <rect x="14" y="3" width="7" height="7" strokeWidth={1.5} />
      <rect x="14" y="14" width="7" height="7" strokeWidth={1.5} />
      <rect x="3" y="14" width="7" height="7" strokeWidth={1.5} />
    </svg>
  );

  const IconTerminal = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <path d="M6 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} fill="none" stroke="currentColor" />
      <path d="M12 16h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} fill="none" stroke="currentColor" />
    </svg>
  );

  const cards = [
    // Row 1
    { id: 1, icon: <IconPie />, active: false, position: { gridRow: 1, gridColumn: 2 } },
    
    // Row 2
    { id: 2, icon: <IconPie />, active: false, position: { gridRow: 2, gridColumn: 1 } },
    { id: 3, icon: <IconSquares />, active: false, position: { gridRow: 2, gridColumn: 3 } },
    { id: 4, icon: <IconChart />, active: false, position: { gridRow: 2, gridColumn: 4 } },
    
    // Row 3
    { id: 5, icon: <IconTriangle />, active: false, position: { gridRow: 3, gridColumn: 1 } },
    { id: 6, icon: <IconPlay />, active: true, position: { gridRow: 3, gridColumn: 2 }, label: 'Payments' },
    { id: 7, icon: <IconInfinity />, active: false, position: { gridRow: 3, gridColumn: 3 } },
    { id: 8, icon: <IconSquares />, active: false, position: { gridRow: 3, gridColumn: 4 } },
    
    // Row 4
    { id: 9, icon: <IconTriangle />, active: false, position: { gridRow: 4, gridColumn: 2 } },
    
    // Row 5
    { id: 10, icon: <IconTerminal />, active: true, position: { gridRow: 5, gridColumn: 2 }, label: 'Terminal' },
    
    // Row 6
    { id: 11, icon: <IconSquares />, active: false, position: { gridRow: 6, gridColumn: 1 } },
    { id: 12, icon: <IconSquares />, active: false, position: { gridRow: 6, gridColumn: 2 } },
    
    // Row 7
    { id: 13, icon: <IconSquares />, active: false, position: { gridRow: 7, gridColumn: 1 } },
    { id: 14, icon: <IconSquares />, active: false, position: { gridRow: 7, gridColumn: 2 } },
    { id: 15, icon: <IconSquares />, active: false, position: { gridRow: 7, gridColumn: 3 } },
  ];

  const ConnectorLine = () => (
    <svg 
      className="absolute pointer-events-none z-10" 
      style={{ 
        left: '50%', 
        top: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '400px', 
        height: '300px' 
      }}
      viewBox="0 0 400 300"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </defs>
      <path
        d="M 80 120 Q 120 140 160 160 L 160 180"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        className="animate-pulse-slow"
      >
        <animate attributeName="stroke-dasharray" values="0,200;100,200;200,200" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="0;-100;-200" dur="3s" repeatCount="indefinite" />
      </path>
    </svg>
  );

  const ConnectCard = () => (
    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 animate-float">
      <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100 flex items-center space-x-3 hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
        <div className="flex -space-x-1">
          <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <span className="text-gray-700 font-semibold text-sm">Connect</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center relative overflow-hidden">
      <ConnectCard />
      
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-4 gap-3 relative scale-75" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative"
              style={{
                gridRow: card.position.gridRow,
                gridColumn: card.position.gridColumn,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`
                w-16 h-16 rounded-xl border transition-all duration-700 ease-out
                flex flex-col items-center justify-center cursor-pointer relative overflow-hidden
                transform group-hover:-translate-y-3 group-hover:scale-110 group-hover:rotate-2
                ${card.active 
                  ? 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 border-transparent shadow-2xl shadow-blue-500/40 animate-pulse-slow' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 hover:border-transparent'
                }
                before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500
                after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-transparent after:via-white/10 after:to-white/20 after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-700
              `}>
                {/* Animated background particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-4 right-3 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
                </div>
                
                <div className={`
                  transition-all duration-500 z-10 relative transform group-hover:scale-110
                  ${card.active ? 'text-white drop-shadow-lg' : 'text-gray-400 group-hover:text-white group-hover:drop-shadow-lg'}
                `}>
                  {card.icon}
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-transparent via-white/20 to-transparent transition-all duration-1000 ease-out transform -skew-y-12"></div>
              </div>
              
              {card.label && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded-lg shadow-lg border border-gray-100 backdrop-blur-sm">
                    {card.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animation;
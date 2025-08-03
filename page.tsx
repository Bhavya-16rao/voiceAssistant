// import Image from "next/image";
// import styles from "./page.module.css";
// import WhisperSTT from './components/WhisperSTT';
// export const runtime = 'edge';

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to My Voice Assistant</h1>
//       <WhisperSTT />
//     </div>
//   );
// }


import Image from "next/image";
import styles from "./page.module.css";
import WhisperSTT from './components/WhisperSTT';

export const runtime = 'edge';

export default function Home() {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
    pointerEvents: 'none',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '3rem',
    textShadow: '0 4px 20px rgba(255, 255, 255, 0.4)',
    background: 'linear-gradient(135deg, #ffffff, #e0e7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative',
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    padding: '3rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    position: 'relative',
    zIndex: 1,
    maxWidth: '600px',
    width: '100%',
    transition: 'all 0.3s ease',
  };

  const orb1Style: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    top: '10%',
    left: '10%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transform: 'translateY(0)',
    animation: 'float1 6s ease-in-out infinite',
  };

  const orb2Style: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    top: '70%',
    right: '10%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 100%)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transform: 'translateY(-10px)',
    animation: 'float2 8s ease-in-out infinite',
  };

  const orb3Style: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    bottom: '20%',
    left: '20%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 100%)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transform: 'translateY(5px)',
    animation: 'float3 7s ease-in-out infinite',
  };

  return (
    <div style={containerStyle}>
      {/* Background grid overlay */}
      <div style={backgroundOverlayStyle}></div>
      
      {/* Floating decorative orbs */}
      <div style={orb1Style}></div>
      <div style={orb2Style}></div>
      <div style={orb3Style}></div>
      
      <h1 style={titleStyle}>Welcome to My Voice Assistant</h1>
      
      <div style={contentStyle}>
        <WhisperSTT />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float1 {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(180deg); }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(-10px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(-180deg); }
          }
          @keyframes float3 {
            0%, 100% { transform: translateY(5px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(90deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          /* Button Styles */
          button {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%) !important;
            border: none !important;
            border-radius: 16px !important;
            padding: 14px 28px !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            color: white !important;
            cursor: pointer !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            box-shadow: 
              0 4px 15px rgba(99, 102, 241, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
            position: relative !important;
            overflow: hidden !important;
            text-transform: capitalize !important;
            letter-spacing: 0.5px !important;
            min-width: 120px !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
          }
          
          button::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            ) !important;
            transition: left 0.5s !important;
          }
          
          button:hover {
            transform: translateY(-2px) scale(1.02) !important;
            box-shadow: 
              0 8px 25px rgba(99, 102, 241, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
            background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%) !important;
          }
          
          button:hover::before {
            left: 100% !important;
          }
          
          button:active {
            transform: translateY(0) scale(0.98) !important;
            transition: all 0.1s !important;
          }
          
          button:focus {
            outline: none !important;
            box-shadow: 
              0 8px 25px rgba(99, 102, 241, 0.6),
              0 0 0 3px rgba(99, 102, 241, 0.3) !important;
          }
          
          /* Special styling for recording state */
          button[style*="background"][style*="red"],
          button.recording {
            background: linear-gradient(135deg, #ef4444 0%, #f87171 50%, #fca5a5 100%) !important;
            animation: pulse 2s infinite !important;
            box-shadow: 
              0 4px 15px rgba(239, 68, 68, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
          }
          
          button[style*="background"][style*="red"]:hover,
          button.recording:hover {
            background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%) !important;
            box-shadow: 
              0 8px 25px rgba(239, 68, 68, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
          }
          
          /* Disabled button state */
          button:disabled {
            background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%) !important;
            cursor: not-allowed !important;
            transform: none !important;
            box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3) !important;
          }
          
          button:disabled:hover {
            transform: none !important;
            background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%) !important;
          }
          
          @media (max-width: 768px) {
            [style*="position: absolute"][style*="border-radius: 50%"] {
              display: none !important;
            }
            button {
              padding: 12px 24px !important;
              font-size: 14px !important;
              min-width: 100px !important;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            * { animation: none !important; }
            button { transition: none !important; }
            button:hover { transform: none !important; }
          }
        `
      }} />
    </div>
  );
}
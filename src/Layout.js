import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
        
        :root {
          --background: 0 0% 4%;
          --foreground: 0 0% 98%;
          --card: 0 0% 4%;
          --card-foreground: 0 0% 98%;
          --popover: 0 0% 4%;
          --popover-foreground: 0 0% 98%;
          --primary: 0 0% 98%;
          --primary-foreground: 0 0% 9%;
          --secondary: 0 0% 15%;
          --secondary-foreground: 0 0% 98%;
          --muted: 0 0% 15%;
          --muted-foreground: 0 0% 63%;
          --accent: 0 0% 15%;
          --accent-foreground: 0 0% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 0 0% 98%;
          --border: 0 0% 15%;
          --input: 0 0% 15%;
          --ring: 0 0% 83.1%;
          --radius: 0.5rem;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #0a0a0a;
          color: #f5f5f5;
          overflow-x: hidden;
        }

        .font-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }

        .glass-card {
            background: rgba(22, 22, 22, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scroll-section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
      `}</style>
      <main className="bg-[#0a0a0a] text-neutral-50 antialiased selection:bg-purple-500/30">
        {children}
      </main>
    </>
  );
}
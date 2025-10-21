export default function Home() {
  return (
    <main>
      <h2>Welcome to My Resume</h2>
      
      <div className="section">
        <p>
          Hi! I'm <strong>Jannhya Chheda</strong>, a real estate finance professional with a passion for 
          multifamily investments and market analysis.
        </p>
        <p>
          Currently pursuing my Bachelor of Science in Business Administration at Boston University, 
          with a concentration in Real Estate. I have hands-on experience in private equity, 
          advisory, and acquisitions across multiple markets.
        </p>
        <p>
          This online resume showcases my education, professional experience, certifications, 
          projects, and skills. Feel free to explore using the navigation menu.
        </p>
      </div>

      <div className="section">
        <img
          src="/profile.jpg"
          alt="Jannhya Chheda"
          style={{ 
            maxWidth: '400px', 
            display: 'block', 
            margin: '1.5rem auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </main>
  );
}

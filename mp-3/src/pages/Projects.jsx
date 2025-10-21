import Calculator from '../components/Calculator';

export default function Projects() {
  return (
    <main>
      <h2>Projects</h2>

      <div className="section">
        <h3>Multifamily Market Analysis Dashboard</h3>
        <p>Built an interactive Excel dashboard tracking cap rates, rent growth, and supply across 15 markets.</p>
        <ul className="bullets">
          <li>Automated data ingestion from CoStar and REIS APIs</li>
          <li>Created dynamic visualizations for portfolio allocation decisions</li>
        </ul>
      </div>

      <div className="section">
        <h3>REIT Performance Analysis</h3>
        <p>Analyzed 10-year performance of equity REITs vs. mortgage REITs during economic cycles.</p>
        <ul className="bullets">
          <li>Performed regression analysis to identify key drivers of returns</li>
          <li>Presented findings to investment committee</li>
        </ul>
      </div>

      <div className="section">
        <h3>Real Estate Financial Modeling</h3>
        <p>Developed comprehensive pro forma models for commercial acquisitions.</p>
        <ul className="bullets">
          <li>Included sensitivity analysis and scenario planning</li>
          <li>Used by firm for due diligence on $50M+ deals</li>
        </ul>
      </div>

      <Calculator />
    </main>
  );
}

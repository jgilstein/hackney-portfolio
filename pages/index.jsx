export default function Home() {
  return (
    <main className="p-10 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Modernizing Sales Execution: H.T. Hackney</h1>
      <div className="bg-gray-100 rounded-xl p-4 mb-6 text-left text-lg">
        <p>
          Over the past 8 weeks, I’ve had the opportunity to dive deep into the world of wholesale distribution, conducting audits across 312 stores throughout Florida and analyzing real-time sales performance for The H.T. Hackney Co. flagship brand, Great American Deli (GAD).
        </p>
        <br />
        <p>Some highlights:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Tracked GAD placement, signage, cooler utilization, and store cleanliness across multiple regions (among many more binary’s)</li>
          <li>Built and presented a Tableau dashboard combining both quantitative & qualitative data and store-level insights to drive strategic sales decisions</li>
          <li>Worked alongside an amazing teammate (shoutout to Joshua Ragoonanan!) to recommend new growth opportunities based on customer-level data</li>
          <li>Gained hands-on exposure to CPG sales, B2B account management, and the operational side of retail execution</li>
        </ul>
        <br />
        <p>
          Big thank you to the Hackney team for making this experience incredibly impactful.
          I’m walking away with sharper data analytics skills, stronger communication, and a deeper understanding of the fast-paced world of distribution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="/hackney.tableau snip 1.png" alt="Hackney Snip 1" className="rounded-xl" />
        <img src="/hackney.tableau snip 2.png" alt="Hackney Snip 2" className="rounded-xl" />
        <img src="/hackney.tableau snip 3.png" alt="Hackney Snip 3" className="rounded-xl" />
        <img src="/hackney.tableau snip 4.png" alt="Hackney Snip 4" className="rounded-xl" />
        <img src="/hackney.tableau snip 5.png" alt="Hackney Snip 5" className="rounded-xl" />
      </div>
    </main>
  );
}

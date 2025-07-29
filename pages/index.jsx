import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">H.T. Hackney Internship Portfolio</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Internship Write-Up</h2>
          <p className="mb-4">\            Over the past 8 weeks, I’ve had the opportunity to dive deep into the world of
            wholesale distribution, conducting audits across 312 stores throughout Florida and analyzing real-time
            sales performance for The H.T. Hackney Co. flagship brand, Great American Deli (GAD).
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Tracked GAD placement, signage, cooler utilization, and store cleanliness across multiple regions (among many more binaries)
            </li>
            <li>
              Built and presented a Tableau dashboard combining both quantitative & qualitative data and store-level insights to drive strategic sales decisions
            </li>
            <li>
              Worked alongside an amazing teammate (shoutout to Joshua Ragoonanan!), recommending new growth opportunities based on customer-level data
            </li>
            <li>
              Gained hands-on exposure to CPG sales, B2B account management, and the operational side of retail execution
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Selected Tableau Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hackney.tableau snip 1.png"
              alt="Dashboard Snip 1"
              width={600}
              height={400}
              className="rounded shadow"
            />
            <Image
              src="/hackney.tableau snip 2.png"
              alt="Dashboard Snip 2"
              width={600}
              height={400}
              className="rounded shadow"
            />
            <Image
              src="/hackney.tableau snip 3.png"
              alt="Dashboard Snip 3"
              width={600}
              height={400}
              className="rounded shadow"
            />
            <Image
              src="/hackney.tableau snip 4.png"
              alt="Dashboard Snip 4"
              width={600}
              height={400}
              className="rounded shadow"
            />
            <Image
              src="/hackney.tableau snip 5.png"
              alt="Dashboard Snip 5"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

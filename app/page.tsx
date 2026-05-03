export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Inventory Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Reorders Before&nbsp;
          <span className="text-[#58a6ff]">Stockouts Hit</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyzes your Shopify sales velocity, seasonal trends, and supplier lead times to surface the exact moment — and quantity — to reorder every SKU.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📈", title: "Sales Velocity", body: "Rolling averages detect acceleration and slowdowns per SKU automatically." },
            { icon: "📅", title: "Seasonal Trends", body: "Year-over-year pattern matching adjusts forecasts for peak seasons." },
            { icon: "🚚", title: "Lead Time Aware", body: "Factors in supplier lead times so orders arrive before shelves empty." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#6e7681] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited SKU forecasting",
              "Reorder point + quantity alerts",
              "Shopify store sync",
              "Email & dashboard notifications",
              "CSV export of predictions"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "After subscribing you'll enter your Shopify store URL and a read-only API token. The app pulls order history and current inventory levels — no write permissions needed."
            },
            {
              q: "How accurate are the reorder predictions?",
              a: "Accuracy improves with more history. Stores with 3+ months of data typically see 85–95% forecast accuracy. The model recalibrates weekly as new sales come in."
            },
            {
              q: "Can I set custom lead times per supplier?",
              a: "Yes. You can configure lead times per product or supplier, and the algorithm factors those in when calculating the earliest safe reorder date."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        © {new Date().getFullYear()} Shopify Inventory Reorder Predictor. All rights reserved.
      </footer>
    </main>
  );
}

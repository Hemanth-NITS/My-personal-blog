import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Pursuing B.Tech in CSE from NIT Silchar 🎓",
    "Winners of NITS Hacks 7.o hackathon 🏅",
    "Certified by AlgoUniversity as one of 1,000 elite students selected from 40,000+ applicants (top 2.5%) across India 💪",
    "Winner of best startup idea in a college event 🚀",
    "Solved 300+ DSA problems on various coding platforms 🧠",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

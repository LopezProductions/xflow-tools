export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">🚀 Xflow.tools</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          The fastest way to automate your Web3 content schedule using Notion + Zapier or Make.
        </p>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-left mb-12">
          <h2 className="text-2xl font-semibold mb-4">📦 What’s Inside:</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Minimal 4-column Notion scheduler</li>
            <li>✅ Pre-built Make.com + Zapier workflows</li>
            <li>✅ Optional visual & tag fields for X/Farcaster</li>
            <li>✅ BONUS: Upgrade access (analytics & prompts)</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mb-4">📥 Get Early Access</h2>
        <p className="mb-6 text-gray-400">100 free copies available for Web3 creators, founders, and traders.</p>

        <a
          href="https://yourformlink.com" // Replace with your actual form or Notion page
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Claim Your Copy
        </a>

        <p className="mt-10 text-sm text-gray-600">
          © 2025 <span className="font-semibold">Kong X</span> — Built for creators in motion.
        </p>
      </div>
    </main>
  );
}

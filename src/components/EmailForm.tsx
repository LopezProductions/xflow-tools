'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    const res = await fetch('/api/submit-email', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="you@x.com"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
      >
        Submit
      </button>
      {status === 'success' && (
        <p className="text-green-400">You’re on the list! ✅</p>
      )}
      {status === 'error' && (
        <p className="text-red-400">Something went wrong. Try again.</p>
      )}
    </form>
  );
}

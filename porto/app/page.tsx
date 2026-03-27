"use client";

import React, { useState, useEffect, useRef } from "react";

// --- Data ---

const DATA = {
  whoami: (
    <div className="space-y-2 mt-2">
      <p><span className="text-yellow-300 font-bold">Name:</span> NICHOLAS GALIH REINALDO</p>
      <p><span className="text-yellow-300 font-bold">Role:</span> Fullstack Web Developer</p>
      <p><span className="text-yellow-300 font-bold">Location:</span> Tulungagung, Jawa Timur</p>
      <div className="mt-2 text-gray-300 max-w-2xl leading-relaxed">
        <p><span className="text-yellow-300 font-bold">Summary:</span> Fullstack Web Developer dengan pengalaman membangun aplikasi real-time dan sistem berbasis data menggunakan Laravel dan Next.js. Terbiasa merancang arsitektur backend, mengoptimasi database (15+ tabel), serta melakukan deployment menggunakan Docker. Fokus pada performa, skalabilitas, dan efisiensi dalam pengembangan solusi digital.</p>
      </div>
      <p className="mt-2 text-gray-300">
        <span className="text-yellow-300 font-bold">Education:</span> Institut Informatika Indonesia Surabaya - S1 Teknik Informatika (Lulus: 2023)
      </p>
    </div>
  ),
  skills: (
    <div className="space-y-3 mt-2">
      <p className="text-blue-400 font-bold underline mb-2">Tech Stack</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl text-gray-300">
        <div>
          <span className="text-yellow-300 font-bold">Frontend:</span>
          <p className="pl-4 border-l-2 border-green-500/30 mt-1">JavaScript/TypeScript, Next.js, React, TailwindCSS</p>
        </div>
        <div>
          <span className="text-yellow-300 font-bold">Backend:</span>
          <p className="pl-4 border-l-2 border-green-500/30 mt-1">PHP, Laravel, Node.js, RESTful API</p>
        </div>
        <div>
          <span className="text-yellow-300 font-bold">Database & ORM:</span>
          <p className="pl-4 border-l-2 border-green-500/30 mt-1">PostgreSQL, MySQL, Drizzle ORM, Eloquent</p>
        </div>
        <div>
          <span className="text-yellow-300 font-bold">DevOps & Tools:</span>
          <p className="pl-4 border-l-2 border-green-500/30 mt-1">Docker, Docker Compose, WebSocket (Pusher)</p>
        </div>
      </div>
    </div>
  ),
  projects: (
    <div className="space-y-6 mt-2 max-w-4xl text-gray-300">
      {/* Project 1 */}
      <div className="border border-green-500/30 p-4 relative group hover:border-green-500/60 transition-colors">
        <div className="absolute -top-3 left-4 bg-black px-2 text-blue-400 font-bold">Project 1</div>
        <h3 className="text-green-400 font-bold text-lg mb-1">Sistem Akuntansi Transaksi Digital (Game Gold Trading)</h3>
        <p className="text-yellow-300 text-sm mb-2">Timeline: Mei 2025 – Sekarang</p>
        <p className="text-sm mb-3"><span className="text-blue-400 font-bold">Tech Stack:</span> Next.js, TypeScript, PostgreSQL, Drizzle ORM, Docker</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Mengembangkan aplikasi akuntansi fullstack untuk manajemen transaksi in-game berbasis web yang responsif.</li>
          <li>Membangun sistem perhitungan COGS otomatis menggunakan metode FIFO melalui junction table untuk akurasi profit secara real-time.</li>
          <li>Merancang struktur database relasional yang efisien untuk menangani logika transaksi kompleks dan lot pembelian.</li>
          <li>Mengoptimasi performa query melalui indexing dan pengelolaan relasi database yang tepat menggunakan Drizzle ORM.</li>
          <li>Mengelola deployment menggunakan Docker Compose untuk sinkronisasi lingkungan development dan production.</li>
          <li>Live Preview: <a href="https://demo.nich0.dev" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline hover:text-blue-300 font-bold">gras.nich0.dev</a></li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="border border-green-500/30 p-4 relative group hover:border-green-500/60 transition-colors">
        <div className="absolute -top-3 left-4 bg-black px-2 text-blue-400 font-bold">Project 2</div>
        <h3 className="text-green-400 font-bold text-lg mb-1">Kuisin — Platform Kuis Daring Real-Time</h3>
        <p className="text-yellow-300 text-sm mb-2">Timeline: Skripsi, 2023</p>
        <p className="text-sm mb-3"><span className="text-blue-400 font-bold">Tech Stack:</span> Laravel 10, MySQL, Pusher WebSocket, Docker</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Mengembangkan aplikasi kuis real-time end-to-end dengan sistem multi-role dan autentikasi Laravel Breeze.</li>
          <li>Mengimplementasikan komunikasi real-time menggunakan WebSocket (Pusher) untuk sinkronisasi timer dan distribusi soal tanpa reload halaman.</li>
          <li>Merancang dan mengoptimasi skema basis data (15+ tabel) untuk mendukung performa stabil pada trafik pengguna simultan.</li>
          <li>Membangun sistem penilaian otomatis dengan fitur leaderboard, statistik nilai, dan ekspor laporan ke Excel.</li>
          <li>Menggunakan Docker untuk standardisasi environment development dan memastikan konsistensi deployment.</li>
        </ul>
      </div>


    </div>
  ),
  contact: (
    <div className="space-y-2 mt-2 text-gray-300">
      <p><span className="text-yellow-300 font-bold">Email:</span> <a href="mailto:contact@nich0.dev" className="text-blue-400 hover:underline hover:text-blue-300">contact@nich0.dev</a></p>
      <p><span className="text-yellow-300 font-bold">GitHub:</span> <a href="https://github.com/kiriknak" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline hover:text-blue-300">github.com/kiriknak</a></p>
      <p><span className="text-yellow-300 font-bold">Phone:</span> 08974444469</p>
    </div>
  ),
  help: (
    <div className="mt-2 text-gray-300">
      <p className="mb-2">Available commands:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md">
        <div><span className="text-green-400 font-bold">whoami</span></div><div className="text-sm">Display profile & summary</div>
        <div><span className="text-green-400 font-bold">skills</span></div><div className="text-sm">List technical skills</div>
        <div><span className="text-green-400 font-bold">projects</span></div><div className="text-sm">View portfolio projects</div>
        <div><span className="text-green-400 font-bold">contact</span></div><div className="text-sm">Get contact information</div>
        <div><span className="text-green-400 font-bold">clear</span></div><div className="text-sm">Clear the terminal screen</div>
        <div><span className="text-green-400 font-bold">help</span></div><div className="text-sm">Show this help message</div>
      </div>
    </div>
  )
};

type CommandRecord = {
  id: number;
  command: string;
  output: React.ReactNode | null;
};

const WELCOME_MESSAGE = (
  <div className="mb-4 text-gray-300">
    <pre className="text-green-500 font-bold text-xs sm:text-sm md:text-base leading-tight mb-4">
      {`
   _   _ _____ _____ _   _ _____  
  | \\ | |_   _/  __ \\ | | |  _  | 
  |  \\| | | | | /  \\/ |_| | | | | 
  | . \` | | | | |   |  _  | | | | 
  | |\\  |_| |_| \\__/\\ | | \\ \\_/ / 
  \\_| \\_/\\___/ \\____/\\_| |_/\\___/  
                                  
      `}
    </pre>
    <p>Welcome to Nich0.dev Terminal v1.0.0</p>
    <p>Type <span className="text-green-400 font-bold">help</span> or click command buttons below to get started.</p>
  </div>
);

export default function TerminalPortfolio() {
  const [history, setHistory] = useState<CommandRecord[]>([
    { id: 0, command: '', output: WELCOME_MESSAGE },
    { id: 1, command: 'whoami', output: DATA.whoami }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const PROMPT = (
    <span className="mr-2">
      <span className="text-green-500">guest</span>@
      <span className="text-blue-400">nich0.dev</span>:
      <span className="text-yellow-300">~</span>$
    </span>
  );

  // Auto scroll to bottom when history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Keep focus on input if not selecting text
  useEffect(() => {
    const handleGlobalClick = () => {
      if (window.getSelection()?.toString() === "") {
        inputRef.current?.focus();
      }
    };
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  const executeCommand = (cmdStr: string) => {
    const trimmedCmd = cmdStr.trim().toLowerCase();

    if (trimmedCmd === '') {
      setHistory(prev => [...prev, { id: Date.now(), command: cmdStr, output: null }]);
      return;
    }

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    let output: React.ReactNode = null;

    switch (trimmedCmd) {
      case 'whoami':
        output = DATA.whoami;
        break;
      case 'skills':
        output = DATA.skills;
        break;
      case 'projects':
        output = DATA.projects;
        break;
      case 'contact':
        output = DATA.contact;
        break;
      case 'help':
        output = DATA.help;
        break;
      default:
        output = (
          <div className="mt-2 text-red-400">
            command not found: {cmdStr}. Type 'help' to see available commands.
          </div>
        );
    }

    setHistory(prev => [...prev, { id: Date.now(), command: cmdStr, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    }
  };

  const handleQuickCommand = (cmd: string) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 flex flex-col relative overflow-hidden">
      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

      {/* Quick Command Buttons Bar */}
      <div className="w-full max-w-4xl mx-auto flex flex-wrap gap-2 mb-6 pb-4 border-b border-green-500/30">
        <span className="text-gray-400 my-auto text-sm mr-2 select-none">Quick Links:</span>
        {['whoami', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleQuickCommand(cmd)}
            className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/50 hover:bg-green-500/20 hover:text-green-300 transition-all focus:outline-none focus:ring-1 focus:ring-green-400 text-sm shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          >
            [{cmd}]
          </button>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col gap-1 pb-20">

        {/* Terminal History */}
        {history.map((record, idx) => (
          <div key={record.id} className="mb-2">
            {record.command && (
              <div className="flex break-all">
                {PROMPT}
                <span className="text-white ml-2">{record.command}</span>
              </div>
            )}
            {record.output && <div className="mb-4">{record.output}</div>}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex mt-2 relative">
          {PROMPT}
          <div className="flex-1 relative ml-2">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-white outline-none caret-transparent"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
            {/* Custom Blinking Cursor positioned over the text */}
            <span
              className="absolute left-0 top-0 text-white pointer-events-none"
              style={{
                /* We use a hidden mirror span to position the block exactly where the cursor is */
              }}
            >
              <span className="invisible whitespace-pre">{inputVal}</span>
              <span className="inline-block w-2.5 h-5 bg-green-500 animate-pulse translate-y-1 ml-0.5"></span>
            </span>
          </div>
        </div>

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>

    </main>
  );
}

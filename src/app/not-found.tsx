import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 px-4 text-white">
      <div className="space-y-8 text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-bold tracking-tighter">
          <span className="font-geist">404</span>
        </h1>

        {/* Message */}
        <div className="max-w-[460px] space-y-4">
          <h2 className="text-2xl font-medium text-zinc-200">Page not found</h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or deleted.
          </p>
        </div>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Return Home
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 font-mono text-zinc-600">
        fuadnafiz98.com
      </div>
    </div>
  );
}

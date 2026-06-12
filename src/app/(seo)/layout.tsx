import Link from "next/link";

export default function SEOLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-purple-700 transition-colors hover:text-purple-900"
                    >
                        ← Abdelhamid NOIRA
                    </Link>
                    <nav className="flex items-center gap-6 text-sm text-slate-600" aria-label="SEO pages navigation">
                        <Link href="/skills" className="transition-colors hover:text-purple-700">Skills</Link>
                        <Link href="/blog" className="transition-colors hover:text-purple-700">Blog</Link>
                        <Link
                            href="/hire-me"
                            className="rounded-md bg-purple-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-purple-800"
                        >
                            Hire Me
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="mx-auto max-w-4xl px-6 py-12">
                {children}
            </main>
            <footer className="mt-16 border-t border-slate-100 py-8">
                <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
                    <p className="mb-3">
                        © 2026{" "}
                        <strong>Abdelhamid NOIRA</strong>{" "}
                        — DevOps Engineer · AI Automation Specialist · Cloud Infrastructure · Casablanca, Morocco
                    </p>
                    <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1" aria-label="Footer navigation">
                        <Link href="/" className="transition-colors hover:text-purple-700">Portfolio</Link>
                        <Link href="/skills" className="transition-colors hover:text-purple-700">Skills</Link>
                        <Link href="/blog" className="transition-colors hover:text-purple-700">Blog</Link>
                        <Link href="/hire-me" className="transition-colors hover:text-purple-700">Hire Me</Link>
                        <Link href="/casablanca" className="transition-colors hover:text-purple-700">Casablanca</Link>
                        <Link href="/morocco" className="transition-colors hover:text-purple-700">Morocco</Link>
                        <Link href="/sitemap" className="transition-colors hover:text-purple-700">Sitemap</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

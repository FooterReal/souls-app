import { Link } from '@tanstack/react-router'
import { Flame, Users } from 'lucide-react'

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-amber-300/30 hover:bg-white/8"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 text-zinc-950 shadow-[0_0_32px_rgba(251,146,60,0.35)] transition group-hover:scale-105">
                        <Flame className="h-5 w-5" />
                    </span>
                    <span>
                        <span className="block text-xl font-black tracking-[0.2em] text-white uppercase">
                            Souls
                        </span>
                    </span>
                </Link>

                <nav className="flex items-center gap-3">
                    <Link
                        to="/character-list"
                        activeOptions={{ exact: true }}
                        activeProps={{
                            className:
                                'inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.15)]',
                        }}
                        inactiveProps={{
                            className:
                                'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/8 hover:text-white',
                        }}
                    >
                        <Users className="h-4 w-4" />
                        Character List
                    </Link>
                </nav>
            </div>
        </header>
    )
}
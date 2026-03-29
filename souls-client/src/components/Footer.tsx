import { Flame } from 'lucide-react'

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-zinc-950/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 text-zinc-950 shadow-[0_0_20px_rgba(251,146,60,0.25)]">
                        <Flame className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-black tracking-[0.2em] text-white uppercase">
                        Souls
                    </span>
                </div>

                <p className="text-sm text-zinc-500">
                    &copy; 2026 Footerreal. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
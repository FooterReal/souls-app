import { User, Trash2 } from 'lucide-react'

type Props = {
    soul: {
        id: number,
        name: string,
        level: number,
        imageLink?: string | null
    }
    onDelete?: (id: number) => void
    isDeleting?: boolean
}

export function SoulCard({ soul, onDelete, isDeleting = false }: Props) {
    return (
        <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/75 p-5 backdrop-blur-xl transition hover:border-amber-300/20 hover:bg-white/6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-600 text-zinc-950 shadow-[0_0_28px_rgba(59,130,246,0.28)] transition group-hover:scale-105">
                            {soul.imageLink ? <img src={soul.imageLink} alt={soul.name} className="h-5 w-5 rounded-full" /> : <User className="h-5 w-5" />}
                        </span>

                        <div className="min-w-0">
                            <h3 className="truncate text-xl font-black tracking-[0.08em] text-white uppercase">
                                {soul.name}
                            </h3>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                        <span className="text-cyan-300/80">Level</span>
                        <span>{soul.level}</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => onDelete?.(soul.id)}
                    disabled={isDeleting}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-100 transition hover:border-red-300/35 hover:bg-red-500/15 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-zinc-500"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
        </article>
    )
}
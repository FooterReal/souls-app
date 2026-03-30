import { CopyrightIcon } from "lucide-react";

export function Footer() {
    return (
        <footer className="brd-theme border-t-2 p-4 mt-4 flex justify-end gap-16 items-center">
            <div className="p-2 flex gap-2 items-center">
                <CopyrightIcon className="w-3 h-3"/> 2026 Souls Web App - All rights reserved.
            </div>
        </footer>
    )
}
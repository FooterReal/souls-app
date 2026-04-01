export function MFDButton({ label, isEnabled = true, onClick }: { label: string, isEnabled?: boolean, onClick: () => void }) {
    return (
        <div className={`brd-theme ${isEnabled ? "bg-theme" : "rev-theme"} border-2 rounded-lg p-1`} onClick={onClick}>
            {label}
        </div>
    )
}
export function MFDHeader({ title, isSelected }: { title: string, isSelected: boolean }) {
    return (
        <div className={`flex brd-theme p-2 border-t-2 border-r-2 border-l-2 rounded-t-md ${isSelected ? 'acc-theme' : 'bg-theme'}`}>
            {title}
        </div>
    )
}
import { Link } from "@tanstack/react-router"
import { Flame } from "lucide-react"
import { useState } from "react"

export function Header() {
    const menuItems = [
        { name: 'MFD', to: '/mfd' }, { name: 'Souls', to: '/souls' }
    ]

    const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null)

    return (
        <header className="brd-theme border-b-2 p-4 mb-4 flex justify-left gap-16 items-center">
            <Link to="/" onClick={() => setSelectedMenuItem(null)}>
                <div className="bg-theme brd-theme border-2 rounded-lg p-2 flex gap-2 items-center">
                    <Flame/> Souls
                </div>
            </Link>

            <div className="rounded-lg flex p-2 gap-2">
                {menuItems.map((item) => (
                    <Link to={item.to} key={item.name} onClick={() => setSelectedMenuItem(item.name)}>
                        <div className={`${selectedMenuItem === item.name ? 'acc-theme' : 'bg-theme'} brd-theme border-2 rounded-lg p-2 flex gap-2 items-center`}>
                            {item.name}
                        </div>
                    </Link>
                ))}
            </div>
        </header>
    )
}
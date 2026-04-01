import { getFrom } from "#/common/getset";

function renderSwitch(
    key: string,
    type: string, 
    value: any,
    selectedItem: Record<string, any>,
    setSelectedItem: (values: Record<string, any>) => void, 
    onChange: (value: any) => void) {

    if (type.includes("|")) { // complex types
        const vars = type.split("|").map(v => v.trim())

        switch (vars[0]) {
            case "lov":
                return <select 
                    className="brd-theme bg-theme border-2 rounded-md p-1" 
                    value={value}
                    onChange={(e) => {
                        setSelectedItem({ ...selectedItem, [key]: e.target.value })
                        onChange(e.target.value)
                    }}>
                    {vars.slice(1).map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            default:
                return <div>Unsupported type: {type}</div>
        }
    }
    else { // simple types
        const inputType = type === "string" ? "text" : type === "number" ? "number" : null

        if (inputType === null) {
            return <div>Unsupported type: {type}</div>
        }

        return <input 
            className="brd-theme bg-theme border-2 rounded-md p-1" 
            type={inputType} 
            value={value}
            onChange={(e) => {
                setSelectedItem({ ...selectedItem, [key]: e.target.value })
                onChange(e.target.value)
            }}/>
    }
}

export function MFDDetailsPanel({ selectedItem, setSelectedItem, fieldTypes, saveNeeded, setSaveNeeded }: { selectedItem: Record<string, any> | undefined, setSelectedItem: (item: Record<string, any> | null) => void, fieldTypes: object, saveNeeded: boolean, setSaveNeeded: (value: boolean) => void }) {
    const keys = Object.keys(fieldTypes).filter(key => key !== 'id');

    const onChange = (_: any) => {
        if (!saveNeeded) {
            setSaveNeeded(true)
        }
    }

    if (selectedItem === undefined) {
        return <div>No item selected...</div>
    }

    if (keys.length === 0) {
        return <div>No details available...</div>
    }

    return (
        <div className="flex flex-col w-full">
            <div className="brd-theme border-b-2 pt-2 mb-4">
                <h1 className="text-xl font-bold">{getFrom(selectedItem, 'name')}</h1>
            </div>
            <div className="flex flex-wrap gap-4">
                {keys.map((key) => (
                    <div key={key} className="">
                        <label>{key.toUpperCase()}</label>
                        <br/>
                        {renderSwitch(
                            key,
                            getFrom(fieldTypes, key),
                            getFrom(selectedItem, key),
                            selectedItem,
                            setSelectedItem,
                            onChange)
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
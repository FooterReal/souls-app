import { getFrom } from "#/common/getter";

function renderSwitch(type: string, value: any, onChange: (value: any) => void) {

    if (type.includes("|")) { // complex types
        const vars = type.split("|").map(v => v.trim())

        switch (vars[0]) {
            case "lov":
                return <select 
                    className="brd-theme bg-theme border-2 rounded-md p-1" 
                    defaultValue={value}
                    onChange={(e) => onChange(e.target.value)}>
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
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}/>
    }
}

export function MFDDetailsPanel({ item, fieldTypes, saveNeeded, setSaveNeeded }: { item: object | undefined, fieldTypes: object, saveNeeded: boolean, setSaveNeeded: (value: boolean) => void }) {
    const keys = Object.keys(fieldTypes).filter(key => key !== 'id');

    const onChange = (_: any) => {
        if (!saveNeeded) {
            setSaveNeeded(true)
        }
    }

    if (item === undefined) {
        return <div>No item selected...</div>
    }

    if (keys.length === 0) {
        return <div>No details available...</div>
    }

    return (
        <div className="flex flex-col w-full">
            <div className="brd-theme border-b-2 pt-2 mb-4">
                <h1 className="text-xl font-bold">{getFrom(item, 'name')}</h1>
            </div>
            <div className="flex flex-wrap gap-4">
                {keys.map((key) => (
                    <div key={key} className="">
                        <label>{key.toUpperCase()}</label>
                        <br/>
                        {renderSwitch(getFrom(fieldTypes, key), getFrom(item, key), onChange)}
                    </div>
                ))}
            </div>
        </div>
    )
}
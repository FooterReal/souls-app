import type { UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";
import { MFDDetailsPanel } from "./MFDDetailsPanel";
import { MFDButton } from "./MFDButton";
import { getFrom } from "#/common/getter";

type Props = {
    data: object[],
    fieldTypes: object,
    addMutation: UseMutationResult<any, Error, void, unknown>,
    removeMutation: UseMutationResult<any, Error, number, unknown>
}

export function MFDTable({ data, fieldTypes, addMutation, removeMutation }: Props) {
    const keys = Object.keys(fieldTypes);

    console.log("Data",data)

    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [saveNeeded, setSaveNeeded] = useState(false)

    keys.forEach((key) => {
        console.log(key, getFrom(fieldTypes, key), getFrom(data[0], key))
    })

    return (
        <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-1 p-1 h-full w-1/4">
                <div className="flex justify-end items-right gap-2 p-1">
                    <MFDButton label="Add" onClick={() => addMutation.mutate()} />
                    <MFDButton label="Remove" onClick={() => {
                        if (selectedItem !== null) {
                            removeMutation.mutate(selectedItem)
                            setSelectedItem(null)
                        }
                    }} />
                </div>

                <div className="flex overflow-auto scroll-theme">
                    <table className="table-auto min-w-full w-full">
                        <thead className="brd-theme border-b-1">
                            <tr className="acc-theme">
                                {keys.map((key) => (
                                    <th className="table-header p-1" key={key}>
                                        {key.toUpperCase()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={getFrom(item, 'id')} 
                                    className={`${selectedItem !== getFrom(item, 'id') ? "bg-theme" : "acc-theme border-1"} m-1`}
                                    onClick={() => {setSelectedItem(getFrom(item, 'id'))}}
                                >
                                    {keys.map((key) => (
                                        <td key={key} className="items-center text-center p-1 text-nowrap">
                                            {getFrom(item, key)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>         
            </div>
            

            <div className="brd-theme border-1"></div>

            <div className="flex flex-col gap-2 w-3/4 p-2">
                <div className="flex flex-1 flex-wrap">
                    {selectedItem === null ? (<></>) : (
                        <MFDDetailsPanel 
                            item={data.find(item => getFrom(item, 'id') === selectedItem)}
                            fieldTypes={fieldTypes}
                            saveNeeded={saveNeeded}
                            setSaveNeeded={setSaveNeeded}/>
                    )}
                </div>

                <div className="flex gap-2 justify-end">
                    <MFDButton label="Cancel" onClick={() => setSelectedItem(null)} />
                    <MFDButton label="Save" isEnabled={saveNeeded} onClick={() => {
                        if (saveNeeded) {

                        }
                    }} />
                </div>
            </div>
        </div>
    )
}
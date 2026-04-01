import type { UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";
import { MFDDetailsPanel } from "./MFDDetailsPanel";
import { MFDButton } from "./MFDButton";
import { getFrom } from "#/common/getset";

type Props = {
    data: object[],
    fieldTypes: object,
    addMutation: UseMutationResult<any, Error, void, unknown>,
    updateMutation: UseMutationResult<any, Error, Record<string, any>, unknown>,
    removeMutation: UseMutationResult<any, Error, number, unknown>
}

export function MFDTable({ data, fieldTypes, addMutation, updateMutation, removeMutation }: Props) {
    const keys = Object.keys(fieldTypes).filter(key => key !== 'id');

    const [selectedItem, setSelectedItem] = useState<object | null | undefined>(null);
    const [saveNeeded, setSaveNeeded] = useState(false)

    return (
        <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-1 p-1 h-full w-1/4">
                <div className="flex justify-end items-right gap-2 p-1">
                    <MFDButton label="Add" onClick={() => addMutation.mutate()} />
                    <MFDButton label="Remove" onClick={() => {
                        if (selectedItem !== null) {
                            removeMutation.mutate(getFrom(selectedItem, 'id'))
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
                                    className={`${
                                        selectedItem === null || selectedItem === undefined ?
                                            "bg-theme" :
                                            getFrom(selectedItem, 'id') !== getFrom(item, 'id') ? 
                                                "bg-theme" : 
                                                "acc-theme txt-acc-theme border-1"} m-1`}
                                    onClick={() => {
                                        setSelectedItem(item)
                                        setSaveNeeded(false)
                                    }}
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
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                            fieldTypes={fieldTypes}
                            saveNeeded={saveNeeded}
                            setSaveNeeded={setSaveNeeded}/>
                    )}
                </div>

                <div className="flex gap-2 justify-end">
                    <MFDButton label="Cancel" onClick={() => {
                        setSelectedItem(null)
                        setSaveNeeded(false)
                    }} />
                    <MFDButton label="Save" isEnabled={saveNeeded} onClick={() => {
                        if (saveNeeded && selectedItem !== null && selectedItem !== undefined) {
                            setSaveNeeded(false)
                            updateMutation.mutate(selectedItem)
                        }
                    }} />
                </div>
            </div>
        </div>
    )
}
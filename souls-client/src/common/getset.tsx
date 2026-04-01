export function getFrom(obj: Record<string, any> | undefined | null, index: string) {
    if (obj === undefined || obj === null) {
        throw new Error(`Cannot get property ${index} from undefined or null`)
    }

    return obj[index];
}

export function setTo(obj: Record<string, any> | undefined | null, index: string, value: any) {
    if (obj === undefined || obj === null) {
        throw new Error(`Cannot set property ${index} on undefined or null`)
    }

    obj[index] = value;
}
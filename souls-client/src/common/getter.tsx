export function getFrom(obj: object, index: string) {
    return obj[index as keyof typeof obj];
}
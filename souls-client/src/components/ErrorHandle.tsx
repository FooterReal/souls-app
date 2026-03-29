type Props = {
    isPending: boolean,
    isError: boolean,
    data: any,
    error: Error | null,
    children: React.ReactNode | null | undefined
}

export function ErrorHandle(
    { isPending, isError, data, error, children } : Props
) {
    if (isPending) {
        return <div>Fetching...</div>
    }

    if (isError) {
        return <div>Error: {error?.message}</div>
    }

    if (data.length === 0) {
        return <div>No elements found...</div>
    }

    if (children === null || children === undefined) {
        return <></>
    }

    return children
}
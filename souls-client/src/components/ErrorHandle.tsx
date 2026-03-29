type Props<TData> = {
    isPending: boolean,
    isError: boolean,
    data: TData[] | undefined,
    error: Error | null,
    children: (data: TData[]) => React.ReactNode
}

export function ErrorHandle<TData>({ isPending, isError, data, error, children }: Props<TData>) {
    if (isPending) {
        return <div>Fetching...</div>
    }

    if (isError) {
        return <div>Error: {error?.message}</div>
    }

    if (!data || data.length === 0) {
        return <div>No elements found...</div>
    }

    return <>{children(data)}</>
}
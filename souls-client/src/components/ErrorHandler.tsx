export function ErrorHandler({ isPending, isError, data, error, children }: { isPending: boolean, isError: boolean, data: any, error: any, children: React.ReactNode }) {
    if (isPending) {
        return <div className="flex h-full">Loading...</div>
    }

    if (isError) {
        return <div className="flex h-full">Error: {error.message}</div>
    }

    if (data == undefined || data == null) {
        return <div className="flex h-full">No data available</div>
    }

    return <div className="flex flex-1">{children}</div>
}
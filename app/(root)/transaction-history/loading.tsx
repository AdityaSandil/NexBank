const TransactionLoader = () => {
  return (
    <div className="transactions">
      <div className="transactions-header">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-56 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 w-72 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>

      <div className="space-y-6 mt-6">
        {/* Account Card Skeleton */}
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <div className="h-6 w-40 bg-blue-400 rounded-lg animate-pulse" />
            <div className="h-4 w-32 bg-blue-400 rounded-lg animate-pulse" />
            <div className="h-4 w-48 bg-blue-400 rounded-lg animate-pulse" />
          </div>
          <div className="transactions-account-balance">
            <div className="h-4 w-24 bg-blue-400 rounded-lg animate-pulse" />
            <div className="h-8 w-32 bg-blue-400 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Transaction Rows Skeleton */}
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
              <div className="h-4 w-32 bg-gray-200 rounded-lg animate-pulse" />
            </div>
            <div className="h-4 w-20 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-16 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-16 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionLoader
import React from 'react'

const HomeLoader = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {/* Header Skeleton */}
          <div className="flex flex-col gap-2">
            <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-72 bg-gray-200 rounded-lg animate-pulse" />
          </div>

          {/* Total Balance Skeleton */}
          <div className="total-balance">
            <div className="h-24 w-24 rounded-full bg-gray-200 animate-pulse" />
            <div className="flex flex-col gap-4">
              <div className="h-5 w-32 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-4 w-24 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-8 w-40 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </header>

        {/* Transactions Skeleton */}
        <div className="flex flex-col gap-6 mt-6">
          <div className="h-6 w-48 bg-gray-200 rounded-lg animate-pulse" />
          
          {/* Tab Skeleton */}
          <div className="flex gap-4">
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
          </div>

          {/* Transaction Rows Skeleton */}
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 rounded-lg animate-pulse" />
              </div>
              <div className="h-4 w-20 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-4 w-24 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar Skeleton */}
      <div className="right-sidebar">
        <div className="flex flex-col gap-4 p-6">
          <div className="h-24 w-full bg-gray-200 rounded-lg animate-pulse" />
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-5 w-32 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-40 bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="h-48 w-full bg-gray-200 rounded-lg animate-pulse mt-4" />
          <div className="h-48 w-full bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HomeLoader
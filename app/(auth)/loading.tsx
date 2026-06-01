const AuthLoader = () => {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {/* Left Side - Form Skeleton */}
      <div className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8 px-8">
        
        {/* Logo Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-28 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        {/* Title Skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 w-48 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        {/* Input Fields Skeleton */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-4 w-16 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-20 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="h-12 w-full bg-blue-200 rounded-lg animate-pulse" />

        {/* Footer Skeleton */}
        <div className="flex justify-center gap-2">
          <div className="h-4 w-40 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 w-16 bg-blue-200 rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Right Side - Image Skeleton */}
      <div className="auth-asset">
        <div className="h-[800px] w-[800px] bg-gray-200 rounded-l-xl animate-pulse" />
      </div>
    </main>
  )
}

export default AuthLoader
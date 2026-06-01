const MyBanksLoader = () => {
  return (
    <section className="flex">
      <div className="my-banks">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-56 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 w-72 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        <div className="space-y-4 mt-6">
          <div className="h-6 w-32 bg-gray-200 rounded-lg animate-pulse" />
          <div className="flex flex-wrap gap-6">
            {[1,2].map((i) => (
              <div key={i} className="h-[190px] w-[320px] bg-gray-200 rounded-[20px] animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanksLoader
export default function Skeleton() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 min-h-screen">
      {Array.from({ length: 8 }).map((_, i) => {
        return (
          <div key={i} className="shadow-xl animate-pulse">
            <div className="bg-slate-300 w-full h-64" />
            <div className="bg-slate-600 w-4/5 h-4 text-gray-300 mt-4" />
          </div>
        )
      })}
    </div>
  )
}

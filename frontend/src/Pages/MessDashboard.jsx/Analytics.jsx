
const Analytics = () => {
  return (
<div className="relative flex size-full max-w-[960px] min-h-screen flex-col bg-white overflow-x-hidden">
  <div className="layout-container flex h-full grow flex-col">
    <div className="px-10  flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col  flex-1">


        {/* Graphs ------------------- */}
        <h3 className="text-blackText tracking-light text-[32px] font-bold leading-tight min-w-72">
          Order Analytics
        </h3>
        <div className="flex flex-col flex-wrap gap-4 px-4 py-6">
          <div className="flex  flex-1 flex-col gap-2 rounded-xl border border-[#e6e0db] p-6">
            <p className="text-blackText text-base font-medium leading-normal">
              Total Revenue
            </p>
            <p className="text-blackText tracking-light text-[32px] font-bold leading-tight truncate">
              $499
            </p>
            <div className="flex gap-1">
              <p className="text-[#897361] text-base font-normal leading-normal">
                Last 6 months
              </p>
              <p className="text-[#07880e] text-base font-medium leading-normal">
                +25%
              </p>
            </div>
            <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
              {/* SVG graph */}
            </div>
            <div className="flex justify-around">
              {/* Month labels */}
            </div>
          </div>
          <div className="flex  flex-1 flex-col gap-2 rounded-xl border border-[#e6e0db] p-6">
            <p className="text-blackText text-base font-medium leading-normal">
              Most Ordered Items
            </p>
            <p className="text-blackText tracking-light text-[32px] font-bold leading-tight truncate">
              Chicken Parmesan
            </p>
            <div className="flex gap-1">
              <p className="text-[#897361] text-base font-normal leading-normal">
                Last 6 months
              </p>
              <p className="text-[#07880e] text-base font-medium leading-normal">
                +15%
              </p>
            </div>
            <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
              {/* Month-wise bar chart */}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default Analytics
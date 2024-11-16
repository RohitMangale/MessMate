

const OrderDetailsM = () => {


  return (
    <div>

      {/* <div className="flex gap-3 p-3 flex-wrap pr-4">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Pickup</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Delivery</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Dine-in</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Pre-order</p>
        </div>
      </div> */}
      {/* <h3 className="text-blackText text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Quick filters</h3>
      <div className="flex gap-3 p-3 overflow-x-hidden">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Urgent</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Ready</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Completed</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Cancelled</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4">
          <p className="text-blackText text-sm font-medium leading-normal">Refunded</p>
        </div>
      </div> */}
      <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Order status</h3>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between">
          <p className="text-blackText text-base font-medium leading-normal">In progress</p>
          <p className="text-blackText text-sm font-normal leading-normal">45%</p>
        </div>
        <div className="rounded bg-background">
          <div className="h-2 rounded bg-reddish" style={{ width: '45%' }}></div>
        </div>
        <p className="text-colorText text-sm font-normal leading-normal">2 of 5 orders</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between">
          <p className="text-blackText text-base font-medium leading-normal">Ready</p>
          <p className="text-blackText text-sm font-normal leading-normal">75%</p>
        </div>
        <div className="rounded bg-background">
          <div className="h-2 rounded bg-reddish" style={{ width: '75%' }}></div>
        </div>
        <p className="text-colorText text-sm font-normal leading-normal">1 of 5 orders</p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between">
          <p className="text-blackText text-base font-medium leading-normal">Completed</p>
          <p className="text-blackText text-sm font-normal leading-normal">100%</p>
        </div>
        <div className="rounded bg-background">
          <div className="h-2 rounded bg-reddish" style={{ width: '100%' }}></div>
        </div>
        <p className="text-colorText text-sm font-normal leading-normal">2 of 5 orders</p>
      </div>
    </div>
  )
}

export default OrderDetailsM

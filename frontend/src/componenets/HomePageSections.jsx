import { Link } from "react-router-dom";

const HomePageSections = () => {
  return (
    <div className=" py-20 ">
      <div className="container ">
        <div className="@[480px]:p-4">
          <div
            className=" imgGradient flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 md:rounded-xl items-center justify-center p-4"
            // style={{
            //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/13cb830b-5aca-42ba-84b6-1c3b6fda6d04.png")`
            // }}
          >
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center">
              Get dinner on the table in 30 minutes or less
            </h1>
            <Link to='' className="btnColored">
              <span className="truncate">See Meal Plans</span>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-blackText text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-10 ">
        How It Works
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e6dbdb] bg-white p-4 flex-col">
          <div
            className="text-blackText"
            data-icon="Truck"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-blackText text-base font-bold leading-tight">
              Fresh, pre-portioned ingredients
            </h2>
            <p className="text-colorText text-sm font-normal leading-normal">
              Sourced from trusted partners. Delivered to your door.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e6dbdb] bg-white p-4 flex-col">
          <div
            className="text-blackText"
            data-icon="HandHeart"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-blackText text-base font-bold leading-tight">
              Chef-crafted recipes
            </h2>
            <p className="text-colorText text-sm font-normal leading-normal">
              Step-by-step instructions for all skill levels.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e6dbdb] bg-white p-4 flex-col">
          <div
            className="text-blackText"
            data-icon="Coffee"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-blackText text-base font-bold leading-tight">
              Eco-friendly packaging
            </h2>
            <p className="text-colorText text-sm font-normal leading-normal">
              Insulated and recyclable. Skip the grocery store.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e6dbdb] bg-white p-4 flex-col">
          <div
            className="text-blackText"
            data-icon="ShoppingCart"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-blackText text-base font-bold leading-tight">
              Flexible delivery options
            </h2>
            <p className="text-colorText text-sm font-normal leading-normal">
              Weekly or bi-weekly subscriptions. Pause or cancel anytime.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-blackText text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Why MessMate?
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/aa1fc5e7-df89-419d-b8a9-569361c278ff.png")`,
            }}
          ></div>
          <div>
            <p className="text-blackText text-base font-medium leading-normal">
              No delivery fees
            </p>
            <p className="text-colorText text-sm font-normal leading-normal">
              On orders over $12
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/b6058dce-c429-4c22-bf52-8dcadaf59b03.png")`,
            }}
          ></div>
          <div>
            <p className="text-blackText text-base font-medium leading-normal">
              No delivery fees
            </p>
            <p className="text-colorText text-sm font-normal leading-normal">
              On orders over $12
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/1b9c11e1-b91d-4782-9a10-32def8d786e0.png")`,
            }}
          ></div>
          <div>
            <p className="text-blackText text-base font-medium leading-normal">
              No delivery fees
            </p>
            <p className="text-colorText text-sm font-normal leading-normal">
              On orders over $12
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSections;

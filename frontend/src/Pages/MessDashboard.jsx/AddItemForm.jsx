import { Link } from "react-router-dom"

const AddItemForm = () => {
  return (
    <div className="bg-white ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="flex items-center gap-4 text-blackText mb-6">
          <div className="size-8">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-blackText text-[32px] font-bold leading-tight tracking-[-0.015em]">
            MessMate
          </h2>
        </div>

        <div className="w-full bg-background rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Add Food Item
            </h1>
            <form className="space-y-4  md:space-y-6" action="#">

            <div>
                <label
                  htmlFor="item_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Item Name
                </label>
                <input
                  type="text"
                  name="item_name"
                  id="item_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                  placeholder="e.g. Chicken Biryani"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="item_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Item Price
                </label>
                <input
                  type="number"
                  name="item_name"
                  id="item_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                  placeholder="e.g. 100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="item_tag"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tags
                </label>
                <input
                  type="text"
                  name="item_tag"
                  id="item_tag"
                  placeholder="e.g. Spicy, Veg, Non-Veg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="ingredients"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Ingredients
                </label>
                <input
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  placeholder="e.g. Chicken, Rice, Spices"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="available"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Availablity
                </label>
                <input
                  type="text"
                  name="available"
                  id="available"
                  placeholder="e.g. True/False"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="serving_time"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Serving Time
                </label>
                <input
                  type="text"
                  name="serving_time"
                  id="serving_time"
                  placeholder="e.g. Breakfast/Lunch/Dinner"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                  required
                />
              </div>

              <Link
              to="/dashboard"
                type="submit"
                className="btnColored w-full "
              >
                Add Item
              </Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItemForm
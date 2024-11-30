import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import { useAuth } from "../../contexts/AuthContext";

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    item_name: "",
    item_price: "",
    item_tag: "",
    ingredients: "",
    serving_time: "",
  });
  const [image, setImage] = useState(null); // State for the uploaded image file
  const [preview, setPreview] = useState(""); // State for image preview URL
  const navigate = useNavigate();
  const {authToken} = useAuth();
  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image input changes
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Store the file for upload
      setPreview(URL.createObjectURL(file)); // Generate a preview URL for display
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use FormData to include the image in the API request
      const data = new FormData();
      data.append("item_name", formData.item_name);
      data.append("item_price", formData.item_price);
      data.append("item_tag", formData.item_tag);
      data.append("ingredient_list", formData.ingredients);
      data.append("rating", 4.0);
      data.append("serving_time", formData.serving_time);
      if (image) data.append("image", image); // Include the image file if provided

      // Make API call to add the food item
      const response = await axios.post(`${BASE_URL}/menus/`, data, {
        
          "Content-Type": "multipart/form-data",
          headers: { Authorization: `Bearer ${authToken}` },
        
      });

      toast.success("Food item added successfully!");
      console.log(response.data);

      // Redirect to dashboard or another page after success
      navigate("/messdashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add food item. Please try again."
      );
    }
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
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

        <div className="w-full bg-background rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add Food Item
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="item_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  name="item_name"
                  id="item_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5"
                  placeholder="e.g. Chicken Biryani"
                  value={formData.item_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="item_price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Price
                </label>
                <input
                  type="number"
                  name="item_price"
                  id="item_price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5"
                  placeholder="e.g. 100"
                  value={formData.item_price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="item_tag"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tags
                </label>
                <input
                  type="text"
                  name="item_tag"
                  id="item_tag"
                  placeholder="e.g. Spicy, Veg, Non-Veg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5"
                  value={formData.item_tag}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="ingredients"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ingredients
                </label>
                <input
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  placeholder="e.g. Chicken, Rice, Spices"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5"
                  value={formData.ingredients}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="serving_time"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Serving Time
                </label>
                <input
                  type="text"
                  name="serving_time"
                  id="serving_time"
                  placeholder="e.g. Breakfast/Lunch/Dinner"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5"
                  value={formData.serving_time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-5 flex items-center gap-3">
                {preview && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img src={preview} alt="Preview" className="w-full rounded-full" />
                  </figure>
                )}
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <button type="submit" className="btnColored w-full">
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;

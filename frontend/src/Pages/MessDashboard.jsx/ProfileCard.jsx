
const ProfileCard = () => {
  return (
    <div className="w-full  flex flex-col p-4 gap-3">
        <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em]  pb-2 pt-4">Profile</h3>

        <div className="w-full "></div>
        <p className="text-blackText text-base font-medium leading-normal"> <span className="font-bold" > Name: </span> John Wick</p>
        <p className="text-blackText text-base font-medium  leading-normal"><span className="font-bold" >Email: </span> john@gmail.com</p>
        <p className="text-blackText text-base font-medium leading-normal"> <span className="font-bold" >Role: </span> admin</p>


        <div className="w-full btnColored  mt-5 ">
            Logout
        </div>
        <div className="w-full btnColored text-black bg-white border-black border-2 rounded-r-lg  ">
            Delete Account
        </div>


    </div>
  )
}

export default ProfileCard
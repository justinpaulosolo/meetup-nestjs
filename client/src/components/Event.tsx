export const Event = () => {
  return (
    <div className="flex items-center h-56 p-5 hover:bg-gray-50 rounded-2xl hover:cursor-pointer">
      <div className="flex items-center">
        <img
          className="object-cover h-40 w-72 rounded"
          src="https://media.istockphoto.com/photos/business-people-picture-id1181250359?k=20&m=1181250359&s=612x612&w=0&h=zQFI5NBhJfITnAjRP-IU076hT-myqtmHVBEb6QA-Hwc="
          alt="user-profile"
        />
        <div className="ml-5">
          <h5 className="font-medium tracking-tighter text-pink-600">
            TUE, SEP 13 3:30 PM PDT
          </h5>
          <h2 className="text-xl font-semibold text-gray-800">
            Turtle Bay Poker Club
          </h2>
          <h4 className="font-medium text-gray-500">New York, NY</h4>
        </div>
      </div>
    </div>
  )
}
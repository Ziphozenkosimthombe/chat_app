import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full">
        <input type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white"
          placeholder="Type a message..."
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          <BsSend/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput



//===================STARTER CODE===================


/**
 import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full">
        <input type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white"
          placeholder="Type a message..."
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          <BsSend/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput
 * */ 
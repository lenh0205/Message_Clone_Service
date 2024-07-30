import ChatMessagesSpace from "./ChatMessagesSpace";
import MessageTypingBar from "./MessageTypingBar";
import MessengerSideBar from "./MessengerSideBar";

const Messenger = () => {
  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <div className="flex flex-row justify-between bg-white">
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          <MessengerSideBar />
        </div>
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">
            <ChatMessagesSpace />
          </div>
          <div className="py-5">
            <MessageTypingBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messenger;


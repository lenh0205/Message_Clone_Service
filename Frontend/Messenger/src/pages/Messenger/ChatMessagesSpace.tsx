type messageData = {
    myMessage: boolean, listMessage: string[]
}
type messageArrData = Array<messageData>;

const messageArr: messageArrData = [
    { myMessage: true, listMessage: ["Welcome to group everyone !"] },
    { myMessage: false, listMessage: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at praesentium, aut ullam delectus odio error sit rem. Architecto nulla doloribus laborum illo rem enim dolor odio saepe, consequatur quas?"] },
    {
        myMessage: true, listMessage: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis!"
        ]
    },
    {
        myMessage: false, listMessage: ["happy holiday guys!"]
    },
]

const ChatMessagesSpace = () => {
    return (
        <>
            {messageArr.map(item => {
                return item?.myMessage
                    ? <RenderRightConversation listMessage={item.listMessage} />
                    : <RenderLeftConversation listMessage={item.listMessage} />
            })}
        </>
    )
}
export default ChatMessagesSpace;


const RenderRightConversation = ({ listMessage }: { listMessage: string[] }) => {
    return (
        <div className="flex justify-end mb-4">
            <div>
                <RenderListMessages
                    listMessage={listMessage}
                    childClassName={"mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"}
                />
            </div>
        </div>
    )
}

const RenderLeftConversation = ({ listMessage }: { listMessage: string[] }) => {
    return (
        <div className="flex justify-start mb-4">
            <RenderListMessages
                listMessage={listMessage}
                childClassName={"ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"}
            />
        </div >
    )
}

type RenderListMessagesProps = {
    listMessage: string[],
    childClassName: string,
}
const RenderListMessages = ({ listMessage, childClassName }: RenderListMessagesProps) => {
    return (
        <div>
            {listMessage.map((message, index) => (
                <div className={childClassName + (index > 0 ? " mt-4 " : "")}>
                    {message}
                </div>
            ))}
        </div >
    )
} 
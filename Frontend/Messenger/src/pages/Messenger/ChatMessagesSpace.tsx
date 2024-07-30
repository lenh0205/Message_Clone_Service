type messageData = {
    myMessage: boolean, listMessage: string[]
}
type messageArrData = Array<messageData>;

const messageArr: messageArrData = [
    { myMessage: true, listMessage: ["Welcome to group everyone !"] },
    { myMessage: false, listMessage: ["Welcome to group everyone !"] },
    { myMessage: true, listMessage: ["Welcome to group everyone !"] },
]


const ChatMessagesSpace = () => {
    return (
        <>
            {messageArr.map(item => {
                return item?.myMessage ? (
                    <div className="flex justify-end mb-4">
                        {item.listMessage.map(message => (
                            <div
                                className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                            >
                                {message}
                            </div>
                        ))}
                        <img
                            src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                ) : (
                    <div className="flex justify-start mb-4">
                        <img
                            src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                        >
                            {/* {item?.content} */}
                        </div>
                    </div>
                )
            })}
            <div className="flex justify-end mb-4">
                <div>
                    <div
                        className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Magnam, repudiandae.
                    </div>

                    <div
                        className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!
                    </div>
                </div>
                <img
                    src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                />
            </div>
            <div className="flex justify-start mb-4">
                <img
                    src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"

                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                />
                <div
                    className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                >
                    happy holiday guys!
                </div>
            </div>
        </>
    )
}

export default ChatMessagesSpace
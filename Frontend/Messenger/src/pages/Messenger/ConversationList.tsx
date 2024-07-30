const ConversationData = [
    { name: "Luis1994", newestMessage: "Pick me at 9:00 Am" },
    { name: "Luis1994", newestMessage: "Pick me at 9:00 Am", isActive: true },
    { name: "Luis1994", newestMessage: "Pick me at 9:00 Am" },
    { name: "Luis1994", newestMessage: "Pick me at 9:00 Am" },
    { name: "Luis1994", newestMessage: "Pick me at 9:00 Am" },
    { name: "Luis1994", newestMessage: "Pick me at 9:00 Am" },
    { name: "Luis1994", newestMessage: "Pick me at 9:00 Am" }
]

const ConversationList = () => {
    return (
        <>
            {ConversationData.map(item => (
                <div
                    className={"flex flex-row py-4 px-2 justify-center items-center border-b-2"
                        + (item?.isActive ? " border-l-4 border-blue-400" : "")}
                >
                    <div className="w-1/4">
                        <img
                            src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                            className="object-cover h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="w-full">
                        <div className="text-lg font-semibold">{item?.name}</div>
                        <span className="text-gray-500">{item?.newestMessage}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ConversationList
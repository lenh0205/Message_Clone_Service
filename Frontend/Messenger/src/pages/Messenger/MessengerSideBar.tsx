import ConversationList from "./ConversationList"
import ConversationSearchBar from "./ConversationSearchBar"

const MessengerSideBar = () => {
  return (
    <>
      <ConversationSearchBar />
      <ConversationList />
    </>
  )
}

export default MessengerSideBar

const Messenger = () => {
  const { email, password } = JSON.parse(localStorage.getItem("userInfo") ?? "''");
  return (
    <>
      <div>Messenger Page</div>
      <span><b>Email:</b>{email}</span>
      <br/>
      <span><b>Password:</b>{password} (mà sao phải show password vậy :D)</span> 
    </>
  )
}

export default Messenger;
import Chat from "./compornents/chat/Chat";
import List from "./compornents/list/List";
import Detail from "./compornents/detail/Detail";

const App = () => {
  return (
  <div className='container'> 
  <List/>
  <Chat/>
  <Detail/>
</div>
  )
}

export default App
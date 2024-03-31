import { Footer, Header, MainContainer } from "./elements/layout"
import { authStore } from "./store/auth"

function Entry() {

  console.log("ap ap ap" + authStore.state.loggedIn)

  return (
    <main className="grid grid-col-3 place-items-center">
      <Header />
      <MainContainer />
      <Footer />
    </main>
  )
}

export default Entry

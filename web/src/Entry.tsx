import { Footer, Header, MainContainer } from "./elements/layout"

function Entry() {
  return (
    <main className="grid grid-col-3 place-items-center">
      <Header />
      <MainContainer />
      <Footer />
    </main>
  )
}

export default Entry

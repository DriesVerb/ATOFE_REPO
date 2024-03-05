import { Txt } from './elements'
import { MainContainer } from './elements/layout/container/container'

function Entry() {
  return (
    <main className="container mx-auto">
      <header>
        <Txt.H1 text="ATOFE" className="flex justify-center" />
        <Txt.H2 text="slogan heyoo" className="flex justify-center" />
        <Txt.H3 text="a tale of two emojis" className="flex justify-center" />
      </header>
      <MainContainer />
      <footer>footer</footer>
    </main>
  )
}

export default Entry

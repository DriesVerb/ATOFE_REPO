import { useEffect } from 'react'
import { useVerifyUser } from './api/user/hooks/mutate/verifyUser'
import { Footer, Header, MainContainer } from './elements/layout'
import { storageKeys } from './utils/const/localstorage'
import { useGetRanEmojis } from './api/emoji/hooks/query/useGetRanEmoji'

const username = localStorage.getItem(storageKeys.username)

function Entry() {
  const verifyUser = useVerifyUser()
  useGetRanEmojis(5)

  useEffect(() => {
    verifyUser.mutate({ username })
  }, [])

  const pending = verifyUser.isPending

  return (
    <main className="grid grid-col-3 place-items-center">
      <Header />
      {pending ? <div>loading</div> : <MainContainer />}
      <Footer />
    </main>
  )
}

export default Entry

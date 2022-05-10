import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from './Feed'
import Sidebar from './Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sidebar/>
        <Feed />
        {/* {Widgets} */}
      </main>
      </div>
  )
}

export default Home

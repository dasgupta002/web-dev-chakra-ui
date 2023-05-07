import Head from 'next/head'
import { Nav } from '../components/nav'
import { Hero } from '../components/hero'
import { Gist } from '../components/gist'
import { Gallery } from '../components/gallery'
import { News } from '../components/news'
import { Banner } from '../components/banner'
import { Foot } from '../components/foot'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pluriparous</title>
        <link rel = 'icon' type = 'image/x-icon' href = '/icon.png' />
      </Head>
      <Nav />
      <Hero />
      <Gist />
      <Gallery />
      <News />
      <Banner />
      <Foot />
    </div>
  )
}
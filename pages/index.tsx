import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Card from '@/components/Card'
import Carrousel from '@/components/Carrousel'

const Home: NextPage = () => {
  return (
    <div>
      <h1 
        className='text-center my-10'
      >
        Wellcome to Camilo Store!
      </h1>

      {/* <Carrousel/> */}
      <section 
        style={{
          display:"grid",
          gap: "4rem",
          gridTemplateColumns: "repeat(auto-fill,minmax(15rem, 1fr))",
          width:"80%",
          margin:"auto"
        }}
      >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  )
}


export default Home

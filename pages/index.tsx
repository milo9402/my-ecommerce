import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Card from '@/components/Card'

const Home: NextPage = () => {
  return (
    <div>
      <h1 >
        Main Page
      </h1>

      <section 
        style={{
          display:"grid",
          gap: "1rem",
          // gridAutoRows: "28rem",
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

  // display: grid;
  // gap: 1rem;
  // grid-auto-rows: 22rem;
  // grid-template-columns: repeat(auto-fill,minmax(15rem, 1fr));


export default Home

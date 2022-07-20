import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'

import Card from '@/components/Card'
import Carrousel from '@/components/Carrousel'

const Home: NextPage = ({data}:any) => {
  return (
    <div>
      <section
        style={{
          display:"flex",
          width:"80%",
          margin:"auto"
        }}
      >
        <Carrousel/>
      </section>
      <h1 className="text-center my-8 text-5xl font-semibold">Te damos la bienvenida a nuestra tienda virtual</h1>
      <section
        style={{
          display:"grid",
          gap: "4rem",
          gridTemplateColumns: "repeat(auto-fill,minmax(15rem, 1fr))",
          width:"80%",
          margin:"auto"
        }}
      >
        
      { data.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            title={card.title}
            image={card.image}
            price={card.price}
            category={card.category}

          />
        ))
      }
      </section>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    const data = res.data;
    return {
      props: {
        data
      }
    }
  } catch (error) {
    return { error };
  }
}

export default Home

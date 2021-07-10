import Link from 'next/link';
import Navbar from '../components/Navbar'
import Head from 'next/head'

function About() {
    return (
        <>

        <Head>
          <title>About</title>
        </Head>

        <Navbar/>

        <section className="hero">
        <div className="container">
            <div className="text-wrapper w-full">
                <h1 className="text-title">About</h1>
                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex beatae quod magnam cum </p>
                <Link href="/contact"><a className="cta">Kontak saya</a></Link>
            </div>
        </div>
        </section>
        </>
    );
}

export default About;
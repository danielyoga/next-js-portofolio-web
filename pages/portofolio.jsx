import Link from 'next/link';
import Navbar from '../components/Navbar'
import Head from 'next/head'

function Portofolio() {
    return (
        
        <>
        <Head>
            <title>Portofolio</title>
        </Head>

        <Navbar />

        <section className="hero">
        <div className="container">
            <div className="text-wrapper w-full">
                <h1 className="text-title">Portofolio</h1>
                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex beatae quod magnam cum </p>
                <div className="portofolio-wrapper">

                    <div className="portofolio-item">
                        <img src="01.png" alt="" className="portofolio-image"/>
                        <h4 className="portofolio-name">First web project</h4>
                        <div className="portofolio category">Web Dev</div>
                    </div>

                    <div className="portofolio-item">
                        <img src="02.png" alt="" className="portofolio-image"/>
                        <h4 className="portofolio-name">Second web project</h4>
                        <div className="portofolio category">Web Dev</div>
                    </div>

                </div>
                <Link href="/contact"><a className="cta">Kontak saya</a></Link>
            </div>
        </div>
        </section>
        </>
        
    );
}

export default Portofolio
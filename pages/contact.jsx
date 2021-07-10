import Link from 'next/link';
import Navbar from '../components/Navbar'
import Head from 'next/head'

function Contact() {
    return (
        
        <>
        <Head>
            <title>Contact</title>
        </Head>
        <Navbar />
        <section className="hero">
        <div className="container">
            <div className="text-wrapper w-full">
                <h1 className="text-title">Contact</h1>
                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex beatae quod magnam cum </p>
                <ul className="contact-links">
                    <li className="contact-item">Email : testoke@gmail.com</li>
                    <li className="contact-item">0812345678</li>
                </ul>
                <Link href="/contact"><a className="cta">Kontak saya</a></Link>
            </div>
        </div>
        </section>

        </>
    );
}

export default Contact
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import { AiOutlineInstagram } from 'react-icons/ai';


const About = () => (
  <Root>
    <Head>
      <title>About | Dzign Store</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                Dzign Store
              </h2>
              <h4 className="font-size-subheader mb-4">
              Dzign Store is an Algerian online and local store, founded to serve most creative.  <a href="https://commercejs.com/" target="_blank" className="cjs-link" rel="noopener noreferrer">Dzign Store.IG</a>
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                <a className="px-4 py-3 font-color-white about-doc" href="https://www.instagram.com/dzign_store/" target="_blank" rel="noopener noreferrer">
                  Follow Us On <AiOutlineInstagram className='font-size-title'/>
                </a>
              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image width={500} height={400} src="/team.svg" alt=" illustration"  />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image width={500} height={400} src="/in_thought.svg" alt="Netlify illustration"  />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Why Us
            </h3>
            <h4 className="font-size-subheader mb-4">
               Well, We make your ideas and designs comes to life,
            </h4>
            <div className="mt-3">
              <Link
                className="px-4 py-3 flex-grow-1 font-color-white about-net"
                href="/SearchForm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search For Your Design
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
    </div>
    <Footer />
  </Root>
);

export default About;

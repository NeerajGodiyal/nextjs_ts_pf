import type { NextPage } from 'next';
import React from 'react'
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth hover:scroll-auto'>
      <Head>
        <title>Portfolio</title>
      </Head>


      <Header />

      <section id="hero" className='snap-start'>
        <Hero />

      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id = "experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact */}
      <section id='contact' className='snap-start' >
        <Contact />
      </section>


    </div>

  );

};

export default Home;
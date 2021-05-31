import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-four'
import Footer from '../containers/layout/footer/footer-two'
import Hero from '../containers/landing/hero'


const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO/>
    <Header transparent/>  
    <main className="site-wrapper-reveal">
      <Hero/>
      
      
    </main>
    <Footer/>
  </Layout>
)
 
export default IndexPage

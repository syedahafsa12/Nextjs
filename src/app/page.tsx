"use client"
import Link from 'next/link';
// import { MdMenu } from "react-icons/md";


// Import useRouter from next/router
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import React from 'react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'



const Page =()=>{

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);




  const handleButtonClick = () => {
    if (isClient) {
      window.open('https://www.linkedin.com/in/syeda-hafsa-67b7342ab/', '_blank');
    }}
  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace "YOUR_ACCESS_KEY_HERE" with your actual access key
    formData.append("access_key", "a77cb2ef-182b-48bc-9661-2c716e84db6e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      // Show a success message to the user
      alert("Form submitted successfully! Thank you.");

      // Optionally, you can reset the form after submission
      event.target.reset();

      console.log(result);
    }
  }
  

// const element = <FontAwesomeIcon icon={faHouse} />

// ReactDOM.render(element, document.body)

  // Add state variable to track navbar collapse
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      {/* <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <a className="navbar-brand" href="#"><img className="logo" src="/ll.png" alt="logo" /></a>
          </div>
          {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
{/* <MdMenu className='icon' style={{color:"white",display:'none'}}/>
          <div className="navbar-nav">
           
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#pinkpc">About Me</a>

            <a className="nav-link" href="#proj">Projects</a> */}
{/*             
            <a className="nav-link" href="#get">Contact</a>
          </div>
        </div>
      </nav>  */}



<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#ea8290' }}>
        <Link href="/" legacyBehavior>
          <a className="navbar-brand" aria-label="Logo">
            <img src="ll.png" alt="logo" width="70" height="50" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-target="#navbarNav"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ color: 'white' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link active" aria-current="page" style={{ color: 'white' }}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#pinkpc" legacyBehavior>
                <a className="nav-link" style={{ color: 'white' }}>About Me</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#proj" legacyBehavior>
                <a className="nav-link" style={{ color: 'white' }}>Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#get" legacyBehavior>
                <a className="nav-link" style={{ color: 'white' }}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <motion.div >
        <motion.img
          src="/lolly.png"
          alt="my "
          className='image-main'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 id='hi'>
          Hi, I am
          <br />
          <motion.span id='span' whileHover={{ scale: 1.1 }}>Syeda Hafsa</motion.span>
        </h1>
      </motion.div>

      <div id='buttondiv'>
        <motion.button
          id='but1'
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3) " }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => { window.location.href = '#get'; }}
        >
          Hire Me
        </motion.button>
        <motion.button
          id='but2'
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={handleButtonClick}
        >
          Let&apos;s Talk
        </motion.button>
      </div>

      <motion.div
        id="longdiv"
        className="longdiv"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="row2">
          <div className="top">
            <h1 id="hh2">&nbsp;&nbsp; 20+ <br /> Projects</h1>
            <h1 id="hh1">&nbsp;&nbsp;&nbsp;&nbsp; 8 <br /> Months</h1>
            <h1 id="hhh1">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;6 <br /> Certificate</h1>
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <motion.img
        src="/pinkpcc.png"
        alt=""
        id='pinkpc'
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: 5 }} // Rotate 360 degrees on hover
      />
      <motion.h2
        initial={{ opacity: 1 }}

        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }} // Example hover animation (can be removed)
      >
        About Me
      </motion.h2>

      <motion.p
        id='p'
        initial={{ opacity: 1 }}

        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }} // Example hover animation (can be removed)
      >
        I am a Dynamic web developer and
        designer with expertise in <br />TypeScript, HTML,
        CSS, Bootstrap, Tailwind CSS, and Next.js. <br /> Demonstrated ability to craft
        visually stunning interfaces,<br />
        employing responsive design principles.
        Proactive in staying <br />abreast  of industry
        trends, fostering  innovation, and driving<br />
        project success. A collaborative problem-solver,
        ready to deliver  <br />impactful solutions and elevate
        team performance.
      </motion.p>



      
      <div><h1 id='proj'>My Projects</h1></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div id='mainproj'>
        <div className="sec1">
          <div className="row d-flex ">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./1.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>University Management System</h5>
                <p className="card-text" style={{ marginBottom: '0px', marginTop: "0px" }}>A user-friendly system for Universities managing student data, courses, and records.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/typescript/tree/main/uni_management_sys" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          
            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./2.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Student Management System</h5>
                <p className="card-text" style={{ marginBottom: '0px', marginTop: "0px" }}>An application for managing student information such as enrollment, grades, courses.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/typescript/tree/main/stud_management_sys" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            {/* Repeat the above pattern for other cards */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./16.png" className="card-img-top" alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Pepsi Website</h5>
                <p className="card-text" style={{ marginBottom: '0px', marginTop: "10px" }}>Classic Design of Pepsi Website Clone. Made with HTML and CSS.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="https://github.com/syedahafsa12/html-Css/tree/main/pepsi%20clone" legacyBehavior>
                  <a target='_blank'>
                    <motion.button
                      id='but4' style={{ marginLeft: '65px' }}
                      whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Github Link
                    </motion.button>
                  </a>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./4.png" className="card-img-top" alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Word Counter</h5>
                <p className="card-text" style={{ marginBottom: '0px', marginTop: "10px" }}>Handy tool for analyzing text documents, providing accurate word counts.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="https://github.com/syedahafsa12/typescript/tree/main/word-counter" legacyBehavior>
                  <a target='_blank'>
                    <motion.button
                      id='but4' style={{ marginLeft: '65px' }}
                      whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Github Link
                    </motion.button>
                  </a>
                </Link>
              </motion.div>
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./6.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Number Guessing Game</h5>
                <p className="card-text" style={{ marginBottom: '0px', marginTop: "0px" }}>An interactive game where players attempt to guess a randomly generated number within a specified range.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/typescript/tree/main/noguessinggame" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./5.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Currency Converter</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Convert currencies easily. Real-time rates and accurate calculations.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/typescript/tree/main/currencyconvertor" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>




            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./7.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>ATM Project</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Virtual ATM simulation. Functions as a real ATM with Typescript.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/typescript/tree/main/atm" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./8.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Calculator</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Basic calculator. Perform math operations easily with a clear display.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/typescript/tree/main/Calculator" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>




            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./3.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Todo App</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Simple app to organize tasks. Prioritize, categorize, and track progress.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/typescript/tree/main/todolist" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./10.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Landing Page</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}> Introduce your website. Attractive, inviting layout with HTML and CSS.
                </p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/html-Css/tree/main/landing%20pg" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>




            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./11.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Survey Form</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Gather feedback easily. Customizable and responsive with HTML and CSS.
                </p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/html-Css/tree/main/survey%20form%20%7Bgma%7D" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>




            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./12.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Tribute Page</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Dedicated to someone special. Elegant design with HTML and CSS.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/html-Css/tree/main/tribute%20page" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./13.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Salt n Pepper Clone</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Classic Food Website. Interactive website clone with HTML and CSS.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/html-Css/tree/main/salt%20n%20pepper" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./14.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Technical Document</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>Display technical information. Structured and organized layout with HTML and CSS.
                </p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/html-Css/tree/main/technical%20doc" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="card"
              style={{ marginTop: '30px' }}
            >
              <img src="./15.png" className="card-img-top" style={{ marginBottom: "0px" }} alt="..." />
              <div className="card-body" style={{ marginBottom: "0px", marginTop: "0px" }}>
                <h5 className="card-title" style={{ marginBottom: "1px", marginTop: "0px" }}>Cat Photo App</h5>
                <p className="card-text" style={{ marginBottom: '10px', marginTop: "10px" }}>A cute Website with HTML and CSS about Cats all Things About cat.</p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://github.com/syedahafsa12/html-Css/tree/main/cat%20photo%20app" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but4'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Github Link
                      </motion.button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>




          </div>
        </div></div>
      </motion.div>


      {/* 
        <h1 id='contact'>Contact Me</h1>
      <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfttqJgbSBvZmbDXSjLLqdjgWbRDBlPcTmDKSZgXLQKWqMlHTjVbjxVVlTzSzjSwSjcNZg" legacyBehavior>
                    <a target='_blank'>
                      <motion.button
                        id='but7'
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                       Contact Me
                      </motion.button>
                    </a>
                  </Link>
                </motion.div> */}

      <div className='contact-container'>

        <div>   
        <form onSubmit={handleSubmit} className='form-left'>
        <h1 id='get'>Get In Touch</h1>
          <input type="text" name="name" id="input" required placeholder='Your name' />
          <input type="email" name="email" id="input-email" required placeholder='Your Email' />
          <textarea name="message" placeholder='Your Message' id="input-mess" required ></textarea>
          
          <motion.button
          id='submitt' type="submit" 
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3) " }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Submit
        </motion.button>
        </form></div>
        <div className='form-right'>
        <motion.img
        src="/contact.png"
        alt="contact"
        id=''
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: -5 }} // Rotate 360 degrees on hover
      />
        </div>
      </div>

    

      <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <a href="https://www.youtube.com/channel/UC7M15WtO28HihSrCfaya3pQ"><FaYoutube /></a>
          <a href="https://www.instagram.com/syedahafsa58/"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=100090858772914"><FaFacebook /></a>
          <a href="https://discordapp.com/users/1129766308892905472"><FaDiscord /></a>
          <a href="https://www.linkedin.com/in/syeda-hafsa-67b7342ab/"><FaLinkedin  /></a>

          <a href="https://github.com/syedahafsa12"><FaGithub /></a>
        </div>
        <p className='right'>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Page;

import React from "react";
import "./MainPage.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import Runningtext from "./Runningtext";


export const MainPage = () => {
  return (
    <div>
      <div className="firstcontainer" id="Home">
        <div className="selfintro">
          <div className="namecontainer">
            <div>👋</div>
            <div>
              <h6 className='myname'>MY NAME IS SAKSHI RANA</h6>
               <div><Runningtext/></div>
            </div>
          </div>
          <a className='contactbtn'  href="#Contact">LET'S START</a>
        </div>
        <div className="headright">
          <div className="absolutearrow">
            <img
              src="./images/arrow-with-scribble.png"
              className="headiconarrow"
            ></img>
          </div>
          <div className="absolutecircle">
            <img src="./images/checked.png" className="headiconcircle"></img>
          </div>
          <div className="userimage">
            <img src="./images/personal_pic.jpg" className="headimg"></img>
          </div>
        </div>
      </div>

     
      <div >
        <div className="mywork" id="About">
          <div>
            <img
              src="./images/image 1.jpg"
              
             className="workimg"></img>
          </div>
          <div className="info">
            <div className="infohead">
              <p>I'm a Front-end Developer AND CODER. </p>
            </div>
            <div className="infocontain">
            I'm A Software Engineer With Excellent Problem-Solving Skills And Ability To Perform Well In A Team & Passionate About CODING.I'm Also Interested In WEB DEVELOPMENT
                  .I am eager to embark on a
              journey with a live project.I am ready to bring creativity,
              dedication, and a growth mindset to the team, and I look forward
              to collaborating with fellow professionals to create innovative,
              user-centric experiences. Let's build something amazing together.
            </div>
            <div style={{ display: "flex" }} className="infobtn">
              <div>
                <a className="contactbtn" href="#Contact">CONTACT ME</a>
              </div>
              <div>
                <a className="contactbtn" id="portfolio" href="#fithcontainer">
                  PORTFOLIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="servicehead">MY SERVICES</h1>
      <div className="serivicecontainer" id="Service">
        <div className="servicesubdiv"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex" }} >
            <div>
              <img
                src="./images/software.png"
                style={{ width: "40px", marginTop: "5px" }}
              ></img>
            </div>
            <div
              style={{ color: "white", fontSize: "35px", fontWeight: "600" }}
            >
              Software Developer
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src="./images/frontend (1).png"
                style={{ width: "50px" }}
              ></img>
            </div>
            <div
              style={{ color: "white", fontSize: "35px", fontWeight: "600" }}
            >
              Frontend Developer
            </div>
          </div>
          <div className="resume">
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:265f3a32-ab7a-4fb0-b80e-bc2f76a91402" target="_blank" className="resumemin">RESUME</a>
          </div>
        </div>
      </div>

      <div id="Socialink">
        < h1 style={{marginTop:"30px"}}>MY SOCIAL PLATFORM</h1>
        <div>
          <div>
            <img className="sociallinkimg"
              src="./images/linkimg.jpg"
              
            ></img>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "550px",
            }}
          > <div className="vrdotlinetop"></div>
            <div>
              <a
                href="https://auth.geeksforgeeks.org/user/sakshirana692"
                target="_blank"
              >
                <img
                  src="./images/gfglogo.png"
                  className="sociallink"
                  id="socolink1"
                ></img>{" "}
              </a>
              <div className="vrdotline"></div>{" "}
            </div>
            <div>
            
              <a href="https://leetcode.com/Sakshi_Rana/" target="_blank">
                <img
                  src="./images/leetcodelogo.png"
                  className="sociallink"
                  id="socolink2"
                ></img>{" "}
              </a>
              <div className="vrdotline"></div>
            </div>
            <div>
            
              <a
                href="https://www.codechef.com/users/sakshi_rana"
                target="_blank"
              >
                {" "}
                <img
                  src="./images/codecheflogo.png"
                  className="sociallink"
                  id="socolink3"
                ></img>
              </a>
              <div className="vrdotline"></div>
            </div>
            <div>
             
              <a
                href="https://www.codingninjas.com/studio/profile/3fab76cc-e2c4-4246-b0d6-70d2ac112fb9"
                target="_blank"
              >
                <img
                  src="./images/codingninjaslogo.png"
                  className="sociallink"
                  id="socolink4"
                ></img>{" "}
              </a>
              <div className="vrdotline"></div>
            </div>
            <div>
              {" "}
           
              <a href="https://github.com/classmate692" target="_blank">
                <img
                  src="./images/github.png"
                  className="sociallink"
                  id="socolink5"
                ></img>{" "}
              </a>
              <div className="vrdotline"></div>
            </div>
            <div>
             
             
              <a
                href="https://www.linkedin.com/in/sakshi-rana-706b0b21b/"
                target="_blank"
              >
                <img
                  src="./images/linkedin.png"
                  className="sociallink"
                  id="socolink6"
                ></img>{" "}
              </a>
              <div className="vrdotline"></div>
            </div>
           
          </div>
          <div className="vrdotlinebottom"></div>
        </div>
      </div>

      <div className="thirdcontainer" id="Skill">
        <h1 className="skillheading">MY SKILLS</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="skillset1"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="skilldiv">
              <div>
                <img
                  src="./images/c-logo-icon-28389 (1).png"
                  className="skillimg"
                ></img>
              </div>
              <div className="skillname">
                <p>C++</p>
              </div>
            </div>
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv1"
            >
              <div>
                <img src="./images/python.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Python</p>
              </div>
            </div>
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv2"
            >
              <div>
                <img src="./images/oop.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Oop</p>
              </div>
            </div>
          </div>
          <div className="skillset1">
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv3"
            >
              <div>
                <img src="./images/html.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Html</p>
              </div>
            </div>
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv4"
            >
              <div>
                <img src="./images/css.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Css</p>
              </div>
            </div>
          </div>
          <div className="skillset1">
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv4"
            >
              <div>
                <img src="./images/bootstrap.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Bootstrap</p>
              </div>
            </div>
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv3"
            >
              <div>
                <img src="./images/tailwand.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Tailwand</p>
              </div>
            </div>
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv2"
            >
              <div>
                <img src="./images/material ui.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Material Ui</p>
              </div>
            </div>
          </div>
          <div className="skillset1">
            <div
              style={{ display: "flex" }}
              className="skilldiv"
              id="skilldiv1"
            >
              <div>
                <img src="./images/react.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">React Js</p>
              </div>
            </div>
            <div style={{ display: "flex" }} className="skilldiv" id="skilldiv">
              <div>
                <img src="./images/sql.png" className="skillimg"></img>
              </div>
              <div>
                <p className="skillname">Sql</p>
              </div>
            </div>
          </div>
        </div>
        {/*<div>
          <div>
            <img src='./images/git.png'></img>
          </div>
          <div>
            <img src='./images/github.png'> </img>
          </div>
          <div>
            <img src='./images/vscode.png'></img>
          </div>
        </div>
            */}
      </div>
      <div className="fourthcontainer">
        <div>
          <p className="interest">Intrested In Hiring Me?</p>
        </div>
        <div>
          <a className="interestcontact" href="#lastcontainer">Contact Now</a>
        </div>
      </div>
      <div className="fithcontainer" id="Project">
        <marquee className="projecttitle">MY PROJECTS</marquee>
        <div className="fithfirstdiv">
          <div>
            <img src="./images/instaclone.png" className="instaclone"></img>
          </div>
          <div className="projectdecript">
            <div>
              <h4 className="project">web development</h4>
            </div>
            <div>
              <h1 className="projectname">Instagram Clone </h1>
            </div>
            <div>
              <p className="projectcontant">develop Instagram Clone for fun</p>
            </div>
            <div>
              <a
                className="contactbtn"
                href="https://github.com/classmate692/instragram-clone"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="fithfirstdiv">
          <div className="projectdecript">
            <div>
              <h4 className="project">web development</h4>
            </div>
            <div>
              <h1 className="projectname">Amazon Clone </h1>
            </div>
            <div>
              <p className="projectcontant">develop Instagram Clone for fun</p>
            </div>
            <div>
              <a
                className="contactbtn"
                href="https://github.com/classmate692/Amazon_clone"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <div>
            <img src="./images/amazonclone.png" className="amazonclone"></img>
          </div>
        </div>
        <div className="fithfirstdiv">
          <div>
            <img src="./images/keepnote.png" className="keepnote"></img>
          </div>
          <div className="projectdecript3">
            <div>
              <h4 className="project3">web development</h4>
            </div>
            <div>
              <h1 className="projectname3">KeepNote</h1>
            </div>
            <div>
              <p className="projectcontant3">
                KeepNote is app that is designed to remind users of their
                appointments and other things that they need to do.{" "}
              </p>
            </div>
            <div>
              <a
                className="contactbtn"
                id="amzbtn"
                href="https://keep-note-khaki.vercel.app/"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="fithfirstdiv">
          <div className="projectdecript" id="projectdecript4">
            <div>
              <h4 className="project" id="taskproject">
                web development
              </h4>
            </div>
            <div>
              <h1 className="projectname4">TaskCart</h1>
            </div>
            <div>
              <p className="projectcontant">
                TaskCart is a revolutionary project that brings together the
                convenience of online shopping and efficient task management,
                all in one place.
              </p>
            </div>
            <div>
              <a
                className="contactbtn"
                href="https://task-cart-classmate692.vercel.app/"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <div>
            <img src="./images/taskcart.png" className="instaclone"></img>
          </div>
        </div>
      </div>
      <div
        className="lastcontainer" id="Contact"
        style={{ display: "flex", backgroundColor: "#0F172A" }}
      >
        <div>
          <h2 className="gettouch">Get in touch</h2>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <div className="phonelogo">
              <BsFillTelephoneFill className="logo" />
            </div>
            <div>
              <h3
                style={{
                  color: "#555B68",
                  fontSize: "15px",
                  marginLeft: "30px",
                  textAlign: "start",
                }}
              >
                PHONE
              </h3>
              <p
                style={{
                  color: "white",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                +91 9770673089
              </p>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <div className="maillogo">
              <AiFillMail className="logo" />
            </div>
            <div>
              <h3
                style={{
                  color: "#555B68",
                  fontSize: "20px",
                  marginLeft: "30px",
                  textAlign: "start",
                  marginBottom: "0px",
                }}
              >
                Mail
              </h3>
              <p
                style={{
                  color: "white",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                sakshirana@gmail.com
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="locationlogo">
              <ImLocation2 className="logo" />
            </div>
            <div>
              <h3
                style={{
                  color: "#555B68",
                  fontSize: "20px",
                  marginLeft: "30px",
                  textAlign: "start",
                  marginBottom: "0px",
                }}
              >
                My Loaction
              </h3>
              <p
                style={{
                  color: "white",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                Gwalior,Madhya Pradesh
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <h3 style={{ color: "white" }}>Connect with me Here,</h3>
          <a
            href="https://www.linkedin.com/in/sakshi-rana-706b0b21b/"
            target="_blank"
          >
            <img
              src="./images/linkedin.png"
              href=""
              style={{
                height: "50px",
                width: "50px",
                margin: "20px",
                borderRadius: "10px",
              }}
            ></img>
          </a>
          <a href="https://github.com/classmate692" target="_blank">
            <img
              src="./images/github.png"
              style={{ height: "50px", width: "50px" }}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

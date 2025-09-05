import React, { useContext,useEffect } from "react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

import { NavbarContext } from "../../context/NavContext";
function FullScreenNav() {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [ navOpen, setNavOpen ] = useContext(NavbarContext);


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])
  return (
    <div ref={fullScreenRef} className="fullscreennav hidden z-50  h-screen overflow-hidden text-white  w-full absolute ">
      <div  className=" h-screen w-full fixed">
        <div className="w-full h-full flex ">
          <div className="stairing bg-black h-full w-1/5"></div>
          <div className="stairing bg-black h-full w-1/5"></div>
          <div className="stairing bg-black h-full w-1/5"></div>
          <div className="stairing bg-black h-full w-1/5"></div>
          <div className="stairing bg-black h-full w-1/5"></div>
        </div>
      </div>
      <div>
        <div ref={fullNavLinksRef} className=" navlink flex w-full  relative  justify-between items-start">
          <div className="w-30 p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full "
              viewBox="0 0 103 44"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>

          <div onClick={()=>{
            setNavOpen(false);
          }} className=" h-24 mb-3  w-24 relative  overflow-hidden cursor-pointer">
            <div className=" h-screen w-1 absolute -rotate-45 origin-top bg-[#D3FD50] "></div>
            <div className=" h-screen w-1 absolute right-0 rotate-45 origin-top bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="link origin-top relative border-t-1 border-white overflow-hidden  ">
          <h1 className="font-[font2] text-white text-[10vw] text-center leading-[0.8] pt-4 uppercase hover:opacity-0 ">
            Projects
          </h1>
          <div className=" flex absolute top-0 hover:opacity-100 opacity-0 bg-[#D3FD50]">
            <div className=" moveX flex overflow-hidden items-center">
              <h2 className=" whitespace-nowrap  font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-30 rounded-full shrink-0 w-96 overflow-hidden object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            <div className=" moveX flex overflow-auto items-center">
              <h2 className=" whitespace-nowrap  font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            {/* <div>
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
              alt=""
            />
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
              alt=""
            />
          </div> */}
          </div>
        </div>
        {/* fffffffffffff1 */}
        <div className="link origin-top relative border-t-1 border-white overflow-hidden">
          <h1 className="font-[font2] text-white text-[10vw] text-center leading-[0.8] pt-4 uppercase hover:opacity-0 ">
            Agence
          </h1>
          <div className=" flex absolute top-0   hover:opacity-100 opacity-0 bg-[#D3FD50]">
            <div className=" moveX flex overflow-hidden items-center">
              <h2 className=" whitespace-nowrap  font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-30 rounded-full shrink-0 w-96 overflow-hidden object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            <div className=" moveX flex overflow-auto items-center">
              <h2 className=" whitespace-nowrap  font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            {/* <div>
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
              alt=""
            />
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
              alt=""
            />
          </div> */}
          </div>
        </div>
        {/* ffffffffff2 */}
        <div className="link origin-top relative border-y-1 border-white overflow-hidden">
          <h1 className="font-[font2] text-white text-[10vw] text-center leading-[0.8] pt-4 uppercase hover:opacity-0 ">
            contact
          </h1>
          <div className=" flex absolute top-0   hover:opacity-100 opacity-0 bg-[#D3FD50]">
            <div className=" moveX flex overflow-hidden items-center">
              <h2 className=" whitespace-nowrap  font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-30 rounded-full shrink-0 w-96 overflow-auto object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            <div className=" moveX flex overflow-hidden items-center">
              <h2 className=" whitespace-nowrap  font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            {/* <div>
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
              alt=""
            />
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
              alt=""
            />
          </div> */}
          </div>
        </div>
        {/* fffffff3 */}
        <div className="link origin-top relative border-b-1  border-white overflow-hidden">
          <h1 className="font-[font2] text-white text-[10vw] text-center leading-[0.8] pt-4 uppercase hover:opacity-0 ">
            blog
          </h1>
          <div className=" flex absolute top-0   hover:opacity-100 opacity-0 bg-[#D3FD50]">
            <div className=" moveX flex overflow-hidden items-center">
              <h2 className=" whitespace-nowrap  font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-30 rounded-full shrink-0 w-96 overflow-auto object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            <div className=" moveX flex overflow-hidden items-center">
              <h2 className=" whitespace-nowrap  font-[font2] text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap font-[font2]  text-[10vw] text-center leading-[0.8] pt-4 uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-36 rounded-full shrink-0 w-96 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            {/* <div>
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
              alt=""
            />
            <h2>Pour Tout Voir</h2>
            <img
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
              alt=""
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;

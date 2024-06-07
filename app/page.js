'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import * as Icons from "react-bootstrap-icons";

function SearchField({ active, onClick, children }) {
  return (
    <div
      className={"px-3 py-2 rounded-lg mb-2 text-sm mx-1 border border-slate-200  cursor-pointer  hover:bg-slate-200 hover:text-black " +
                (active ? 'bg-slate-200 text-slate-600' : 'text-slate-500')}
                    // ''}
      onClick={onClick}
      style={{ "lineHeight": "1.3em" }}
    >
      <Icons.Search className="inline w-4 h-4 mr-2 mb-0.5" />
      {children}
    </div>
  );
}


export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [useInterval, setUseInterval] = useState(true);

  const searches = [
    // {
    //   query: "A clownfish living among sea anemone tentacles",
    //   images: ["clownfish_1.png", "clownfish_2.png", "clownfish_3.png"],
    // },
    {
      query: "A hermit crab using plastic trash as its shell",
      images: ["hermit_1.png", "hermit_2.png", "hermit_3.png", "hermit_2.png"],
    },
    {
      query: "Distal rynchokinesis",
      images: ["distal_1.jpeg", "distal_2.jpeg", "distal_3.jpeg"],
    },
    {
      query: "California condor tagged with a green “26”",
      images: ["condor_1.jpeg", "condor_2.jpeg", "condor_3.jpeg", "condor_4.jpeg"],
    },
    {
      query: "Everted osmeterium",
      images: ["swallowtail_1.jpeg", "swallowtail_2.jpeg", "swallowtail_3.jpeg", "swallowtail_4.jpeg"],
    },
    {
      query: "An ornamented bowerbird nest",
      images: ["bower_1.jpeg", "bower_2.jpeg", "bower_3.jpeg"],
    },
    {
      query: "A nest brood parasitized by a cowbird",
      images: ["nest_1.jpeg", "nest_2.jpeg", "nest_3.jpeg"],
    },
    {
      query: "A sick cassava plant",
      images: ["cassava_1.jpeg", "cassava_2.jpeg", "cassava_3.jpeg", "cassava_4.jpeg"],
    },
    {
      query: "Tamandua back-brooding its young",
      images: ["tamandua_1.jpeg", "tamandua_2.jpeg", "tamandua_3.jpeg"],
    },
  ];    

  const clickSearch = function(idx) {
    // console.log('cleared ' + intervalID)
    setUseInterval(false);
    setActiveIdx(idx);
  }

  useEffect(() => {
      // clearInterval(intervalID);
    //   if (intervalID == null) {
    //     console.log('new interval!')
    //     setIntervalID((id) => {
    //         console.log('current id: ' + id + '  ' + intervalID);
    //         if (id == null) {

    //             clearInterval(intervalID);
    //             const newID = setInterval(() => {
    //                 console.log('ping')
    //                 setActiveIdx((idx) => (idx+1) % searches.length)
    //             }, 2000)
    //             console.log('new interval id: ' + newID);
    //             return newID;
    //         } else {
    //             return id;
    //         }
            
            
    //     });
    //     // setIntervalID(intervalID);
        console.log('new interval')
        if (useInterval) {
            const newID = setInterval(() => {
                console.log('ping')
                setActiveIdx((idx) => (idx+1) % searches.length)
            }, 2000)
            return () => clearInterval(newID)
        }
    // }
  }, [useInterval])



  return (
    <div className="min-w-[720px]">
        <div className="flex justify-center w-full h-screen bg-contain bg-center" style={{'background-image': 'url(images/background.jpg)', 'background-size': '1200px'}}>
            <div className="w-full max-w-[960px] m-auto mx-4">
                <div className="bg-white w-full py-8 px-12">
                    <div className="text-[80px] font-medium flex items-center">
                        {/* 🔍&nbsp;  */}
                        {/* <img src="images/inat-logo-2-black.png" className="w-16 h-16 inline mr-4" />
                        INQUIRE */}
                        IN<img src="images/inat-logo-2-black-notail.png" className="h-16 inline scale-x-[-1]" />UIRE
                        {/* IN<img src="images/inat-logo-2-black.png" className="w-16 h-16 inline scale-x-[-1]" />UIRE */}
                        {/* IN<Icons.Search className="inline w-16 h-16 mb-0.5" />UIRE */}
                    </div>
                    <div className="mt-2 text-3xl font-regular mb-10 text-slate-700">
                        A Benchmark for Natural World Image Retrieval
                    </div>
                    <div className="mb-2">
                        <a className="text-sky-500" href="https://edwardv.com" target="_blank">Eddie Vendrow</a>*<sup>1</sup>, 
                        <a className="text-sky-500" href="https://omipan.github.io/" target="_blank"> Omiros Pantazis</a>*<sup>2</sup>,
                        <a className="text-sky-500" href="https://www.inaturalist.org/users/44845" target="_blank"> Alexander Shepard</a>*<sup>3</sup>, 
                        <a className="text-sky-500" href="http://www0.cs.ucl.ac.uk/staff/g.brostow/" target="_blank"> Gabriel Brostow</a>*<sup>2</sup>, 
                        <a className="text-sky-500" href="https://www.ucl.ac.uk/biosciences/people/prof-kate-jones" target="_blank"> Kate E. Jones</a>*<sup>2</sup>,
                        <a className="text-sky-500" href="https://homepages.inf.ed.ac.uk/omacaod/" target="_blank"> Oisin Mac Aodha</a>†<sup>4</sup>, 
                        <a className="text-sky-500" href="https://beerys.github.io/" target="_blank"> Sara Beery</a>†<sup>1</sup>, 
                        <a className="text-sky-500" href="https://gvh.codes/" target="_blank"> Grant Van Horn</a>†<sup>5</sup>
                    </div>
                    <div>
                        <sup> 1</sup>Massachusetts Institute of Technology
                        <sup className="ml-1"> 2</sup>University College London 
                        <sup className="ml-1"> 3</sup>iNaturalist
                        <sup className="ml-1"> 4</sup>University of Edinburgh
                        <sup className="ml-1"> 5</sup>University of Massachusetts, Amherst
                        &nbsp; <span className="text-slate-600 ">*, †  <i>indicates equal contribution</i></span>
                    </div>
                    <div className="mt-8">
                        <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" href="#">
                            <Icons.FilePdfFill className="w-4 h-4 inline mr-2"/>
                            Paper
                        </a>
                        <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" href="#">
                            <Icons.Github className="w-4 h-4 inline mr-2"/>
                            Code
                        </a>
                        <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" href="#">
                            <Icons.Image className="w-4 h-4 inline mr-2"/>
                            Data
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full min-h-screen bg-white pt-12">

          <div className="max-w-[900px] px-6 m-auto">
              <div className="text-[48px] font-medium text-center mb-2 items-center">
                  {/* 🔍 INQUIRE */}
                  <img src="images/inat-logo-2-black-notail.png" className="h-24 inline scale-x-[-1] opacity-80" />
                  {/* INQUIRE */}
              </div>
              <div></div>
              {/* <div className="text-3xl font-regular text-left mb-8 text-slate-700">
                  A Benchmark for Scientific Image Retrieval
              </div> */}
              <div className="mt-8 text-md font-regular  mb-8 text-slate-700">
              {/* Scientists work with increasingly large image datasets to discover evidence for ecological hypotheses,
              which can be fine-grained and sparse. Many of these scientific questions involve analyzing far more 
              images than can be manually inspected. */}

                  <b>Expert-level multi-modal models require expert-level benchmarks.</b>
                  <br /><br />
                  
                  We introduce <b>🔍 INQUIRE</b>, an image retrieval benchmark of <b>200 challenging ecological queries</b> that are comprehensively
                  labeled over a new <b>5 million image</b> subset of iNaturalist (iNat24). We hope that <b>🔍 INQUIRE</b> will encourage the 
                  community to build next-generation image retrieval methods toward the goal of helping accelerate and automate scientific discovery.
              </div>

              <div className=" bg-slate-100 rounded-lg p-4 border border-slate-200">
                  <div className="flex flex-wrap justify-center">
                      {searches.map((search, idx) => (
                      <SearchField key={idx} active={idx==activeIdx} onClick={() => {clickSearch(idx)}}>{search.query}</SearchField>
                      ))}
                      {/* <SearchField>A clownfish living among sea anemone tentacles</SearchField>
                          <SearchField>A hermit crab using plastic trash as its shell</SearchField>
                          <SearchField>Distal rynchokineses</SearchField>
                          <SearchField>California condor tagged with a green “26"</SearchField>
                          <SearchField>Everted osmetrium</SearchField> */}
                  </div>

                  <div className="mt-2  px-5 w-full h-full rounded-lg">

                  <div className="mt-2 text-lg px-2 py-2.5 mb-4 text-slate-700 text-center rounded-lg bg-white border border-slate-200">
                          {/* <Icons.Search className="inline w-5 h-5 mr-3 mb-1" /> */}
                          {searches[activeIdx].query}
                      </div>
                      
                      <div className="rounded-lg p-2 flex flex-wrap justify-center" key={activeIdx}>
                      {searches[activeIdx].images.map((im, idx) => (
                          // <Image
                          //     className="w-40 h-40 object-cover m-2"
                          //     width={160}
                          //     height={160}
                          //     src={`/images/queries/${im}`}
                          //     // style={{ "aspectRatio": "1" }}
                          //     alt={'Image retrieval'}
                          //     priority={true}
                          //     key={idx}
                          // />    
                          <div className="w-40 h-40 m-2"
                                style={{ background: `url('/images/queries/${im}') center / cover`, backgroundRepeat: 'no-repeat' }}
                                key={idx}></div>
                      ))}
                      </div>

                  </div>
              </div>
              <div className="text-center text-slate-700 mt-5">
                  <div className="mb-2 text-sm">Want to try your own queries?</div>
                  <div className="">
                    <a className="inline-block text-blue-600 bg-blue-500 px-5 py-1.5 rounded-lg text-white text-md" href="http://ec2-3-147-61-23.us-east-2.compute.amazonaws.com/query" target="_blank">
                        Open the live demo
                        <Icons.ArrowRight className="inline ml-2 w-5 h-5 mb-0.5"/>
                    </a>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

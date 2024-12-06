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
                        <a className="text-sky-500" href="https://edwardv.com" target="_blank">Edward Vendrow</a>*<sup>1</sup>, 
                        <a className="text-sky-500" href="https://omipan.github.io/" target="_blank"> Omiros Pantazis</a>*<sup>2</sup>,
                        <a className="text-sky-500" href="https://www.inaturalist.org/users/44845" target="_blank"> Alexander Shepard</a><sup>3</sup>, 
                        <a className="text-sky-500" href="http://www0.cs.ucl.ac.uk/staff/g.brostow/" target="_blank"> Gabriel Brostow</a><sup>2</sup>, 
                        <a className="text-sky-500" href="https://www.ucl.ac.uk/biosciences/people/prof-kate-jones" target="_blank"> Kate E. Jones</a><sup>2</sup>,
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
                        &nbsp; <span className="text-slate-600 ">*, †  <i>indicates equal contribution & equal advising</i></span>
                    </div>
                    <div className="mt-8">
                        {/* <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" href="#">
                            <Icons.FilePdfFill className="w-4 h-4 inline mr-2"/>
                            Paper
                        </a> */}
                        <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" target="_blank" href="https://arxiv.org/abs/2411.02537">
                            <Icons.FileEarmarkText className="w-4 h-4 inline mr-2"/>
                            Paper
                        </a>
                        <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" target="_blank" href="https://github.com/inquire-benchmark/INQUIRE">
                            <Icons.Github className="w-4 h-4 inline mr-2"/>
                            Code
                        </a>
                        <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" target="_blank" href="https://github.com/inquire-benchmark/INQUIRE/tree/main/data">
                            <Icons.Image className="w-4 h-4 inline mr-2"/>
                            Data
                        </a>
                        <a className="bg-slate-600 rounded-full px-4 py-1 text-white inline-flex items-center h-8 text-sm mr-2" target="_blank" href="https://huggingface.co/datasets/evendrow/INQUIRE-Rerank">
                            {/* 🤗 */}
                            <div className="w-0 h-4 inline"/>
                            🤗 HuggingFace
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>



        <div className="w-full min-h-screen bg-white pt-16 pb-8">

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
                  
                  We introduce <b>🔍 INQUIRE</b>, a text-to-image retrieval benchmark of <b>250 challenging ecological queries</b> that are comprehensively
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
                          <div className="w-32 h-32 lg:w-40 lg:h-40 m-1"
                                style={{ background: `url('/images/queries/${im}') center / cover`, backgroundRepeat: 'no-repeat' }}
                                key={idx}></div>
                      ))}
                      </div>

                  </div>
              </div>
              <div className="mt-4 text-center text-slate-700">
                Want to search own queries? Try the <a className="text-sky-500 underline" href="https://inquire-demo.csail.mit.edu" target="_blank">live demo &rarr;</a>.
              </div>
          </div>
        </div>


        <div className="py-1 bg-slate-100 text-[40px] font-medium flex items-center justify-center text-center">
          Queries
        </div>
        <div className="w-full bg-white py-8">

          <div className="max-w-[900px] px-6 m-auto">
                
            <div>
              The 250 queries contained within INQUIRE come from discussions and interviews with a range of experts including ecologists, biologists, ornithologists, entomologists, oceanographers, and forestry experts.
            </div>

            <div className="mt-4">
              We exhaustively labeled these queries, finding over 33k relevant images (from 1 to 1k+ image matches per query) in iNat24.
            </div>
            <div className="mt-4">
              Our queries cover a range of topics and a organism taxonomies:
            </div>


                    
            <div className="flex flex-wrap justify-center mt-4">

              <img src="images/inquire_taxa.png" className="h-56 mx-2" />
              <img src="images/inquire_categories.png" className="h-48 mx-2" />
            </div>
          </div>
        </div>

        <div className="py-1 bg-slate-100 text-[40px] font-medium flex items-center justify-center text-center">
          Tasks
        </div>
        <div className="w-full bg-white py-8">

          <div className="max-w-[900px] px-6 m-auto">
                
            <div className="mb-4">INQUIRE includes two key tasks: </div>
            <div className="mt-2">
              <b>INQUIRE-Fullrank: Retrieving images from the full 5M image dataset</b>
              <br/>
              This is the full-dataset retrieval task, starting from all 5 million images of iNat24. We evaluate one-stage retrieval, using similarity search with CLIP-style models, and two-stage retrieval, where after the initial retrieval, a large multi-modal model is used to rerank the images.
            </div>
            <div className="mt-2">
              <b>INQUIRE-Rerank: Reranking task for refining a fixed set of top-100 CLIP retrievals.</b>
              <br/>
              INQUIRE-Rerank evaluates reranking performance by fixing an initial retrieval of 100 images for each query (from OpenClip's CLIP ViT-H-14-378). For each query (e.g. A mongoose standing upright alert), your task is to re-order the 100 images so that more of the relevant images are at the "top" of the reranked order.
            </div>

            <div className="text-blue-500 mt-4">
            We recommend starting with INQUIRE-Rerank as it is much smaller and easier to work with. <br/>
            INQUIRE-Rerank is <a className="underline font-bold" target="_blank" href="https://huggingface.co/datasets/evendrow/INQUIRE-Rerank">available on 🤗 HuggingFace!</a>
            </div>
            

            {/* </div> */}

            <div className="flex flex-wrap justify-center mt-8">

              <img src="images/inquire_tasks.png" className="w-full mx-2" />
            </div>
          </div>
        </div>

        <div className="py-1 bg-slate-100 text-[40px] font-medium flex items-center justify-center text-center">
          INQUIRE Leaderboards
        </div>
        <div className="h-10">

        </div>

        {/* <div className="py-5 bg-slate-100 text-5xl font-medium flex items-center justify-center text-center">
          
        </div> */}
        <div className="mb-6">
          <div className="max-w-[960px] px-6 mx-auto">
            <div className="mt-6">
              We evaluate current multimodal models on INQUIRE, both on the Fullrank and Rerank task.
              Evaluations are conducted in a zero-shot fashion, with no additional prompt-turning or in-context demonstrations.
              Results are reported in AP@50, the average precision among the top 50 retrieved images.
            </div>
            <div className="mt-8">
              <div className="text-2xl text-center mb-1 font-bold text-slate-700">INQUIRE-Fullrank Leaderboard</div>
              <div className="text-center mb-3">This leaderboard shows full dataset retrieval performance, starting from all 5 million images in iNat24.</div>
              <div className="flex justify-center">
                {/* <div className="inline-block leaderboard-proprietary px-2 py-1 mx-3"></div> */}
                <div className="inline-block bg-slate-100 px-2 py-1 mx-3">Two Stage Retrieval</div>
                <div className="inline-block bg-sky-100 px-2 py-1 mx-3">One Stage Retrieval CLIP/Embedding Model</div>
              </div>
              <table className="leaderboard bg-slate-100 mt-5">
                <thead>
                  <tr className="bg-slate-300">
                    <th>Method</th>
                    <th>Size</th>
                    <th>Overall</th>
                    <th>Appearance</th>
                    <th>Behavior</th>
                    <th>Context</th>
                    <th>Species</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>CLIP ViT-H/14-378 (DFN) Top 100 &rarr; GPT-4o</td> <td>-</td>
                    <td><b>47.1</b></td> <td><b>36.6</b></td> <td><b>49.7</b></td> <td><b>51.9</b></td> <td><b>59.4</b></td>
                </tr>
                <tr>
                  <td>CLIP ViT-H/14-378 (DFN) Top 100 &rarr; VILA1.5-40B</td>  <td>-</td>
                    <td><u>42.1</u></td> <td><u>32.5</u></td> <td><u>44.7</u></td> <td><u>46.7</u></td> <td>52.4</td>
                </tr>
                <tr>
                  <td>CLIP ViT-H/14-378 (DFN) Top 100 &rarr; GPT-4-Turbo (20240409)</td>  <td>-</td>
                    <td>38.8</td> <td>29.7</td> <td>40.0</td> <td>42.2</td> <td><u>54.7</u></td>
                </tr>
                <tr>
                  <td>CLIP ViT-H/14-378 (DFN) Top 100 &rarr; PaliGemma-3B-mix-448</td>  <td>-</td>
                    <td>37.7</td> <td>27.2</td> <td>41.2</td> <td>41.7</td> <td>48.6</td>
                </tr>
                <tr>
                  <td>CLIP ViT-H/14-378 (DFN) Top 100 &rarr; LLaVA-v1.6-34B</td>  <td>-</td>
                    <td>37.4</td> <td>28.0</td> <td>39.0</td> <td>41.8</td> <td>50.8</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP ViT-H/14-378 (DFN)</td> <td>987M</td>
                    <td>35.6</td> <td>25.7</td> <td>38.7</td> <td>36.5</td> <td>52.7</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>SigLIP SO400m-14-384</td> <td>878M</td>
                    <td>34.9</td> <td>30.5</td> <td>35.7</td> <td>36.0</td> <td>42.6</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>SigLIP ViT-L/16-384</td> <td>652M</td>
                    <td>31.6</td> <td>24.1</td> <td>33.0</td> <td>33.8</td> <td>44.5</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP ViT-L/14 (DFN)</td> <td>428M</td>
                    <td>24.6</td> <td>18.4</td> <td>24.0</td> <td>26.3</td> <td>40.9</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP ViT-B/16 (DFN)</td> <td>150M</td>
                    <td>16.2</td> <td>12.0</td> <td>16.8</td> <td>15.7</td> <td>28.3</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP ViT-L/14 (OpenAI)</td> <td>428M</td>
                    <td>15.8</td> <td>14.9</td> <td>15.3</td> <td>14.3</td> <td>23.6</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP RN50x16 (OpenAI)</td> <td>291M</td>
                    <td>14.3</td> <td>10.4</td> <td>15.8</td> <td>13.3</td> <td>23.3</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP ViT-B/16 (OpenAI)</td> <td>150M</td>
                    <td>11.4</td> <td>9.8</td> <td>10.6</td> <td>11.2</td> <td>19.0</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP ViT-B/32 (OpenAI)</td> <td>110M</td>
                    <td>8.2</td> <td>5.8</td> <td>7.6</td> <td>8.9</td> <td>16.1</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>CLIP RN50 (OpenAI)</td> <td>102M</td>
                    <td>7.6</td> <td>5.7</td> <td>7.3</td> <td>7.9</td> <td>13.8</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>WildCLIP-t1</td> <td>150M</td>
                    <td>7.5</td> <td>5.2</td> <td>8.0</td> <td>7.0</td> <td>13.2</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>WildCLIP-t1t7-lwf</td> <td>150M</td>
                    <td>7.3</td> <td>6.5</td> <td>6.8</td> <td>6.4</td> <td>13.1</td>
                </tr>
                <tr className="bg-sky-100">
                  <td>BioCLIP</td> <td>150M</td>
                    <td>3.6</td> <td>2.3</td> <td>0.5</td> <td>2.2</td> <td>21.1</td>
                </tr>
                <tr className="bg-slate-300">
                    <td>Random</td> <td>-</td>
                      <td>0.0</td> <td>0.0</td> <td>0.0</td> <td>0.0</td> <td>0.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <div className="text-2xl text-center mb-1 font-bold text-slate-700">INQUIRE-Rerank Leaderboard</div>
              <div className="text-center mb-3">This leaderboard shows reranking performance, starting from a fixed set of 100 images per query.</div>
              <div className="flex justify-center">
                <div className="inline-block leaderboard-proprietary px-2 py-1 mx-3">Proprietary LMM</div>
                <div className="inline-block bg-slate-100 px-2 py-1 mx-3">Open Source LMM</div>
                <div className="inline-block bg-sky-100 px-2 py-1 mx-3">Open Source CLIP/Embedding Model</div>
              </div>
              <table className="leaderboard bg-slate-100 mt-5">
                <thead>
                  <tr className="bg-slate-300">
                    <th>Method</th>
                    <th>Size</th>
                    <th>Overall</th>
                    <th>Appearance</th>
                    <th>Behavior</th>
                    <th>Context</th>
                    <th>Species</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="leaderboard-proprietary">
                    <td>GPT-4o</td> <td>-</td>
                        <td><b>62.4</b></td> <td><b>59.7</b></td> <td><b>61.9</b></td> <td><b>70.6</b></td> <td><b>42.4</b></td>
                  </tr>
                  <tr>
                    <td>VILA1.5-40b</td> <td>40B</td>
                        <td><u>54.3</u></td> <td>50.4</td> <td><u>55.1</u></td> <td><u>61.9</u></td> <td>36.0</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>SigLIP SO400m-14-384</td> <td>878M</td>
                      <td>51.5</td> <td><u>51.8</u></td> <td>51.7</td> <td>53.4</td> <td>38.8</td>
                  </tr>
                  <tr className="leaderboard-proprietary">
                    <td>GPT-4-Turbo (20240409)</td> <td>-</td>
                        <td>48.9</td> <td>43.7</td> <td>49.6</td> <td>56.6</td> <td>39.7</td>
                  </tr>
                  <tr>
                    <td>PaliGemma-3b-mix-448</td> <td>3B</td>
                        <td>48.9</td> <td>44.1</td> <td>51.6</td> <td>53.8</td> <td>35.3</td>
                  </tr>
                  <tr>
                    <td>LLaVA-v1.6-34b</td> <td>34B</td>
                        <td>48.3</td> <td>43.7</td> <td>48.7</td> <td>56.4</td> <td>34.7</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>SigLIP ViT-L/16-384</td> <td>652M</td>
                      <td>47.5</td> <td>42.8</td> <td>50.2</td> <td>52.1</td> <td>34.7</td>
                  </tr>
                  <tr>
                    <td>VILA1.5-13B</td> <td>13B</td>
                        <td>46.3</td> <td>40.2</td> <td>46.5</td> <td>56.8</td> <td>32.7</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP ViT-H/14-378 (DFN)</td> <td>987M</td>
                      <td>44.6</td> <td>38.8</td> <td>50.1</td> <td>47.4</td> <td>28.6</td>
                  </tr>
                  <tr>
                    <td>InstructBLIP-FLAN-T5-XXL</td> <td>12B</td>
                        <td>44.3</td> <td>38.7</td> <td>45.9</td> <td>50.7</td> <td>37.2</td>
                  </tr>
                  <tr>
                    <td>LLaVA-v1.6-mistral-7b</td> <td>7B</td>
                        <td>43.1</td> <td>39.0</td> <td>42.7</td> <td>51.5</td> <td>31.7</td>
                  </tr>
                  <tr>
                    <td>LLaVA-1.5-13b</td> <td>13B</td>
                        <td>43.0</td> <td>37.7</td> <td>45.1</td> <td>48.9</td> <td>32.7</td>
                  </tr>
                  <tr>
                    <td>BLIP-2-FLAN-T5-XXL</td> <td>12B</td>
                        <td>40.5</td> <td>32.8</td> <td>43.4</td> <td>47.9</td> <td>32.4</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP ViT-L/14 (DFN)</td> <td>428M</td>
                      <td>39.1</td> <td>34.9</td> <td>40.7</td> <td>43.3</td> <td>33.4</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP ViT-L/14 (OpenAI)</td> <td>428M</td>
                      <td>37.8</td> <td>35.1</td> <td>37.9</td> <td>41.4</td> <td>37.6</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP RN50x16 (OpenAI)</td> <td>291M</td>
                      <td>36.2</td> <td>32.7</td> <td>36.1</td> <td>40.5</td> <td>39.8</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP ViT-B/16 (DFN)</td> <td>150M</td>
                      <td>33.7</td> <td>29.4</td> <td>35.4</td> <td>37.2</td> <td>31.5</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP ViT-B/16 (OpenAI)</td> <td>150M</td>
                      <td>33.5</td> <td>30.8</td> <td>32.9</td> <td>37.2</td> <td>37.1</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>WildCLIP-t1</td> <td>150M</td>
                      <td>31.6</td> <td>28.2</td> <td>31.0</td> <td>36.5</td> <td>34.3</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>WildCLIP-t1t7-lwf</td> <td>150M</td>
                      <td>31.5</td> <td>29.0</td> <td>30.5</td> <td>35.2</td> <td>37.4</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP ViT-B/32 (OpenAI)</td> <td>151M</td>
                      <td>31.3</td> <td>26.9</td> <td>30.4</td> <td>37.3</td> <td>37.0</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>CLIP RN50 (OpenAI)</td> <td>102M</td>
                      <td>31.2</td> <td>28.8</td> <td>30.3</td> <td>35.0</td> <td>35.2</td>
                  </tr>
                  <tr className="bg-sky-100">
                    <td>BioCLIP</td> <td>150M</td>
                      <td>28.9</td> <td>27.4</td> <td>27.2</td> <td>30.8</td> <td><u>41.1</u></td>
                  </tr>

                  <tr className="bg-slate-300">
                    <td>Random</td> <td>-</td>
                      <td>23.0</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="py-1 bg-slate-100 text-[40px] font-medium flex items-center justify-center text-center">
          Data
        </div>
        <div className="w-full bg-white py-8">

          <div className="max-w-[900px] px-6 m-auto">


          <div className="border border-slate-200 p-4 rounded-lg bg-slate-100 mb-4">
              <div className="text-2xl font-bold text-slate-700">INQUIRE-Rerank</div>
              <div className="mt-2">
                This includes 200 queries and 20k images (100 images per query).
              </div>
              <div className="mt-0">
                The metadata (the list of queries and the list of images) is hosted on our
                <a className="underline font-bold ms-1" target="_blank" href="https://github.com/inquire-benchmark/INQUIRE/tree/main/data">Github repo.</a>
              </div>
              <div className="mt-4">

                Since this task only requires the 20k images, we also provide the entire INQUIRE-Rerank dataset and images <a className="underline font-bold" target="_blank" href="https://huggingface.co/datasets/evendrow/INQUIRE-Rerank">on 🤗 HuggingFace!</a> (We recommend you start here)
              </div>
            </div>


            <div className="border border-slate-200 p-4 rounded-lg bg-slate-100 mb-4">
              <div className="text-2xl font-bold text-slate-700">INQUIRE-Fullrank</div>
              <div className="mt-2">
                This includes 33k relevant images from 250 queries. The images that this benchmark uses are the iNat24 dataset.
              </div>
              <div className="mt-0">
                The dataset is hosted on our 
                <a className="underline font-bold ms-1" target="_blank" href="https://github.com/inquire-benchmark/INQUIRE/tree/main/data">Github repo.</a>
              </div>
            </div>

            <div className="border border-slate-200 p-4 rounded-lg bg-slate-100 mb-4">
              <div className="text-2xl font-bold text-slate-700">iNat2024</div>
              <div className="mt-2">
                The iNaturalist 2024 dataset contains 5 million images from 10k species.
              </div>
              <div className="mt-0">
                Instructions to download this full dataset are available on Github 
                <a className="underline font-bold ms-1" target="_blank" href="https://github.com/inquire-benchmark/INQUIRE/tree/main/data">here.</a>
              </div>
            </div>
          </div>
        </div>



        <div className="py-1 bg-slate-100 text-[40px] font-medium flex items-center justify-center text-center">
          Citation
        </div>
        <div className="w-full bg-white py-8">

          <div className="max-w-[900px] px-6 m-auto">
                
            <div>
              If you found INQUIRE useful, please consider citing out paper:
            </div>

            {/* @article{vendrow2024inquire,
              title={INQUIRE: A Natural World Text-to-Image Retrieval Benchmark}, 
              author={Vendrow, Edward and Pantazis, Omiros and Shepard, Alexander and Brostow, Gabriel and Jones, Kate E and Mac Aodha, Oisin and Beery, Sara and Van Horn, Grant},
              journal={NeurIPS},
              year={2024},
            } */}
            
            <pre className="mt-4 bg-slate-100 p-4 rounded-lg text-xs text-wrap">
              @article{"{"}vendrow2024inquire,
              <br />
              &nbsp;&nbsp;title={"{"}INQUIRE: A Natural World Text-to-Image Retrieval Benchmark{"}"}, 
              <br />
              &nbsp;&nbsp;author={"{"}Vendrow, Edward and Pantazis, Omiros and Shepard, Alexander and Brostow, Gabriel and Jones, Kate E and Mac Aodha, Oisin and Beery, Sara and Van Horn, Grant{"}"},
              <br />
              &nbsp;&nbsp;journal={"{"}NeurIPS{"}"},
              <br />
              &nbsp;&nbsp;year={"{"}2024{"}"},
              <br />
              {"}"}
            </pre>
          </div>

        </div>
    </div>
  );
}

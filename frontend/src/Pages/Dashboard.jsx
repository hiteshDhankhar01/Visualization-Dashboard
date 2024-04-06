import React, { useEffect, useState } from 'react';
import IntensityChart from '../components/charts/IntensityChart';
import LikelihoodChart from '../components/charts/LikelihoodChart';
import LikelihoodChart2 from '../components/charts/LikelihoodChart2';
import logoImg from '../assets/image/logo.png'
import RadarChart from '../components/charts/RadarChart';
import CountryLikelihoodChart from '../components/charts/CountryLikelihoodChart ';
// import Data from '../assets/jsonData.json'
import DataLength from '../components/DataLength';
import Line from '../components/charts/Line';
import axios from 'axios';

const Dashboard = () => {
    const [Data, setData] = useState([])
    const [selectedPestValue, setSelectedPestValue] = useState("");
    const [selectedSwotValue, setSelectedSwotValue] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedSource, setSelectedSource] = useState("");
    const [endYearInput, setEndYearInput] = useState("");
    const [endYear, setEndYear] = useState("");
    const [topicInput, setTopicInput] = useState("");
    const [topic, setTopic] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/data');
                setData(response.data);
                console.log(response)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching Data:', error);
            }
        };

        fetchData();
    }, []);



    const sourceList = [...new Set(Data.map(item => item.source).sort())];
    const regionList = [...new Set(Data.map(item => item.region).sort())];
    const countryList = [...new Set(Data.map(item => item.country).sort())];
    const pestOptions = [
        { name: "political", value: "political" },
        { name: "economic", value: "economic" },
        { name: "social", value: "social" },
        { name: "technological", value: "technologi" }
    ];

    const swotOptions = [
        { name: "Strength", value: "strength" },
        { name: "Weakness", value: "weak" },
        { name: "Opportunity", value: "opportunity" },
        { name: "Threats", value: "threats" }
    ];

    const handleEndInputChange = (e) => {
        const inputValue = e.target.value;
        if (isNaN(inputValue)) {
            alert("Input value is not a number");
            setEndYearInput("");
        } else {
            if (inputValue.length === 4) {
                setEndYear(inputValue); 4
            } else if (inputValue.length > 4) {
                return alert("Input value is not more than 4");
            }
            setEndYearInput(inputValue);
        }
    };

    const clearEndYear = () => {
        setEndYearInput("");
        setEndYear("");
    }

    const handleClearTopic = () => {
        setTopicInput("");
        setTopic("");
    }

    useEffect(() => {
        // Filter Data based on selectedRegion and selectedSource
        const filteredData = Data.filter(item =>
            (selectedRegion === "" || item.region === selectedRegion) &&
            (selectedSource === "" || item.source === selectedSource) &&
            (selectedCountry === "" || item.country === selectedCountry) &&
            (endYear === "" || item.end_year >= endYear) &&
            (topic === "" || item.topic.toLowerCase().includes(topic.toLowerCase())) &&
            (selectedPestValue === "" || item.pestle.toLowerCase().includes(selectedPestValue.toLowerCase())) &&
            (selectedSwotValue === "" ||
                item.title.toLowerCase().includes(selectedSwotValue.toLowerCase()) ||
                item.insight.toLowerCase().includes(selectedSwotValue.toLowerCase()))
        );
        // Update the Data state
        setData(filteredData);
    }, [selectedRegion, selectedSource, selectedCountry, endYear, topic, selectedPestValue, selectedSwotValue]);

    return (
        <div className="flex fixed">
            <div className="w-[28rem] h-screen abg-gray-100 p-2 border-r-[1px] ">
                <div className="sticky logo flex gap-2 items-center p-2 ">
                    <img className='w-[2.8rem] h-[2rem]' src={logoImg} alt="" />
                    <span className='text-[1.3rem] font-semibold'>Blackcoffer</span>
                </div>
                <div className='px-1 gap-2 flex flex-col aborder-r-[1px] overflow-y-scroll element h-full'>
                    <div className="mt-2 flex" >
                        <input type="text" id="endYear" className="w-full border-gray-300 border p-[8px] outline-none rounded-tl-md rounded-bl-md" placeholder='Enter end year... (4 digit)' value={endYearInput} onChange={handleEndInputChange} />
                        <button className={` bg-primary text-white px-3 rounded-tr-md rounded-br-md ${endYear === "" && "opacity-50"}`} disabled={endYear !== "" ? false : true}
                            onClick={clearEndYear} >Clear</button>
                    </div>

                    <div className="flex flex-col">
                        <div className='flex justify-between items-center'>
                            <h2 className='bg-gray-100 font-medium w-fit px-2 rounded-md mb-2'>PEST Filter</h2>
                            <button className={`bg-primary rounded-md text-white px-2 ${selectedPestValue === "" && "opacity-0"}`} onClick={() => setSelectedPestValue("")}>Remove</button>
                        </div>
                        <div className=' grid grid-cols-2 gap-4'>
                            {pestOptions.map((item, index) => (
                                <button key={index} className={`inline-flex p-1 items-center active:border-red-500  ap-2 rounded-md ${selectedPestValue === item.value && "selected"} cursor-default capitalize`}
                                    onClick={() => setSelectedPestValue(item.value)}
                                >
                                    <span className='pr-3'> ○</span>
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="region" className="block mb-2 bg-gray-100 font-medium w-fit px-2 rounded-md">Region</label>
                        <select className={`w-full p-2 border bg-white rounded-md  ${selectedRegion !== "" ? 'selected' : ""}`} name="" id=""
                            value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}
                        >
                            <option className='' value="">None</option>
                            {regionList.map((region, index) => (
                                <option className=' ' key={index}>
                                    {region}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="source" className="block mb-2 bg-gray-100 font-medium w-fit px-2 rounded-md">Source</label>
                        <select className={`w-full p-2 border rounded-md  text-sm px-2  bg-white  ${selectedSource !== "" ? 'selected' : ""}`} name="" id=""
                            value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
                            <option value="">None</option>
                            {sourceList.map((source, index) => (
                                <option key={index}>
                                    {source}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="country" className="block mb-2 font bg-gray-100 font-medium w-fit px-2 rounded-md">Country</label>
                        <select className={`w-full p-2 border rounded-md bg-white   ${selectedCountry !== "" ? 'selected' : ""}`} name="" id=""
                            value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                            <option value="">None</option>
                            {countryList.map((country, index) => (
                                <option key={index}>{country} </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <div className='flex justify-between items-center'>
                            <h2 className='bg-gray-100 font-medium w-fit px-2 rounded-md mb-2'>SWOT Filter</h2>
                            <button className={`bg-primary rounded-md text-white px-2 ${selectedSwotValue === "" && "opacity-0"}`} onClick={() => setSelectedSwotValue("")}>Remove</button>
                        </div>
                        <div className=' grid grid-cols-2 gap-4'>
                            {swotOptions.map((item, index) => (
                                <button key={index} className={`inline-flex p-1 items-center active:border-red-500  ap-2 rounded-md ${selectedSwotValue === item.value && "selected"} cursor-default capitalize`} onClick={() => setSelectedSwotValue(item.value)}>
                                    <span className='pr-3'> ○</span>  {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div >
            < div className=" w-full" >
                <div className="sticky top-0 bg-white mx-4 mt-4 flex border rounded-md pl-1">
                    <input type="text" placeholder="Search topics..." className="w-full  outline-none p-2" value={topicInput} onChange={(e) => setTopicInput(e.target.value)} />
                    <button className={`h-fit p-2 mr-2 bg-red-500 rounded-full text-white mt-1 ${topic === "" && "opacity-0"}`} disabled={topic !== "" ? false : true}
                        onClick={handleClearTopic}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                    <button className={` bg-primary text-white px-3 rounded-tr-md rounded-br-md ${topicInput === "" && "opacity-50"}`} disabled={topicInput !== "" ? false : true}
                        onClick={() => setTopic(topicInput)} >Add </button>
                </div>
                <div className="overflow-y-scroll h-screen element">
                    <DataLength data={Data} />

                    <div className="grid grid-cols-2 gap-4 p-4 pb-[4rem] ">
                        <div className="bg-white p-4 border rounded-md">
                            <IntensityChart data={Data} />
                        </div>
                        <div className="bg-white p-4 border rounded-md">
                            <LikelihoodChart data={Data} />
                        </div>
                        <div className="bg-white p-4 border rounded-md">
                            <LikelihoodChart2 data={Data} />
                        </div>
                        <div className="bg-white p-4 border rounded-md">
                            <RadarChart data={Data} />
                        </div>
                        <div className="bg-white p-4 border rounded-md col-span-2">
                            <CountryLikelihoodChart data={Data} />
                        </div>
                        <div className="bg-white p-4 border rounded-md col-span-2">
                            <Line data={Data} />
                        </div>
                    </div>
                </div>
            </ div>
        </div >
    );
}

export default Dashboard;
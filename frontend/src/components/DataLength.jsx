import React from 'react'

const DataLength = ({ data }) => {
    return (
        <div className='mt-2 px-2 fixed right-0'>
            <h2 className={`text-sm px-2 text-white w-fit rounded-md ${ data.length < 2 ?  "bg-gradient-to-l from-[#fd1d1d] to-[#fcb045]" :"bg-gradient-to-l from-[#9C94F4] to-primary" }`}>
            {data.length < 2 ? `The data set contains too few articles (${data.length}) for visualization. ( Please change Filter )` : `Graphical visualizations using information from ${data.length} articles.`}

        </h2>
        </div >
    )
}

export default DataLength
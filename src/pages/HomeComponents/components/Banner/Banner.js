import React from 'react';

const Banner = () => {
    return (
        <React.Fragment>
            <div className="bg-yellow-200 mx-10 rounded-md">
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span style={{ fontFamily: 'Luckiest Guy' }} className="text-white block tracking-wider"><span classNameName="text-pink-400">Schedule Your</span> Events Today</span>
                        <span style={{ fontFamily: 'Luckiest Guy' }} className="block tracking-wider  text-indigo-600">Subscribe Now.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a style={{ fontFamily: 'Luckiest Guy' }} href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-400 hover:bg-indigo-700">
                                Get started
        </a>
                        </div>
                        {/* <div className="ml-3 inline-flex rounded-md shadow">
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                Learn more
        </a>
                        </div> */}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Banner;
import React from 'react';

const WeOurHere = () => {
    const [serviceList, setserviceList] = React.useState([
        {
            service: 'Authentic Cliche Forage pitchfork pour-over'
        },
        {
            service: 'Authentic Cliche Forage pitchfork pour-over'
        },
        {
            service: 'Authentic Cliche Forage pitchfork pour-over'
        },
        {
            service: 'Authentic Cliche Forage pitchfork pour-over'
        }
    ])
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mt-24 space-y-20 mx-auto">
                    <div class="flex flex-col text-center w-full">
                        <h2 style={{ fontFamily: 'Luckiest Guy' }} class="text-xs text-pink-400 tracking-widest font-bold mb-1">We Are For Your Service</h2>
                        <h1 style={{ fontFamily: 'Luckiest Guy' }} class="sm:text-3xl text-4xl md:text-5xl font-semibold mb-4 text-gray-900 tracking-wider"><span className="text-yellow-400">We<span className="text-indigo-700"> Are</span></span><span className="text-pink-400"> Here</span></h1>
                        <div class="h-1 w-40 bg-pink-500 mx-auto rounded mb-3"></div>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                </div>
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-wider title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-600">The Special Events We Cover
                            <br class="hidden lg:inline-block" />
                        </h1>
                        <p class="mb-2 leading-relaxed text-gray-500 font-bold text-sm">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
                        <div class="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2">
                            {
                                serviceList.map((el, index) => {
                                    return (
                                        <div key={index} class="sm:w-full w-full p-0">
                                            <div class="rounded flex p-4 h-full items-center pl-0 pb-2">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <path d="M22 4L12 14.01l-3-3"></path>
                                                </svg>
                                                <span class="title-font text-sm font-bold">{el.service}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div class="flex justify-center">
                            <button style={{ fontFamily: 'Luckiest Guy' }} class="mt-3 inline-flex text-pink-600 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get In Touch</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="/img/team_spirit.svg" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default WeOurHere;
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import toast, { Toaster } from 'react-hot-toast';
import animationData from '../../../src/lotties/refresh.json';
import { db, Axios } from '../../firebase/firebaseConfig.js';

const ContactUs = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [submitStatus, setsubmitStatus] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [validateEmail, setvalidateEmail] = useState(true);

    const handleSubmit = (evt) => {
        if (!!name && !!email && !!message) {
            setsubmitStatus(true);
            let contactData = {
                name,
                email,
                message
            }
            const contactRef = db.collection('contactDetails').add({
                name: name,
                email: email,
                message: message
            });
            setsubmitStatus(false);
            setName('')
            setEmail('')
            setMessage('')
            toast('Thankyou for your feedback.')
        } else {
            toast('Please fill all fields.')
        }
    }

    const validateEmailFunc = (email) => {
        if (!!email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase())) {
                console.log('right email');
                setEmail(email);
                setvalidateEmail(true)
            } else {
                console.log('wrong email');
                setEmail(email);
                setvalidateEmail(false)
            }
        }
    }

    return (
        <React.Fragment>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 mt-24 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h2 style={{ fontFamily: 'Luckiest Guy' }} className="tracking-widest text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Contact Us</h2>
                        <h1 style={{ fontFamily: 'Luckiest Guy' }} className="tracking-widest sm:text-3xl text-4xl font-medium title-font mb-4 text-indigo-700">Get In Touch With Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div></div>
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" value={name}
                                onChange={e => setName(e.target.value)} name="name" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" value={email}
                                onChange={e => validateEmailFunc(e.target.value)} name="email"
                                className={validateEmail ? "w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" : "w-full bg-white rounded border border-2 border-red-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"} />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" value={message}
                                onChange={e => setMessage(e.target.value)} name="message" className="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        {
                            submitStatus ? <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                <Lottie
                                    options={defaultOptions}
                                    height={25}
                                    width={25}
                                /></button> : <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        }
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                        // Define default options
                        className: '',
                        style: {
                            margin: '40px',
                            background: '#363636',
                            color: '#fff',
                            zIndex: 1,
                        },
                        duration: 5000,
                        // Default options for specific types
                        success: {
                            duration: 3000,
                            theme: {
                                primary: 'green',
                                secondary: 'black',
                            },
                        },
                    }}
                />
            </section>
        </React.Fragment>
    )
}

export default ContactUs;
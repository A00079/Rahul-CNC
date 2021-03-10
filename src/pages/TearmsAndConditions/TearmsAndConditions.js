import React from 'react';

const TearmsAndConditions = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest title-font sm:text-4xl text-4xl mb-4 font-medium text-indigo-700">Terms
                            <br class="hidden lg:inline-block" /> And Conditions
                        </h1>
                        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="/img/termsandconditions.svg" />
                    </div>
                </div>
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-4 mx-auto">
                        <div class="-my-8 divide-y-2 divide-gray-100 mb-20">
                            <div class="py-5 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    <h2 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest text-2xl font-medium text-gray-400 title-font mb-2">Information We Collect</h2>
                                    <p class="leading-relaxed text-xs font-bold text-gray-500">When you create an account and use our Service, we collect the following types of information from you:<br />

                                    1. Name;<br />
                                    2. Contact information such as your email address and phone number;<br />
                                    3. Demographics information such as your gender and location;<br />
                                    4. Any other information, such as reviews, content, and bio, you provide us.<br />
                                    If you create an account using, or otherwise connect your account to, a social networking services account (e.g. Twitter or Facebook), we may also collect information provided to us by such social networking service including for example your: name; email address; birthday; geographic location; interests; profile picture; gender; networks; user ID; list of friends; and any information you have made public on such social networking account.
                                    </p>
                                </div>
                            </div>
                            <div class="py-5 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    <h2 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest text-2xl font-medium text-gray-400 title-font mb-2">Sharing Of Your Information</h2>
                                    <p class="leading-relaxed text-xs font-bold text-gray-500">The DeViine Services may allow you to connect and share your actions, comments, content, profile, and information publicly or with other people. Please be mindful of your own privacy needs as you choose who to connect with and what to share and make public. We cannot control the privacy or security of information you choose to make public or share with others.<br /><br />
                                    The Services may also provide you with the option to share certain information from your DeViine account with social networking services like Facebook, Google, or Twitter. We are not responsible for the use or re-sharing by others of any of your information once it is made public. If you do not want your information to be made public, you should not use the DeViine Services in this manner and/or you should adjust your privacy settings on the applicable social networking service accordingly. We are not responsible for and we do not control these social networking services privacy practices. Please review the applicable privacy policy for information about how they use your information.</p>
                                </div>
                            </div>
                            <div class="py-5 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    <h2 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest text-2xl font-medium text-gray-400 title-font mb-2">How we Use Your Information</h2>
                                    <p class="leading-relaxed text-xs font-bold text-gray-500">We generally use your information to:<br /><br />
                                    Facilitate the creation of and secure your account on the Services; Identify you as a user in our system; Provide, personalize, and improve the Services; Communicate with you about your use of the Services; Develop new products and services, Customize the advertising you view and recommend content; Fulfill your requests; Send newsletters, surveys, offers and promotional materials related to the Services and for other marketing purposes of DeViine using your contact information; Protect, investigate, and prevent potentially fraudulent, unauthorized, or illegal activities; Protect our rights and the rights of other users; and As otherwise described in this Privacy Policy or in notices we provided to you. We may also use your information to verify your geographic location. We may use your geographic location data to personalize our Service, to recommend content, determine whether the information you have requested is available in your location.</p>
                                </div>
                            </div>
                            <div class="py-5 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    <h2 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest text-2xl font-medium text-gray-400 title-font mb-2">How we Disclose Your Information</h2>
                                    <p class="leading-relaxed text-xs font-bold text-gray-500">We may share your information as follows:<br /><br />
                                    1. We may share your personal information with your consent or at your direction.<br /> 2. We may also share your information with others who perform services on our behalf.<br /> 3. We may disclose your information if we believe we are required to do so by law, or to comply with a court order, judicial or other government subpoena, or warrant.<br /> 4. We also may disclose your information if we believe doing so is appropriate or necessary to prevent any liability, or fraudulent, abusive, or unlawful uses or to protect DeViine and our Services; or any rights, property, or personal safety of DeViine or others.<br /> 5. In the event that DeViine is or may be acquired by or merged with another company or involved in any other business deal (or negotiation of a business deal) involving sale or transfer of all or part of our business or assets, we may transfer or assign your information as part of or in connection with the transaction. Finally, in the event of insolvency, bankruptcy, or receivership, information may be transferred as a business asset. We may also share aggregated and anonymized data with our partners, advertisers, and other third parties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default TearmsAndConditions;
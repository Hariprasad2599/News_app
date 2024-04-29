
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductPage() {
    const [infoVisible4, setInfoVisible4] = useState(false);
    const [infoVisible5, setInfoVisible5] = useState(false);
    const [infoVisible6, setInfoVisible6] = useState(false);
    const [infoVisible7, setInfoVisible7] = useState(false);
    const [infoVisible8, setInfoVisible8] = useState(false);
    const [infoVisible9, setInfoVisible9] = useState(false);

    const toggleInfo4 = () => {
        setInfoVisible4(!infoVisible4);
        setInfoVisible5(false);
        setInfoVisible6(false);
    };

    const toggleInfo5 = () => {
        setInfoVisible5(!infoVisible5);
        setInfoVisible4(false);
        setInfoVisible6(false);
    };

    const toggleInfo6 = () => {
        setInfoVisible6(!infoVisible6);
        setInfoVisible7(false);
        setInfoVisible8(false);
    };

 
    const toggleInfo7 = () => {
        setInfoVisible7(!infoVisible7);
        if (infoVisible7) {
            setInfoVisible8(false);
            setInfoVisible9(false);
        }
    };

    const toggleInfo8 = () => {
        setInfoVisible8(!infoVisible8);
        if (infoVisible8) {
            setInfoVisible7(false);
            setInfoVisible9(false);
        }
    };

    const toggleInfo9 = () => {
        setInfoVisible9(!infoVisible9);
        if (infoVisible9) {
            setInfoVisible8(false);
            setInfoVisible6(false);
        }
    };

    return (
        <div className="product-page">
            <style>{`
                .product-cell {
                    width: 33.33%;
                    padding: 10px;
                    position: relative;
                }

                .image-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 10px;
                    font-size: 40px;
                    font-weight: bold;
                }

                .link-style {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                }

                .link-style:hover {
                    color: blue;
                }

                /* Disable image zoom on hover for images inside the product-table */
                .product-table img {
                    pointer-events: none;
                }
            `}</style>

            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <div className="center-text">
                        <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px', color: '#FF4500', textShadow: '2px 2px 4px #000000' }}>Other News</h1>
                        </div>
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\YouTube Icon.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">YouTube Updates Channel Permissions Controls to Make Assigning In-App Help Easier.</a>
                                    </h2>

                                    <button onClick={toggleInfo4} className="button">Read More</button>
                                    {infoVisible4 && (
                                        <div id="additionalInfo4">
                                            <p>YouTube has released new options allowing users to optimize the management of their YouTube channel.</p>
                                            <p>The platform plans to expand its Channel Permissions element enabling channel owners to approve selected users to manage their channel. </p>
                                            <p>  With the new update, users within the main YouTube app, on desktop and mobile, will also be able to post on an approved owner’s behalf. It will provide users within the main YouTube app to post on an approved owner’s behalf. </p>
                                            <p>The platform further adds that channel permissions can be beneficial for music partners. It will allow artists to give labels or management access to their accounts without granting full access.</p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Tower.cms" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Ethiopia launches tender for new telecoms licence.</a>
                                    </h2>

                                    <button onClick={toggleInfo5} className="button">Read More</button>
                                    {infoVisible5 && (
                                        <div id="additionalInfo5">
                                            <p>Ethiopia's telecoms industry is considered a big prize in Prime Minister Abiy Ah Ahmed's push to liberalise the economy after he took over in 2018, thanks to a large population of about 120 million.</p>
                                            <p>Ethiopia has launched a tender for a second new telecommunications license, its communications authority said on Friday, opening up one of Africa's largestmarkets to further competition.</p>
                                            <p>Kenya's Safaricom launched its mobile network in Ethiopia in October last year, becoming the first private operator alongside state-owned Ethio Telecom which had hitherto enjoyed a monopoly.</p>
                                            <p>"There are several positive developments occurring in the Ethiopian telecommunications sector since the beginning of the liberalization process," the Ethiopian Communications Authority said in a request for qualifications (RFQ) notice.</p>                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Cricket.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Jadeja-vu: CSK's same old phenomenon.</a>
                                    </h2>

                                    <button onClick={toggleInfo6} className="button">Read More</button>
                                    {infoVisible6 && (
                                        <div id="additionalInfo6">
                                            <p>Jadeja may have a new puzzle to solve this season.</p>
                                            <p>"He's playing, sometimes now, a slightly different role," Hussey said, "because in the last few years he's come in very late, batting with MS [Dhoni] towards the back end. And this year we've asked him a few times to come in at the No. 4 position.
                                                It's a very different role and sometimes according to the situation, you need to just be free and go quite quickly. But other times you've lost a couple of wickets in the powerplay, you need to take a little bit of time to build the next partnership.</p>
                                            <p>"I think he's doing a pretty good job actually, of reading the situation and playing accordingly. I know we're seeing some games where teams are just teeing off, but if the conditions, or the match situation doesn't dictate that, then you've got to play
                                                a different way. I think he's doing a really good job and he's adapting to the different situations of the game."</p>
                                            <p>Jadeja has gone through his entire career with questions like those flung at him and more often than not he comes up with an answer that doesn't just shut people up, it wins them over. "Need new haters," he tweeted once. "The old ones are starting to like me."</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            {/* Rest of your code */}
                        </tr>
                        {/* Repeat the same pattern for other rows and products */}
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Vi.cms" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Telecom Diary: Vodafone Idea: Start of a new era?</a>
                                    </h2>

                                    <button onClick={toggleInfo7} className="button">Read More</button>
                                    {infoVisible7 && (
                                        <div id="additionalInfo7">
                                            <p>Through the FPO, Vodafone Idea has put concerns of its survival and competitiveness away but it's not viable yet, as per a Ambit Capital report. A significant rise in mobile tariffs will be necessary following the fundraising to help Vodafone Idea in navigating the present crisis seamlessly.</p>                               <p>The platform plans to expand its Channel Permissions element enabling channel owners to approve selected users to manage their channel. </p>
                                            <p>  With the new update, users within the main YouTube app, on desktop and mobile,
                                                will also be able to post on an approved owner’s behalf. It will provide users within the main YouTube app to post on an approved owner’s behalf. </p>
                                            <p>Will this be the dawn of a new chapter for Vodafone Idea? Once the leading telecom player following the 2018 merger of Vodafone India and Idea Cellular, it now grapples with survival challenges.
                                            </p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\fish.jpg" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">From Reel to Real: A Fisherman’s Guide to Authentic Marketing.</a>
                                    </h2>

                                    <button onClick={toggleInfo8} className="button">Read More</button>
                                    {infoVisible8 && (
                                        <div id="additionalInfo8">
                                            <p>For as long as I can remember, I have been a fisherman. Fishing is not just a hobby for me; it is an intrinsic part of my very being.
                                                Every encounter with a body of water sparks an irresistible urge to explore its potential.</p>
                                            <p>For instance, when I was 10, my parents took the family on a trip to Washington, D.C. While my mom, dad and siblings checked out the Lincoln Memorial, I found myself instinctively drawn to the reflecting pool. Always equipped with a rod & reel, I spent my time fishing rather than sight-seeing. This practice became habitual, from the quiet moments before elementary school through the busier years of high school and college.
                                                These days, I fish weekly during the season alongside my day job, where I assist brands in authentically advertising to the right audience.</p>
                                            <p>Having spent the last 13 years of my professional career helping companies of all sizes market their products and services, I’ve recently found myself reflecting on the value of authenticity and the parallels that exist between the realms of fishing and marketing. As we stand today at the dawn of a generative AI revolution, with deep fakes running rampant across the internet,
                                                it is perhaps more crucial now than ever before for brands to be authentic to their core mission and values in their advertising message.</p>
                                            <p>In the spirit of authenticity, let’s delve into the four C’s of marketing through the lens of a well-seasoned fisherman. I’ll do my best to eliminate any hook or “reel ’em in” puns wherever possible.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Bollywood.avif" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Anand Deverakonda on 18 years of Pokiri: ‘I would mimic Mahesh Babu’s running style in school’.</a>
                                    </h2>

                                    <button onClick={toggleInfo9} className="button">Read More</button>
                                    {infoVisible9 && (
                                        <div id="additionalInfo9">
                                            <p>It has been 18 years since Puri Jagannadh’s Pokiri, starring Mahesh Babu and Ileana D’Cruz, was released in theatres. Mahesh’s fans,
                                                including Vijay Deverakonda’s brother, actor Anand Deverakonda, seem pumped, reminiscing their memories of the film’s release.
                                                (Also Read: Mahesh Babu is a doting father in these sweet pics with Sitara, Gautam from Europe trip)</p>
                                            <p>Anand, in a moment of reminiscence, shared a still of Mahesh from Pokiri where he is seen running. Posting it on X (formerly Twitter), he shared, “I remember trying to mimic this running style as a kid in school corridors. Like so many other kids, I’m sure. Hands sharp on the sides, legs taking big strides - but it’s never that. It’s the intensity,
                                                the suppressed anger in his eyes that made this style iconic. Truly a masterpiece film. Remember the craze around Konark in Dilsukhnagar.”</p>
                                            <p>I remember trying to mimic this running style as a kid in school corridors. Like so many other kids, I’m sure.
                                                Hands sharp on the sides, legs taking big strides - but it’s never that. It’s the intensity, the suppressed anger in his eyes that made this style iconic. </p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            {/* Rest of your code */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductPage;

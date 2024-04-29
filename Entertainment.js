
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Entertainment.css';


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
                .button {
                    background: linear-gradient(to bottom, #4CAF50 0%, #45a049 100%);
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
                    border-radius: 12px;
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
                }

                .button:hover {
                    background: linear-gradient(to bottom, #45a049 0%, #4CAF50 100%);
                    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.5);
                }
                //css
                /* Advanced CSS for tables */
                .product-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                .product-table th, .product-table td {
                    border: 1px solid #dddddd;
                    padding: 8px;
                    text-align: left;
                }
                
                .product-table th {
                    background-color: #f2f2f2;
                }

                /* Additional CSS for table cells */
                .product-cell {
                    width: 33.33%;
                    padding: 10px;
                    position: relative;
                }
 
            `}</style>

            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <div className="center-text">
                            <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px', color: '#FF4500', textShadow: '2px 2px 4px #000000' }}>Entertainment News</h1>
                        </div>
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Entertainment\New1.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Ranbir Kapoor misses Raha, keeps making video calls to his daughter from Ramayana set - Exclusive</a>
                                    </h2>
                                    <button onClick={toggleInfo4} className="button">Read More</button>

                                    {infoVisible4 && (
                                        <div id="additionalInfo4">
                                            <p>Ranbir Kapoor is back on set, shooting non-stop for nearly three weeks for Nitesh Tiwari's film Ramayana. The actor, known for being a hands-on father,
                                                is deeply missing his daughter Raha while on set and regularly makes video calls to her. His daughter is currently at home with her mother Alia Bhatt
                                                while Ranbir has been working tirelessly, covering both day and night shifts for the film.</p>
                                            <p>Ranbir Kapoor is back on set, shooting non-stop for nearly three weeks for Nitesh Tiwari's film <a href="">Ramayana.</a> The actor, known for being a hands-on father, is deeply missing his daughter Raha while Ranbir has been working tirelessly,
                                                covering both day and night shifts for the film. </p>

                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Entertainment\New2.png" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">'Not a word about ...': PM Modi targets Rahul over 'Raja, Maharaja' remark; Congress hits back
                                        </a>
                                    </h2>
                                    <button onClick={toggleInfo5} className="button">Read More</button>

                                    {infoVisible5 && (
                                        <div id="additionalInfo5">
                                            <p>PM Modi criticized Rahul Gandhi for allegedly appeasing a vote bank while neglecting atrocities by Muslim rulers,
                                                and aligning with parties glorifying Aurangzeb. While addressing an election rally in Belagavi, PM Modi emphasized Hindu rulers' contributions. The Prime Minister also went on to target the Congress over the deteriorating law and order situation in Karnataka since they came to power.
                                                He referred to the daylight murder of a Congress corporator's daughter in Hubballi.</p>
                                            <p>NEW DELHI: Prime Minister Narendra Modi on Sunday unleashed a scathing attack at Congress leader Rahul Gandhi for his remark that "Rajas and Maharajas used to take away lands"
                                                and accused him of appeasing a certain 'vote bank' while remaining silent on the atrocities committed by Muslim rulers.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Entertainment\New3.jpg" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">WhatsApp shutdown threat in India: 4 Reasons government says Whatsapp needs to 'follow' IT rules</a>
                                    </h2>
                                    <button onClick={toggleInfo6} className="button">Read More</button>

                                    {/* <button onClick={toggleInfo6} style={{ cursor: 'pointer' }}>Read More</button> */}
                                    {infoVisible6 && (
                                        <div id="additionalInfo6">
                                            <p>WhatsApp warns Delhi High Court of service halt if encryption is broken under IT Rules. Challenges claim violation of privacy, amid law enforcement tracing concerns,urging platform accountability to prevent public order issues ..</p>
                                            <p>Messaging service platform WhatsApp this week submitted before the Delhi High Court that if it is made or compelled to break encryption of messages, then the platform will stop functioning. The submissions came while thedivision bench led
                                                by the Acting Chief Justice was hearing the petitions moved by WhatsApp and Facebook challenging newly amended IT Rules.</p>
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
                                    <img src="Assets\Entertainment\News4.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Tom Holland supports girlfriend Zendaya's new film Challengers; see his sweet post</a>
                                    </h2>

                                    <button onClick={toggleInfo7} className="button">Read More</button>
                                    {infoVisible7 && (
                                        <div id="additionalInfo7">
                                            <p>Zendaya's new film Challengers opened to positive reviews. Check out how boyfriend Tom Holland showed his support for the film.</p>
                                            <p>Tom Holland has sorted his weekend plans! The actor showed support with a sweet new post for the sports drama Challengers which released this week in theatres.
                                                Challengers stars Zendaya in the lead role, along with Mike Faist and Josh O'Connor. (Also read: <a href="">Zendaya and Tom Holland ‘discussing marriage’ after years of dating;
                                                    ‘that is a reality’)</a></p>
                                            <p>Taking to his Instagram, Tom shared the poster of the film and wrote in the caption:
                                                “I know what I’m doing this weekend!” He tagged Zendaya in the post.</p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Entertainment\News5.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Irrfan's death anniversary: Radhika Madan misses her Angrezi Medium co-star, says he never took name or fame for granted</a>
                                    </h2>

                                    <button onClick={toggleInfo8} className="button">Read More</button>
                                    {infoVisible8 && (
                                        <div id="additionalInfo8">
                                            <p>Actor Radhika Madan remembers
                                                her Angrezi Medium co-star Irrfan on his 4th death anniversary; adds she learnt a lot from him while filming Homi Adajania's film.</p>
                                            <p>Sometimes, you don’t need to know a person for years to remember them once they’re gone. For actor Radhikka Madan,
                                                it was just that one film that she did with late actor Irrfan that left an unforgettable mark in her memory.</p>
                                                <p>“He was a legend. Every artiste can say that Irrfan sir he was a phenomena. He has left us with so many good films and memories. 
                                                    In fact, just two days ago I was thinking about him and missing him so much that I went back an watched our 
                                                    film,” says Madan, as she talked about her Angrezi Medium (2020) co-star, late actor Irrfan, on his fourth death anniversary.</p>
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

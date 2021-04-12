import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import TVShowDetail from 'components/TVShowDetail';


const DETAIL_URL = "https://api.themoviedb.org/3/tv/";
const API_KEY = "?api_key=e0ae2441f2fc238a8149d29a2fd0b99e";


function Details() {
    const [showDetails, setShowDetails] = useState([]);
    
    const router = useRouter();

    useEffect(() => {
        

        async function getShowDetails() {
            if(!router.isReady) {
                return;
            }
            const { id } = router.query;
            // console.log(id);
            let url = DETAIL_URL + id + API_KEY;
            // console.log(url);
            // const response = await fetch(DETAIL_URL + id + API_KEY);
            // console.log(response);
            // const json = await response.json();
            // console.log(json.results);
            // setShowDetails(json.results);
            fetch(url).then((res) => res.json()).then((data) => {
                // console.log(data);
                setShowDetails(data);
            })
        };
        getShowDetails();
    }, []);

    return (
        <>
        <Head>
            <title>Flicks by PIE</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="show-container">
            <header className="header-bar">
                <Link href={"/"}>
                    <img className="logo" src = {"/static/images/pielogo.svg"} alt="Home"></img>
                </Link>
            </header>
            {<TVShowDetail key={showDetails.id} {...showDetails} />}
        </div>

        <footer className="footer-bar">
            <h4>© 2021 PIE LLC</h4>
            <p>Movie Data Provided By <img className="logo" src = {"/static/images/tmdblogo.svg"} alt="TMDB"></img>
            </p>
        </footer>
        </>
    )

};

export default Details;


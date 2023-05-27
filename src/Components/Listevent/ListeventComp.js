/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Listevent.css"

export default function ListeventComp() {
  return (
    <div>
        <ul>
    
    <li class="card">
        <a 
            href="#" 
            class="featured-image" 
            // eslint-disable-next-line react/style-prop-object
            style="background-image:url('https://res.cloudinary.com/dgu7vsmfd/image/upload/v1544375649/NGA_Screenshot_510x365.jpg')">
        </a>
        <article class="card-body">
            <header>
                <a href="utilidata-national-governors-association-meeting">
                    <span class="pre-heading">Blog</span>
                    <div class="title">
                        <h3>Test this responsively to see the horizontal magik</h3>
                    </div>
                    <p class="meta">
                        <span class="author">Utilidata</span>
                        <span> | </span>
                        <time class="updated" datetime="" itemprop="datePublished">July 27, 2017</time>
                    </p>
                </a>
            </header>
            <div class="chips">
                <a class="chip">Government</a>
                <a class="chip">Test</a>
                <a class="chip">Utilidata</a>
            </div>
        </article>
    </li>
        
    </ul>
    </div>
  )
}

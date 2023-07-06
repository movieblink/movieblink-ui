import React from "react"
import HeroSlide from "../components/hero-slide/HeroSlide"
import { Link } from 'react-router-dom'
import { OutlineButton } from "../components/button/Button"

export const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2> Trending Movies</h2>
              <Link>
                <OutlineButton className="small"> View More </OutlineButton>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { memo, ReactElement } from "react"

import { Link } from "gatsby"
import "./style/index.less"

const BlogIcon = require("../../images/blog.svg")
const BookListIcon = require("../../images/book-list.svg")
const HomeIcon = require("../../images/home.svg")
const ResumeIcon = require("../../images/resume.svg")

type BottomNavProps = {}

function BottomNav(props: BottomNavProps): ReactElement {
  return (
    <div className="bottom-nav-container show-on-screen-sm">
      <Link className="bottom-nav-link" to="/">
        <HomeIcon className="bottom-nav-icon" />
        <small>home</small>
      </Link>
      <Link className="bottom-nav-link" to="/blog">
        <BlogIcon className="bottom-nav-icon" />
        <small>blog</small>
      </Link>
      <Link className="bottom-nav-link" to="/book-list">
        <BookListIcon className="bottom-nav-icon" />
        <small>book list</small>
      </Link>
      <Link className="bottom-nav-link" to="/resume">
        <ResumeIcon className="bottom-nav-icon" />
        <small>resume</small>
      </Link>
    </div>
  )
}

export default memo(BottomNav)

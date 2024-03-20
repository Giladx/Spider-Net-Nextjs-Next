import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import {
  DataProvider,
  DateTimePrimitive,
  Repeater,
} from '@teleporthq/react-components'
import RichText from '@madebyconnor/rich-text-to-jsx'
import PropTypes from 'prop-types'

import blogPageInitialPropsTqSCResource from '../../resources/blog-page-initial-props-tq_s-c'

const Blog1 = (props) => {
  return (
    <>
      <div className="blog1-container">
        <Head>
          <title>Blog1 - SpiderNet Nextjs new</title>
          <meta property="og:title" content="Blog1 - SpiderNet Nextjs new" />
        </Head>
        <header data-thq="thq-navbar" className="blog1-navbar-interactive">
          <img
            alt="logo"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/path15-1500h.webp"
            srcSet="/path15-1500h.webp 1200w, /path15-tablet.webp 800w, /path15-mobile.webp 480w"
            className="blog1-image"
          />
          <div data-thq="thq-navbar-nav" className="blog1-desktop-menu">
            <nav className="blog1-links">
              <div className="blog1-container1">
                <svg viewBox="0 0 1024 1024" className="blog1-icon">
                  <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path>
                </svg>
                <span className="blog1-text">דף הבית</span>
              </div>
              <Link href="/contact">
                <a className="blog1-link">
                  <div className="blog1-container2">
                    <svg viewBox="0 0 1024 1024" className="blog1-icon02">
                      <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                    </svg>
                    <span className="blog1-text1">צור קשר</span>
                  </div>
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="blog1-burger-menu">
            <svg viewBox="0 0 1024 1024" className="blog1-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="blog1-mobile-menu">
            <div className="blog1-nav">
              <div className="blog1-top">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/ninjalogo-1500h.webp"
                  srcSet="/ninjalogo-1500h.webp 1200w, /ninjalogo-tablet.webp 800w, /ninjalogo-mobile.webp 480w"
                  className="blog1-logo"
                />
                <div data-thq="thq-close-menu" className="blog1-close-menu">
                  <svg viewBox="0 0 1024 1024" className="blog1-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="blog1-links1">
                <span className="blog1-text2">דף הבית</span>
                <Link href="/contact">
                  <a className="blog1-link1">צור קשר</a>
                </Link>
              </nav>
              <div className="blog1-buttons"></div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="blog1-icon08"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="blog1-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="blog1-icon12"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="blog1-top-title">
          <h1 id="domain" className="blog1-text3">
            כל המאמרים
          </h1>
          <div>
            <div className="blog1-container4">
              <Script
                html={`<script>
  var x = location.hostname;
  document.getElementById("domain").innerHTML= x;
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="blog1-container5">
                <Repeater
                  items={params}
                  renderItem={(BlogEntities) => (
                    <>
                      <Link href={`/blog/${BlogEntities?.slug}`}>
                        <a>
                          <div className="blog1-minitura">
                            <div className="blog1-image1">
                              <img
                                alt="image"
                                src={BlogEntities?.featuredImage?.url}
                                className="blog1-image2"
                              />
                            </div>
                            <div className="blog1-title">
                              <h1 className="blog1-text4">
                                {BlogEntities?.title}
                              </h1>
                            </div>
                            <div className="blog1-date">
                              <span>פורסם בתאריך:</span>
                              <span className="blog1-date-time">
                                <DateTimePrimitive
                                  format="DD/MM/YYYY"
                                  date={BlogEntities?.createdAt}
                                ></DateTimePrimitive>
                              </span>
                            </div>
                            <div className="blog1-content">
                              <div className="blog1-container6">
                                <RichText
                                  richText={BlogEntities?.excerpt}
                                ></RichText>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.blogEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .blog1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog1-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #f9f9f9;
          }
          .blog1-image {
            cursor: pointer;
            height: 3rem;
            text-decoration: none;
          }
          .blog1-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .blog1-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .blog1-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            text-decoration: none;
          }
          .blog1-icon {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .blog1-text {
            color: var(--dl-color-gray-black);
            font-size: 24px;
          }
          .blog1-link {
            display: contents;
          }
          .blog1-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .blog1-icon02 {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .blog1-text1 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
          }
          .blog1-burger-menu {
            display: none;
          }
          .blog1-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .blog1-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 100;
            position: absolute;
            transform: translateX(-100%);
            transition: 0.5s;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #111;
          }
          .blog1-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog1-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .blog1-logo {
            width: auto;
            height: 3rem;
            text-decoration: none;
          }
          .blog1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .blog1-icon06 {
            fill: var(--dl-color-gray-white);
            width: 30px;
            height: 30px;
          }
          .blog1-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog1-text2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .blog1-link1 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .blog1-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog1-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .blog1-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .blog1-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .blog1-top-title {
            flex: 0 0 auto;
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #111111;
          }
          .blog1-text3 {
            color: var(--dl-color-gray-900);
            width: auto;
            font-size: 4em;
            text-align: center;
            font-weight: 900;
          }
          .blog1-container4 {
            display: contents;
          }
          .blog1-container5 {
            width: 95%;
            display: grid;
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            grid-template-columns: repeat(4, 1fr);
          }
          .blog1-minitura {
            gap: 12px;
            width: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 5px 5px 20px 0px #e9e9e9;
            align-items: flex-start;
            border-color: #e5e5e5;
            border-width: 1px;
            border-radius: 20px;
            flex-direction: column;
            text-decoration: none;
          }
          .blog1-image1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog1-image2 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 20px;
          }
          .blog1-title {
            flex: 0 0 auto;
            width: auto;
            height: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog1-text4 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog1-date {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .blog1-date-time {
            font-family: 'Exo 2';
            font-weight: 700;
            margin-right: var(--dl-space-space-halfunit);
          }
          .blog1-content {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog1-container6 {
            line-height: 1.8;
          }
          @media (max-width: 1600px) {
            .blog1-image1 {
              width: 100%;
            }
            .blog1-image2 {
              height: 200;
            }
          }
          @media (max-width: 1200px) {
            .blog1-container5 {
              grid-template-columns: repeat(3, 1fr);
            }
            .blog1-image1 {
              width: 100%;
            }
            .blog1-text4 {
              font-size: 1.8em;
            }
          }
          @media (max-width: 991px) {
            .blog1-image {
              height: 3rem;
            }
            .blog1-container5 {
              grid-template-columns: repeat(2, 1fr);
            }
            .blog1-image1 {
              width: 100%;
            }
            .blog1-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .blog1-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              background-color: #f9f9f9;
            }
            .blog1-image {
              height: 3rem;
            }
            .blog1-desktop-menu {
              display: none;
            }
            .blog1-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .blog1-icon04 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .blog1-mobile-menu {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog1-logo {
              height: 3rem;
            }
            .blog1-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog1-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog1-container5 {
              grid-template-columns: repeat(1, 1fr);
            }
            .blog1-image2 {
              height: 350px;
            }
            .blog1-title {
              width: 100%;
              height: 80px;
            }
            .blog1-text4 {
              font-size: 1.5em;
            }
          }
          @media (max-width: 479px) {
            .blog1-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .blog1-image {
              height: 3rem;
            }
            .blog1-icon04 {
              width: 30px;
              height: 30px;
            }
            .blog1-mobile-menu {
              padding: var(--dl-space-space-unit);
              background-color: #111111;
            }
            .blog1-logo {
              height: 3rem;
            }
            .blog1-icon06 {
              fill: var(--dl-color-gray-white);
              width: 30px;
              height: 30px;
            }
            .blog1-text2 {
              color: var(--dl-color-gray-white);
            }
            .blog1-link1 {
              color: var(--dl-color-gray-white);
            }
            .blog1-icon08 {
              fill: var(--dl-color-gray-white);
            }
            .blog1-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .blog1-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .blog1-title {
              width: 100%;
            }
            .blog1-text4 {
              font-size: 1.3em;
            }
          }
        `}
      </style>
    </>
  )
}

Blog1.defaultProps = {
  blogEntities: [],
}

Blog1.propTypes = {
  blogEntities: PropTypes.array,
}

export default Blog1

export async function getStaticProps(context) {
  try {
    const response = await blogPageInitialPropsTqSCResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        blogEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

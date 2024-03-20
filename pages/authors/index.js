import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorsPageInitialPropsTqMKResource from '../../resources/authors-page-initial-props-tq_m-k'

const Authors1 = (props) => {
  return (
    <>
      <div className="authors1-container">
        <Head>
          <title>Authors1 - SpiderNet Nextjs new</title>
          <meta property="og:title" content="Authors1 - SpiderNet Nextjs new" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="authors1-container1">
                <Repeater
                  items={params}
                  renderItem={(AuthorsEntities) => (
                    <>
                      <div className="authors1-container2">
                        <h1>{AuthorsEntities?.name}</h1>
                        <span>{AuthorsEntities?.name}</span>
                        <span>{AuthorsEntities?.phoneNumber}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.authorsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .authors1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors1-container1 {
            display: flex;
            flex-direction: column;
          }
          .authors1-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Authors1.defaultProps = {
  authorsEntities: [],
}

Authors1.propTypes = {
  authorsEntities: PropTypes.array,
}

export default Authors1

export async function getStaticProps(context) {
  try {
    const response = await authorsPageInitialPropsTqMKResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorsEntities: response,
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

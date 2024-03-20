import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorsPageInitialPropsTqDeResource from '../../../resources/authors-page-initial-props-tq_de'
import authorsPageInitialPathsTqEwResource from '../../../resources/authors-page-initial-paths-tq_ew'

const Authors11 = (props) => {
  return (
    <>
      <div className="authors11-container">
        <Head>
          <title>Authors1 - SpiderNet Nextjs new</title>
          <meta property="og:title" content="Authors1 - SpiderNet Nextjs new" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="authors11-container1">
                <Repeater
                  items={params}
                  renderItem={(AuthorsEntities) => (
                    <>
                      <div className="authors11-container2">
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
          .authors11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors11-container1 {
            display: flex;
            flex-direction: column;
          }
          .authors11-container2 {
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

Authors11.defaultProps = {
  authorsEntities: [],
}

Authors11.propTypes = {
  authorsEntities: PropTypes.array,
}

export default Authors11

export async function getStaticProps(context) {
  try {
    const response = await authorsPageInitialPropsTqDeResource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
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

export async function getStaticPaths() {
  try {
    const response = await authorsPageInitialPathsTqEwResource({
      content_type: 'author',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

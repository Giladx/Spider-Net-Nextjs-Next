import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import categoriesPageInitialPropsTqRtResource from '../../resources/categories-page-initial-props-tq_rt'

const Categories1 = (props) => {
  return (
    <>
      <div className="categories1-container">
        <Head>
          <title>Categories1 - SpiderNet Nextjs new</title>
          <meta
            property="og:title"
            content="Categories1 - SpiderNet Nextjs new"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="categories1-container1">
                <Repeater
                  items={params}
                  renderItem={(CategoriesEntities) => (
                    <>
                      <div className="categories1-container2">
                        <h1>{CategoriesEntities?.name}</h1>
                        <span>{CategoriesEntities?.name}</span>
                        <span>{CategoriesEntities?.description}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.categoriesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .categories1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .categories1-container1 {
            display: flex;
            flex-direction: column;
          }
          .categories1-container2 {
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

Categories1.defaultProps = {
  categoriesEntities: [],
}

Categories1.propTypes = {
  categoriesEntities: PropTypes.array,
}

export default Categories1

export async function getStaticProps(context) {
  try {
    const response = await categoriesPageInitialPropsTqRtResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        categoriesEntities: response,
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

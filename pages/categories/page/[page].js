import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import categoriesPageInitialPropsTqPcResource from '../../../resources/categories-page-initial-props-tq_pc'
import categoriesPageInitialPathsTqT4Resource from '../../../resources/categories-page-initial-paths-tq_t4'

const Categories11 = (props) => {
  return (
    <>
      <div className="categories11-container">
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
              <div className="categories11-container1">
                <Repeater
                  items={params}
                  renderItem={(CategoriesEntities) => (
                    <>
                      <div className="categories11-container2">
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
          .categories11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .categories11-container1 {
            display: flex;
            flex-direction: column;
          }
          .categories11-container2 {
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

Categories11.defaultProps = {
  categoriesEntities: [],
}

Categories11.propTypes = {
  categoriesEntities: PropTypes.array,
}

export default Categories11

export async function getStaticProps(context) {
  try {
    const response = await categoriesPageInitialPropsTqPcResource({
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

export async function getStaticPaths() {
  try {
    const response = await categoriesPageInitialPathsTqT4Resource({
      content_type: 'category',
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

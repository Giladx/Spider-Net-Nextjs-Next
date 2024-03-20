import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import categoriesPageInitialPropsTqAeResource from '../../resources/categories-page-initial-props-tq_ae'
import categoriesPageInitialPathsTq5kResource from '../../resources/categories-page-initial-paths-tq_5k'

const Categories = (props) => {
  return (
    <>
      <div className="categories-container">
        <Head>
          <title>Categories - SpiderNet Nextjs new</title>
          <meta
            property="og:title"
            content="Categories - SpiderNet Nextjs new"
          />
        </Head>
        <DataProvider
          renderSuccess={(CategoriesEntity) => (
            <>
              <div className="categories-container1">
                <h1>{CategoriesEntity?.name}</h1>
                <span>{CategoriesEntity?.description}</span>
                <span>{CategoriesEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.categoriesEntity}
          persistDataDuringLoading={true}
          key={props?.categoriesEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .categories-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .categories-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Categories.defaultProps = {
  categoriesEntity: [],
}

Categories.propTypes = {
  categoriesEntity: PropTypes.array,
}

export default Categories

export async function getStaticProps(context) {
  try {
    const response = await categoriesPageInitialPropsTqAeResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        categoriesEntity: response?.data?.[0],
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
    const response = await categoriesPageInitialPathsTq5kResource({
      content_type: 'category',
      select: 'sys.id',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.sys?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

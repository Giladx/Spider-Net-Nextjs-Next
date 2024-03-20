import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagsPageInitialPropsTqEjResource from '../../resources/tags-page-initial-props-tq_ej'
import tagsPageInitialPathsTqVMResource from '../../resources/tags-page-initial-paths-tq_v-m'

const Tags11 = (props) => {
  return (
    <>
      <div className="tags11-container">
        <Head>
          <title>Tags1 - SpiderNet Nextjs new</title>
          <meta property="og:title" content="Tags1 - SpiderNet Nextjs new" />
        </Head>
        <DataProvider
          renderSuccess={(TagsEntity) => (
            <>
              <div className="tags11-container1">
                <h1>{TagsEntity?.name}</h1>
                <span>{TagsEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.tagsEntity}
          persistDataDuringLoading={true}
          key={props?.tagsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tags11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tags11-container1 {
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

Tags11.defaultProps = {
  tagsEntity: [],
}

Tags11.propTypes = {
  tagsEntity: PropTypes.array,
}

export default Tags11

export async function getStaticProps(context) {
  try {
    const response = await tagsPageInitialPropsTqEjResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tagsEntity: response?.data?.[0],
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
    const response = await tagsPageInitialPathsTqVMResource({
      content_type: 'tag',
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

import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqN4Resource from '../../../resources/attachment-page-initial-props-tq_n4'
import attachmentPageInitialPathsTqCwResource from '../../../resources/attachment-page-initial-paths-tq_cw'

const Attachment11 = (props) => {
  return (
    <>
      <div className="attachment11-container">
        <Head>
          <title>Attachment1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Attachment1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AttachmentEntities) => (
                  <>
                    <div className="attachment11-container1">
                      <h1>{AttachmentEntities?.title?.rendered}</h1>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.attachmentEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .attachment11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment11-container1 {
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

Attachment11.defaultProps = {
  attachmentEntities: [],
}

Attachment11.propTypes = {
  attachmentEntities: PropTypes.array,
}

export default Attachment11

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqN4Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        attachmentEntities: response,
        ...response?.meta,
      },
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await attachmentPageInitialPathsTqCwResource({})
    const headers = Object.fromEntries(response)
    const totalCount = headers?.['x-wp-total']
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

import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqMoResource from '../../resources/attachment-page-initial-props-tq_mo'
import attachmentPageInitialPathsTqAjResource from '../../resources/attachment-page-initial-paths-tq_aj'

const Attachment = (props) => {
  return (
    <>
      <div className="attachment-container">
        <Head>
          <title>Attachment - Spider Net Nextjs</title>
          <meta property="og:title" content="Attachment - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(AttachmentEntity) => (
            <>
              <div className="attachment-container1">
                <h1>{AttachmentEntity?.title?.rendered}</h1>
              </div>
            </>
          )}
          initialData={props.attachmentEntity}
          persistDataDuringLoading={true}
          key={props?.attachmentEntity?.slug}
        />
      </div>
      <style jsx>
        {`
          .attachment-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment-container1 {
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

Attachment.defaultProps = {
  attachmentEntity: [],
}

Attachment.propTypes = {
  attachmentEntity: PropTypes.array,
}

export default Attachment

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqMoResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        attachmentEntity: response?.data?.[0],
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
    const response = await attachmentPageInitialPathsTqAjResource({})
    return {
      paths: (response || []).map((item) => {
        return {
          params: {
            slug: (item?.slug).toString(),
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
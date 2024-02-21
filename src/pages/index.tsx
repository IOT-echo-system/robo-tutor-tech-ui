import type {NextPage} from 'next'
import {PageTemplate} from '../components/templates'
import {pages} from '../../data/pages'
import {siteDetails} from '../../data/siteDetails'

const Home: NextPage = () => {
  return <PageTemplate pageContent={pages.home} siteMetaData={siteDetails.metadata} />
}

export default Home

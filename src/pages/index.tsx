import type {NextPage} from 'next'
import {PageTemplate} from '../components/templates'
import {pages} from '../../data/pages'

const Home: NextPage = () => {
  return <PageTemplate pageContent={pages.home} />
}

export default Home

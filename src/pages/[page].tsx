import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from "next";
import {pageList} from "../../data/pageList";
import {PageContent, PageTemplate} from "../components/templates";
import {pages} from "../../data/pages";

type PagePropsType = { pageContent: PageContent }

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({pageContent}) => {
    return <PageTemplate pageContent={pageContent}/>
}

export const getStaticProps: GetStaticProps<PagePropsType> = ({params}) => {
    const pageContent = pages[params?.page as keyof typeof pages] as PageContent | undefined

    if (!pageList.includes(`/${params?.page}`) && !pageContent) {
        return {notFound: true}
    }
    return {props: {pageContent: pageContent!}, revalidate: 84600}
}

export const getStaticPaths: GetStaticPaths = () => {
    return {paths: pageList, fallback: true}
}

export default Page

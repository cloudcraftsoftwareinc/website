import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';

import { GetStartedBlurb } from '../../components/get-started-blurb';
import * as mdxComponents from '../../components/mdx';
import { ServicesBlurb } from '../../components/services-blurb';
import { Layout } from '../../layout/Layout';
import { Banner } from '../../templates/Banner';
import {
  // getNextPostBySlug,
  getPostBySlug,
  // getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

const components = {
  ...mdxComponents,
  ServicesBlurb,
  GetStartedBlurb,
};

export default function PostPage({
  source,
  frontMatter,
  // prevPost,
  // nextPost,
}: any) {
  return (
    <Layout>
      <div className="w-full text-gray-900 antialiased">
        <div className="mx-auto max-w-3xl p-4">
          <h1 className="my-10 text-center text-5xl font-semibold text-primary-900">
            {frontMatter.title}
          </h1>
          {frontMatter.image && (
            <img src={frontMatter.image} className="my-10 rounded-3xl"></img>
          )}
          <article className="prose dark:prose-dark">
            <MDXProvider>
              <MDXRemote {...source} components={components} />
            </MDXProvider>
          </article>
        </div>
      </div>
      <Banner />
    </Layout>
  );
}

type IStaticPropsParams = {
  params: {
    slug: String;
  };
};

export const getStaticProps = async ({ params }: IStaticPropsParams) => {
  // const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  // const prevPost = getPreviousPostBySlug(params.slug);
  // const nextPost = getNextPostBySlug(params.slug);
  // hello
  return {
    props: {
      // globalData,
      source: mdxSource,
      frontMatter: data,
      // prevPost,
      // nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path: String) => path.replace(/\.mdx?$/, ''))
    .map((slug: String) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

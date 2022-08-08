import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Link from 'next/link';
import algoliasearch from 'algoliasearch';
// React Instant Search
import {
  InstantSearch,
  Hits,
  ToggleRefinement,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-dom';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);
function Product({ hit }) {
  console.log(hit);
  return (
    <>
      {/* <h4> {JSON.stringify(hit.name, null, 2)} </h4> */}
      {console.log(hit)}
      <div className="">
        <Link href="/product/[permalink]" as={`/product/${hit.permalink}`}>
          <div className="cursor-pointer hit-product-card">
            <img src={hit.image?.url} width={280} alt="" />
            <h4 className="font-size-title">{hit.name}</h4>
            <h6 className="font-size-paragraph">
              {hit.price?.raw}
              د.ج
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
}
const About = () => (
  <Root>
    <Head>
      <title>Search for products</title>
    </Head>

    <div className=" mt-12 searching-container ">
      <h1 className="text-center text-amber-900 text-4xl">Search</h1>
      <InstantSearch searchClient={client} indexName="products" className="search-bar">
        <div className="search-box-container">
          <SearchBox showLoadingIndicator className="search-box" />
          <div className="searching-content">
            <div className="searching-categories">
              <h4>Categories</h4>
              <RefinementList
                className="RefinementListcategories"
                attribute="categories.name"
                limit="10"
              />
            </div>
            <div className="searching-hits-container">
              <Hits hitComponent={Product} className="search-hits" />
            </div>
          </div>
        </div>
        {/* <Hits /> */}
      </InstantSearch>
      <br />
      <br />
    </div>
    <Footer />
  </Root>
);

export default About;

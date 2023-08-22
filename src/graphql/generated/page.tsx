import * as Types from './graphql';

import gql from 'graphql-tag';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '@/apollo';
export const FindAllProductsDocument = gql`
    query FindAllProducts($limit: Int, $offset: Int, $search: SearchProductParametersInput) {
  findAllProducts(limit: $limit, offset: $offset, search: $search) {
    id
    name
    price
    category
  }
}
    `;
export async function getServerPageFindAllProducts
    (options: Omit<Apollo.QueryOptions<Types.FindAllProductsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.FindAllProductsQuery>({ ...options, query: FindAllProductsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useFindAllProducts = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindAllProductsQuery, Types.FindAllProductsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(FindAllProductsDocument, options);
};
export type PageFindAllProductsComp = React.FC<{data?: Types.FindAllProductsQuery, error?: Apollo.ApolloError}>;
export const ssrFindAllProducts = {
      getServerPage: getServerPageFindAllProducts,
      
      usePage: useFindAllProducts,
    }
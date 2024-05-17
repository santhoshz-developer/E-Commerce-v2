"use client";

import Homepage from "@/page-component/homepage/Homepage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://e-commerce-strapi-app.onrender.com/graphql",
  cache: new InMemoryCache(),
});


export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
        <Homepage />
      </ApolloProvider>
    </main>
  );
}

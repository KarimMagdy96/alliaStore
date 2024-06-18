import { createContext, useEffect, useState } from "react";

export let ProdactList = createContext();

export function ProductListProvider({ children }) {
  const [products, setProducts] = useState();
  async function getDressDetails() {
    let client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "ktkqlbq77q7k",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "DsUjY6hLvu_8RFY3aRuOsomXMmi24erBYV2PcTRidSA",
    });
    contentful = await client
      .getEntries()
      .then((entry) => setProducts(entry.items))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getDressDetails();
    if (products !== undefined) {
    }
  }, [products]);

  return (
    products !== undefined && (
      <ProdactList.Provider value={{ products: products }}>
        {children}
      </ProdactList.Provider>
    )
  );
}

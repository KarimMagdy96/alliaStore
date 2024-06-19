import { createContext, useEffect, useState } from "react";

export let ProdactList = createContext();

export function ProductListProvider({ children }) {
  const [products, setProducts] = useState();
  async function getDressDetails() {
    let client = contentful.createClient({
      space: "ktkqlbq77q7k",

      accessToken: "DsUjY6hLvu_8RFY3aRuOsomXMmi24erBYV2PcTRidSA",
    });
    contentful = await client
      .getEntries()
      .then((entry) => setProducts(entry.items))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getDressDetails();
  }, [products]);

  return (
    products !== undefined && (
      <ProdactList.Provider value={{ products: products }}>
        {children}
      </ProdactList.Provider>
    )
  );
}

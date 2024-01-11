import { NextSeo } from "next-seo";
import { useSelector } from "react-redux";

import Data from "/public/data/algorithmData.json";

export default function Seo({ category, id }) {
  let algoName = useSelector((state) => state.page.algoName);
  if (algoName) {
    let currAlgo = algoName.replace(" ", "");
    let currAlgoData = Data[currAlgo];
    if (currAlgoData) {
      return (
        <>
          <NextSeo
            title={currAlgoData.metaTitle}
            description={currAlgoData.description}
          />
        </>
      );
    }
  }
}

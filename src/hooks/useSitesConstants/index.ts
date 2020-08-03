import { useMemo } from "react";

function useSitesConstants() {
  const plusSites = useMemo(
    () =>
      [
        {
          children: "味の素パーク",
          id: "ajinomoto",
        },
        {
          children: "E・レシピ",
          id: "erecipe",
        },
        {
          children: "DELISH KITCHEN",
          id: "delishkitchen",
        },
        {
          children: "キッコーマン",
          id: "kikkoman",
        },
        {
          children: "クラシル",
          id: "kurashiru",
        },
        {
          children: "レタスクラブ",
          id: "lettuceclub",
        },
        {
          children: "Nadia",
          id: "nadia",
        },
        {
          children: "オレンジページnet",
          id: "orangepage",
        },
        {
          children: "白ごはん.com",
          id: "sirogohan",
        },
      ] as const,
    []
  );
  const minusSites = useMemo(
    () =>
      [
        {
          children: "クックパッド",
          id: "cookpad",
        },
        {
          children: "楽天レシピ",
          id: "rakuten",
        },
      ] as const,
    []
  );

  return { minusSites, plusSites };
}

export default useSitesConstants;

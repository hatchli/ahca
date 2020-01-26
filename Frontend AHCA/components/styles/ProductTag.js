import system from "@rebass/components";

export const ProductTag = system(
  {
    is: "p",
    fontSize: 1,
    color: "dark-gray",
    fontFamily: "eczar",
    p: 3,
    m: 0,
    lineHeight: "solid",
    fontWeight: 400
  },
  // core
  "space",
  "width",
  "color",
  "fontSize",
  // typography
  "fontFamily",
  "textAlign",
  "lineHeight",
  "fontWeight",
  "letterSpacing"
);

ProductTag.displayName = "ProductTag";

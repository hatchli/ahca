const BackgroundImage = system(
  {
    width: 1,
    ratio: 3 / 4,
    backgroundSize: "cover",
    backgroundPosition: "center",
    blacklist: ["src"]
  },
  "space",
  "color",
  "fontSize",
  "ratio",
  props => ({
    backgroundImage: props.src ? `url(${props.src})` : undefined
  })
);

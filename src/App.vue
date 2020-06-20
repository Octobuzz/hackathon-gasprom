<template>
	<div id="app">
		<router-view class="page" />
	</div>
</template>

<style lang="scss">
#app {
  font-family: "Proxima Regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 24px;
  height: 100%;
  width: 100%;
}

html, body {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: "Proxima Regular";
  src: url("./assets/fonts/ProximaNova-Regular.ttf") format("opentype"),
        url("./assets/fonts/ProximaNova-Regular.woff") format("woff");
  font-weight: 400;
}

@font-face {
  font-family: "Proxima Bold";
  src: url("./assets/fonts/ProximaNova-Bold.ttf") format("opentype"),
        url("./assets/fonts/ProximaNova-Bold.woff") format("woff");
  font-weight: 900;
}

  .page{
    width: 100%;
    height: 100%;
  }

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}
</style>

<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/asia">Asia</router-link>
      <router-link to="/ocenia">Ocenia</router-link>
      <router-link to="/northamerica">North America</router-link>
      <router-link to="/southamerica">South America</router-link>
      <router-link to="/europe">Europe</router-link>
      <router-link to="/africa">Africa</router-link>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="view" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

/* Router link style */
.container {
  width: 90%;
  margin: 0 auto;
}

#nav {
  padding: 1.5rem 0;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  display: inline-block;
  font-weight: 400;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1rem;
}

#nav a.router-link-exact-active {
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #42b983;
  font-weight: 500;
}

/* transition */
.view-enter-active,
.view-leave-active {
  transition: opacity 250ms linear, transform 250ms linear;
}

.view-enter-from,
.view-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>

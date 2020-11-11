<template>
  <div id="app">
    <div class="header">
        <a href="/">
          <q-avatar rounded>
            <img src="./assets/logo_manejo.png">
          </q-avatar>
        </a>
        <q-space/>
          <q-btn class="btn_menu" flat padding="10px 50px" label="home" to="/" />
          <q-btn class="btn_menu" flat padding="10px 50px" label="Trilhas" to="/trilhas" />
          <q-btn class="btn_menu" flat padding="10px 50px" label="Projetos" to="/" />
          <q-btn class="btn_menu" flat padding="10px 50px" label="Sobre" to="/" />
          <q-btn class="btn_menu" flat padding="10px 50px" label="Contato" to="/" />
        <q-space/>
        <q-btn flat padding="8px 10px" label="Entrar" to="/" />
    </div>
    <div class="layout">
      <router-view>

      </router-view>
    </div>
  </div>
</template>
<script>
  require('./styles/layout.css');
export default {
  name: 'App',
  components: {
    
  }
}
</script>


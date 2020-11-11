<template>
<div class="trilhas">
  <div class="menu">
    <a class="a-btn" href="/cadastrotrilha">
      <button class="btn">
        <span class="material-icons" style="height: 15px;">
          add
        </span>
        Cadastrar Trilha
      </button>
    </a>
    <button class="btn">
      <span class="material-icons" style="height: 15px;">
        visibility
      </span>
      Visualizar Ocorrencias
    </button>
    <button class="btn">
      <span class="material-icons" style="height: 15px;">
        visibility
      </span>
      Visualizar Relatorios
    </button>
    <button class="btn">
      <span class="material-icons" style="height: 15px;">
        picture_as_pdf
      </span>
      Relatorio PDF
    </button>
  </div>
  <div class="fundo_cards">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 q-pa-md">
          <a href="/trilhas">
          <q-card class="my-card">
            <q-card-section class="top-card">
              <div class="text-h6">Chapel do sol</div>
              <div class="text-subtitle2">Ativa</div>
            </q-card-section>
          </q-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  require('../styles/trilhas.css');
export default {
  name: 'trilhas',
  data() {
    return {
      name: null,
    };
  },
  components: {
  
  },
}
</script>


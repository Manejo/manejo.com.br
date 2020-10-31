<template>
  <div class="fundo_table">
    <div class="sub_menu">
      <button class="btn">Cadastrar Trilha</button>
      <button class="btn">Visualizar Ocorrencias</button>
      <button class="btn">Visualizar Relatorios</button>
      <button class="btn">Relatorio PDF</button>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3 q-pa-md">
          <q-card class="my-card">
            <q-card-section class="top-card">
              <div class="text-h6">Chapel do sol</div>
              <div class="text-subtitle2">Ativa</div>
            </q-card-section>

            <q-card-actions vertical align="center">
              <q-btn flat>Visualizar</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  require('../styles/trilhas.css');
export default {
  name: 'trilhas',
  components: {

  }
}
</script>


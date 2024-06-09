<template>
  <div>
      <ul>
          <li>
              <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/categorias">Categorias</router-link>
          </li>
      </ul>

      <router-view></router-view>
  </div>
</template>

<script>
export default{

}
</script>

<style>
</style>
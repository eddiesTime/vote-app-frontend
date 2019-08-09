<template>
  <div>
    <v-card></v-card>
    <v-divider></v-divider>
    <div class="listArea">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Second</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="district in districts" :key="district.id">
            <td>{{ district.name }}</td>
            <td>{{ district.id }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

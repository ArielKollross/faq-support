<template>
  <v-container grid-list-xs>
    <v-card>
      
      <v-card-title primary-title>
        Dashboard
      </v-card-title>
      
      <v-row>
        <v-col cols="12" md="3" class="ml-8">
         <v-card
        background-color="success"
        elevation="2"
        outlined
        tile
       >
      <v-card-title primary-title>
          Total de perguntas 
        </v-card-title>
      </v-card>
      </v-col>

       <v-col cols="3" md="3">
         <v-card
        background-color="success"
        elevation="2"
        outlined
        tile
       >
      <v-card-title primary-title>
          Total de perguntas 
        </v-card-title>
      </v-card>
      </v-col>

       <v-col cols="12" md="3">
         <v-card
        background-color="success"
        elevation="2"
        outlined
        tile
       >
      <v-card-title primary-title>
          Total de perguntas 
        </v-card-title>
      </v-card>
      </v-col>
      </v-row>
      
      <v-card>
        <v-card-title primary-title>
          Perguntas mais relevantes
        </v-card-title>

        <v-simple-table>
           <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
        </v-simple-table>
      </v-card>
     
    </v-card>
  </v-container>
</template>
<template>
  <v-container>
    <v-card id="dashboard">
      <v-card-title class="display-1 grey--text">Todas as dúvidas</v-card-title>

      <v-container fluid>
        <v-row row class="mb-3">
          <v-btn class="hover-link" small text @click="sortBy('question')">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">Titulo</span>
          </v-btn>

          <v-btn class="hover-link" small text @click="sortBy('person')">
            <v-icon left small>mdi-account</v-icon>
            <span class="caption text-lowercase">Analista</span>
          </v-btn>

             <v-btn class="hover-link" small text>
            <v-icon left small>mdi-sort-calendar-ascending</v-icon>
            <span class="caption text-lowercase">Data</span>
          </v-btn>
        </v-row>

    
        <v-card flat tile v-for="issue in issues" :key="issue.title">
          <v-row row wrap>
            <v-col cols="12" md="6" :class="`pl-3 issue ${issue.status}`">
              <div class="caption grey--text">Questão</div>
              <router-link
              class="issue-link"
              :to="{ name: 'ListQuestionsDetails', params: { questionId: issue.id }}"
              >{{issue.question}}</router-link>
            </v-col>

            <v-col xs="2">
              <div class="caption grey--text">Analista</div>
              <div>Ariel Kollross</div>
            </v-col>

            <v-col xs="2">
              <div class="caption grey--text">Data de criação</div>
              <div>{{issue.created_at | date }}</div>
            </v-col>

            <v-col xs="2">
              <div class="caption grey--text">Status</div>
              <!-- <div>{{issue.status}}</div> -->
              <div calign="right">
                <v-chip
                  small
                  label
                  :color="`${issue.status}`"
                  :class="`v-chip--active white--text caption my-2`"
                >{{issue.status}}</v-chip>
              </div>
            </v-col>
          </v-row>

          <v-row cols="12">
            <v-divider></v-divider>
          </v-row>          
        </v-card>

         <!-- <Pagination
         length="4"
         :pagination="pagination" 
         @onPreviousClick="search" 
         @onNextClick="search"
         ></Pagination> -->

      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapGetters } from 'vuex';

// import Pagination from '@/components/Pagination';

export default {
  components: {
    // Pagination
  },
  data() {
    return {
      pagination: {
      
      }
    };
  },
  computed: {
    ...mapGetters({
      issues: 'getIssues',
    }),
  },
    mounted() {
    this.$store.dispatch('getData')
      .then(error => {
        if(error) {
          console.log(error);
        }
      });
    
    this.search();
  },
  methods: {
    sortBy(prop) {
      this.issues.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  filters: {
    date(value) {
      return moment(value).format("DD/MM/YYYY");
    },
  },
};
</script>


<style>
.issue-link{
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
}
.issue-link:hover {
  cursor: pointer;
  color: #00ADEF !important;
}

.project.complete {
  border-left: 4px solid #8ac926;
}

.project.ongoing {
  border-left: 4px solid #ffca3a;
}

.project.overdue {
  border-left: 4px solid #ff595e;
}

.v-chip.ongoing {
  background: #ffca3a;
}
.v-chip.complete {
  background: #8ac926;
}
.v-chip.overdue {
  background: #ff595e;
}
</style>
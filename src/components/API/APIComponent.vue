<template>
  <div id="api_container" class="container">
    <h1 class="text-center">{{ $t("task").toUpperCase() }}</h1>
    <hr />

    <p>
      API Document:
      <a target="_blank" href="https://api.songkum.sovandy.site"
        >https://api.songkum.sovandy.site/</a
      >
    </p>

    <br />
    <!-- Loader -->
    <div v-if="loading" class="loader_container" id="spinner">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="Data.length && !loading" class="row">
      <div class="col-12 mb-4" v-for="item in Data" :key="item.uuid">
        <div class="card hover-effect">
          <div class="card-body">
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-text">{{ item.description }}</p>
            <div class="task-meta">
              <span class="text-muted"
                >Created: {{ formatDate(item.createdAt) }}</span
              ><br />
              <span class="text-muted"
                >Updated: {{ formatDate(item.updatedAt) }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center">No data available.</p>
    </div>
  </div>
</template>

<style scoped>
#api_container {
  margin-top: 100px;
  padding: 50px 0;
}

#spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  color: black;
}

.card {
  border: 1px solid #ddd;
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth transition for scale and shadow */
}

.card-title {
  font-size: 1.5rem;
  color: #333;
}

.card-text {
  color: #666;
}

.task-meta {
  font-size: 0.9rem;
}

/* Hover effect */
.hover-effect {
  overflow: hidden; /* Prevent content overflow */
}

.hover-effect:hover {
  transform: scale(1.05); /* Slightly enlarge the card */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Add shadow on hover */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hover-effect:hover {
    transform: scale(1.02); /* Less scale on smaller screens */
  }
}

@media (max-width: 576px) {
  .card-title {
    font-size: 1.2rem; /* Adjust font size for mobile */
  }
}

@media (max-width: 575.98px) {
  #api_container {
    padding: 50px 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      api_url: "https://api.songkum.sovandy.site/v1/task",
      //api_url: "https://jsonplaceholder.typicode.com/todos",
      Data: [],
      loading: false, // Add this line
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true; // Set loading to true when fetching starts
      const defaultData = [
        {
          uuid: "dc0ecb0d-bb72-4bbe-8903-81bda5b96470",
          title: "Prepare Project Proposal",
          description:
            "Draft a detailed proposal for the upcoming project, including objectives, timeline, and resources needed.",
          createdAt: "2024-10-12T21:17:43.513Z",
          updatedAt: "2024-10-12T21:17:43.513Z",
        },
        {
          uuid: "3a2685ab-df91-4978-bd94-649d5452c7d0",
          title: "Schedule Team Meeting",
          description:
            "Organize a team meeting to discuss project updates and next steps. Ensure all team members can attend.",
          createdAt: "2024-10-12T21:17:43.513Z",
          updatedAt: "2024-10-12T21:17:43.513Z",
        },
        {
          uuid: "a55e4e7c-7947-4125-8176-3f7c4e138168",
          title: "Research Market Trends",
          description:
            "Conduct research on current market trends related to our industry to inform our strategy.",
          createdAt: "2024-10-12T21:17:43.513Z",
          updatedAt: "2024-10-12T21:17:43.513Z",
        },
      ];

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 3000)
      );

      try {
        const response = await Promise.race([
          fetch(this.api_url),
          timeoutPromise,
        ]);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.Data = data; // Update the Data property with the fetched data
        console.log("Tasks", data);
      } catch (error) {
        console.error("Error fetching data:", error);
        this.Data = defaultData; // Set Data to the default dataset
      } finally {
        this.loading = false; // Set loading to false when fetching completes
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<template>
  <div id="skill_container" class="container" :class="{ loaded }">
    <h1 class="text-center">{{ $t("skill").toUpperCase() }}</h1>
    <hr />

    <div class="container">
      <div class="skill" v-for="(skill, index) in skills" :key="index">
        <div class="skill-name">
          {{ skill.name }}
          <span class="percentage">{{ skill.percentage }}%</span>
        </div>
        <div class="skill-description">
          {{ skill.description }}
          <!-- Display the description here -->
        </div>
        <div class="skill-bar">
          <div
            class="skill-progress"
            :style="{
              width: loaded ? skill.percentage + '%' : '0%',
              backgroundColor: skill.color,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      skills: [
        {
          name: "HTML",
          percentage: 90,
          color: "#e44d26",
          description: "Experienced in structuring web content.",
        },
        {
          name: "CSS",
          percentage: 80,
          color: "#2965f1",
          description: "Skilled in styling and layout design.",
        },
        {
          name: "JavaScript",
          percentage: 75,
          color: "#f7df1e",
          description: "Proficient in interactive web development.",
        },
        {
          name: "Vue.js",
          percentage: 65,
          color: "#42b883",
          description: "Working knowledge of the Vue.js framework.",
        },
        {
          name: "MongoDB",
          percentage: 70,
          color: "#4DB33D",
          description: "Familiar with NoSQL databases.",
        },
        {
          name: "Node.js/Express.js",
          percentage: 80,
          color: "#8CC84B",
          description: "Experienced in server-side JavaScript development.",
        },
        {
          name: "Microsoft Access Database",
          percentage: 65,
          color: "#A24028",
          description: "Knowledge of database management systems.",
        },
        {
          name: "Photoshop",
          percentage: 75,
          color: "#31A8FF",
          description: "Skilled in graphic design and image editing.",
        },
        {
          name: "UX/UI",
          percentage: 50,
          color: "#3128F3",
          description: "Understanding of user experience and interface design.",
        },
        {
          name: "Microsoft Office",
          percentage: 90,
          color: "#D4D4D4",
          description: "Proficient in Word, Excel, and PowerPoint.",
        },
        {
          name: "Government Officer Skill",
          percentage: 90,
          color: "#000000",
          description: "Strong background in governmental processes.",
        },
      ],
    };
  },
  mounted() {
    // Add the loaded class after the component is mounted
    this.loaded = true;
  },
};
</script>

<style lang="css" scoped>
#skill_container * {
  color: black;
}
#skill_container {
  margin-top: 100px;
  padding: 50px 0px;
}

@media (max-width: 575.98px) {
  #skill_container {
    padding: 50px 10px;
  }
}

.skill {
  margin-bottom: 20px;
}

.skill-name {
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.skill-description {
  margin-bottom: 5px; /* Add some space between name and description */
  font-size: 0.9em;
  color: #555; /* Optional: change color for description text */
}

.percentage {
  font-weight: normal;
  font-size: 0.9em;
}

.skill-bar {
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  height: 20px;
  position: relative;
}

.skill-progress {
  height: 100%;
  width: 0; /* Start width at 0% */
  transition: width 1s ease-in-out, transform 0.5s ease-in-out;
  transform-origin: left; /* Set transform origin for scaling */
}

/* Pump-up animation */
.loaded .skill-progress {
  animation: pump-up 1s ease-in-out forwards; /* Use animation */
}

@keyframes pump-up {
  0% {
    transform: scaleY(1); /* Start at normal scale */
    width: 0; /* Start width at 0% */
  }
  50% {
    transform: scaleY(1.2); /* Scale up effect at halfway */
  }
  100% {
    transform: scaleY(1); /* Return to normal scale */
  }
}
</style>

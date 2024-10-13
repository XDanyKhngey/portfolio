<template>
  <div id="education_container" class="container">
    <h1 class="text-center">{{ $t("education").toUpperCase() }}</h1>
    <hr />
    <div class="container education-timeline">
      <div
        class="timeline-item"
        v-for="(education, index) in educationList"
        :key="index"
      >
        <div class="timeline-period">
          <h5>{{ education.period }}</h5>
        </div>
        <div class="timeline-details">
          <h6>{{ education.degree }}</h6>
          <p class="text-muted">{{ education.university }}</p>
          <p class="text-muted">{{ education.location }}</p>
          <p>{{ education.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#education_container * {
  color: black;
}
#education_container {
  margin-top: 100px;
  padding: 50px 0px;
}

@media (max-width: 575.98px) {
  #education_container {
    padding: 50px 10px;
  }
}

.education-timeline {
  padding: 20px;
  border-left: 2px solid #007bff;
  position: relative;
}

.timeline-item {
  margin-bottom: 40px;
  position: relative;
  padding-left: 30px; /* Add padding to the left to avoid text overlap with the dot */
}

.timeline-period h5 {
  font-weight: bold;
}

.timeline-details h6 {
  font-weight: bold;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -5px; /* Adjust the left position to space the blue dot from the text */
  top: 5px; /* Adjust the vertical alignment of the dot */
  width: 15px;
  height: 15px;
  background-color: #007bff;
  border-radius: 50%;
}

.text-muted {
  color: #6c757d !important;
}
</style>

<script>
export default {
  data() {
    return {
      educationList: [
        {
          period: "2008 - 2010",
          degree: "Master of Computer Science",
          university: "University of North Carolina",
          location: "North Carolina, USA",
          description:
            "Completed an advanced program focused on algorithms, distributed systems, and artificial intelligence. Gained extensive hands-on experience in research and development, contributing to projects on cloud computing and machine learning. Thesis involved optimizing data retrieval in large-scale distributed systems, recognized for innovative approaches to scalability.",
        },
        {
          period: "2004 - 2008",
          degree: "Bachelor of Computer Science",
          university: "University of North Carolina",
          location: "North Carolina, USA",
          description:
            "Acquired a strong foundation in programming, data structures, and software engineering. Actively participated in extracurricular coding competitions and hackathons, consistently placing in top rankings. Developed a capstone project on enhancing security protocols for web applications, which garnered recognition from faculty and local industry partners.",
        },
        {
          period: "2004 - 2008",
          degree: "Bachelor of Creative Design",
          university: "University of Bolton",
          location: "Bolton, United Kingdom",
          description:
            "Focused on innovative design principles and multimedia production techniques. Specialization in user-centered design, with significant contributions to interactive media projects. Worked on multiple collaborative design projects, including a final thesis project that integrated creative design with digital interfaces, receiving a distinction for its originality.",
        },
      ],
    };
  },
};
</script>

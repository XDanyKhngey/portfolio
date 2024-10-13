import HomeComponent from "@/components/Home/HomeComponent.vue";
import EducationComponent from "@/components/Education/EducationComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProfileComponent from "@/components/Profile/ProfileComponent.vue";
import APIComponent from "@/components/API/APIComponent.vue";
import SkillComponent from "@/components/Skill/SkillComponent.vue";
import ExperienceComponent from "@/components/Experience/ExperienceComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeComponent },
    { path: "/education", name: "education", component: EducationComponent },
    { path: "/skill", name: "skill", component: SkillComponent },
    { path: "/experience", name: "experience", component: ExperienceComponent },
    { path: "/about_me", name: "about_me", component: ProfileComponent },
    { path: "/api", name: "api", component: APIComponent },
  ],
});

export default router;

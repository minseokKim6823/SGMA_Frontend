import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/user/page/Home.vue"; // 홈 화면 컴포넌트
import MyPage from "@/views/user/page/MyPage.vue"; // 마이페이지 컴포넌트
// import StudyGroups from '@/views/StudyGroups.vue'; // 스터디 그룹 찾기 컴포넌트
// import CreateGroup from '@/views/CreateGroup.vue'; // 스터디 그룹 만들기 컴포넌트
import SchedulePage from "@/views/Schedule/SchedulePage.vue";
import ScheduleDetailPage from "@/views/Schedule/ScheduleDetailPage.vue";
import StudyNoticePage from "@/views/Group/page/StudyNoticePage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/mypage", name: "MyPage", component: MyPage },
  //   { path: '/study-groups', name: 'StudyGroups', component: StudyGroups },
  //   { path: '/create-group', name: 'CreateGroup', component: CreateGroup },
  {
    path: "/study-groups/1/schedules",
    component: SchedulePage,
  },
  {
    path: "/study-schedule/1/details",
    name: "ScheduleDetailPage",
    component: ScheduleDetailPage,
    props: true,
  },
  {
    path: "/study-groups/1/notices",
    name: "StudyNoticePage",
    component: StudyNoticePage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

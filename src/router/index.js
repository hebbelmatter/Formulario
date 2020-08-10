import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import HomeContentNurse from '@/components/Nurse/HomeContentNurse.vue'
import FormularioNurse from '@/components/Nurse/FormularioNurse.vue'
import FormularioNurseAntecedentesMorbidos from '@/components/Nurse/FormularioNurseAntecedentesMorbidos.vue'
import FormularioNurseCovid from '@/components/Nurse/FormularioNurseCovid.vue'
import FormularioNurseAntecedentesQuirurgicos from '@/components/Nurse/FormularioNurseAntecedentesQuirurgicos.vue'
import FormularioNurseScoreC from '@/components/Nurse/FormularioNurseScoreC.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro-enfermeria',
    name: 'HomeEnfermeria',
    component: Home,
    redirect: '/registro-enfermeria/home',
    // props: true
    children: [
      {
        path: 'home',
        name: 'HomeContentNurse',
        component: HomeContentNurse
      },
      {
        path: 'informacion-paciente',
        name: 'FormularioNurseInformacionPaciente',
        component: FormularioNurse
      },
      {
        path: 'antecedentes-morbidos',
        name: 'FormularioNurseAntecedentesMorbidos',
        component: FormularioNurseAntecedentesMorbidos
      },
      {
        path: 'antecedentes-quirurgicos',
        name: 'FormularioNurseAntecedentesQuirurgicos',
        component: FormularioNurseAntecedentesQuirurgicos
      },
      {
        path: 'covid',
        name: 'FormularioNurseCovid',
        component: FormularioNurseCovid
      },
      {
        path: 'score-c',
        name: 'FormularioNurseScoreC',
        component: FormularioNurseScoreC

      },

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  // console.log('beforeEach');
  // console.log(localStorage.getItem('currentUser'));
  if (to.name !== 'Login' && localStorage.getItem('currentUser') === null) next({ name: 'Login' })
  else next()
})

export default router

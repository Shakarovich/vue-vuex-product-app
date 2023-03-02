import axios from "axios";

export function searchMeals ({commit}, keyword) {
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(({data}) => {
      commit('setSearchedMeals', data.meals)
    })
    .catch(err => console.log(err))
}
export default{
    namespaced  : true,
    actions : {
        async httpFetch(context){
            console.log("homenews.httpFetch");
            const res = await fetch("/api/v1/news/list");
            const data = await res.json();
            context.commit('updateState', data);
        }
    },
    mutations : {
        updateState(state, data){
            state.items = data;
        }
    },
    state : {
        items : []
    },
    getters : {
        records(state){
            console.log("homenews.getters.records", state.items);
            return state.items;
        }
    },
}
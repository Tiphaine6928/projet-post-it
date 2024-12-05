import indexController from "../controllers/indexController";

export default {
    // dataUsed: (data) => {
    //     return `vous avez soumis : ${data}`
    // },

    dataUsed(data){
        console.log('dataModel', data);
        return `vous avez soumis : ${data}`
    }
}

//faire apparaître le pseudo et le mdp sur la page
export default {
    dataUsed(data){
        let nom = "";
        console.log('dataModel', data);
        nom = data;
        console.log("nom : ",nom);
        return nom;
    }
}
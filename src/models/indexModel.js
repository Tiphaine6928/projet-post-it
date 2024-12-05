let array = []

export default {
    dataUsed(data){
        console.log('dataModel', data);
        array.push(data)
        console.log("array : ", array)
        return array
    }
}
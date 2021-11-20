const getDateddmmyyy = (a) => { 
    let dd = a.getDate() <10 ? "0" + a.getDate() : a.getDate();
    let mm = (a.getMonth()+1) <10 ? "0" + (a.getMonth()+1) : (a.getMonth()+1);
    let yyyy = a.getFullYear();
  
    return dd + "." + mm + "." + yyyy;
}

const getLastMondayTime = () => {
    const a = new Date();
    const day = a.getDay();
    return a.getTime() - (day-1)*86400000 //*24*3600*1000
}



export { getDateddmmyyy, getLastMondayTime };
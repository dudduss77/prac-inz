import { DAYS, ONE_DAY_MS } from "./constants";

const getDateddmmyyy = (a) => { 
    let dd = a.getDate() <10 ? "0" + a.getDate() : a.getDate();
    let mm = (a.getMonth()+1) <10 ? "0" + (a.getMonth()+1) : (a.getMonth()+1);
    let yyyy = a.getFullYear();
  
    return dd + "." + mm + "." + yyyy;
}

const getLastMondayTime = () => {
    const a = new Date();
    const day = a.getDay();
    return a.getTime() - (7+ day-1)*ONE_DAY_MS //*24*3600*1000
}


const getFirstDayFromNumberOfDays = (numberOfDays = 7) => {
    // const a = new Date();
    // const day = a.getDay(); // 3
    // let count = (7 - day + 1);
    // count = count > day ? day : count;
    
    // // return a.getTime() -  (day-count)*ONE_DAY_MS //*24*3600*1000
    // // const lastMonday = getLastMondayTime();
    // // let a = new Date();

    // return a.getTime() - (day + count)*ONE_DAY_MS;

    const a = new Date();
    let day = a.getDay();
    day = day==0 ? day : 7;
    // const day = 7;
    let b = 7 - (numberOfDays-1);
    b = b>day ? day: b;
    console.log(b)
    return a.getTime() - (day-1)*ONE_DAY_MS //*24*3600*1000
}


const getDayNameFromDate = (date = new Date()) => DAYS[date.getDay()]

const getNextDay = (date = new Date()) => new Date(date.getTime()+ONE_DAY_MS);



export { getDateddmmyyy, getLastMondayTime, getDayNameFromDate, getNextDay };
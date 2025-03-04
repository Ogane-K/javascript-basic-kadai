const dateHolder = new Date();

const year = dateHolder.getFullYear();
const month = dateHolder.getMonth() + 1;
const day = dateHolder.getDate();

console.log(`${year}年${month}月${day}日`);
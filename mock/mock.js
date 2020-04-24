const swipper = require('./swipper.json')
const hotcate = require('./hotcate.json');
const list = require('./cookbook-list.json')
module.exports = ()=>{
    return {
        swipper:swipper,
        hotcate:hotcate,
        list:list
    }
}
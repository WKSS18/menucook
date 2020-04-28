const swipper = require('./swipper.json')
const hotcate = require('./hotcate.json');
const list = require('./cookbook-list.json');
const category = require('./cookbook-category.json');
const cookdetail = require('./cookbook-data-list.json');
module.exports = ()=>{
    return {
        swipper:swipper,
        hotcate:hotcate,
        list:list,
        category,
        cookdetail
    }
}
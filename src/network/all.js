import {request} from './request'

export function getSelector(){
    return request({
        url:'zhihu/hot-select'
    })
}
export function getHomeContent(){
    return request({
        url:'zhihu/recommend'
    })
}
export function getFindData(){
    return request({
        url:"zhihu/news_specials/list"
    })
}
export function getHotListData(){
    return request({
        url:"zhihu/hot-list"
    })
}
export function getHotListsData(params){
    params = params || "";
    return request({
        url:"zhihu/hot-lists/" + params
    })
}
export function getSpecialData(){
    return request({
        url:'zhihu/zhuanlan-card'
    })
}
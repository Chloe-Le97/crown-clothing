const notiReducer = (state='',action) =>{
    console.log(action.type)
    switch(action.type){
        case 'SET_NOTI':
            return action.data
        case 'REMOVE_NOTI':
            return null
        default:
            return state
    }
}


export const notificationAction = (data,time) =>{
    let timeOutId 
    return async dispatch=>{
        await dispatch({
            type:'SET_NOTI',
            data
        })
        
        if(timeOutId){
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(()=>{
            dispatch({
                type:'REMOVE_NOTI'
            })
        },time)
    } 
}


export default notiReducer
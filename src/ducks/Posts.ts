import { AnyAction, Dispatch } from 'redux'
import { IServices } from '../services'
import firebase from 'firebase/app'

const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-sucess'
const ERROR = 'posts/fetch-error'

export interface IDataPosts {
    [key: string]: {
        comment: string
        userId: string
        createdAt: firebase.firestore.Timestamp
        imageURL: string
    }
}

const fetchStart = () => ({
    type: START,
})

const fetchSuccess = (payload: IDataPosts) => ({
    payload,
    type: SUCCESS,
})

const fetchError = (error: Error) => ({
    error,
    type: ERROR,
})

const initialState = {
    data: {},
    fetched: false,
    fetching: false,
}

export default function reducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case START:
            return{
                ...state,
                fetching: true,
            }
        case SUCCESS:
            return{
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false,
            }
        case ERROR:
            return{
                ...state,
                error: action.error,
            }
        default:
            break;
    }
    return state
}

export const fetchPosts = () =>
    async (dispatch: Dispatch, getState: () => any, {db, storage}:IServices) =>{
        dispatch(fetchStart())
        try {
            const snaps = await db.collection('posts').get()
            const posts: any = {}
            snaps.forEach(x => posts[x.id] = x.data())
            const imgIds = await Promise.all(Object.keys(posts)
                .map(async x => {
                    const ref = storage.ref(`posts/${x}.jpg`)
                    console.log(ref)
                    const url =  await ref.getDownloadURL()
                    console.log(url)
                    return[x, url]
                }))
            const keyedImages: any = {}
            imgIds.forEach(x => keyedImages[x[0]] = x[1])

            Object.keys(posts).forEach(x => posts[x] = {
                ...posts[x],
                imageURL: keyedImages[x],
            })
            dispatch(fetchSuccess(posts))        
        } catch (e) {
            console.log(e)
            dispatch(fetchError(e))
        }
    }

    export const like = (id: string) =>
        async (dispatch: Dispatch, getState: () => any, {}: IServices) => {
            console.log(id)
        }

    export const share = (id: string) =>
        async (dispatch: Dispatch, getState: () => any, {}: IServices) => {
            console.log(id)
        }
    
    
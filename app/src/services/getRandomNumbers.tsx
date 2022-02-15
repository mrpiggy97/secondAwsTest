import {basicInstance} from "./basicInstance"
import { AxiosPromise } from "axios"

export default function getRandomNumbers() : AxiosPromise<void>{
    return basicInstance({
        method : "GET",
        url : "/get-random-number"
    })
}
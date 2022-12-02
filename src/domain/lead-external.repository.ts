import { Lead } from "./lead";
export default interface LeadExternal {
    sendMsg({message, phone}:{message:string, phone:string}):Promise<Lead | any>
}
import { Document } from "mongoose";
import { Athlete } from "src/model/team/athlete" 

export interface AthleteDocument extends Athlete, Document {

}
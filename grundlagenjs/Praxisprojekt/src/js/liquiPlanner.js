/** 
 * Das module "liquiPlanner" verwaltet die eintraege
 * @module ./liquiPlanner 
 * 
 * startet das liquiPlanner und inalsiert diese als Klasse
 */
import liquiPlanner from "./Haushaltsbuch.js"
let haushaltbuch = new liquiPlanner()

haushaltbuch.start()

export default (haushaltbuch)

import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Vehices extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				car_no: { type:Sequelize.STRING   },
				sacco: { type:Sequelize.STRING   },
				date_created: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "vehices",
				modelName: "vehices",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'car_no', 
			'sacco', 
			'date_created'
		];
	}

	static viewFields() {
		return [
			'id', 
			'car_no', 
			'sacco', 
			'date_created'
		];
	}

	static editFields() {
		return [
			'id', 
			'car_no', 
			'sacco'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("car_no LIKE :search"), 
			Sequelize.literal("sacco LIKE :search"),
		];
	}

	
	
}
Vehices.init();
export default Vehices;

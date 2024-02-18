
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Sacco extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				name: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "sacco",
				modelName: "sacco",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'name'
		];
	}

	static viewFields() {
		return [
			'id', 
			'name'
		];
	}

	static editFields() {
		return [
			'id', 
			'name'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("name LIKE :search"),
		];
	}

	
	
}
Sacco.init();
export default Sacco;

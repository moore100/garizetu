
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Reviews extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				vehicle_id: { type:Sequelize.INTEGER   },
				review: { type:Sequelize.STRING   },
				rating: { type:Sequelize.INTEGER   },
				date_created: { type:Sequelize.STRING   },
				created_by: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "reviews",
				modelName: "reviews",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'vehicle_id', 
			'review', 
			'rating', 
			'date_created', 
			'created_by'
		];
	}

	static viewFields() {
		return [
			'id', 
			'vehicle_id', 
			'review', 
			'rating', 
			'date_created', 
			'created_by'
		];
	}

	static editFields() {
		return [
			'id', 
			'vehicle_id', 
			'review', 
			'rating', 
			'created_by'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("review LIKE :search"), 
			Sequelize.literal("rating LIKE :search"), 
			Sequelize.literal("created_by LIKE :search"),
		];
	}

	
	
}
Reviews.init();
export default Reviews;

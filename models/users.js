
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Users extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				username: { type:Sequelize.STRING   },
				email: { type:Sequelize.STRING   },
				password: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "users",
				modelName: "users",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'username', 
			'email'
		];
	}

	static viewFields() {
		return [
			'id', 
			'username', 
			'email'
		];
	}

	static accounteditFields() {
		return [
			'id', 
			'username'
		];
	}

	static accountviewFields() {
		return [
			'id', 
			'username', 
			'email'
		];
	}

	static editFields() {
		return [
			'id', 
			'username'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("username LIKE :search"), 
			Sequelize.literal("email LIKE :search"),
		];
	}

	
	
}
Users.init();
export default Users;

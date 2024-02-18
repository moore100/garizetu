export default {
	app: {
		name: "garizetu",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "9a428c7d53baed68b1170859df20adb4",
		language: "english",
		publicDir: "assets",
	},
	auth: {
		userTokenSecret: "e768ad3A-1ax%W@91a4eYY6Q!!0-e40a4899cc6365a00f33",
		apiTokenSecret: "ee16f058$Xax%W!7ab4e9B#Q-!07d33eba35613e835fedcc",
		jwtDuration: 30, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"garizetu",
		type: "mysql",
		host: "localhost",
		username: "root",
		password: "",
		port: "",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		secure: true,
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "us-west-2",
		bucket: "",
	},
	
}
db = db.getSiblingDB('facts');
db.metadata.sources.drop();
db.metadata.sources.insert({name:"Placeholder",format:"csv",url:"example.gov.ph"});

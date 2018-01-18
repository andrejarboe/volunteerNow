# volunteerNow


# Our app uses sequelize-router is middleware that runs on top of sequelize, a popular ORM for node.js    
- This greatly simplifies creating api routes.
- For more information please see https://www.npmjs.com/package/sequelize-router

# Sequelize cli was used to create models, migrations and to seed our tables
- Please visit https://github.com/sequelize/cli for more information
- examples in the command line:
-- sequelize model:create --name User --attributes first_name:string,last_name:string,bio:text

-- sequelize model:create --name Task --attributes title:string.  This creates them model and migration files.

-- To create additional migrations
-- sequelize migration:create --name add-email-to-user
-- This creates a shell file that can me modified to make changes to tables, columnm etc.
-- Make sure to type   sequelize db:migrate and also update your user model js file

-- To create seed files
-- sequelize seed:create --name my-seed-file
-- This creates a shell file that can used to populate seed data into the tables for testing in development
-- After the seed file is created
-- sequelize db:seed:all
	
 
import Sequelize from 'sequelize';

import Admin from '../app/models/Admin';
import Student from '../app/models/Student';
import Plans from '../app/models/Plans';
import Enrollment from '../app/models/Enrollment';

import databaseConfig from '../config/database';

const models = [Admin, Student, Plans, Enrollment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();

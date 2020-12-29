import Faker from "faker";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class User {
  constructor() {
    this.users = [];
    this.__init();
  }

  // Inital
  __init() {
    for (let i = 0; i <= 10; i++) {
      let user = {};
      user.id = Faker.random.uuid();
      user.name = Faker.name.findName();
      user.email = Faker.internet.email();
      user.avatar = Faker.internet.avatar();
      user.phone = Faker.phone.phoneNumber();
      user.password = Faker.internet.password();

      this.users.push(user);
    }
  }

  __findIndex(id) {
    return this.users.findIndex((us) => us.id === id);
  }

  // Get all users
  async getUsers(ms = 1000) {
    await delay(ms);
    return this.users;
  }

  // Get simple user
  async getUserById(id, ms = 1000) {
    await delay(ms);
    const user = this.users.find((us) => us.id === id);
    return user;
  }

  // Create new user
  async createUser(user, ms = 1000) {
    await delay(ms);
    user.id = Faker.random.uuid();
    this.users.push(user);
    return user;
  }

  // update user
  async updateUserById(ms = 1000, id, updateUser) {
    await delay(ms);
    const index = this.__findIndex(id);
    this.users[index] = { ...this.users[index], ...updateUser };
    return this.users[index];
  }

  // Delete user by id
  async deleteUserById(id, ms = 1000) {
    await delay(ms);
    const index = this.__findIndex(id);
    this.users.splice(index, 1);
    return true;
  }
}

export default new User();

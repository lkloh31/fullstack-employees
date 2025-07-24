import { faker } from "@faker-js/faker";
import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: faker.person.fullName(),
      birthday: faker.date.past({ years: 30 }),
      salary: faker.number.int({ min: 80000, max: 200000 }),
    };
    await createEmployee(employee);
  }

  console.log("Database seeded successfully");
}

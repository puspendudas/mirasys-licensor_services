import UsersSeeder from './users.seeder';
let models = [UsersSeeder];

; (async () => {
    for (let model of models) {
        let seeder = new model();
        console.log(`Seeding ${seeder.constructor.name}`);
        await seeder.seed();
        console.log(`Seeded ${seeder.constructor.name}`);
    }
})();
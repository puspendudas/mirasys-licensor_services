export class BaseSeeder {
    public async run() {
        await this.seed();
    }

    public async seed() {
        console.log('BaseSeeder');
    }
}
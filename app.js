const Reader = require('./Reader');
const Processor = require('./Processor');

const reader = new Reader();

async function main() {
    const data = await reader.Read('./users.csv');

    Processor.Process(data);
}

main()
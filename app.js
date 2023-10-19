const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');

const reader = new Reader();

async function main() {
    const data = await reader.Read('./users.csv');
    const processedData = Processor.Process(data);
    const users = new Table(processedData);
    console.log(users.ColumnCount);


}

main()
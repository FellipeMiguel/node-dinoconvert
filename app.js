const Reader = require('./Reader');

const reader = new Reader();

async function main() {
    const data = await reader.Read('./users.csv');
    console.log(data);
}

main()
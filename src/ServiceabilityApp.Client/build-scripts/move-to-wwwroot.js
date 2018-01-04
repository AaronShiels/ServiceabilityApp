const fs = require('fs-extra');

const src = 'build';
const dest = '../ServiceabilityApp.Api/wwwroot';

fs.emptyDir(dest)
    .then(() => console.log('Destination directory cleared successfully.'))
    .catch(error => console.error(error));

fs.copy(src, dest)
    .then(() => console.log('Source contents moved to destination directory successfully.'))
    .catch(error => console.error(error));
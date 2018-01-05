const fs = require('fs-extra');

const src = 'build';
const dest = '../ServiceabilityApp.Api/wwwroot';

fs.emptyDir(dest)
    .then(() => {
        fs.copy(src, dest)
            .then(() => console.log('Source moved to destination directory successfully.'))
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));


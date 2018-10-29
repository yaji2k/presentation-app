const sg = require('smart-grid');

var options = {
    filename: 'sg',
    oldStyle: false,
    offset: '0px',
    columns: 12,
    container: {
        maxWidth: '1920px',
        fields: '0px'
    },
    properties: []
};

sg('./src/preproc/import', options);
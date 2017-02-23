var s3 = require('s3');
var opn = require('opn');


var appIndex = 'index.html';
var appFolder = __dirname.split("/").pop();

if (process.env.DATAHUB_S3_PROJECTS_ACCESS === undefined && process.env.DATAHUB_S3_PROJECTS_SECRET === undefined) {
    console.log('You need S3 credentials to upload to the project server and create a demo.');
    process.exit(1);
}

var client = s3.createClient({
    s3Options: {
        accessKeyId: process.env.DATAHUB_S3_PROJECTS_ACCESS,
        secretAccessKey: process.env.DATAHUB_S3_PROJECTS_SECRET
    }
});
var uploader = client.uploadDir({
    localDir: "dist",
    deleteRemoved: true,
    s3Params: {
        Bucket: "projects.jsonline.com",
        Prefix: "demo/" + appFolder
    }
});
uploader.on('error', function(err) {
    console.error("Upload failed:", err.stack);
});
uploader.on('end', function() {
    console.log('Successfully uploaded ' + uploader.filesFound + ' files to...');
    var url = 'http://projects.jsonline.com.s3.amazonaws.com/demo/' + appFolder + '/' + appIndex;
    console.log(url);
    opn(url);
    process.exit();
});

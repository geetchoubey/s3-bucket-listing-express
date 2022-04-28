const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

/* GET home page. */
router.get('/*', async function (req, res, next) {
  const prefix = req.path !== '/' ? req.path.substring(1) : ''
  const objects = await s3.listObjectsV2({
    Bucket: BUCKET_NAME,
    Delimiter: req.path,
    Prefix: prefix,
  }).promise();
  res.render('index', {
    title: 'My S3 Data',
    isRoot: req.path === '/',
    path: req.path,
    bucketName: BUCKET_NAME,
    directories: objects.CommonPrefixes.map(d => d.Prefix),
    files: objects.Contents.map(k => ({
      path: k.Key.split(' ').join('+'),
      name: k.Key.replace(prefix, '')
    }))
  });
});

module.exports = router;

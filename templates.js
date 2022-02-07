module.exports = {
  templates: [
    {
      filename: 'face-tracking.html',
      template: 'src/face-tracking/index.html',
      title: 'Zappar AR - Face Tracking',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
      },
      inject: true,
      chunks: ['face-tracking'],
    },
    {
      filename: 'image-tracking.html',
      template: 'src/image-tracking/index.html',
      title: 'Zappar AR - Image Tracking',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
      },
      inject: true,
      chunks: ['image-tracking'],
    },
  ],
}

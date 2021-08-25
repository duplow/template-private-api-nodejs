exports.seed = function(knex) {
  return knex('media').del()
    .then(function () {
      return knex('media').insert([
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets',
          sizeInBytes: 0,
          type: 'folder'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets/images',
          sizeInBytes: 0,
          type: 'folder'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets/wp-content',
          sizeInBytes: 0,
          type: 'folder'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets/images/my-photo-01.jpg',
          sizeInBytes: Math.round(Math.random() * 1024 * 1024 * 3),
          type: 'file'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets/images/my-photo-02.jpg',
          sizeInBytes: Math.round(Math.random() * 1024 * 1024 * 3),
          type: 'file'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets/images/my-photo-03.png',
          sizeInBytes: Math.round(Math.random() * 1024 * 1024 * 3),
          type: 'file'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets/sheet.xlsx',
          sizeInBytes: Math.round(Math.random() * 1024 * 1024 * 3),
          type: 'file'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          fullpath: '/assets/wp-content/announce.docx',
          sizeInBytes: Math.round(Math.random() * 1024 * 1024 * 3),
          type: 'file'
        }
      ]);
    });
};
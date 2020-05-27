export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ece086c99057adb799d123a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o5nh3kes',
                  apiId: '85513975-152b-48fc-a0b4-a583c6933fe3'
                },
                {
                  buildHookId: '5ece086c1d79183285436e7d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wtfb4z1i',
                  apiId: '80177bbc-ea92-48f6-adec-f90281a8c470'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickramsay19/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wtfb4z1i.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

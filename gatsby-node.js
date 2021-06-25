const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workSingleTemplate = path.resolve(`src/templates/work-single.js`)
  const result = await graphql(`
    query {
      sessions: allContentfulSession {
        nodes {
          slug
          contentful_id
        }
      }
    }
  `)

  result.data.sessions.nodes.forEach(node => {
    createPage({
      path: `/work/${node.slug}`,
      component: workSingleTemplate,
      context: {
        id: node.contentful_id,
      },
    })
  })
}

const contentful = require('../shared/contentful');

module.exports = async function (context, req) {
  try {
    const entries = await contentful.getEntries({
        'content_type': 'blogPost'
    });
    context.res.status(200).json(entries);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
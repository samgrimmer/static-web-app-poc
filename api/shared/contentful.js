const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
});

const getEntry = async(entryId) => {
  return await client.getEntry(entryId);
}

const getContentType = async(contentType) => {
  return await client.getContentType(contentType);
}

const getEntries = async(query) => {
  return await client.getEntries(query);
}

module.exports = {
  getEntry,
  getContentType,
  getEntries
}
// Declare optional Cloudinary metadata fields so queries don't fail
// before any image has a value set for them.
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type CloudinaryMediaContextCustom {
      EtsyLink: String
    }
  `);
};

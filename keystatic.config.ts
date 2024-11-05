import { config, fields, collection } from "@keystatic/core";

export default config({
    ui: {
        brand: {
          name: 'YAGUAR',
          },
        },
  storage: {
    kind: "github",
    repo: "cisternascristian/YAGUAR"
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/blog/*",
      entryLayout: 'content',
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Título",
            validation: { length: { max: 120 }, isRequired: true },
          },
        }),
        description: fields.text({
          label: "Descripción",
          validation: { isRequired: true },
        }),
        category: fields.text({
          label: "Categoría",
          validation: { length: { min: 2 }, isRequired: true },
        }),
        pubDate: fields.text({
            label: "Fecha",
            defaultValue: `${new Date().toDateString()}`,
            validation: { isRequired: true},
          }),
        cover: fields.image({
          label: "Cover",
          directory: "public/blog/",
          publicPath: "/blog/",
          validation: { isRequired: true },
        }),
        content: fields.mdx({
            label: "Contenido",
            extension: "md",
          }),
      },
    }),
  },
});

import VideoPlayer from "@/components/embeds";
import YouTubePlayer  from "@/components/youtube";
import { config, fields, collection, component } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";
import { Clapperboard, Code } from "lucide-react";

const isDev = true;

export default config({
  ui: {
    brand: {
      name: "YAGUAR",
  },
},
  storage: {
    kind:  isDev ? "local" : "github",
    repo: "cisternascristian/YAGUAR"
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/blog/*",
      entryLayout: "content",
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
          multiline: true,
        }),
        category: fields.text({
          label: "Categoría",
          validation: { length: { min: 2 }, isRequired: true },
        }),
        pubDate: fields.text({
          label: "Fecha",
          defaultValue: `${new Date().toDateString()}`,
          validation: { isRequired: true },
        }),
        cover: fields.image({
          label: "Cover",
          directory: "public/blog/",
          publicPath: "/blog/",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: "Contenido",
          components: {
            YouTube: block({
              label: "YouTube",
              icon: <Clapperboard />,
              description: "Vídeo de YouTube",
              schema: {
                src: fields.text({ label: "URL del vídeo" }),
              },
              ContentView: (props: any) => {
                return (
                  <YouTubePlayer {...props} client:load />
                )
              },
            }),
            Video: block({
              label: "Vídeo",
              icon: <Code />,
              description: "Embed de CDN",
              schema: {
                src: fields.text({ label: "URL del vídeo" }),
              },
              ContentView: (props: any) => {
                return (
                  <VideoPlayer {...props} />
                )
          },
        }),
          },
        }),
      },
    }),
  },
});
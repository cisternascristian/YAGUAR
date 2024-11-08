import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
    tags: {
        YouTube: {
          render: component('./src/components/youtube.tsx'),
          attributes: {
            src: {
              type: String,
              required: true
            },
          }
        },
        Video: {
            render: component('./src/components/embeds.tsx'),
            attributes: {
              src: {
                type: String,
                required: true
              },
            }
          },
      }
  });
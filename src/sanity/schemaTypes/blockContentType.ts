import {defineType, defineArrayMember, defineField} from 'sanity'
import {icons} from '@sanity/icons'

/**
 * Portable Text / Dynamic Block Content Schema
 * Supporting standard rich text, single image, and dynamic 2-image side-by-side gallery layout.
 */
export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Alıntı (Quote)', value: 'blockquote'},
      ],
      lists: [
        {title: 'Maddeli (Bullet)', value: 'bullet'},
        {title: 'Numaralı (Number)', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Kalın (Strong)', value: 'strong'},
          {title: 'İtalik (Emphasis)', value: 'em'},
          {title: 'Altı Çizili (Code)', value: 'code'},
        ],
        annotations: [
          {
            title: 'Bağlantı (URL)',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // Single Image Block with Alt & Caption
    defineArrayMember({
      name: 'singleImage',
      title: 'Tek Görsel',
      type: 'image',
      icon: icons.image,
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Görsel Alt Metni (SEO)',
          description: 'Ekran okuyucular ve SEO için önemli alt metin',
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Görsel Altyazısı (Opsiyonel)',
        }),
      ],
      preview: {
        select: {
          title: 'caption',
          alt: 'alt',
        },
        prepare(selection) {
          const {title, alt} = selection
          return {
            title: title || alt || 'Tek Görsel',
            subtitle: 'Görsel Bloğu',
            media: icons.image,
          }
        },
      },
    }),
    // Side-by-side 2 Images (Gallery / Dual Image Layout)
    defineArrayMember({
      name: 'twoImages',
      title: 'Yan Yana 2 Görsel (Galeri)',
      type: 'object',
      icon: icons.images || icons.image,
      fields: [
        defineField({
          name: 'image1',
          title: '1. Görsel (Sol)',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Metin',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Açıklama (Opsiyonel)',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'image2',
          title: '2. Görsel (Sağ)',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Metin',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Açıklama (Opsiyonel)',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'caption',
          title: 'Ortak Galeri Açıklaması (Opsiyonel)',
          type: 'string',
        }),
      ],
      preview: {
        select: {
          caption: 'caption',
          img1Alt: 'image1.alt',
          img2Alt: 'image2.alt',
        },
        prepare(selection) {
          const {caption, img1Alt, img2Alt} = selection
          return {
            title: caption || 'Yan Yana 2 Görsel',
            subtitle: img1Alt && img2Alt ? `${img1Alt} | ${img2Alt}` : 'Galeri Bloğu (2 Görsel)',
            media: icons.images || icons.image,
          }
        },
      },
    }),
  ],
})

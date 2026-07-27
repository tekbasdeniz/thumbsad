import {icons} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Yazısı (Post)',
  type: 'document',
  icon: icons.document,
  groups: [
    {name: 'content', title: 'İçerik (TR / EN)'},
    {name: 'meta', title: 'Meta & Detaylar'},
  ],
  fields: [
    // Türkçe ve İngilizce Başlıklar
    defineField({
      name: 'titleTR',
      title: 'Başlık (Türkçe)',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().warning('Türkçe başlık girilmesi önerilir.'),
    }),
    defineField({
      name: 'titleEN',
      title: 'Başlık (İngilizce)',
      type: 'string',
      group: 'content',
    }),

    // Dilli Özet Alanları (Excerpt TR / EN)
    defineField({
      name: 'excerptTR',
      title: 'Özet (Türkçe - Excerpt)',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Yazının Türkçe kısa özeti',
    }),
    defineField({
      name: 'excerptEN',
      title: 'Özet (İngilizce - Excerpt)',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Yazının İngilizce kısa özeti',
    }),

    // Alt Başlıklar (Opsiyonel / Eski alanlar ile geriye dönük uyumluluk)
    defineField({
      name: 'subTitleTR',
      title: 'Alt Başlık (Türkçe)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'subTitleEN',
      title: 'Alt Başlık (İngilizce)',
      type: 'string',
      group: 'content',
    }),

    // Çok Dilli Kategori Alanları (category_tr / category_en)
    defineField({
      name: 'category_tr',
      title: 'Kategori (Türkçe)',
      type: 'string',
      group: 'meta',
      description: 'Türkçe kategori adı (ör. Yapay Zeka, Dijital Pazarlama)',
    }),
    defineField({
      name: 'category_en',
      title: 'Kategori (İngilizce)',
      type: 'string',
      group: 'meta',
      description: 'İngilizce kategori adı (ör. Artificial Intelligence, Digital Marketing)',
    }),
    defineField({
      name: 'categories',
      title: 'Kategoriler (Referans)',
      type: 'array',
      group: 'meta',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),

    // Yazar (Düz Metin & Referans)
    defineField({
      name: 'authorName',
      title: 'Yazar Adı (String)',
      type: 'string',
      group: 'meta',
      description: 'Yazarın adı soyadı (ör. ThumbsAd Ekibi)',
    }),
    defineField({
      name: 'author',
      title: 'Yazar (Referans)',
      type: 'reference',
      group: 'meta',
      to: {type: 'author'},
    }),

    // Yayınlanma Tarihi
    defineField({
      name: 'publishedAt',
      title: 'Yayınlanma Tarihi (publishedAt)',
      type: 'datetime',
      group: 'meta',
      validation: (Rule) => Rule.required().warning('Yayınlanma tarihi girilmesi tavsiye edilir.'),
    }),

    // Slug
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'Yıl-Ay-Gün-Başlık formatında otomatik oluşturulabilir veya el ile düzenlenebilir.',
      options: {
        source: (doc: any) => {
          const titleStr = doc.titleTR || doc.titleEN || ''
          const dateObj = doc.publishedAt ? new Date(doc.publishedAt) : new Date()
          const yyyy = dateObj.getFullYear()
          const mm = String(dateObj.getMonth() + 1).padStart(2, '0')
          const dd = String(dateObj.getDate()).padStart(2, '0')
          const dateStr = `${yyyy}-${mm}-${dd}`
          return titleStr ? `${dateStr}-${titleStr}` : dateStr
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Okuma Süresi
    defineField({
      name: 'readingTime',
      title: 'Okuma Süresi (Dakika)',
      type: 'number',
      group: 'meta',
      description: 'Tahmini okuma süresi dakikası',
    }),

    // Dinamik İçerik Blokları (Türkçe & İngilizce)
    defineField({
      name: 'contentTR',
      title: 'İçerik (Türkçe)',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'contentEN',
      title: 'İçerik (İngilizce)',
      type: 'blockContent',
      group: 'content',
    }),

    // Ana Görsel
    defineField({
      name: 'mainImage',
      title: 'Ana Görsel (Kapak)',
      type: 'image',
      group: 'meta',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Görsel Alt Metni',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      titleTR: 'titleTR',
      titleEN: 'titleEN',
      authorName: 'authorName',
      authorRef: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {titleTR, titleEN, authorName, authorRef, media} = selection
      const displayTitle = titleTR || titleEN || 'Başlıksız Yazı'
      const author = authorName || authorRef || 'ThumbsAd'

      return {
        title: displayTitle,
        subtitle: `Yazar: ${author}`,
        media,
      }
    },
  },
})

import { defineQuery } from 'next-sanity'

/**
 * Listeleme (Insights) Sayfası Sorgusu
 * Parametreler: $lang ("tr" | "en")
 */
export const getLocalizedPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    "title": select(
      $lang == "en" => coalesce(titleEN, titleTR, "Untitled"),
      coalesce(titleTR, titleEN, "Başlıksız")
    ),
    "excerpt": select(
      $lang == "en" => coalesce(excerptEN, excerpt_en, subTitleEN, excerptTR, excerpt_tr, subTitleTR, ""),
      coalesce(excerptTR, excerpt_tr, subTitleTR, excerptEN, excerpt_en, subTitleEN, "")
    ),
    "excerpt_tr": coalesce(excerptTR, excerpt_tr, subTitleTR, ""),
    "excerpt_en": coalesce(excerptEN, excerpt_en, subTitleEN, ""),
    "category": select(
      $lang == "en" => coalesce(category_en, category_tr, categories[0]->title, "Insights"),
      coalesce(category_tr, category_en, categories[0]->title, "İçgörüler")
    ),
    "category_tr": coalesce(category_tr, categories[0]->title, "İçgörüler"),
    "category_en": coalesce(category_en, categories[0]->title, "Insights"),
    "author": coalesce(authorName, author->name, select(
      $lang == "en" => "ThumbsAd Team",
      "ThumbsAd Ekibi"
    )),
    publishedAt,
    _createdAt,
    "slug": slug.current,
    mainImage,
    readingTime,
    categories[]-> {
      _id,
      title,
      "slug": slug.current
    }
  }
`)

/**
 * Detay (Insight Detail) Sayfası Sorgusu
 * Parametreler: $slug (string), $lang ("tr" | "en")
 */
export const getLocalizedPostBySlugQuery = defineQuery(`
  *[_type == "post" && (slug.current == $slug || slug.current == $slug + " " || slug.current match $slug)][0] {
    _id,
    "title": select(
      $lang == "en" => coalesce(titleEN, titleTR, "Untitled"),
      coalesce(titleTR, titleEN, "Başlıksız")
    ),
    "excerpt": select(
      $lang == "en" => coalesce(excerptEN, excerpt_en, subTitleEN, excerptTR, excerpt_tr, subTitleTR, null),
      coalesce(excerptTR, excerpt_tr, subTitleTR, excerptEN, excerpt_en, subTitleEN, null)
    ),
    "excerpt_tr": coalesce(excerptTR, excerpt_tr, subTitleTR, null),
    "excerpt_en": coalesce(excerptEN, excerpt_en, subTitleEN, null),
    "category": select(
      $lang == "en" => coalesce(category_en, category_tr, categories[0]->title, "Insights"),
      coalesce(category_tr, category_en, categories[0]->title, "İçgörüler")
    ),
    "category_tr": coalesce(category_tr, categories[0]->title, "İçgörüler"),
    "category_en": coalesce(category_en, categories[0]->title, "Insights"),
    "author": coalesce(authorName, author->name, select(
      $lang == "en" => "ThumbsAd Team",
      "ThumbsAd Ekibi"
    )),
    publishedAt,
    _createdAt,
    "content": select(
      $lang == "en" => coalesce(contentEN, contentTR, []),
      coalesce(contentTR, contentEN, [])
    ),
    "slug": slug.current,
    mainImage,
    "readingTime": coalesce(readingTime, null),
    categories[]-> {
      _id,
      title,
      "slug": slug.current
    }
  }
`)

/**
 * Statik Sayfa Üretimi (generateStaticParams) için tüm detay yollarını getiren sorgu
 */
export const getAllPostPathsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt,
    _createdAt
  }
`)

export const getAllPostSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)][].slug.current
`)

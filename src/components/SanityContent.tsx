import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export const portableTextComponents: PortableTextComponents = {
  types: {
    singleImage: ({ value }: any) => {
      if (!value?.asset) return null
      const imageUrl = urlFor(value).url()
      return (
        <figure className="my-8 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
          <div className="relative w-full aspect-video">
            <Image
              src={imageUrl}
              alt={value.alt || 'İçerik görseli'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-sm text-gray-500 italic bg-gray-50/80 border-t border-gray-100">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    twoImages: ({ value }: any) => {
      if (!value) return null
      const img1Url = value.image1?.asset ? urlFor(value.image1).url() : null
      const img2Url = value.image2?.asset ? urlFor(value.image2).url() : null

      return (
        <figure className="my-10 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {img1Url && (
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                <Image
                  src={img1Url}
                  alt={value.image1?.alt || 'Galeri görseli 1'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            {img2Url && (
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                <Image
                  src={img2Url}
                  alt={value.image2?.alt || 'Galeri görseli 2'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    image: ({ value }: any) => {
      if (!value?.asset) return null
      const imageUrl = urlFor(value).url()
      return (
        <figure className="my-8 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
          <div className="relative w-full aspect-video">
            <Image
              src={imageUrl}
              alt={value.alt || 'Görsel'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#0a246b] pl-6 py-3 my-6 text-gray-700 italic bg-blue-50/40 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 text-base md:text-lg pl-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700 text-base md:text-lg pl-2">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#0a246b] underline font-semibold hover:opacity-80">
        {children}
      </a>
    ),
  },
}

interface SanityContentProps {
  value: any
}

export default function SanityContent({ value }: SanityContentProps) {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return null
  }
  return <PortableText value={value} components={portableTextComponents} />
}
